import { useState, useCallback } from "react";

import { axios } from "../api";

export default function usePost () {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handelPost = useCallback( async (path, data, headers) => {
        try {
            setData(() => null)
            setError(() => null)
            setLoading(true);
            const response = await axios.post(path, data, headers);
            setData(response.data);
            return response.data;
        } catch (error) {
            setError(error);
            throw error;
        } finally {
            setLoading(false);
        }
    }, [])
    
    return [handelPost, { data, error, loading }];
}