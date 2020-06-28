import React from 'react';

// components
// organisms
import Form from '../components/organism/Form';

// molecules
import FormGroup from '../components/molecule/FormGroup';
import Box from '../components/molecule/Box';

//  atoms
import Label from '../components/atom/Label';
import Input from '../components/atom/Input';
import Content from '../components/atom/Content';

// helper
import Wrapper from '../utils/Wrapper/Wrapper';

// icon
import Zoom from '../utils/icons/Zoom';

export default {
  title: 'Input',
  component: Input,
};

export const Default = () => (
  <Wrapper style={{ width: '450px' }} hasMargin={false}>
    <Content>
      <Box>
        <Form>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input placeholder="Name" id="name" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input placeholder="Password" id="password" icon={<Zoom />} />
          </FormGroup>
        </Form>
      </Box>
    </Content>
  </Wrapper>
);
