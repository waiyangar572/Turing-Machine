"use client";
import { FetchProblemForm } from "./components/FetchProblemForm";
import { ProblemViewer } from "./components/ProblemViewer";

const Home = () => {
    return (
        <div>
            <div className="text-[50px]">Turing Machine</div>
            <ProblemViewer />
        </div>
    );
};

export default Home;
