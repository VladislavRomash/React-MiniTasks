import React, {useState} from 'react';
import './App.css';
import {Rating} from './components/rating/Rating';
import {Accordion} from './components/accordion/Accordion';
import {OnOffOn} from './components/onOffOn/OnOffOn';
import {UncontrolledAccordion} from './components/accordion/UncontrolledAccordion';
import {NumbersType, UncontrolledRating} from './components/rating/UncontrolledRating';
import {UncontrolledOnOffOn} from './components/onOffOn/UncontrolledOnOffOn';
import {UncontrolledInput} from './components/input/UncontrolledInput';
import {ControlledInput} from './components/input/ControlledInput';
import {CheckBox} from './components/checkbox/CheckBox';
import {Select} from './components/select/Select';

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

    const [value, setValue] = useState<string>('')

    const [checkValue, setCheckValue] = useState<boolean>(false)

    const [select, setSelect] = useState<string | undefined>(undefined)
    const changeSelector = (newValue: string) => {
        setSelect(newValue)
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
            <hr/>
            <ControlledInput value={value} setValue={setValue}/>
            <strong>currentValue:</strong> {value}
            <hr/>
            <CheckBox check={checkValue} changeValue={setCheckValue}/>
            <strong>currentValue:</strong> {checkValue ? 'true' : 'false'}
            <hr/>
            <Select option={select} changeSelector={changeSelector}/>
            <strong>currentValue:</strong> {select === undefined ? 'undefined' : select}
        </div>
    );
}

export default App;
