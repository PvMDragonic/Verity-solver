import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/Home';
import './config/i18next';

import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18next';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
    <React.StrictMode>
        <I18nextProvider i18n = {i18n}>
            <Home />
        </I18nextProvider>
    </React.StrictMode>
);