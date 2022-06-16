import React, {useState} from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';


export const UncontrolledAccordion = () => {

    const headerTitle = '--Users--'

    const [expansion, setExpansion] = useState<boolean>(true)

    const onClickHandler = () => {
        setExpansion(!expansion)
    }

    return (
        <div>
            <AccordionTitle title={headerTitle} click={onClickHandler}/>
            {!expansion && <AccordionBody/>}
        </div>
    );
};