import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TaskItem({ task }) {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <View style={styles.circle} />
                <Text
                    style={[
                        styles.text,
                        task.completed && { textDecorationLine: "line-through" }
                    ]}
                >
                    {task.title}
                </Text>
                <Text></Text>
            </View>

            <View style={styles.actions}>
                <Ionicons name="trash" size={18} color="red" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        borderRadius: 12,
    },
    left: { flexDirection: "row", alignItems: "center" },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#aaa",
        marginRight: 12,
    },
    text: { fontSize: 16 },
    actions: { flexDirection: "row" },
});
