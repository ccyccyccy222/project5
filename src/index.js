import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import store from "./store";
import Home from "./containers/Home";
import Book from "./containers/Book";
import {BrowserRouter,Route} from "react-router-dom";
import "./home.css";
import Question from "./containers/Question";



const App=(
    <Provider store={store}>
        <BrowserRouter>
            <div >
                {/*啊啊啊啊啊啊竟然是多了个.！！！*/}
                <Route path="/" exact component={Home}/>
                <Route path="/book"  component={Book}/>
                <Route path="/question"  component={Question}/>
            </div>
        </BrowserRouter>
        {/*<Home/>*/}
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
