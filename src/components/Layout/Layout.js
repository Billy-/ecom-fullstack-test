import React from 'react';
import { node } from 'prop-types';

import styles from './Layout.scss';

const Layout = ({ children }) => (
    <section className={styles.container}>
        <div className={styles.header}>Header Area</div>
        <main>{children}</main>
        <div className={styles.footer}>Footer Area</div>
    </section>
);

Layout.props = {
    children: node
};

Layout.defaultProps = {
    children: null
};

export default Layout;
