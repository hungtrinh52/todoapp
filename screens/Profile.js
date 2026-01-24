import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {useAuth} from "../context/AuthContext";

export default function Profile() {
    const navigation = useNavigation();
    const {user}=useAuth();
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> navigation.goBack()} style={styles.backBtn}>
                    <Ionicons name="chevron-back" size={22} color="#333" />
                </TouchableOpacity>

                <View style={styles.avatarWrapper}>
                    <Image
                       source={require('../assets/avt7.png')}
                        style={styles.avatar}
                    />
                    <TouchableOpacity style={styles.editAvatar}>
                        <Ionicons name="pencil" size={14} color="#fff" />
                    </TouchableOpacity>
                </View>

            </View>

            {/* Content */}
            <View style={styles.content}>
                <Text style={styles.label}>Email</Text>
                <View style={styles.inputBox}>
                    <TextInput
                        value={user.email}
                        editable={false}
                        style={styles.input}

                    />
                    <Ionicons name="pencil" size={16} color="#999" />
                </View>

                <Text style={styles.label}>Name</Text>
                <View style={styles.inputBox}>
                    <TextInput
                        value={user.name}
                        editable={false}
                        style={styles.input}
                    />
                    <Ionicons name="pencil" size={16} color="#999" />
                </View>

                <TouchableOpacity style={styles.logoutBtn}>
                    <Text style={styles.logoutText}>Log out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    header: {
        height: 260,
        backgroundColor: "#E8D9F6",
        alignItems: "center",
        justifyContent: "center",
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },

    backBtn: {
        position: "absolute",
        top: 50,
        left: 20,
    },

    avatarWrapper: {
        position: "relative",
    },

    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: "#ddd",
    },

    editAvatar: {
        position: "absolute",
        right: -4,
        bottom: -4,
        backgroundColor: "#6C5CE7",
        borderRadius: 14,
        padding: 6,
    },

    name: {
        marginTop: 12,
        fontSize: 18,
        fontWeight: "600",
        color: "#222",
    },

    content: {
        padding: 20,
    },

    label: {
        fontSize: 14,
        color: "#555",
        marginBottom: 6,
        marginTop: 16,
    },

    inputBox: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 12,
        paddingHorizontal: 12,
        height: 48,
    },

    input: {
        flex: 1,
        color: "#333",
    },

    logoutBtn: {
        marginTop: 40,
        backgroundColor: "#FF5A5F",
        height: 48,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },

    logoutText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});
