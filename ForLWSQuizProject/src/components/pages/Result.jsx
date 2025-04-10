import Summary from "../Summary";
import Analysis from "../Analysis";
import { useParams } from "react-router";
import useAnswers from "../../../hooks/useAnswers";
import useSubmittedAnswers from "../../../hooks/useSubmittedAnswers";
import { useAuth } from "../../contexts/AuthContext";
import _ from "lodash";

export default function Result() {
    const { id } = useParams();
    const { currentUser } = useAuth();
    const {
        submitted: qna,
        loading,
        error,
    } = useSubmittedAnswers(id, currentUser?.uid);
    const { loading: aLoading, error: aError, answers } = useAnswers(id);

    function calculate() {
        let score = 0;
        answers.forEach((question, index1) => {
            let correctIndexes = [],
                checkedIndexes = [];
            question.options.forEach((option, index2) => {
                if (option.correct) correctIndexes.push(index2);
                if (qna[index1]?.options[index2]?.checked) {
                    checkedIndexes.push(index2);
                    option.checked = true;
                }
            });
            if (_.isEqual(correctIndexes, checkedIndexes)) {
                score += 5;
            }
        });
        return score;
    }

    const userScore = calculate();

    return (
        <>
            {(loading || aLoading) && <div>Loading...</div>}
            {(error || aError) && <div>There was an error...</div>}
            {answers && answers.length > 0 && qna && qna.length > 0 && (
                <>
                    <Summary score={userScore} noq={answers.length} />
                    <Analysis answers={answers} />
                </>
            )}
        </>
    );
}
