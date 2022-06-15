import React from 'react';

type StarPropsType = {
    selected: boolean
    click?: () => void
}

export const Star = ({selected, click}: StarPropsType) => {
    return selected
        ? <span onClick={click}><strong>star </strong></span>
        : <span onClick={click}>star </span>
};