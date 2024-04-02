import { FC, SetStateAction, Dispatch, useState, useContext } from "react";
import { Problem } from "../api/[id]/route";
import { ProblemContext } from "./ProblemViewer";

export const FetchProblemForm: FC = () => {
    let [problemNum, setProblemNum] = useState<string>("");
    const ChildContext = useContext(ProblemContext);
    // let [problem, setProblem] = useState<Problem>();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProblemNum(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch("http://localhost:3000/api/" + problemNum);
        const problem = await res.json();
        console.log(problem);

        ChildContext?.setProblem(problem);
    };

    return (
        <div className="px-4 py-4 sm:p-6">
            <div className="mb-4">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="問題番号を入力してください"
                        value={problemNum}
                        onChange={handleInputChange}
                    />
                    <button
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md"
                        type="submit">
                        検索
                    </button>
                </form>
            </div>
        </div>
    );
};
