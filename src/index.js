import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import store from './redux/redux-store';

let reRender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                store={store}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

window.state = store.getState()

reRender(store.getState())

store.subscribe(() => {
    let state = localStorage.setItem('reduxState', JSON.stringify(store.getState()))
    reRender(state);
})




