import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { MainContent } from "./mainContent";
import { Options } from "./options";
import Gear from "../../assets/Gear";
import '../../scss/main.scss';

export function Home()
{
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const { t } = useTranslation();

    return (
        <div className = 'home'>
            <section className = 'home__container'>
                <button
                    className = 'home__options-button'
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
            <p className = 'home__credits'>
                {t('Credits')} <a href='https://github.com/PvMDragonic/Verity-solver'>Github</a>.
            </p>
        </div>
    )
}