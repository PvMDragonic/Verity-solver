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
    const [resultMessage, setResultMessage] = useState<string>('');
    
    useEffect(() => 
    {
        if (insideSymbols.some(str => str === '') || outsideSymbols.some(str => str === ''))
        {
            setResultMessage('Please select all symbols.');
            return;
        } 

        const { finalSymbols, instructions } = PuzzleSolver(insideSymbols, outsideSymbols);

        // Checks to see if theres a Cube, Sphere or Tetraheron among the returned.
        if (finalSymbols.some(symbol => symbol === undefined))
        {
            setResultMessage('Impossible combination set; try again.');
            return;
        }

        setInstructions(instructions);
        setFinalSymbols(finalSymbols);
        setResultMessage('');

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
                {resultMessage !== '' ? (
                    <div 
                        className = 'home__results'
                        style = {{ height: '100%' }}
                    >
                        <p>{resultMessage}</p>
                    </div>
                ) : (
                    <div className = 'home__results'>
                        <Results
                            finalSymbols = {finalSymbols}
                            instructions = {instructions}
                        />
                    </div>
                )}
            </section>
            <p className = 'home__credits'>Made by Dragonic#2329 — View project on <a href='https://github.com/PvMDragonic/Verity-solver'>Github</a>.</p>
        </div>
    )
}