import React, { useContext } from "react";
import { Trans, useTranslation } from "react-i18next";
import ColorModeContext from "../../pages/Home/modeSelector";
import '../../scss/main.scss';

interface IResults
{
    finalSymbols: React.FC[];
    instructions: string[][];
}

export function Results({ finalSymbols, instructions }: IResults)
{
    const { colorMode } = useContext(ColorModeContext);
    const { t } = useTranslation();

    return (
        <div className = 'results'>
            <div className = 'results__final-symbols-container'>
                {finalSymbols.map((Symbol, index) => (
                    <button 
                        key = {index} 
                        title = {t(Symbol.name)}
                        className = {`results__button results__button--${colorMode}`}
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