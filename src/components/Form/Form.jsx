import React, {useState} from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.css';

const Form = ({submitSearch}) => {

    const [location, setlocation] = useState("")
    const onSubmit= (e)=>{
        e.preventDefault();
        if(!location || location === "")return;
        submitSearch(location);
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                required
                value={location}
                onChange={e=> setlocation(e.target.value)}
            />

            <button type="submit" className={styles.button}>
                SEARCH
            </button>
        </form>
    );
};

Form.propTypes={
    submitSearch:PropTypes.func.isRequired
}

export default Form;
