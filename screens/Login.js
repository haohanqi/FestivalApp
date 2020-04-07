import React from 'react'
import { View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { useState } from 'react'

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLoginPress() {
        const { navigation } = props;
        if (validateInfo()) {
            navigation.navigate('Home');
        }
    }

    function validateInfo() {
        if (email.trim().length === 0) {
            Alert.alert('Festival', 'Please enter email address.');
            return false;
        } else if (!validateEmail(email)) {
            Alert.alert('Festival', 'Please enter valid email address.');
            return false;
        } else if (password.trim().length === 0) {
            Alert.alert('Festival', 'Please enter password.');
            return false;
        } else if (password.length < 6) {
            Alert.alert('Festival', 'Password must contain at least 6 characters.');
            return false;
        } else {
            return true;
        }
    }

    function validateEmail(email) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(email) == false) {
            return false;
        }
        return true;
    }

    return (
        <SafeAreaView style={styles.safearea}>
            <View style={styles.container}>
                <Text style={styles.title}>Festival</Text>
                <TextInput
                    value={email}
                    placeholder={'Email'}
                    onChangeText={(email) => setEmail(email)}
                    style={styles.input}
                    autoCapitalize={'none'}
                />
                <TextInput
                    value={password}
                    placeholder={'Password'}
                    onChangeText={(password) => setPassword(password)}
                    style={styles.input}
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.loginBtn}
                    onPress={handleLoginPress}
                >
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        color: 'grey',
        alignSelf: 'center',
        marginBottom: 40
    },
    input: {
        height: 40,
        marginHorizontal: 20,
        marginBottom: 20,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 20
    },
    loginBtn: {
        height: 40,
        borderRadius: 5,
        marginHorizontal: 60,
        backgroundColor: 'grey',
        justifyContent: "center",
        alignItems: 'center'
    },
    loginText: {
        color: 'white'
    }
});

export default Login
