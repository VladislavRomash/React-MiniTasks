import React from 'react';
import {Star} from './Star';
import {NumbersType} from './UncontrolledRating';

type RatingPropsType = {
    value: NumbersType
    click: (value: NumbersType) => void
}

export const Rating = ({value, click}: RatingPropsType) => {
    return <div>
        <Star selected={value > 0} click={() => click(1)}/>
        <Star selected={value > 1} click={() => click(2)}/>
        <Star selected={value > 2} click={() => click(3)}/>
        <Star selected={value > 3} click={() => click(4)}/>
        <Star selected={value > 4} click={() => click(5)}/>
    </div>
};