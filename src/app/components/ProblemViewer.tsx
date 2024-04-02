import { createContext, useState } from "react";
import { Problem } from "../api/[id]/route";
import { FetchProblemForm } from "./FetchProblemForm";
import { Cards } from "./Cards";
import { VerifierForm } from "./VerifierForm";

type ProblemContext = {
    problem: Problem | undefined;
    setProblem: (problem: Problem) => void;
};
export const ProblemContext = createContext<ProblemContext | undefined>(undefined);

export const ProblemViewer = () => {
    const [problem, setProblem] = useState<Problem>();

    return (
        <div>
            <ProblemContext.Provider
                value={{ problem: problem, setProblem: (problem) => setProblem(problem) }}>
                <FetchProblemForm />
                {problem == undefined ? (
                    <div>Unload</div>
                ) : (
                    <div>
                        <Cards />
                        <VerifierForm />
                    </div>
                )}
            </ProblemContext.Provider>
        </div>
    );
};
