import React from 'react';
import { ThemeDecorator, I18nDecorator, LayoutDecorator } from './decorators';
import '@storybook/addon-console';

import ProvidersDecorator from './decorators/ProvidersDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'dark',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'Light' },
        { value: 'dark', icon: 'circle', title: 'Dark' },
        { value: 'side-by-side', icon: 'sidebar', title: 'Side by side' },
        { value: 'stacked', icon: 'bottombar', title: 'Stacked' },
      ],
    },
  },
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'pl', right: '🇵🇱', title: 'Polski' },
      ],
    },
  },
};

export const decorators = [ProvidersDecorator, LayoutDecorator, ThemeDecorator, I18nDecorator];
