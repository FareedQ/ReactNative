'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  } from 'react-native';

export default class hello extends Component<{}> {
	render() {
		return (
			<View style={styles.container}>
			<Text >
        		Hello World
        	</Text>
        	</View>
        );
	}
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
})