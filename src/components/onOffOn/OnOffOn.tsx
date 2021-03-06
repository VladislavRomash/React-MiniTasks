import React from 'react';

type OnOffOnPropsType = {
    selector: boolean
    click: (value: boolean) => void
}

export const OnOffOn = ({selector, click}: OnOffOnPropsType) => {

    const styleOn = {
        width: '50px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: selector ? 'green' : 'white',
        padding: '5px'
    }
    const styleOff = {
        width: '50px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: selector ? 'white' : 'red',
        marginLeft: '10px',
        padding: '5px'
    }
    const styleIndicator = {
        width: '15px',
        height: '15px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: selector ? 'green' : 'red',
    }

    return (
        <div>
            <div style={styleOn} onClick={() => click(selector)}>on</div>
            <div style={styleOff} onClick={() => click(selector)}>off</div>
            <div style={styleIndicator}/>
        </div>
    );
};