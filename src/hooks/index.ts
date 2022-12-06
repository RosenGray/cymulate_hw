import { AxiosRequestConfig ,AxiosError} from "axios";
import { useState, useEffect, useCallback } from "react";
import axiosInstance from './../axios/index';


export default function useFetch(config:AxiosRequestConfig<any>) {
   const [response, setResponse] = useState(null);
   const [error, setError] = useState<AxiosError | null>(null);
   const [isLoading, setIsLoading] = useState(true);

   const fetchData =  useCallback( async() => {

    try {
        const res = await axiosInstance.request(config);
            setResponse(res.data);
    }catch(err){
        setError(err as AxiosError);
    }finally{
        setIsLoading(false);
    }
  },[config]);


   useEffect(() => {

      fetchData();
    
   }, []);

   return [response, error, isLoading ] as const;
}