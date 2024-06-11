import React from "react";

interface ISymbol
{
    pos: number;
    label: string;
    symbols: string[];
    setSymbols: React.Dispatch<React.SetStateAction<string[]>>;
}

export function InsideSymbol({ pos, label, symbols, setSymbols }: ISymbol)
{
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
                    title = 'Square'
                    style = {{ opacity: symbols[pos] !== 'S' ? '50%' : '100%'}}
                    className = 'symbols__button'
                    onClick = {() => updateSymbol('S')}
                >
                    □
                </button>
                <button 
                    title = 'Triangle'
                    style = {{ opacity: symbols[pos] !== 'T' ? '50%' : '100%'}}
                    className = 'symbols__button'
                    onClick = {() => updateSymbol('T')}
                >
                    △
                </button>
                <button 
                    title = 'Circle'
                    style = {{ opacity: symbols[pos] !== 'C' ? '50%' : '100%'}}
                    className = 'symbols__button'
                    onClick = {() => updateSymbol('C')}
                >
                    ○
                </button>
            </div>
        </div>
    )
}