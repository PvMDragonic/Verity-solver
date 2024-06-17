import React, { useContext } from "react";
import Cone from "../../assets/Cone";
import Prism from "../../assets/Prism";
import Cylinder from "../../assets/Cylinder";
import Cube from "../../assets/Cube";
import Tetrahedron from "../../assets/Tetrahedron";
import Sphere from "../../assets/Sphere";
import { useTranslation } from "react-i18next";
import ColorModeContext from "../../pages/Home/modeSelector";

interface ISymbol
{
    pos: number;
    label: string;
    symbols: string[];
    setSymbols: React.Dispatch<React.SetStateAction<string[]>>;
}

export function OutsideSymbol({ pos, label, symbols, setSymbols }: ISymbol)
{
    const { colorMode } = useContext(ColorModeContext);
    const { t } = useTranslation();

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
        <div className = {`symbols symbols--${colorMode}`}>
            <p className = {`symbols__text symbols__text--${colorMode}`}>
                {label}
            </p>
            <div className = 'symbols__container'>
                <button 
                    title = {t('Cone')}
                    style = {{ opacity: symbols[pos] !== 'TC' ? '50%' : '100%'}}
                    className = {`symbols__button symbols__button--${colorMode}`}
                    onClick = {() => updateSymbol('TC')}
                >
                    <Cone/>
                </button>
                <button 
                    title = {t('Prism')}
                    style = {{ opacity: symbols[pos] !== 'TS' ? '50%' : '100%'}}
                    className = {`symbols__button symbols__button--${colorMode}`}
                    onClick = {() => updateSymbol('TS')}
                >
                    <Prism/>
                </button>
                <button 
                    title = {t('Cylinder')}
                    style = {{ opacity: symbols[pos] !== 'SC' ? '50%' : '100%'}}
                    className = {`symbols__button symbols__button--${colorMode}`}
                    onClick = {() => updateSymbol('SC')}
                >
                    <Cylinder/>
                </button>
            </div>
            <div className = 'symbols__container'>
                <button 
                    title = {t('Cube')}
                    style = {{ opacity: symbols[pos] !== 'SS' ? '50%' : '100%'}}
                    className = {`symbols__button symbols__button--${colorMode}`}
                    onClick = {() => updateSymbol('SS')}
                >
                    <Cube/>
                </button>
                <button 
                    title = {t('Tetrahedron')}
                    style = {{ opacity: symbols[pos] !== 'TT' ? '50%' : '100%'}}
                    className = {`symbols__button symbols__button--${colorMode}`}
                    onClick = {() => updateSymbol('TT')}
                >
                    <Tetrahedron/>
                </button>
                <button
                    title = {t('Sphere')} 
                    style = {{ opacity: symbols[pos] !== 'CC' ? '50%' : '100%'}}
                    className = {`symbols__button symbols__button--${colorMode}`}
                    onClick = {() => updateSymbol('CC')}
                >
                    <Sphere/>
                </button>
            </div>
        </div>
    )
}