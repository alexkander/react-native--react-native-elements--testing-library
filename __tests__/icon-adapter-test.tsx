import 'react-native';
import React from 'react';
import {IconAdapter} from '../icon-adapter';
import {render} from '@testing-library/react-native';

it('renders correctly', () => {
  render(<IconAdapter name="send" />);
});
