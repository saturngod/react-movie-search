import {useContext} from 'react';
import ResultContext from './RestContext';

function SearchCount() {
    const {count,updateCount} = useContext(ResultContext);
    console.log(count)
    return (
        <div className="container">
            Number of count is {count}
        </div>
    );
}

export default SearchCount;