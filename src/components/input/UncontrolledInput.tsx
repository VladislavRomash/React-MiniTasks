import React, {ChangeEvent, useState} from 'react';

export const UncontrolledInput = () => {

    const [value, setValue] = useState<string>('')
    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const [trackingValue, setTrackingValue] = useState<string>('')
    const [addValue, setAddValue] = useState<string>('')
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setTrackingValue(e.currentTarget.value)
    }
    const onClickHandler = (value: string) => {
        setAddValue(value)
    }

    return (
        <div>
            <div>
                <input onChange={changeValue}/> <strong>currentValue:</strong> {value}
            </div>
            <div>
                <input onChange={onChangeValue}/>
                <> </>
                <button onClick={() => onClickHandler(trackingValue)}>
                    +
                </button>
                <strong> setValue:</strong> {addValue}
            </div>
        </div>
    );
};