import React from "react"
import ReactDOM from "react-dom"
import faker from 'faker';
import AproovalCard from './AproovalCard'

const App =  () => {
    return (
        <AproovalCard/>
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);