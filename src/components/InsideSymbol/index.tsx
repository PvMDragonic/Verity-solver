import React from "react";
import Square from "../../assets/Square";
import Triangle from "../../assets/Triangle";
import Circle from "../../assets/Circle";
import { useTranslation } from "react-i18next";

interface ISymbol
{
    pos: number;
    label: string;
    symbols: string[];
    setSymbols: React.Dispatch<React.SetStateAction<string[]>>;
}

export function InsideSymbol({ pos, label, symbols, setSymbols }: ISymbol)
{
    const { t } = useTranslation();

    function updateSymbol(clickedSymbol: string)
    {
        setSymbols(prev => 
            prev.map((symbol, index) => 
                index === pos 
                    ? (symbol !== clickedSymbol ? clickedSymbol : '') 
                    : (symbol === clickedSymbol ? '' : symbol)
            )
        );
    }

    return (
        <div className = 'symbols'>
            <p className = 'symbols__text'>{label}</p>
            <div className = 'symbols__container'>
                <button 
                    title = {t('Square')}
                    style = {{ opacity: symbols[pos] !== 'S' ? '50%' : '100%'}}
                    className = 'symbols__button'
                    onClick = {() => updateSymbol('S')}
                >
                    <Square/>
                </button>
                <button 
                    title = {t('Triangle')}
                    style = {{ opacity: symbols[pos] !== 'T' ? '50%' : '100%'}}
                    className = 'symbols__button'
                    onClick = {() => updateSymbol('T')}
                >
                    <Triangle/>
                </button>
                <button 
                    title = {t('Circle')}
                    style = {{ opacity: symbols[pos] !== 'C' ? '50%' : '100%'}}
                    className = 'symbols__button'
                    onClick = {() => updateSymbol('C')}
                >
                    <Circle/>
                </button>
            </div>
        </div>
    )
}