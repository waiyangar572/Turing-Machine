import { FC, useContext, useState } from "react";
import { ProblemContext } from "./ProblemViewer";

export const VerifierForm: FC = () => {
    const [code, setCode] = useState<number>();
    const [result, setResult] = useState<boolean>();
    const ChildContext = useContext(ProblemContext);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCode(parseInt(e.target.value));
    };

    const handleSubmit = async (index: number) => {
        const mask = (await (await fetch("http://localhost:3000/api/code/" + code)).json()).mask;

        const verifierColor = ChildContext?.problem?.color;
        const verifierId = ChildContext?.problem?.verifiers[index];
        console.log(mask, verifierColor, verifierId);

        const verifier: (boolean | null)[][] = (
            await (
                await fetch(
                    "http://localhost:3000/api/verifiers/" + verifierColor + "," + verifierId
                )
            ).json()
        ).verifier;

        console.log(verifier);

        const res = verifier![parseInt(mask[1])][11 - parseInt(mask[0])];
        if (res != null) {
            console.log(res);

            setResult(res);
        }
    };

    return (
        <div className="px-4 py-4 sm:p-6">
            <div className="mb-4">
                <input
                    type="text"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="検証コード"
                    value={code}
                    onChange={handleInputChange}
                />
                <button
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md"
                    type="button"
                    onClick={() => handleSubmit(0)}>
                    検証機A
                </button>
                <button
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md"
                    type="button"
                    onClick={() => handleSubmit(1)}>
                    検証機B
                </button>
                <button
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md"
                    type="button"
                    onClick={() => handleSubmit(2)}>
                    検証機C
                </button>
                <button
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md"
                    type="button"
                    onClick={() => handleSubmit(3)}>
                    検証機D
                </button>
                {ChildContext?.problem?.verifiers.length! > 4 && (
                    <button
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md"
                        type="button"
                        onClick={() => handleSubmit(4)}>
                        検証機E
                    </button>
                )}
                {ChildContext?.problem?.verifiers.length! > 5 && (
                    <button
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md"
                        type="button"
                        onClick={() => handleSubmit(5)}>
                        検証機F
                    </button>
                )}
            </div>
            <div>{result}</div>
        </div>
    );
};
