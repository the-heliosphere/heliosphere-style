import React from 'react';
// import { Button } from '@storybook/react/demo';

import Button from '../components/atom/Button';
import Wrapper from '../utils/Wrapper/Wrapper';

export default {
  title: 'Button',
  component: Button,
};

export const Types = () => (
  <Wrapper>
    <Button>Default</Button>
    <Button bg="primary">Primary</Button>
    <Button bg="success">Success</Button>
    <Button bg="warning">Warning</Button>
    <Button bg="danger">Danger</Button>
    <Button bg="danger" disabled>Disabled</Button>
  </Wrapper>
);

export const Sizes = () => (
  <Wrapper>
    <Button size={1} bg="primary">Button</Button>
    <Button size={2} bg="success">Button</Button>
    <Button size={3} bg="danger">Button</Button>
    <Button size={4} bg="warning">Button</Button>
  </Wrapper>
);

export const FullWidth = () => (
  <Wrapper>
    <Button size={2} bg="primary" fullWidth>Button</Button>
  </Wrapper>
);
