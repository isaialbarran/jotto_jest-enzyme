import React from 'react';

/*
Functional react component for congratulatory message
@function
@returns {JSX.Element} - Rendered component
* */

export default (props) => {
    if(props.success){
        return (
            <div data-test="component-congrats">
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
}