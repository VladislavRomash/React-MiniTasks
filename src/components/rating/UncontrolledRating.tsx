import React, {useState} from 'react';
import {Star} from './Star';

type Numbers = 0 | 1 | 2 | 3 | 4 | 5

export const UncontrolledRating = () => {

    const [number, setNumber] = useState<Numbers>(0)

    const onClickHandler1 = () => {
        setNumber(1)
    }
    const onClickHandler2 = () => {
        setNumber(2)
    }
    const onClickHandler3 = () => {
        setNumber(3)
    }
    const onClickHandler4 = () => {
        setNumber(4)
    }
    const onClickHandler5 = () => {
        setNumber(5)
    }

    return (
        <div>
            <Star selected={number > 0} click={onClickHandler1}/>
            <Star selected={number > 1} click={onClickHandler2}/>
            <Star selected={number > 2} click={onClickHandler3}/>
            <Star selected={number > 3} click={onClickHandler4}/>
            <Star selected={number > 4} click={onClickHandler5}/>
        </div>
    );
};