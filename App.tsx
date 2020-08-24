import React, { useState } from 'react';
import Routes from './src/routes';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
    'custom-font': require('./src/assets/fonts/wv.ttf'),
    'custom-font-two': require('./src/assets/fonts/Montserrat-Thin.ttf'),
    'custom-font-three': require('./src/assets/fonts/Comfortaa-VariableFont_wght.ttf'),
    'custom-font-four': require('./src/assets/fonts/MAXWELL_BOLD.ttf'),
    'montserrat-italic': require('./src/assets/fonts/Montserrat-MediumItalic.ttf')
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} />
    )
  }
  return (
    <Routes />
  );
}

