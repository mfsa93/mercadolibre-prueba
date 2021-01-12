import { useEffect } from 'react'
import { filter, map, takeLast } from 'rxjs/operators';
import { items } from '../../main/axios';
import { useSearch } from '../../main/hooks/searchHook';
import SearchResults from './SearchResults';

export default function Search () {
    
    const {results, setResults} = useSearch();

    useEffect(() => {
        const sub = items.pipe( 
            filter( (response: any)=> response.items?.length > 0), 
            map( (response: any) => {
                setResults(response)
        }), takeLast(1)).subscribe();

        return () => {
            sub.unsubscribe()
        }
    }, [setResults])

    return (
        <div className="container">
            {
                results ? 
                <SearchResults result={results}/>
                : null
            }
        </div>
    )
}
