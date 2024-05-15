import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import { BookOpenIcon } from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={["white", "#00BFFF"]} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <View style={styles.topLeft}>
          <Ionicons name="person-outline" size={24} color="#000" />
          <View style={styles.greetingContainer}>
            <Text style={styles.greeting}>Hello</Text>
            <Text style={styles.name}>Jason Tom</Text>
          </View>
        </View>

        <View style={styles.topRight}>
          <Ionicons name="notifications-outline" size={24} color="#000" />
        </View>

        {/* Search box */}
        <View style={styles.searchBox}>
          <TextInput placeholder="Search for tutors" style={styles.input} />
        </View>

        {/* Popular genres */}
        <View style={styles.genresContainer}>
          <Text style={styles.title}>Popular Genres</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* Replace with your own genre components */}
            <View style={styles.genreCard}>
              <TouchableOpacity
                onPress={() => navigation.navigate("CourseDetails")}
              >
                <Image source={require("../assets/graphics/2.png")} />
              </TouchableOpacity>
              <Text>Genre 1</Text>
            </View>
            <View style={styles.genreCard}>
              <TouchableOpacity
                onPress={() => navigation.navigate("CourseDetails")}
              >
                <Image source={require("../assets/graphics/2.png")} />
              </TouchableOpacity>
              <Text>Genre 2</Text>
            </View>
            <View style={styles.genreCard}>
              <TouchableOpacity
                onPress={() => navigation.navigate("CourseDetails")}
              >
                <Image source={require("../assets/graphics/2.png")} />
              </TouchableOpacity>
              <Text>Genre 1</Text>
            </View>
            <View style={styles.genreCard}>
              <TouchableOpacity
                onPress={() => navigation.navigate("CourseDetails")}
              >
                <Image source={require("../assets/graphics/2.png")} />
              </TouchableOpacity>
              <Text>Genre 1</Text>
            </View>
            <View style={styles.genreCard}>
              <TouchableOpacity
                onPress={() => navigation.navigate("CourseDetails")}
              >
                <Image source={require("../assets/graphics/2.png")} />
              </TouchableOpacity>
              <Text>Genre 1</Text>
            </View>
            <View style={styles.genreCard}>
              <TouchableOpacity
                onPress={() => navigation.navigate("CourseDetails")}
              >
                <Image source={require("../assets/graphics/2.png")} />
              </TouchableOpacity>
              <Text>Genre 2</Text>
            </View>
          </ScrollView>
        </View>
        <ScrollView vertical showsVerticalScrollIndicator={false}>
          {/* Famous tutors */}
          <View style={styles.tutorsContainer}>
            <Text style={styles.title}>Famous Tutors</Text>
            <ScrollView>
              {/* Replace with your own tutor components */}
              <View style={styles.tutorCard}>
                <Text>Tutor 1</Text>
              </View>
              <View style={styles.tutorCard}>
                <Text>Tutor 2</Text>
              </View>
            </ScrollView>
          </View>

          <View
            style={{
              height: 200,
            }}
          >
            <Text style={styles.title}>Characterictics</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {/* Replace with your own genre components */}
              <View style={styles.genreCard}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("CourseDetails")}
                >
                  <Image
                    source={require("../assets/graphics/main1.png")}
                    style={{
                      width: 150,
                      height: 150,
                      resizeMode: "cover",
                      borderRadius: 10,
                    }}
                  />
                </TouchableOpacity>
                <Text>Genre 1</Text>
              </View>
              <View style={styles.genreCard}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("CourseDetails")}
                >
                  <Image source={require("../assets/graphics/main2.png")} />
                </TouchableOpacity>
                <Text>Genre 2</Text>
              </View>
              <View style={styles.genreCard}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("CourseDetails")}
                >
                  <Image source={require("../assets/graphics/main3.png")} />
                </TouchableOpacity>
                <Text>Genre 1</Text>
              </View>
              <View style={styles.genreCard}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("CourseDetails")}
                >
                  <Image source={require("../assets/graphics/mai4.png")} />
                </TouchableOpacity>
                <Text>Genre 1</Text>
              </View>
              <View style={styles.genreCard}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("CourseDetails")}
                >
                  <Image source={require("../assets/graphics/main5.png")} />
                </TouchableOpacity>
                <Text>Genre 1</Text>
              </View>
              <View style={styles.genreCard}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("CourseDetails")}
                >
                  <Image source={require("../assets/graphics/main6.png")} />
                </TouchableOpacity>
                <Text>Genre 2</Text>
              </View>
            </ScrollView>
          </View>
        </ScrollView>

        {/* Bottom tab bar */}
        <LinearGradient
          style={styles.bottomNavContainer}
          colors={["white", "skyblue"]}
        >
          <TouchableOpacity style={styles.bottomNavItem}>
            <Ionicons name="home-outline" size={24} color="#000" />
            <Text style={styles.bottomNavText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomNavItem}
            onPress={() => navigation.navigate("ReadStory")}
          >
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
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  topLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "absolute",
    top: 20,
    left: 20,
  },
  greetingContainer: {
    marginLeft: 10,
  },
  greeting: {
    fontSize: 18,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  topRight: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  searchBox: {
    marginTop: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    padding: 10,
    width: "100%",
  },
  genresContainer: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  genreCard: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    margin: 5,
    borderRadius: 10,
  },
  tutorsContainer: {
    marginTop: 20,
  },
  tutorCard: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    margin: 5,
    borderRadius: 10,
  },
  bottomNavContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#f0f0f0",
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

export default HomeScreen;
