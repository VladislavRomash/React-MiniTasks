import React, {ChangeEvent} from 'react';

type ControlledInputPropsType = {
    value: string
    setValue: (currentValue: string) => void
}

export const ControlledInput = ({value, setValue}: ControlledInputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div>
            <input value={value} onChange={onChangeHandler}/>
        </div>
    );
};