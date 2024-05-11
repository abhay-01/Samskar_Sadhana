import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function MediaDetails() {
  const [paused, setPaused] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <ImageBackground
      source={require("../assets/graphics/Read.jpg")}
      style={styles.image}
    ></ImageBackground>
    <Text style={styles.description}>
    Description about the genre Lorem ipsum dolor sit amet, consectetur
    adipiscing elit.
    </Text>
    </View>
      <Button
        icon={
          <Icon
            name={paused ? 'play' : 'pause'}
            size={15}
            color="white"
          />
        }
        title={paused ? ' Play' : ' Pause'}
        onPress={() => setPaused(!paused)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "black",
    lineHeight: 24,
  },
});

export default MediaDetails;