import { useState, useCallback } from "react";

import { axios } from "../api";

export default function usePost () {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handelPost = useCallback( async (path, data, headers) => {
        try {
            setLoading(true);
            const response = await axios.post(path, data, headers);
            setData(response.data.data);
            return response.data.data;
        } catch (error) {
            setError(error.response);
            throw error.response;
        } finally {
            setLoading(false);
        }
    }, [])
    
    return [handelPost, { data, error, loading }];
}