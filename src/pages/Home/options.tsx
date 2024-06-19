import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LightMode from "../../assets/LightMode";
import DarkMode from "../../assets/DarkMode";
import HighContrastMode from "../../assets/HighContrastMode";
import ColorModeContext from "./modeSelector";
import AmoledMode from "../../assets/AmoledMode";

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

    function activeLanguageBtn(lang: string)
    {
        return lang === i18n.language ? `active-${colorMode}` : colorMode;
    }

    function activeColorModeBtn(mode: string)
    {
        return mode === colorMode ? `active-${colorMode}` : colorMode;
    }

    return (
        <div className = 'options'>
            <div className = 'options__container'>
                <p className = {`options__text options__text--${colorMode}`}>{t('Language')}</p>
                <div>
                    <button 
                        title = 'English'
                        className = {`options__button options__button--${activeLanguageBtn('en')}`}
                        onClick = {() => i18n.changeLanguage('en')}
                    >
                        {mobile ? 'EN' : 'English'}
                    </button>
                    <button 
                        title = 'Português'
                        className = {`options__button options__button--${activeLanguageBtn('pt')}`}
                        onClick = {() => i18n.changeLanguage('pt')}
                    >
                        {mobile ? 'PT' : 'Português'}
                    </button>
                    <button 
                        title = 'Español'
                        className = {`options__button options__button--${activeLanguageBtn('es')}`}
                        onClick = {() => i18n.changeLanguage('es')}
                    >
                        {mobile ? 'ES' : 'Español'}
                    </button>
                    <button 
                        title = 'Deutsch'
                        className = {`options__button options__button--${activeLanguageBtn('de')}`}
                        onClick = {() => i18n.changeLanguage('de')}
                    >
                        {mobile ? 'DE' : 'Deutsch'}
                    </button>
                </div>
                <div>
                    <button
                        title = 'Русский'
                        className = {`options__button options__button--${activeLanguageBtn('ru')}`}
                        onClick = {() => i18n.changeLanguage('ru')}
                    >
                        {mobile ? 'RU' : 'Русский'}
                    </button>
                    <button 
                        title = '한국어'
                        className = {`options__button options__button--${activeLanguageBtn('kr')}`}
                        onClick = {() => i18n.changeLanguage('kr')}
                    >
                        {mobile ? 'KR' : '한국어'}
                    </button>
                    <button 
                        title = '日本語'
                        className = {`options__button options__button--${activeLanguageBtn('jp')}`}
                        onClick = {() => i18n.changeLanguage('jp')}
                    >
                        {mobile ? 'JP' : '日本語'}
                    </button>
                    <button 
                        title = '中文'
                        className = {`options__button options__button--${activeLanguageBtn('zh')}`}
                        onClick = {() => i18n.changeLanguage('zh')}
                    >
                        {mobile ? 'ZH' : '中文'}
                    </button>
                </div>
            </div>
            <div className = 'options__container'>
                <p className = {`options__text options__text--${colorMode}`}>{t('Colors')}</p>
                <div>
                    <button
                        title = {t('Light')} 
                        className = {`options__button options__button--${activeColorModeBtn('lm')}`}
                        onClick = {() => setColorMode('lm')}
                    >
                        {mobile ? <LightMode/> : t('Light')}
                    </button>
                    <button 
                        title = {t('Dark')}
                        className = {`options__button options__button--${activeColorModeBtn('dm')}`}
                        onClick = {() => setColorMode('dm')}
                    >
                        {mobile ? <DarkMode/> : t('Dark')}
                    </button>
                    <button 
                        title = {t('High-contrast')}
                        className = {`options__button options__button--${activeColorModeBtn('hcm')}`}
                        onClick = {() => setColorMode('hcm')}
                    >
                        {mobile ? <HighContrastMode/> : t('High-contrast')}
                    </button>
                    <button
                        title = {t('Amoled')}
                        className = {`options__button options__button--${activeColorModeBtn('am')}`}
                        onClick = {() => setColorMode('am')}
                    >
                        {mobile ? <AmoledMode/> : t('Amoled')}
                    </button>
                </div>
            </div>
        </div>
    );
}