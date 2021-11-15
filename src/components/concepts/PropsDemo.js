import {useState} from 'react';

const PropsDemo = () => {
    return(
        <div className='main'>
            <div className='mainDiv'>
                <FunctionalComponent string='will this display?' />
                <FunctionalComponent string='props are pretty cool, right?' />
                <FunctionalComponent string='you can send data from one component...' />
                <FunctionalComponent string='...to another!' />
            </div>
        </div>
    );
};

export default PropsDemo;

const FunctionalComponent = (props) => {
    return(
        <div>
            <p>{props.string}</p>
        </div>
    );
};