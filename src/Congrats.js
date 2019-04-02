import React from 'react';
import Proptypes from 'prop-types';

/*
Functional react component for congratulatory message
@function
@returns {JSX.Element} - Rendered component
* */

const Congrats = (props) => {
    if(props.success){
        return (
            <div data-test="component-congrats" className="alert alert-success">
                <span data-test="congrats-message">
                    Congratulations! You guessed the words
                </span>
            </div>
        )
    }else{
        return(
            <div data-test="component-congrats"/>
        )
    }
};

Congrats.propTypes = {
  success: Proptypes.bool.isRequired
};

export default Congrats;