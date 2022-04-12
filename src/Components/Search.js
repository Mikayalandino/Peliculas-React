import { useSearchParams } from "react-router-dom";

const Search = () => {

    const [searchParams, setSeachParams] = useSearchParams({
        query: ''
    })

    const handleChange = (e) => {
        setSeachParams({
            query:e.target.value
        })
    }

    return (
        <div>
            <h1>Search</h1>
            <input 
                type='text' 
                onChange={handleChange}
                value={searchParams.get('query')}
            ></input>
        </div>
        
    )    
} 

export default Search;