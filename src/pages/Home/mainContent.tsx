import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { InsideSymbol } from "../../components/InsideSymbol";
import { OutsideSymbol } from "../../components/OutsideSymbol";
import { PuzzleSolver } from "./solver";
import { Results } from "../../components/Results";
import ColorModeContext from "./modeSelector";
import '../../scss/main.scss';

export function MainContent()
{
    const [insideSymbols, setInsideSymbols] = useState<string[]>(['', '', '']);
    const [outsideSymbols, setOutsideSymbols] = useState<string[]>(['', '', '']);
    const [instructions, setInstructions] = useState<string[][]>([]);
    const [finalSymbols, setFinalSymbols] = useState<React.FC[]>([]);
    const [resultMessage, setResultMessage] = useState<string>('');
    const { colorMode } = useContext(ColorModeContext);
    const { t } = useTranslation();
    
    useEffect(() => 
    {
        if (insideSymbols.some(str => str === '') || outsideSymbols.some(str => str === ''))
        {
            setResultMessage(t('SelectMessage'));
            return;
        } 

        const { finalSymbols, instructions } = PuzzleSolver(insideSymbols, outsideSymbols);

        // Checks to see if theres a Cube, Sphere or Tetraheron among the returned.
        if (finalSymbols === undefined)
        {
            setResultMessage(t('ImpossibleMessage'));
            return;
        }

        setInstructions(instructions);
        setFinalSymbols(finalSymbols);
        setResultMessage('');

    }, [insideSymbols, outsideSymbols]);

    return (
        <>
            <div className = 'main-content'>
                <div className = 'main-content__container'>
                    <p className = {`main-content__text main-content__text--${colorMode}`}>
                        {t('Inside')}
                    </p>
                    <div className = 'main-content__symbols'>
                        <InsideSymbol
                            pos = {0}
                            label = {t('Left')}
                            symbols = {insideSymbols}
                            setSymbols = {setInsideSymbols}
                        />
                        <InsideSymbol
                            pos = {1}
                            label = {t('Middle')}
                            symbols = {insideSymbols}
                            setSymbols = {setInsideSymbols}
                        />
                        <InsideSymbol
                            pos = {2}
                            label = {t('Right')}
                            symbols = {insideSymbols}
                            setSymbols = {setInsideSymbols}
                        />
                    </div>
                </div>
                <div className = 'main-content__container'>
                    <p className = {`main-content__text main-content__text--${colorMode}`}>
                        {t('Outside')}
                    </p>
                    <div className = 'main-content__symbols'>
                        <OutsideSymbol
                            pos = {0}
                            label = {t('Left')}
                            symbols = {outsideSymbols}
                            setSymbols = {setOutsideSymbols}
                        />
                        <OutsideSymbol
                            pos = {1}
                            label = {t('Middle')}
                            symbols = {outsideSymbols}
                            setSymbols = {setOutsideSymbols}
                        />
                        <OutsideSymbol
                            pos = {2}
                            label = {t('Right')}
                            symbols = {outsideSymbols}
                            setSymbols = {setOutsideSymbols}
                        />
                    </div>
                </div>
            </div>
            <p className = {`main-content__text main-content__text--${colorMode}`}>
                {t('Solution')}
            </p>
            {resultMessage !== '' ? (
                <div 
                    className = {`main-content__results main-content__results--${colorMode}`}
                    style = {{ height: '100%' }}
                >
                    <p>{resultMessage}</p>
                </div>
            ) : (
                <div className = {`main-content__results main-content__results--${colorMode}`}>
                    <Results
                        finalSymbols = {finalSymbols}
                        instructions = {instructions}
                    />
                </div>
            )}
        </>
    )
}