import { View, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function GradientBackground({ children }) {
    return (
        <LinearGradient
            colors={['#FFBA08', '#9D4EDD', '#9D4EDD','#C8B6FF','#EE9B00','#FFB6B6','#FFFFFF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
        >
           {/* <Image
                source={require('../../../assets/logo-white.png')}
                style={styles.logo}
                resizeMode="contain"
            />*/}


            <View style={styles.content}>
                {children}
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    logo: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 50,
        left: 20,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
});