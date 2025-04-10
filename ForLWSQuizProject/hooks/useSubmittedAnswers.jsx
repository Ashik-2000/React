import { useEffect, useState } from "react";
import { getDatabase, ref, get } from "firebase/database";

export default function useSubmittedAnswers(quizId, userId) {
    const [submitted, setSubmitted] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchSubmittedAnswers() {
            try {
                const db = getDatabase();
                const resultRef = ref(db, `result/${userId}/${quizId}`);
                const snapshot = await get(resultRef);

                if (snapshot.exists()) {
                    const result = snapshot.val();
                    const submittedQna = Array.isArray(result)
                        ? result
                        : Object.values(result); // In case it's saved as an object
                    setSubmitted(submittedQna);
                } else {
                    setSubmitted([]); // No data found
                }
            } catch (err) {
                console.error("Failed to fetch submitted answers:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        if (quizId && userId) {
            fetchSubmittedAnswers();
        }
    }, [quizId, userId]);

    return { submitted, loading, error };
}
