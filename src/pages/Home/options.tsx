import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LightMode from "../../assets/LightMode";
import DarkMode from "../../assets/DarkMode";
import HighContrastMode from "../../assets/HighContrastMode";
import ColorModeContext from "./modeSelector";

export function Options()
{
    const [mobile, setMobile] = useState<boolean>(false);
    const { colorMode, setColorMode } = useContext(ColorModeContext);
    const { t, i18n } = useTranslation();

    useEffect(() => 
    {
        // Sets on initial load.
        setMobile(window.innerWidth < 550);

        const handleResize = () => setMobile(window.innerWidth < 550);
        window.addEventListener('resize', handleResize); 
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className = 'options'>
            <div className = 'options__container'>
                <p className = {`options__text options__text--${colorMode}`}>{t('Language')}</p>
                <div>
                    <button 
                        className = {`options__button options__button--${colorMode}`}
                        onClick = {() => i18n.changeLanguage('en')}
                    >
                        {mobile ? 'EN' : 'English'}
                    </button>
                    <button 
                        className = {`options__button options__button--${colorMode}`}
                        onClick = {() => i18n.changeLanguage('pt')}
                    >
                        {mobile ? 'PT' : 'Português'}
                    </button>
                    <button 
                        className = {`options__button options__button--${colorMode}`}
                        onClick = {() => i18n.changeLanguage('es')}
                    >
                        {mobile ? 'ES' : 'Español'}
                    </button>
                    <button 
                        className = {`options__button options__button--${colorMode}`}
                        onClick = {() => i18n.changeLanguage('de')}
                    >
                        {mobile ? 'DE' : 'Deutsch'}
                    </button>
                </div>
            </div>
            <div className = 'options__container'>
                <p className = {`options__text options__text--${colorMode}`}>{t('Color scheme')}</p>
                <div>
                    <button 
                        className = {`options__button options__button--${colorMode}`}
                        onClick = {() => setColorMode('lm')}
                    >
                        {mobile ? <LightMode/> : t('Light')}
                    </button>
                    <button 
                        className = {`options__button options__button--${colorMode}`}
                        onClick = {() => setColorMode('dm')}
                    >
                        {mobile ? <DarkMode/> : t('Dark')}
                    </button>
                    <button 
                        className = {`options__button options__button--${colorMode}`}
                        onClick = {() => setColorMode('hcm')}
                    >
                        {mobile ? <HighContrastMode/> : t('High-contrast')}
                    </button>
                </div>
            </div>
        </div>
    );
}