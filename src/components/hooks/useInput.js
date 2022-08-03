import React, { useState, useEffect } from "react";
import * as yup from 'yup';

const defaultFunc = (data) => { }

/**
 * This callback type is called `requestCallback` and is displayed as a global symbol.
 *
 * @callback requestCallback
 * @param {Object} data
 */

/**
 * Hook dùng để quản lý việc nhập, validate input 
 * @param {Object} initialState object chứa các field input 
 * @param {yup.ObjectSchema} yupSchema schema yup để validate 
 *  @param {requestCallback} onSuccess callback khi validate thành công 
 *  @param {requestCallback} onError callback khi validate fail 
 */
export const useInput = (initialState, yupSchema, onSuccess = defaultFunc, onError = defaultFunc) => {
    const [input, setInput] = useState(initialState);
    const [error, setError] = useState({});

    /**
     * Hàm set giá trị input 
     * @param {string} field tên field input 
     * @param {string} value giá trị input 
     */
    const setFieldName = (field, value) => {
        setInput(prevState => ({ ...prevState, [field]: value }))
    }

    /**
     * Hàm validate các giá trị input vừa nhập
     */
    const validate = async () => {
        try {
            await yupSchema.validate(input, { abortEarly: false });
            setError(null);
            onSuccess(input);
        }
        catch (e) {
            //console.log(JSON.stringify(e.inner));
            const errorState = e.inner.reduce((prev, next) => ({ ...prev, [next.path]: next.message }), {});
            setError(errorState);
            onError(input);
        }
    }
    // useEffect(() => {
    //     console.log(error);
    // }, [error])

    return { input, error, setFieldName, validate }
}

