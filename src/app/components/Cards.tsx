import { FC, useContext } from "react";
import { Problem } from "../api/[id]/route";
import { ProblemContext } from "./ProblemViewer";

export const Card = (id: number, key: string) => {
    return (
        <div key={key} className="col-span-4 border border-black rounded p-5">
            <h2 className="text-[50px]">{id}</h2>
        </div>
    );
};

export const Cards: FC = () => {
    const ChildContext = useContext(ProblemContext);
    if (ChildContext == undefined) {
        return <div></div>;
    }
    if (ChildContext.problem == undefined) {
        return <div></div>;
    }
    const ids = ChildContext.problem.cards;

    return ids.map((id: number) => Card(id, `Card${id}`));
};
