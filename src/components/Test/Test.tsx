import { useState } from "react";
import useFetch from "../../hooks";
import { useAppDispatch } from "../../store/hooks";
import { setTestToBe } from "./slice";
import StyledTest from "./Test.styles"


const Test = () => {
    const [counter,setCounter] = useState(0);
    const [response, error, isLoading ] = useFetch({url:'https://jsonplaceholder.typicode.com/todos/'})
    const dispatch = useAppDispatch();
    return <StyledTest>
        <button onClick={() => {
            dispatch(setTestToBe(10))
        }}>hi</button>
    </StyledTest>
}

export default Test;