import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Feather from "@expo/vector-icons/Feather";
import { BookOpenIcon } from "react-native-heroicons/outline";
import Icon from 'react-native-vector-icons/FontAwesome';

const CourseDetails = () => {
  const navigation = useNavigation();
  const [isIconPressed, setIsIconPressed] = useState(false);
  return (
    <ImageBackground
      source={require("../assets/graphics/2.png")}
      style={styles.backgroundImage}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: "absolute",
          top: 40,
          left: 20,
          zIndex: 1,
        }}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
        <View style = {{
          flexDirection:"row",
          justifyContent:"space-between"
        }}>
        <Text style={styles.genreName}>Genre Name</Text>
        <TouchableOpacity onPress={()=> navigation.navigate("StoryGenerate")}>
        <Text style = {{
          marginTop:6,
          textDecorationLine:"underline",
          fontWeight:"bold"
        }}> AI GENERATED</Text>
        </TouchableOpacity>
        </View>
          <Text style={styles.rating}>4.5 ⭐ (120 minutes)</Text>
          <Text style={styles.description}>
            Description about the genre Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </Text>
        </View>
        <View style={styles.storiesContainer}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {[
              "Story Title 1",
              "Story Title 2",
              "Story Title 3",
              "Story Title 4",
              "Story Title 5",
              "Story Title 4",
              "Story Title 5",
            ].map((title, index) => (
              <TouchableOpacity onPress={() => console.log(`Title ${title} clicked`)}>
              <View style={styles.storyItem} key={index}>
                <Text style={styles.storyTitle}>{title}</Text>
                <Text style={styles.storyLength}>{20 + index * 5} mins</Text>
                <TouchableOpacity
              onPress={() => {
                setIsIconPressed(true);
                console.log(`Playing ${title}`);
                navigation.navigate('GenreDetails');
                setTimeout(() => setIsIconPressed(false), 200);
              }}
            >
                <Icon name="play-circle" size={30}  />
                </TouchableOpacity>
              </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
      {/* Bottom tab bar */}
      <LinearGradient
        style={styles.bottomNavContainer}
        colors={["white", "skyblue"]}
      >
        <TouchableOpacity style={styles.bottomNavItem}>
          <Ionicons name="home-outline" size={24} color="#000" />
          <Text style={styles.bottomNavText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem} onPress={()=> navigation.navigate("ReadStory")}>
            <BookOpenIcon name="book-open" size={24} color="#000" />
            <Text style={styles.bottomNavText}>Read</Text>
          </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomNavItem}
          onPress={() => navigation.navigate("StoryWrite")}
        >
          <Feather name="plus-circle" size={34} color="#000" />
          <Text style={styles.bottomNavText}>Write</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem}>
          <Ionicons name="person-outline" size={24} color="#000" />
          <Text style={styles.bottomNavText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem}>
          <Ionicons name="settings-outline" size={24} color="#000" />
          <Text style={styles.bottomNavText}>Settings</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    marginBottom: 320,
  },
  container: {
    padding: 20,
    backgroundColor: "white",
    marginTop: 650,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "100%",
  },
  detailsContainer: {
    marginBottom: 20,
  },
  genreName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  rating: {
    fontSize: 18,
    color: "black",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "black",
    lineHeight: 24,
  },
  storiesContainer: {
    flex: 1,
    overflow: "scroll",
  },
  storyItem: {
    padding: 10,
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  storyTitle: {
    fontSize: 16,
    color: "black",
  },
  storyLength: {
    fontSize: 16,
    color: "black",
  },
  scrollViewContent: {
    paddingBottom: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  bottomNavContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: -325,
    left: 0,
    right: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "red",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomNavItem: {
    alignItems: "center",
  },
  bottomNavText: {
    marginTop: 5,
    fontSize: 12,
  },
});

export default CourseDetails;
