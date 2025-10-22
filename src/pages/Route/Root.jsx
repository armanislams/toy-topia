import React from 'react';
import HomeLayout from '../../Layout/HomeLayout';
import { useNavigation } from 'react-router';

const Root = () => {
    const navigation = useNavigation()
    const isLoading = navigation.state === 'loading';
    return (
        <div>
            {
                isLoading ? <Loader></Loader> :  <HomeLayout></HomeLayout>
            }
           
            
        </div>
    );
};

export default Root;