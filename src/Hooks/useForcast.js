import { useState } from "react";

const useForecast = ()=>{
    const [isLoading,setisloading]= useState(false);
    const [isError, setisError]= useState(false);
    const [forecast,setforecast]= useState(null);

    const onSubmitRequest = (value)=>{
            console.log({value});
    }

    return {
        isLoading,isError,forecast, onSubmitRequest
    }
}

export default useForecast;