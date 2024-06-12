import React, { useEffect, useState } from "react";
import { InsideSymbol } from "../../components/InsideSymbol";
import { OutsideSymbol } from "../../components/OutsideSymbol";
import { PuzzleSolver } from "./solver";
import { Results } from "../../components/Results";
import '../../scss/main.scss';

export function Home()
{
    const [insideSymbols, setInsideSymbols] = useState<string[]>(['', '', '']);
    const [outsideSymbols, setOutsideSymbols] = useState<string[]>(['', '', '']);
    const [instructions, setInstructions] = useState<string[][]>([]);
    const [finalSymbols, setFinalSymbols] = useState<React.FC[]>([]);
    
    useEffect(() => {
        if (insideSymbols.some(str => str === '') || outsideSymbols.some(str => str === '')) 
            return;

        const { finalSymbols, instructions } = PuzzleSolver(insideSymbols, outsideSymbols);

        setInstructions(instructions);
        setFinalSymbols(finalSymbols);

    }, [insideSymbols, outsideSymbols]);

    return (
        <div className = 'home'>
            <section className = 'home__container'>
                <div className = 'home__subcontainer'>
                    <div className = 'home__symbols-container'>
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
                    </div>
                    <div className = 'home__symbols-container'>
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
                    </div>
                </div>
                <p className = 'home__text'>Solution</p>
                <div className = 'home__results'>
                    {insideSymbols.some(str => str === '') || outsideSymbols.some(str => str === '') ? (
                        <p>Please select all symbols.</p>
                    ) : (
                        <Results
                            finalSymbols = {finalSymbols}
                            instructions = {instructions}
                        />
                    )}
                </div>
            </section>
        </div>
    )
}