import Answers from "../Answers";
import ProgressBar from "../ProgressBar";
import MiniPlayer from "../MiniPlayer";
import { useParams, useNavigate } from "react-router";
import useQuestions from "../../../hooks/useQuestions";
import { useEffect, useReducer, useState } from "react";
import _ from "lodash";
import { useAuth } from "../../contexts/AuthContext";
import { getDatabase, set, ref } from "firebase/database";

const initialState = null;

const reducer = (state, action) => {
    switch (action.type) {
        case "questions":
            action.value.forEach((question) => {
                question.options.forEach((option) => {
                    option.checked = false;
                });
            });
            return action.value;
        case "answer":
            const questions = _.cloneDeep(state);
            questions[action.questionID].options[action.optionIndex].checked =
                action.value;
            return questions;
        default:
            return state;
    }
};

export default function Quiz() {
    const { id } = useParams();
    const { loading, error, questions } = useQuestions(id);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [qna, dispatch] = useReducer(reducer, initialState);
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch({
            type: "questions",
            value: questions,
        });
    }, [questions]);

    function handleAnswerChange(e, index) {
        dispatch({
            type: "answer",
            questionID: currentQuestion,
            optionIndex: index,
            value: e.target.checked,
        });
    }

    // handle next question button
    function nextQuestion() {
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion((prevCurrent) => prevCurrent + 1);
        }
    }

    // handle pev question button
    function prevQuestion() {
        if (currentQuestion >= 1 && currentQuestion <= questions.length) {
            setCurrentQuestion((prevCurrent) => prevCurrent - 1);
        }
    }

    // calculate percentage of progress
    const percentege =
        questions.length > 0
            ? ((currentQuestion + 1) / questions.length) * 100
            : 0;

    // submit quiz
    async function submit() {
        const { uid } = currentUser;

        const db = getDatabase();
        const resultRef = ref(db, `result/${uid}/`);

        console.log("QNA in Quiz : ", qna);
        await set(resultRef, {
            [id]: qna,
        });
        navigate(`/result/${id}`);
    }

    return (
        <>
            {loading && <div>Loading...</div>}
            {error && <div>There was an error !</div>}
            {!loading && !error && qna && qna.length > 0 && (
                <>
                    <h1>{qna[currentQuestion].title}</h1>
                    <h4>Question can have multiple answers</h4>
                    <Answers
                        input={true}
                        options={qna[currentQuestion].options}
                        handleChange={handleAnswerChange}
                    />
                    <ProgressBar
                        next={nextQuestion}
                        prev={prevQuestion}
                        submit={submit}
                        progress={percentege}
                    />
                    <MiniPlayer />
                </>
            )}
        </>
    );
}
