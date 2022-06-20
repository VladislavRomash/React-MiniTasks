import React, {ChangeEvent} from 'react';

type SelectPropsType = {
    option: string | undefined
    changeSelector: (newValue: string) => void
}

export const Select = ({option, changeSelector}: SelectPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        changeSelector(e.currentTarget.value)
    }

    return (
        <div>
            <select value={option} onChange={onChangeHandler}>
                <option>none</option>
                <option value={'1'}>Minsk</option>
                <option value={'2'}>Kiev</option>
                <option value={'3'}>Vilnius</option>
                <option value={'4'}>Riga</option>
                <option value={'5'}>Tallinn</option>
                <option value={'6'}>Warsaw</option>
            </select>
        </div>
    );
};