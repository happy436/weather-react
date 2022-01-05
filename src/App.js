import { Home } from "./pages/Home/Home.jsx";
import { Header } from "./shared/Header/Header.jsx";
import s from "./App.module.scss"
import { Popup } from "./shared/Popup/Popup.jsx";

/* const mainURL = "/weather-react" */

function App(props) {

    return (
        <div className={s.globalContainer}>
            {/* <Popup /> */}
            <div className={s.App}>
                <Header 
                    state={props.store.getState().themeReducer}
                    dispatch={props.store.dispatch}
                />
                <Home 
                    state={props.store.getState().weatherReducer}
                />
            </div>
        </div>
    );
}

export default App;
