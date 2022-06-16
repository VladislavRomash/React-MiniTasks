import React, {useState} from 'react';

export const UncontrolledOnOffOn = () => {

    const [selector, setSelector] = useState<boolean>(true)

    const onClickHandlerOn = () => {
        setSelector(true)
    }
    const onClickHandlerOff = () => {
        setSelector(false)
    }

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
            <div style={styleOn} onClick={onClickHandlerOn}>on</div>
            <div style={styleOff} onClick={onClickHandlerOff}>off</div>
            <div style={styleIndicator}/>
        </div>
    );
};