import React from 'react';
import {Box, Divider, Heading, HStack, Select as ChakraSelect} from '@chakra-ui/react';
import { Container } from '@chakra-ui/layout';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select, SelectList, SelectItem } from '../src';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Select',
  decorators: [
    (story: Function) => (
      <Box mt="40px">
        {story()}
      </Box>
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
    <Heading as="h4" fontSize="1.5rem" mb={2}>Chakra Native Select</Heading>
    <HStack spacing={4}>
      <Box>
        <Heading as="h6" fontSize="1rem" mb={1}>xs</Heading>
        <ChakraSelect size="xs">
          <option value="hello">Hello</option>
          <option value="chello">Chello</option>
          <option value="konichiwa">Konichiwa</option>
        </ChakraSelect>
      </Box>
      <Box>
        <Heading as="h6" fontSize="1rem" mb={1}>sm</Heading>
        <ChakraSelect size="sm">
          <option value="hello">Hello</option>
          <option value="chello">Chello</option>
          <option value="konichiwa">Konichiwa</option>
        </ChakraSelect>
      </Box>
      <Box>
        <Heading as="h6" fontSize="1rem" mb={1}>md</Heading>
        <ChakraSelect size="md">
          <option value="hello">Hello</option>
          <option value="chello">Chello</option>
          <option value="konichiwa">Konichiwa</option>
        </ChakraSelect>
      </Box>
      <Box>
        <Heading as="h6" fontSize="1rem" mb={1}>lg</Heading>
        <ChakraSelect size="lg">
          <option value="hello">Hello</option>
          <option value="chello">Chello</option>
          <option value="konichiwa">Konichiwa</option>
        </ChakraSelect>
      </Box>
    </HStack>
    <Divider my={5} />
    <Heading as="h4" fontSize="1.5rem" mb={2}>Prétear Select</Heading>
    <HStack spacing={4}>
      <Box>
        <Heading as="h6" fontSize="1rem" mb={1}>xs</Heading>
        <Select size="xs">
          <SelectList>
            <SelectItem>Hello</SelectItem>
            <SelectItem>Hola</SelectItem>
            <SelectItem>Chello</SelectItem>
          </SelectList>
        </Select>
      </Box>
      <Box>
        <Heading as="h6" fontSize="1rem" mb={1}>sm</Heading>
        <Select size="sm">
          <SelectList>
            <SelectItem>Hello</SelectItem>
            <SelectItem>Hola</SelectItem>
            <SelectItem>Chello</SelectItem>
          </SelectList>
        </Select>
      </Box>
      <Box>
        <Heading as="h6" fontSize="1rem" mb={1}>md</Heading>
        <Select size="md">
          <SelectList>
            <SelectItem>Hello</SelectItem>
            <SelectItem>Hola</SelectItem>
            <SelectItem>Chello</SelectItem>
          </SelectList>
        </Select>
      </Box>
      <Box>
        <Heading as="h6" fontSize="1rem" mb={1}>lg</Heading>
        <Select size="lg">
          <SelectList>
            <SelectItem>Hello</SelectItem>
            <SelectItem>Hola</SelectItem>
            <SelectItem>Chello</SelectItem>
          </SelectList>
        </Select>
      </Box>
    </HStack>
  </>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
