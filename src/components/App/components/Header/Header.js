import styles from './Header.less';

import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.container}>
        <div className={styles.innerContainer}>
          <h1 className={styles.header}>
            ACCESSIBLE COLORS
          </h1>
          <p className={styles.subHeader}>
            Make any color combination accessible
          </p>
          <p>
            <a className="github-button"
               href="https://github.com/moroshko/accessible-colors"
               data-style="mega"
               data-count-href="/moroshko/accessible-colors/stargazers"
               data-count-api="/repos/moroshko/accessible-colors#stargazers_count"
               data-count-aria-label="# stargazers on GitHub"
               aria-label="Star moroshko/accessible-colors on GitHub">
              Star
            </a>
          </p>
        </div>
      </header>
    );
  }
}