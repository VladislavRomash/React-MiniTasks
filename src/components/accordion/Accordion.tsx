import React from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';

type AccordionPropsType = {
    title: string
    collapsed: boolean
    click: () => void
}

export const Accordion = ({title, collapsed, click}: AccordionPropsType) => {

    return <div>
        <AccordionTitle title={title} click={click}/>
        {!collapsed && <AccordionBody/>}
    </div>
};