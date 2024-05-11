import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import image1 from "./../assets/graphics/Read.jpg";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { BookOpenIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const ReadStory = () => {
  const navigation = useNavigation();
  const cards = Array(8)
    .fill()
    .map((_, i) => {
      switch (i) {
        case 0:
          return { imageUri: image1, qualities: ["Kindness"] };
        case 1:
          return { imageUri: image1, qualities: ["Resilience"] };
        case 2:
          return { imageUri: image1, qualities: ["Creativity"] };
        case 3:
          return { imageUri: image1, qualities: ["Honesty"] };
        case 4:
          return { imageUri: image1, qualities: ["Gratitude"] };
        case 5:
          return { imageUri: image1, qualities: ["Patience"] };

        default:
          return { imageUri: image1, qualities: [] };
      }
    });

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text
        style={{
          fontSize: 29,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 70,
          color: "rgba(0,0,0.4,0.8)",
        }}
      >
        Diverse Genres to Learn!
      </Text>

      <LinearGradient colors={["white", "#00BFFF"]} style={styles.gradient}>
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator = {false}>
          {cards.map((card, index) => (
            <View key={index} style={styles.card}>
              <TouchableOpacity
                onPress={() => navigation.navigate("CourseDetails")}
              >
                <Image source={card.imageUri} style={styles.image} />
              </TouchableOpacity>
              <View style={styles.qualitiesContainer}>
                {card.qualities.map((quality, idx) => (
                  <Text key={idx} style={styles.quality}>
                    {quality}
                  </Text>
                ))}
              </View>
            </View>
          ))}
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
      </LinearGradient>
    </View>
  );
};

export default ReadStory;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    marginTop: 120,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 5,
  },
  card: {
    width: "48%", // for 2 cards per row
    marginBottom: 10, // adjust as needed
  },
  image: {
    width: "100%",
    height: 150, // adjust as needed
    borderRadius: 10,
    resizeMode: "cover",
  },
  qualitiesContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quality: {
    fontSize: 14,
    color: "#555",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 55,
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
