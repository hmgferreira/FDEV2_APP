import { Button, Text, View, StyleSheet, TextInput } from 'react-native'

export default function LoginScreen(props) {
    
    function navegarHome() {
        props.navigation.navigate('Home', { id: '155' })
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.caixa}>
                    <Text>Login</Text> 
                    <TextInput style={styles.input} />

                    <Text>Password</Text> 
                    <TextInput style={styles.input} />

                    <Button 
                        title='Acessar'
                        color="pink"
                        onPress={() => navegarHome()}
                    /> 
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center"
    },
    caixa: {
        backgroundColor: "white",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: '90%'
    },
    input: {
        borderColor: '#CCC',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    }
});