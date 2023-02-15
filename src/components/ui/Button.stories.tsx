import { StoryObj, Meta } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'ui/Button',
  component: Button,
}

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {};