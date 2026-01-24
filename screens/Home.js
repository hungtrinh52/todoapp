import {FlatList, TouchableOpacity, View,StyleSheet,Text} from "react-native";
import {useTodo} from "../context/ToDoContext";
import {useAuth} from "../context/AuthContext";
import Header from "../components/home/Header";
import React from "react";
import TaskItem from "../components/home/TaskItem";
import SummaryCards from "../components/home/SummaryCard";
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";


export default function Home(){
    const navigation = useNavigation();
    const {user} = useAuth();
    const { todos } = useTodo();

    return (
        <SafeAreaView style={{flex:1}}>
            <View style ={styles.container}>
                <Header user = {user}/>
                <SummaryCards tasks = {todos}/>
                <Text style ={styles.sectionTitle}> Today's Tasks'</Text>
                <View style={{flex :2}}>
                    <FlatList
                        data = {todos}
                        keyExtractor = {(item)=> item.id}
                        renderItem = {({item}) => <TaskItem task = {item}/>}
                        contentContainerStyle={{paddingBottom:120}}
                    />
                </View>

                <TouchableOpacity onPress={()=>navigation.navigate("TaskForm")} >
                    <Text style={styles.addBtn}>Create new task</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
    hello: { fontSize: 22, fontWeight: 'bold' },
    sub: { color: '#888' },
    avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#ddd' },

    stats: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 20 },
    statBox: { width: '48%', padding: 15, borderRadius: 12 },
    statCount: { fontSize: 18, fontWeight: 'bold' },

    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },

    taskItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#eee',
        marginBottom: 10,
    },
    circle: {
        width: 20, height: 20, borderRadius: 10,
        borderWidth: 2, borderColor: '#aaa', marginRight: 15,
    },
    checked: { backgroundColor: '#7C4DFF' },
    taskText: { fontSize: 16 },
    time: { fontSize: 12, color: '#999' },

    addBtn: {
        backgroundColor: '#7C4DFF',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 10,
    },
});
