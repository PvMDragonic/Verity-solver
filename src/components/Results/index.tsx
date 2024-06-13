import React from "react";
import '../../scss/main.scss';

interface IResults
{
    finalSymbols: React.FC[];
    instructions: string[][];
}

export function Results({ finalSymbols, instructions }: IResults)
{
    return (
        <div className = 'results'>
            <div className = 'results__final-symbols-container'>
                {finalSymbols.map((Symbol, index) => (
                    <button 
                        key = {index} 
                        title = {Symbol.name}
                        disabled = {true}
                    >
                        <Symbol/>
                    </button>
                ))}
            </div>
            {instructions.map((step, index) => (
                <p key = {index}>
                    {index + 1}. Dissect <b>{step[0]}</b> on <b>{step[1]}.</b>
                </p>
            ))}
        </div>
    );
}