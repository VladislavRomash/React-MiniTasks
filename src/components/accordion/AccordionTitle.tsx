import React from 'react';

type AccordionTitlePropsType = {
    title: string
}

export const AccordionTitle = ({title}: AccordionTitlePropsType) => {
    return (
        <h3>{title}</h3>
    );
};