import React from 'react';

type StarPropsType = {
    selected: boolean
}

export const Star = ({selected}: StarPropsType) => {
    if (selected) {
        return <span><strong>star </strong></span>
    } else return <span>star </span>
};