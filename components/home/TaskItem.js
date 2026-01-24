import {View, Text, StyleSheet, Pressable, Alert} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {useTodo} from "../../context/ToDoContext";
import {useNavigation} from "@react-navigation/native";

export default function TaskItem({ task }) {
    const {deleteTodo,toggleTodo} = useTodo();
    const navigation = useNavigation();
    const confirmDelete =() =>{
        Alert.alert(
            "Delete task",
            "Are you sure want to delete this task?",
            [
                {text: "Cancel", style:"cancel"},
                {
                    text:"Confirm",
                    style:"destructive",
                    onPress:()=> deleteTodo(task.id),
                }
            ]
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                    <Pressable onPress={()=> toggleTodo(task.id)}>
                        <View style={styles.circle}/>
                    </Pressable>
                <Text
                    style={[
                        styles.text,
                        task.completed && { textDecorationLine: "line-through" }
                    ]}
                >
                    {task.title}
                </Text>

            </View>

            <View style={styles.actions}>
                <Pressable onPress={()=>navigation.navigate("TaskForm",{id:task.id})}>
                    <Ionicons name="pencil" size={18} color ="blue"/>
                </Pressable>
                <Pressable onPress={confirmDelete}>
                    <Ionicons name="trash" size={18} color="red" />
                </Pressable>
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
