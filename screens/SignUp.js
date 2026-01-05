
import { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    Image,
    ScrollView
} from 'react-native';
import { useNavigation} from '@react-navigation/native';

import GradientBackground from '../components/ui/GradientBackground';
import AuthInput from '../components/auth/AuthInput';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

        const handleSignInNavigation = () => {
        navigation.navigate('SignIn');
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
            <GradientBackground style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.title}>Sign Up!</Text>
                    <View>
                        <Image
                            source={require('../assets/avt7.png')}
                            style={{ width: 150, height: 150, }}
                        />
                    </View>
                <AuthInput
                    icon="person-outline"
                    placeholder="FullName"
                    value={email}
                    onChangeText={setEmail}

                />

                <AuthInput
                    icon="person-outline"
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}

                />

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

                <TouchableOpacity style={styles.signUpBtn} >
                    <Text style={styles.signUpText}>Sign Up</Text>
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
                        Already have an account?
                    </Text>
                    <TouchableOpacity onPress={handleSignInNavigation}>
                        <Text style={styles.link}>
                            Sign in
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
    signUpBtn: {
        backgroundColor: '#000',
        paddingVertical: 16,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 20,
    },
    signUpText: { color: '#fff', fontSize: 17, fontStyle:"italic",fontWeight:"900" },
    googleBtn: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    iconGG :{
        width:24,
        height:24,
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
    avatar: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    }
});