import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { search as callSearch } from "../axios";

export const useSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const history = useHistory();
    const term = useQuery().get('q');
    
    useEffect(() => {
        if(term) {
           callSearch(term)
        }
    }, [term])

    const search = () => {
        if(query !== '') {
            history.push(`/items?q=${query}`)    
        }
    }

    const changeQuery = (term: string, keyCode: number) => {
        setQuery(term);

        if(keyCode === 13 && query !== "") {
            search()
        }
    }

    return {changeQuery, search, query, results, setResults}
}

export function useQuery() {
    return new URLSearchParams(useLocation().search);
}
