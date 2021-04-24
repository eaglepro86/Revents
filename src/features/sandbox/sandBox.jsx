import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import {INCREMENT_COUNTER, DECREMENT_COUNTER} from './testReducer';

export default function SandBox() {

    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    return (
        <>
            <h1>testing 124</h1>
            <h2>testing {data}</h2>
            <Button
            onClick={() => dispatch({type: INCREMENT_COUNTER})} content='Increment'/>

            <Button
            onClick={() => dispatch({type: DECREMENT_COUNTER})} content='Decrement'/>
        </>
    )

}