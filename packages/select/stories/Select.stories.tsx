import React from 'react';
import {Divider, Select as ChakraSelect} from '@chakra-ui/react';
import { Container } from '@chakra-ui/layout';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select, SelectButton } from '../src';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Select',
  decorators: [
    (story: Function) => (
      <Container maxWidth="400px" mt="40px">
        {story()}
      </Container>
    ),
  ],
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => (
  <>
    <ChakraSelect {...args}>
      <option value="hello">Hello</option>
      <option value="chello">Chello</option>
      <option value="konichiwa">Konichiwa</option>
    </ChakraSelect>
    <Divider my={5} />
    <Select>
      <SelectButton>Hola</SelectButton>
    </Select>
  </>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
