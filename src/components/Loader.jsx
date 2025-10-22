import React from 'react';

const Loader = () => {
    return (
        <div className='min-h-screen w-full flex flex-col justify-center items-center bg-gray-50 animate-bounce '>
            <img src="https://i.ibb.co/Kx8NVc70/images-q-tbn-ANd9-Gc-SIwu-CARv-k-G1eyy6a-IXkq-Fv-Sr-CVyz-J419-Vbg-s.jpg" alt="" />
            <h1 className='text-2xl font-bold'>Loading...</h1>
        </div>
    );
};

export default Loader;