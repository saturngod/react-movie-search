import {useContext} from 'react';
import ResultContext from './RestContext';
import './searchCount.css';

function SearchCount() {
    const {count,updateCount} = useContext(ResultContext);
    
    
        return (
            <div className="container">
                {count > 0 ? <span className='message'>Number of count is {count}</span> : <span></span>}
            </div>
        );
}

export default SearchCount;