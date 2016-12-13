import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Project extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to my React Native App!
        </Text>
        <Text style={styles.instructions}>
          Hello World
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet } from 'react-native'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'skyblue',
    borderWidth: 2,
    borderColor: 'steelblue',
    borderRadius: 20,
  },
})

AppRegistry.registerComponent('App', () => App)

import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet } from 'react-native'

import Toggle from './Toggle'

class App extends Component {

  state = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }

  render() {
    const {flexDirection, alignItems, justifyContent} = this.state
    const layoutStyle = {flexDirection, justifyContent, alignItems}

    const primaryAxis = flexDirection === 'row' ? 'Horizontal' : 'Vertical'
    const secondaryAxis = flexDirection === 'row' ? 'Vertical' : 'Horizontal'

    return (
      <View style={styles.container}>
        <Toggle
          label={'Primary axis (flexDirection)'}
          value={flexDirection}
          options={['row', 'column']}
          onChange={(option) => this.setState({flexDirection: option})}
        />
        <Toggle
          label={primaryAxis + ' distribution (justifyContent)'}
          value={justifyContent}
          options={['flex-start', 'center', 'flex-end', 'space-around', 'space-between']}
          onChange={(option) => this.setState({justifyContent: option})}
        />
        <Toggle
          label={secondaryAxis + ' alignment (alignItems)'}
          value={alignItems}
          options={['flex-start', 'center', 'flex-end', 'stretch']}
          onChange={(option) => this.setState({alignItems: option})}
        />
        <View style={[styles.layout, layoutStyle]}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  box: {
    padding: 25,
    backgroundColor: 'steelblue',
    margin: 5,
  },
})

AppRegistry.registerComponent('App', () => App)
