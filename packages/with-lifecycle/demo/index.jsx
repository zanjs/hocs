/* eslint-disable no-console */
import React from 'react';
import { compose, withState } from 'recompose';

import withLifecycle from '../src/';

const Demo = ({ isLoading }) => (
  <h1>{ isLoading ? 'Loading…' : 'Done' }</h1>
);

export default compose(
  withState('isLoading', 'setLoading', false),
  withLifecycle({
    onDidMount({ setLoading }) {
      setLoading(true, () => {
        setTimeout(() => setLoading(false), 2000);
      });
    },
    onWillUnmount() {
      console.log('bye');
    }
  })
)(Demo);
