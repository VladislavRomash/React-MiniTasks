import React from 'react';
import './App.css';
import {Rating} from './components/rating/Rating';
import {Accordion} from './components/accordion/Accordion';
import {OnOffOn} from './components/onOffOn/OnOffOn';
import {UncontrolledAccordion} from './components/accordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/rating/UncontrolledRating';

function App() {
    return (
        <div className="App">
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <hr/>
            <Accordion title={'Menu'} collapsed={false}/>
            <Accordion title={'Users'} collapsed={true}/>
            <hr/>
            <OnOffOn/>
            <hr/>
            <UncontrolledAccordion title={'--Menu--'}/>
            <UncontrolledAccordion title={'--Users--'}/>
            <hr/>
            <UncontrolledRating/>
        </div>
    );
}

export default App;
