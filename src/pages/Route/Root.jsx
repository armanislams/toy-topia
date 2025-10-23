import React from 'react';
import HomeLayout from '../../Layout/HomeLayout';
import { useNavigation } from 'react-router';
import Loader from '../../components/Loader';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    const navigation = useNavigation()
    const isLoading = navigation.state === 'loading';
    return (
        <div>
            {
                isLoading ? <Loader></Loader> :  <HomeLayout></HomeLayout>
            }
           <ToastContainer></ToastContainer>
            
        </div>
    );
};

export default Root;