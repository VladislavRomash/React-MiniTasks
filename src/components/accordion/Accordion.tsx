import React from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';

type AccordionPropsType = {
    title: string
    value: boolean
}

export const Accordion = ({title, value}: AccordionPropsType) => {
    if (value)
        return (
            <div>
                <AccordionTitle title={title}/>
                <AccordionBody/>
            </div>
        )
    else return (
        <div>
            <AccordionTitle title={title}/>
        </div>
    );
};