import React from 'react';

type StarPropsType = {
    selected: boolean
    click?: () => void
}

export const Star = ({selected, click}: StarPropsType) => {
    return <span onClick={click}>{selected ? <strong>star </strong> : 'star '}</span>
};