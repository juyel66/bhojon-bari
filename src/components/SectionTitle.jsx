import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='mx-auto text-center my-8 md:w-3/12'>
            <p className='text-yellow-600 mb-2'>--- {subHeading} ---</p>
            <h1 className='text-4xl uppercase border-y-1 py-2'>{heading}</h1>

        </div>
    );
};

export default SectionTitle;