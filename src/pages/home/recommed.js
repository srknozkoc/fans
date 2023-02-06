import React from "react";

export default function Recommend(){
    return(
        <div>
            <h2 className={"text-xl font-bold mb-3"}>Recommend</h2>
            <pre>{new Date().toISOString()}</pre>
        </div>
    );
};