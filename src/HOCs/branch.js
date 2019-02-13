import React from 'react';

/**
 * branch
 * if test(props) passes, will render Component, otherwise
 * renders BaseComponent
 * @param {Function} test test(props) to render the branch component
 * @param {*} Component component to render if test(props) passes
 */
const branch = (test, Component) => BaseComponent => {
    const Branch = props => {
        return test(props)
            ? <Component {...props} />
            : <BaseComponent {...props} />;
    };
    return Branch;
};

export default branch;
