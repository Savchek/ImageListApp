import React, { useEffect } from 'react'
import { StyleSheet, View, Animated, Easing } from 'react-native'

const LoadingBar = () => {

	const animationValue = new Animated.Value(0)

	useEffect(() => {
		Animated.loop(
			Animated.timing(
				animationValue,
				{
					toValue: 1,
					duration: 3000,
					easing: Easing.linear,
					useNativeDriver: true,
				}
			)
		).start()
	}, [animationValue])

	const spin = animationValue.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '360deg'],
	})

	return (
		<View style={styles.centeredContent}>
			<Animated.View style={{ transform: [{ rotate: spin }], ...styles.loadingBar }} />
		</View>
	)
}

const styles = StyleSheet.create({
	centeredContent: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	loadingBar: {
		width: 200,
		height: 200,
		borderColor: '#404040',
		borderRadius: 100,
		borderWidth: 10,
		borderTopWidth: 0,
		borderLeftWidth: 0,

	},
})

export default LoadingBar
