import React from 'react';

type AccordionTitlePropsType = {
    title: string
    click?: () => void
}

export const AccordionTitle = ({title, click}: AccordionTitlePropsType) => {
    return (
        <h3 onClick={click}>{title}</h3>
    );
};