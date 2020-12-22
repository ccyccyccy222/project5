import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import store from "./store";
import Home from "./Home";
import Book from "./Book";
import {BrowserRouter,Route} from "react-router-dom";
import "./home.css";



const App=(
    <Provider store={store}>
        <BrowserRouter>
            <div >
                {/*啊啊啊啊啊啊竟然是多了个.！！！*/}
                <Route path="/" exact component={Home}/>
                <Route path="/book"  component={Book}/>
            </div>
        </BrowserRouter>
        {/*<Home/>*/}
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
