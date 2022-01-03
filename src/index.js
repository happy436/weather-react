import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from './provider/ThemeProvider';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <App store={store}/>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)



