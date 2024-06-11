import React, { useEffect, useState } from "react";
import { InsideSymbol } from "../../components/InsideSymbol";
import { OutsideSymbol } from "../../components/OutsideSymbol";
import '../../scss/main.scss';

export function Home()
{
    const [insideSymbols, setInsideSymbols] = useState<string[]>(['', '', '']);
    const [outsideSymbols, setOutsideSymbols] = useState<string[]>(['', '', '']);
    const [selectWarning, setSelectWarning] = useState<boolean>(true);
    
    useEffect(() => {
        setSelectWarning(
            insideSymbols.some(str => str === '') || 
            outsideSymbols.some(str => str === '')
        );
    }, [insideSymbols, outsideSymbols]);
    
    useEffect(() => {
        if (selectWarning) return;

        // TO-DO 
    }, [selectWarning]);

    return (
        <div className = 'home'>
            <section className = 'home__container'>
                <p className = 'home__text'>Inside</p>
                <div className = 'home__symbols'>
                    <InsideSymbol
                        pos = {0}
                        label = {'Left'}
                        symbols = {insideSymbols}
                        setSymbols = {setInsideSymbols}
                    />
                    <InsideSymbol
                        pos = {1}
                        label = {'Middle'}
                        symbols = {insideSymbols}
                        setSymbols = {setInsideSymbols}
                    />
                    <InsideSymbol
                        pos = {2}
                        label = {'Right'}
                        symbols = {insideSymbols}
                        setSymbols = {setInsideSymbols}
                    />
                </div>
                <p className = 'home__text'>Outside</p>
                <div className = 'home__symbols'>
                    <OutsideSymbol
                        pos = {0}
                        label = {'Left'}
                        symbols = {outsideSymbols}
                        setSymbols = {setOutsideSymbols}
                    />
                    <OutsideSymbol
                        pos = {1}
                        label = {'Middle'}
                        symbols = {outsideSymbols}
                        setSymbols = {setOutsideSymbols}
                    />
                    <OutsideSymbol
                        pos = {2}
                        label = {'Right'}
                        symbols = {outsideSymbols}
                        setSymbols = {setOutsideSymbols}
                    />
                </div>
                <p className = 'home__text'>Solution</p>
                <div className = 'home__result'>
                    {selectWarning ? (
                        <p>Please select all symbols.</p>
                    ) : (
                        <p>Soon</p>
                    )}
                </div>
            </section>
        </div>
    )
}