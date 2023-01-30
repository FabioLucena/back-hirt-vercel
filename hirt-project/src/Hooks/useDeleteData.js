import axios from "axios";
import { useEffect, useState } from "react";

export const useDeleteData = (url) => {
    
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState('');

    useEffect(() => {
        setLoading(true);

        axios.delete(url, {
            // headers: {
            //     auth: token
            // }
        }).then(() => {
            setLoading(false);
            alert("Obra Deletada!")
        }).catch((error) => {
            setErro(error.response);
            setLoading(false);
            alert("Obra não pode ser Deletada!")
        });

    }, [url])

    return [loading, erro]
};