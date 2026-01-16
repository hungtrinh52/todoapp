
import { useState } from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    Image,
    View,
    ScrollView
} from 'react-native';
import {useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';


import GradientBackground from '../components/ui/GradientBackground';
import AuthInput from '../components/auth/AuthInput';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigation = useNavigation();
    const { login } = useAuth();

    const handleLogin = () => {
        setError('');
        const result = login(email.toLowerCase().trim(), password);
        if (!result.success) {
            setError(result.error);
        }
    };
    const handleSignupNavigation = () => {
        navigation.navigate('SignUp');
    };
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
            <GradientBackground style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.title}>Welcome Back !</Text>

                <AuthInput
                    icon="person-outline"
                    placeholder="Username"
                    value={email}
                    onChangeText={setEmail}
                />

                <AuthInput
                    icon="lock-closed-outline"
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                {error ? <Text style={styles.error}>{error}</Text> : null}

                <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.googleBtn}>
                    <Image
                        source={require('../assets/google-icon-logo-svgrepo-com.png')}
                        style={styles.iconGG}
                        resizeMode="contain"
                    />
                    <Text style={styles.googleText}>Sign in with Google</Text>
                </TouchableOpacity>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity onPress={handleSignupNavigation}>
                        <Text style={styles.link}>
                            Sign up
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.bottomHeader}>
                    Join our new beta program to test
                    our new experimental feature
                </Text>
                </ScrollView>
            </GradientBackground>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingVertical: 0,
        justifyContent: 'flex-start',
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    title: {fontSize: 36, fontWeight: '900', color: '#000', textAlign: 'center', marginBottom: 50,  marginTop: 150, },
    loginBtn: {
        backgroundColor: '#000',
        paddingVertical: 16,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 20,
    },
    loginText: { color: '#fff', fontSize: 17,fontWeight:"900" },
    googleBtn: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingVertical: 16,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    iconGG :{
        width:28,
        height:28,
    },
    googleText: { color: '#000000', fontSize: 16, marginLeft: 10,fontWeight:"900" },
    footer: { color: '#fff', textAlign: 'center', marginTop: 40,flexDirection: 'row',
        justifyContent: 'center', alignItems: 'baseline'},
    footerText: {
        color: '#000000',
        fontSize: 16,
    },
    link: { color: '#000000', fontWeight: '900',textDecorationLine:'underline', fontSize: 16,  },
    bottomHeader:{
        fontWeight: '900',textDecorationLine:'underline', fontStyle:'italic',
        textAlign:'center',marginTop: 'auto',marginBottom:'auto',
        paddingBottom: Platform.OS === 'ios' ? 50 : 50,
    },
    error: { color: '#ff375b', textAlign: 'center', marginTop: 10 },
});