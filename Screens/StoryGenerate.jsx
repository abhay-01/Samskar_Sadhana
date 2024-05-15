import React, { useState, useEffect } from 'react';
import { StyleSheet, Text,View, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import axios from 'axios';
import { LinearGradient } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather"
import { BookOpenIcon } from "react-native-heroicons/outline"
import { useNavigation } from '@react-navigation/native';

const StoryGenerate = () => {
  const [storyData, setStoryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://story-zhwx.onrender.com/storyai', {
          email: 'ishu@gmail.com',
          genre: 'self descipline',
          language: 'english'
        });

        console.log("RESULT-->", response.data);
        setStoryData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView contentContainerStyle={styles.contentContainer}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Ionicons name = "arrow-back" size = {24} style  ={{
            marginRight:335
        }}

        />
        </TouchableOpacity>

        <View style = {{
            flexDirection:"row"
        }}>
          <Text style={styles.title}>Generated Story</Text>
          </View>
          <Text style={styles.storyText}>{storyData}</Text>
        </ScrollView>
      )}

      {/* Bottom tab bar */}
      <LinearGradient style={styles.bottomNavContainer} colors={['white', 'skyblue']}>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Ionicons name="home-outline" size={24} color="#000" />
          <Text style={styles.bottomNavText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate("ReadStory")}>
          <BookOpenIcon name="book-open" size={24} color="#000" />
          <Text style={styles.bottomNavText}>Read</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate("StoryWrite")}>
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
  );
};

export default StoryGenerate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Background color for the screen
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#f0f8ff', // Sky blue gradient background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Dark text color
    marginTop: 15,
    textDecorationLine: "underline",
  },
  storyText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666', // Medium text color
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  bottomNavItem: {
    alignItems: "center",
  },
  bottomNavText: {
    marginTop: 5,
    fontSize: 12,
  },
});
