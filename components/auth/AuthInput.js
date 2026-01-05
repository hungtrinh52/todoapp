// src/components/auth/AuthInput.js
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AuthInput({
                                      icon,
                                      placeholder,
                                      value,
                                      onChangeText,
                                      secureTextEntry = false,
                                  }) {
    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor="#333333"
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                    autoCapitalize="none"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { marginBottom: 16 },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(87,83,83,0.15)',
        borderRadius: 10,
        paddingHorizontal: 20,
        height: 56,

    },
    icon: { marginRight: 12 },
    input: { flex: 1, color: '#fff', fontSize: 16, },
});