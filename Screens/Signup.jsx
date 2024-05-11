import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // TO DO: implement sign up logic here
    console.log('Sign up button pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.register}>Create a new Account</Text>
      <LinearGradient colors={['#007bff', '#ffffff']} style={styles.gradient}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Sign up</Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.formContainer}
        >
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              value={fullName}
              onChangeText={(text) => setFullName(text)}
            />
            <Ionicons name="person-outline" size={24} color="black" />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Email ID/Phone No."
              value={emailOrPhone}
              onChangeText={(text) => setEmailOrPhone(text)}
            />
            <Ionicons name="mail-outline" size={24} color="black" />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
            />
            <Ionicons name="lock-closed-outline" size={24} color="black" />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <View style={styles.footerContainer}>
          <Text style={styles.footer}>
            Already have an account? 
            
          </Text>
          <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
            <Text style = {{
              ...styles.footer,
              ...styles.link,
              marginLeft: 5
          
            }}>Sign in</Text>

            </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  register: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#007bff',
    textAlign: 'center',
    marginTop: 30,
  },
  gradient: {
    flex: 1,
    paddingTop: 100, 
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20, 
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginTop: 100,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  formContainer: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dddddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  input: {
    flex: 1,
    height: 40,
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight:'200'
  },
  footerContainer: {
    alignItems: 'center',
    marginBottom: 130,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footer: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  link: {
    textDecorationLine: 'underline',
    color:"#007bff"
  },
});

export default SignUpScreen;