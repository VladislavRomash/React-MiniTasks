import React, {useState} from 'react';
import './App.css';
import {Rating} from './components/rating/Rating';
import {Accordion} from './components/accordion/Accordion';
import {OnOffOn} from './components/onOffOn/OnOffOn';
import {UncontrolledAccordion} from './components/accordion/UncontrolledAccordion';
import {NumbersType, UncontrolledRating} from './components/rating/UncontrolledRating';
import {UncontrolledOnOffOn} from './components/onOffOn/UncontrolledOnOffOn';
import {UncontrolledInput} from './components/input/UncontrolledInput';

function App() {
    const [numbers, setNumbers] = useState<NumbersType>(0)
    const selectedStar = (value: NumbersType) => {
        setNumbers(value)
    }

    const [collapsed, setCollapsed] = useState<boolean>(true)
    const changeStatus = () => {
        setCollapsed(!collapsed)
    }

    const [selector, setSelector] = useState<boolean>(true)
    const changeSwitch = (value: boolean) => {
        setSelector(!value)
    }

    return (
        <div className="App">
            <Rating value={numbers} click={selectedStar}/>
            <UncontrolledRating/>
            <hr/>
            <Accordion title={'Menu'} collapsed={collapsed} click={changeStatus}/>
            <UncontrolledAccordion/>
            <hr/>
            <OnOffOn selector={selector} click={changeSwitch}/>
            <UncontrolledOnOffOn/>
            <hr/>
            <UncontrolledInput/>
        </div>
    );
}

export default App;
