import {View,Text,StyleSheet} from "react-native";
import {useTodo} from "../../context/ToDoContext";

export default function SummaryCards ({}) {
    const {todos} =useTodo();
    const completed = todos.filter(t => t.completed).length;
    const pending = todos.filter(t => !t.completed).length;
    return (
        <View style={styles.row}>
            <Card title="Completed" count={completed} color="#c8f1e4" />
            <Card title="Pending" count={pending} color="#f6ddb5" />
        </View>
    );


    function Card({ title, count, color }) {
        return (
            <View style={[styles.card, { backgroundColor: color }]}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.count}>{count}</Text>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    row: { flexDirection: "row", justifyContent: "space-between" },
    card: {
        width: "48%",
        padding: 16,
        borderRadius: 16,
    },
    title: { fontSize: 14, fontWeight: "600" },
    count: { fontSize: 28, fontWeight: "900" },
});