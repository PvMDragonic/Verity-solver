import React from "react";
import Cone from "../../assets/Cone";
import Prism from "../../assets/Prism";
import Cylinder from "../../assets/Cylinder";
import Cube from "../../assets/Cube";
import Tetrahedron from "../../assets/Tetrahedron";
import Sphere from "../../assets/Sphere";

interface ISymbol
{
    pos: number;
    label: string;
    symbols: string[];
    setSymbols: React.Dispatch<React.SetStateAction<string[]>>;
}

export function OutsideSymbol({ pos, label, symbols, setSymbols }: ISymbol)
{
    function updateSymbol(symbol: string)
    {
        setSymbols(prev => {
            const temp = [...prev];
            temp[pos] = symbol;

            // There can be a max of 2 of the same compound symbol.
            const occurrences: { [key: string]: number } = {};
            return temp.map(str => {
                occurrences[str] = (occurrences[str] || 0) + 1;
                return occurrences[str] > 2 ? '' : str;
            });
        });
    }
    
    return (
        <div className = 'symbols'>
            <p className = 'symbols__text'>{label}</p>
            <div className = 'symbols__container'>
                <button 
                    title = 'Cone'
                    style = {{ opacity: symbols[pos] !== 'TC' ? '50%' : '100%'}}
                    className = 'symbols__button'
                    onClick = {() => updateSymbol('TC')}
                >
                    <Cone/>
                </button>
                <button 
                    title = 'Prism'
                    style = {{ opacity: symbols[pos] !== 'TS' ? '50%' : '100%'}}
                    className = 'symbols__button'
                    onClick = {() => updateSymbol('TS')}
                >
                    <Prism/>
                </button>
                <button 
                    title = 'Cylinder'
                    style = {{ opacity: symbols[pos] !== 'SC' ? '50%' : '100%'}}
                    className = 'symbols__button'
                    onClick = {() => updateSymbol('SC')}
                >
                    <Cylinder/>
                </button>
            </div>
            <div className = 'symbols__container'>
                <button 
                    title = 'Cube'
                    style = {{ opacity: symbols[pos] !== 'SS' ? '50%' : '100%'}}
                    className = 'symbols__button'
                    onClick = {() => updateSymbol('SS')}
                >
                    <Cube/>
                </button>
                <button 
                    title = 'Tetrahedron'
                    style = {{ opacity: symbols[pos] !== 'TT' ? '50%' : '100%'}}
                    className = 'symbols__button'
                    onClick = {() => updateSymbol('TT')}
                >
                    <Tetrahedron/>
                </button>
                <button
                    title = 'Sphere' 
                    style = {{ opacity: symbols[pos] !== 'CC' ? '50%' : '100%'}}
                    className = 'symbols__button'
                    onClick = {() => updateSymbol('CC')}
                >
                    <Sphere/>
                </button>
            </div>
        </div>
    )
}