import React from "react";
import { Trans, useTranslation } from "react-i18next";
import '../../scss/main.scss';

interface IResults
{
    finalSymbols: React.FC[];
    instructions: string[][];
}

export function Results({ finalSymbols, instructions }: IResults)
{
    const { t } = useTranslation();

    return (
        <div className = 'results'>
            <div className = 'results__final-symbols-container'>
                {finalSymbols.map((Symbol, index) => (
                    <button 
                        key = {index} 
                        title = {t(Symbol.name)}
                        disabled = {true}
                    >
                        <Symbol/>
                    </button>
                ))}
            </div>
            {instructions.map((step, index) => (
                <p key = {index}>
                    <Trans 
                        i18nKey = "Dissect" 
                        values = {{ symbol: step[0], position: t(step[1]) }}
                        components = {{ 1: <b/>, 2: <b/> }} 
                    />
                </p>
            ))}
        </div>
    );
}