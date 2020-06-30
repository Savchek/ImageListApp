import 'react-native-gesture-handler'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import ImageList from './components/ImageList'
import SingleImage from './components/SingleImage'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ImageList"
          component={ImageList}
          options={{ title: 'Image List' }}
        />
        <Stack.Screen
          name="SingleImage"
          component={SingleImage}
          options={{ title: 'View Image' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
