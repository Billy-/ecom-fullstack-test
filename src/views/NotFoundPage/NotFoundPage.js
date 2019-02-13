import React from 'react';

import styles from './NotFoundPage.scss';

const NotFoundPage = ({ location: { pathname } }) => (
  <div className={styles.container}>
    <h2>Sorry, the page at "{pathname}" was not found</h2>
  </div>
);

export default NotFoundPage;
