import React, { useContext, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { MainContent } from "./mainContent";
import { Options } from "./options";
import ColorModeContext from "./modeSelector";
import Gear from "../../assets/Gear";
import '../../scss/main.scss';

export function Home()
{
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const { colorMode } = useContext(ColorModeContext);
    const { t, i18n } = useTranslation();

    return (
        <div className = {`home home--${colorMode}`}>
            <section className = {`home__container home__container--${colorMode}`}>
                <button
                    className = {`home__options-button home__options-button--${colorMode}`}
                    style = {{ opacity: showOptions ? '70%' : '10%' }}
                    onClick = {() => setShowOptions(curr => !curr)}
                >
                    <Gear/>
                </button>

                {!showOptions ? (
                    <MainContent/>
                ) : (
                    <Options/>
                )}
            </section>
            <p className = {`home__credits home__credits--${colorMode}`}>
                <Trans 
                    i18nKey = "Credits" 
                    values = {{ link: 'Github' }}
                    components = {{ 1: <a href='https://github.com/PvMDragonic/Verity-solver'/> }} 
                />
            </p>
        </div>
    )
}