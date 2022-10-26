import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';



export default function App()
{
    return (
        <View style={[styles.container]}>

            <StatusBar style="auto" />
            <View style={styles.header}>
                <Image style={styles.image} source={{ uri: "https://avatars.githubusercontent.com/u/57280488?v=4" }} />
                <Text>Abanoub Samuel</Text>


            </View>

            <View style={styles.fans}>


                <View>
                    <Text>Photos</Text>
                    <Text>150</Text>
                </View>
                <View>
                    <Text>Following</Text>
                    <Text>350</Text>
                </View>
                <View>
                    <Text>Followers</Text>
                    <Text>3500</Text>

                </View>

            </View>

            <View style={styles.body}>

                <View style={{ flexDirection: 'row' }}>
                    <MaterialIcons name="email" size={24} color="black" />
                    <Text>abanoub@hotmail.com</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <FontAwesome5 name="mobile-alt" size={24} color="black" />
                    <Text>+201030202928</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name="group" size={24} color="black" />
                    <Text>Gorup</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name="comments" size={24} color="black" />
                    <Text>Comments</Text>
                </View>

                <Button title='Follow' />



            </View>
        </View>




    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 300,
        marginTop: 80
    },

    header: {
        alignItems: 'center',
        backgroundColor: '#44abab',
        width: '100%',
        flex: 2,
        position: 'relative'

    },
    body: {
        flex: 2,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',

        width: '100%',
    },
    fans: {
        width: 300,
        height: 100,
        // position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 17,
        // marginTop: 200,
        // marginButtom: 300,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        elevation: 5,
        top: -40

    }
});
