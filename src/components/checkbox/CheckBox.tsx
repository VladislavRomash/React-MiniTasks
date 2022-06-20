import React, {ChangeEvent} from 'react';

type CheckBoxPropsType = {
    check: boolean
    changeValue: (condition: boolean) => void
}

export const CheckBox = ({check, changeValue}: CheckBoxPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeValue(e.currentTarget.checked)
    }

    return (
        <div>
            <input type={'checkbox'} checked={check} onChange={onChangeHandler}/>
        </div>
    );
};