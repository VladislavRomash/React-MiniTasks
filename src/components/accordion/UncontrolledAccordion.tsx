import React, {useState} from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';

type UncontrolledAccordionPropsType = {
    title: string
}

export const UncontrolledAccordion = ({title}: UncontrolledAccordionPropsType) => {

    const [expansion, setExpansion] = useState<boolean>(true)

    const onClickHandler = () => {
        setExpansion(!expansion)
    }

    return (
        <div>
            <AccordionTitle title={title} click={onClickHandler}/>
            {!expansion && <AccordionBody/>}
        </div>
    );
};