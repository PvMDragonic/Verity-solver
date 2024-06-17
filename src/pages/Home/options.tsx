import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function Options()
{
    const [mobile, setMobile] = useState<boolean>(false);
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
                <p className = 'options__text'>{t('Language')}</p>
                <div>
                    <button 
                        className = 'options__language-button'
                        onClick = {() => i18n.changeLanguage('en')}
                    >
                        {mobile ? 'EN' : 'English'}
                    </button>
                    <button 
                        className = 'options__language-button'
                        onClick = {() => i18n.changeLanguage('pt')}
                    >
                        {mobile ? 'PT' : 'Português'}
                    </button>
                    <button 
                        className = 'options__language-button'
                        onClick = {() => i18n.changeLanguage('es')}
                    >
                        {mobile ? 'ES' : 'Español'}
                    </button>
                    <button 
                        className = 'options__language-button'
                        onClick = {() => i18n.changeLanguage('de')}
                    >
                        {mobile ? 'DE' : 'Deutsch'}
                    </button>
                </div>
            </div>
        </div>
    );
}