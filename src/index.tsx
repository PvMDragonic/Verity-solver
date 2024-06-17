import React from 'react';
import ReactDOM from 'react-dom/client';
import { ColorModeProvider } from './pages/Home/modeSelector';
import { I18nextProvider } from 'react-i18next';
import { Home } from './pages/Home';
import i18n from './config/i18next';
import './config/i18next';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
    <React.StrictMode>
        <I18nextProvider i18n = {i18n}>
            <ColorModeProvider>
                <Home />
            </ColorModeProvider>
        </I18nextProvider>
    </React.StrictMode>
);