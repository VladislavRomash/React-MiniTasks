import React, {useState} from 'react';
import {Star} from './Star';

export type NumbersType = 0 | 1 | 2 | 3 | 4 | 5

export const UncontrolledRating = () => {

    const [number, setNumber] = useState<NumbersType>(0)

    const onClickHandler = (value: NumbersType) => {
        setNumber(value)
    }

    return (
        <div>
            <Star selected={number > 0} click={() => onClickHandler(1)}/>
            <Star selected={number > 1} click={() => onClickHandler(2)}/>
            <Star selected={number > 2} click={() => onClickHandler(3)}/>
            <Star selected={number > 3} click={() => onClickHandler(4)}/>
            <Star selected={number > 4} click={() => onClickHandler(5)}/>
        </div>
    );
};