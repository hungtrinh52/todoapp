import React, {useEffect, useState} from "react";
import {View, Text, TextInput, Pressable, StyleSheet, ScrollView, KeyboardAvoidingView,Platform} from "react-native";
import { useTodo } from "../context/ToDoContext";
import {useNavigation, useRoute} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Ionicons} from "@expo/vector-icons";


export default function TaskForm() {
    const navigation = useNavigation();
    const route = useRoute();
    const { id } = route.params || {};
    const { addTodo,updateTodo,getTodoById } = useTodo();
    const isUpdate = Boolean(id);
    const task = isUpdate ? getTodoById(id):null;

    const times = Array.from({ length: 25 }, (_, i) =>
        `${i.toString().padStart(2, "0")}:00`
    );

    const categories = ["Education", "Work", "Groceries"];  d
    const priorities = ["Low", "Medium", "High"];

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Work");
    const [date, setDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [priority, setPriority] = useState("Low");
    const [description, setDescription] = useState("");
    console.log("ROUTE PARAM ID:", id);
    console.log("TASK FOUND:", task);
    useEffect(()=>{
        if(task){
            setTitle(task.title);
            setCategory(task.category);
            setDate(task.date);
            setStartTime(task.startTime);
            setEndTime(task.endTime);
            setPriority(task.priority);
            setDescription(task.description);
        }
    },[task])
    const handleSubmit = () => {
        if (!title.trim()) return;
        const payload = {
            title,
            category,
            date,
            startTime,
            endTime,
            priority,
            description,
        };

        if (isUpdate) {
            updateTodo({
                ...payload,
                id: task.id,
                completed: task.completed,
            });
        } else {
            addTodo(payload);
        }
        navigation.goBack();
    };

    return (
        <SafeAreaView style ={{flex:1}} edges={["top","bottom"]}>
                <KeyboardAvoidingView style = {{flex:1}} behavior={Platform.OS === "ios" ? "padding" : undefined}>
                <View style={styles.container}>
                    <Pressable onPress={()=> navigation.goBack()}>
                        <Ionicons name="chevron-back" size ={26} color="#000"/>
                    </Pressable>

                    <Text style={styles.header}>{isUpdate?"Update Task" : "Create New Task"}</Text>

                    <ScrollView>
                        <Text style={styles.label}>Task Name</Text>
                        <TextInput
                            style={styles.input}
                            value={title}
                            onChangeText={setTitle}
                            placeholder="Call Ameer"
                        />

                        <Text style={styles.label}>Category</Text>
                        <View style={styles.row}>
                            {categories.map(c => (
                                <Pressable
                                    key={c}
                                    onPress={() => setCategory(c)}
                                    style={[
                                        styles.chip,
                                        category === c && styles.chipActive,
                                    ]}
                                >
                                    <Text>{c}</Text>
                                </Pressable>
                            ))}
                        </View>

                        <Text style={styles.label}>Date</Text>
                        <TextInput
                            style={styles.input}
                            value={date}
                            onChangeText={setDate}
                            placeholder="2025-01-16"
                        />

                        <Text style={styles.label}>Start Time</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {times.map(t => (
                                <Pressable
                                    key={t}
                                    onPress={() => setStartTime(t)}
                                    style={[
                                        styles.timeBox,
                                        startTime === t && styles.timeActive,
                                    ]}
                                >
                                    <Text>{t}</Text>
                                </Pressable>
                            ))}
                        </ScrollView>

                        <Text style={styles.label}>End Time</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {times.map(t => (
                                <Pressable
                                    key={t}
                                    onPress={() => setEndTime(t)}
                                    style={[
                                        styles.timeBox,
                                        endTime === t && styles.timeActive,
                                    ]}
                                >
                                    <Text>{t}</Text>
                                </Pressable>
                            ))}
                        </ScrollView>

                        <Text style={styles.label}>Priority</Text>
                        <View style={styles.row}>
                            {priorities.map(p => (
                                <Pressable
                                    key={p}
                                    onPress={() => setPriority(p)}
                                    style={[
                                        styles.chip,
                                        priority === p && styles.chipActive,
                                    ]}
                                >
                                    <Text>{p}</Text>
                                </Pressable>
                            ))}
                        </View>

                        <Text style={styles.label}>Description</Text>
                        <TextInput
                            style={[styles.input, { height: 80 }]}
                            value={description}
                            onChangeText={setDescription}
                            multiline
                        />
                    </ScrollView>

                    <Pressable style={styles.createBtn} onPress={handleSubmit}>
                        <Text style={styles.createText}>{isUpdate?"Update Task" : "Create Task"}</Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#fff" },
    header: { fontSize: 20, fontWeight: "700", marginBottom: 16 },
    label: { fontWeight: "600", marginTop: 16, marginBottom: 6 },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        padding: 12,
    },
    row: { flexDirection: "row", gap: 10 },
    chip: {
        padding: 12,
        borderRadius: 10,
        backgroundColor: "#eee",
    },
    chipActive: {
        backgroundColor: "#7C4DFF",
    },
    timeBox: {
        padding: 10,
        marginRight: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ccc",
    },
    timeActive: {
        backgroundColor: "#7C4DFF",
    },
    createBtn: {
        backgroundColor: "#7C4DFF",
        padding: 16,
        borderRadius: 14,
        alignItems: "center",
        marginTop: 12,
    },
    createText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 16,
    },
});
