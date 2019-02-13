import React from 'react';
import { node, string } from 'prop-types';
import cx from 'classnames';

import styles from './Card.scss';

const Card = ({ children, className }) => (
    <div className={cx(styles.card, className)}>
        {children}
    </div>
);

Card.propTypes = {
    children: node.isRequired,
    className: string
};

Card.defaultProps = {
    className: null
};

export default Card;
