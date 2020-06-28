import React from 'react'
import GlobalStyle from '../src/utils/Normalize/Normalize';
import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { render } from 'react-dom';
import colors from '../src/styles/settings/colors';


function loadStories() {
  const globalStyleEl =
    document.querySelector('#gen3-global-style') ||
    (() => {
      const el = document.createElement('div');
      el.id = 'gen3-global-style';
      document.head.append(el);
      return el;
    })();
  render(
    <>
      <GlobalStyle />
    </>
    , globalStyleEl);
}


const themes = [colors.dark, colors.light];
addDecorator(withThemesProvider(themes));

loadStories()
