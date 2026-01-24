import {StyleSheet, View, Text, Image, Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native";


export default function Header ({user}) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <Text style ={styles.hello}>Hello {user?.name || "User"},</Text>
                <Text style = {styles.sub}>You have work today</Text>
            </View>
            <Pressable onPress={()=>navigation.navigate("Profile" ,{id:user.id})}>
                <Image source={require('../../assets/avt7.png')} style={styles.avatar}/>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    hello: { fontSize: 22, fontWeight: 'bold' },
    sub: { color: '#888' },
})