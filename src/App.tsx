import React from 'react';
import './App.css';
import {Rating} from './components/rating/Rating';
import {Accordion} from './components/accordion/Accordion';

function App() {
    return (
        <div className="App">
            <Rating value={1}/>
            <Accordion title={'Menu'} value={true}/>
            <Rating value={4}/>
            <Accordion title={'Users'} value={false}/>
        </div>
    );
}

export default App;
