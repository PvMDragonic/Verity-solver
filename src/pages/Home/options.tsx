import React from "react";
import { useTranslation } from "react-i18next";

export function Options()
{
    const { t, i18n } = useTranslation();

    return (
        <div className = 'options'>
            <div className = 'options__container'>
                <p className = 'options__text'>{t('Language')}</p>
                <div>
                    <button 
                        className = 'options__language-button'
                        onClick = {() => i18n.changeLanguage('en')}
                    >
                        English
                    </button>
                    <button 
                        className = 'options__language-button'
                        onClick = {() => i18n.changeLanguage('pt')}
                    >
                        Português
                    </button>
                </div>
            </div>
        </div>
    );
}