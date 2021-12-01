import React, { Fragment } from 'react';

import Header from '../Header';
import Form from '../Form';
import Loader from '../Loader';
import Error from '../Error';
import Forecast from '../Forecast';

import styles from './Page.module.css';
import useForecast from '../../Hooks/useForcast';

const Page = () => {
    const {isError,isLoading,forecast,onSubmitRequest}=useForecast();

    
    return (
        <Fragment>
            <Header />
            <div className={styles.box}>
                {!isLoading && <Form submitSearch={onSubmitRequest}/>}
                { isError && <Error/>}
                {isLoading && <Loader/>} 
            </div>
            {forecast && <Forecast/>} 
        </Fragment>
    );
};

export default Page;
