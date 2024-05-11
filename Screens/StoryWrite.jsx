import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Ionicons} from "@expo/vector-icons"
import Feather from "@expo/vector-icons/Feather"

const StoryWrite = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [pointers, setPointers] = useState([]);
  const [images, setImages] = useState([]);

  const handleSave = () => {
    // Implement logic to save the story
    console.log("Story saved:", { title, content, pointers, images });
  };

  const toggleBold = () => setIsBold(!isBold);
  const toggleItalic = () => setIsItalic(!isItalic);
  const toggleUnderline = () => setIsUnderline(!isUnderline);

  const addPointer = () => {
    setPointers([...pointers, ""]);
  };

  const addImage = () => {
    setImages([...images, ""]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter title"
      />
      <Text style={styles.label}>Content</Text>
      <View style={styles.contentContainer}>
        <TextInput
          style={[
            styles.input,
            styles.multiline,
            isBold && styles.bold,
            isItalic && styles.italic,
            isUnderline && styles.underline,
          ]}
          value={content}
          onChangeText={setContent}
          placeholder="Write your story here"
          multiline
        />
        <View style={styles.formatButtons}>
          <TouchableOpacity
            style={[styles.formatButton, isBold && styles.active]}
            onPress={toggleBold}
          >
            <Text style={styles.buttonText}>B</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.formatButton, isItalic && styles.active]}
            onPress={toggleItalic}
          >
            <Text style={styles.buttonText}>I</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.formatButton, isUnderline && styles.active]}
            onPress={toggleUnderline}
          >
            <Text style={styles.buttonText}>U</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.formatButton} onPress={addPointer}>
            <Text style={styles.buttonText}>👉</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.formatButton} onPress={addImage}>
            <Text style={styles.buttonText}>🖼️</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.pointerImagesContainer}>
        {pointers.map((pointer, index) => (
          <View key={index} style={styles.pointerImageItem}>
            <TextInput
              style={[styles.input, styles.pointerInput]}
              value={pointer}
              onChangeText={(text) => {
                const updatedPointers = [...pointers];
                updatedPointers[index] = text;
                setPointers(updatedPointers);
              }}
              placeholder="Add pointer"
            />
          </View>
        ))}
        {images.map((imageUri, index) => (
          <View key={index} style={styles.pointerImageItem}>
            <Image source={{ uri: imageUri }} style={styles.image} />
            <TouchableOpacity
              style={styles.removeImage}
              onPress={() => {
                const updatedImages = [...images];
                updatedImages.splice(index, 1);
                setImages(updatedImages);
              }}
            >
              <Text style={styles.removeImageText}>❌</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Story</Text>
      </TouchableOpacity>

      {/* Bottom tab bar */}
      <LinearGradient
        style={styles.bottomNavContainer}
        colors={["white", "skyblue"]}
      >
        <TouchableOpacity style={styles.bottomNavItem}>
          <Ionicons name="home-outline" size={24} color="#000" />
          <Text style={styles.bottomNavText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Ionicons name="search-outline" size={24} color="#000" />
          <Text style={styles.bottomNavText}>Search</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  multiline: {
    minHeight: 150, // Adjust as needed
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
  underline: {
    textDecorationLine: "underline",
  },
  contentContainer: {
    position: "relative",
  },
  formatButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingVertical: 5,
  },
  formatButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  active: {
    backgroundColor: "#0056b3",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  pointerImagesContainer: {
    maxHeight: 200,
    marginBottom: 20,
  },
  pointerImageItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  pointerInput: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    marginRight: 10,
  },
  removeImage: {
    backgroundColor: "#ff6347",
    padding: 5,
    borderRadius: 5,
  },
  removeImageText: {
    color: "#fff",
    fontSize: 14,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
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

export default StoryWrite;
