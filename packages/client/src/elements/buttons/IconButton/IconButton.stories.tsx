import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import LockIcon from '../../../icons/LockIcon';
import IconButton from '.';
import { IconButtonProps } from './ButtonIcon.types';

export default {
  title: 'Elements/buttons/Icon Button',
  component: IconButton,
  argTypes: {
    color: {
      control: 'color',
    },
  },
} as Meta;

const Template: Story<IconButtonProps> = (args) => (
  <IconButton {...args}>
    <LockIcon />
  </IconButton>
);

export const Default = Template.bind({});
Default.args = {
  color: '#FFB400',
  disabled: false,
};
