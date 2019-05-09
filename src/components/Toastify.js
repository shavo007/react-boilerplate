import React from 'react';
import { Toast, KIND } from 'baseui/toast';

export default () => (
  <React.Fragment>
    <Toast autoHideDuration={1000} kind={KIND.positive}>
      Positive notification
    </Toast>
  </React.Fragment>
);
