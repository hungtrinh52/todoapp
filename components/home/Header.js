import {StyleSheet, View,Text,Image} from "react-native";


export default function Header ({user}) {
    return (
        <View style={styles.container}>
            <View>
                <Text style ={styles.hello}>Hello {user?.name || "User"},</Text>
                <Text style = {styles.sub}>You have work today</Text>
            </View>
            <Image source={require('../../assets/avt7.png')} style={styles.avatar}/>

        </View>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    hello: { fontSize: 22, fontWeight: 'bold' },
    sub: { color: '#888' },
})