---
title: Overview
---
Come soon

## Introduction

Highly customizable and theming components for React Native, A live demo is [here](https://blankapp.github.io/examples/UIExplorer/index.html).

### Features

- Lightly dependent, very little dependent
- Global theming, a variety of style selector implementation
- Rich base components
- Friendly API design

### Live Demo

<div style="width: 400px; height: 795px; transform: scale(0.75); transform-origin: 0 0;">
  <img style="width: 400px; height: 795px;" src="/assets/images/nexus5_black.png" />
  <iframe
    style="position: absolute; overflow: hidden; z-index: 1000; background-color: rgb(0, 0, 0); width: 360px; height: 640px; top: 67px; left: 20px;"
    src="/examples/UIExplorer/index.html"
    width="300px"
    height="597px"
    frameborder="0"
    scrolling="no"
  />
</div>

## Quick Start

### Prerequisites

Before starting make sure you have:

- Installed [Yarn](https://yarnpkg.com/)
- Installed [React Native](https://facebook.github.io/react-native/)

### Installation

Create a new React Native App:

```bash
$ react-native init HelloWorld
$ cd HelloWorld
```

Install @blankapp/ui and link in your project:

```bash
$ yarn add @blankapp/ui
```

Now, simply copy the following to your index.ios.js file of React Native project:

``` js
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Theme, {
  ThemeProvider,
  Screen,
  Text,
} from '@blankapp/ui';

const drakTheme = {
  'Screen': { backgroundColor: 'black' },
  'Text': { color: 'white' },
};

Theme.registerTheme('dark', drakTheme);

class Examples extends Component {
  render() {
    return (
      <ThemeProvider theme={'dark'}>
        <Screen>
          <Text>Hello World</Text>
        </Screen>
      </ThemeProvider>
    );
  }
}

AppRegistry.registerComponent('Examples', () => Examples);
```

### Run the new app

- Running on Android:

  ```
  $ react-native run-android
  $ adb reverse tcp:8081 tcp:8081   # required to ensure the Android app can
  ```

- Running on iOS:

  ```
  $ react-native run-ios
  ```
