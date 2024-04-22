import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./ts/hooks/useState";
import Profile from "./ts/jsx/withType";
import CounterV2 from "./ts/hooks/customHook";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <div className="container">
            <Profile username="Jean Alfred" description="Une super description pour ce personnage" role="user" />
            <Profile
                username="Robert Tipomon"
                description="Un personnage alternatif tout aussi inintéressant"
                role="admin"
                border
            />

            <Counter />
            <Counter defaultCounter={10} defaultStep={5} />
            
            <CounterV2 defaultCounter={5} defaultStep={2} />
        </div>
    </React.StrictMode>
);
