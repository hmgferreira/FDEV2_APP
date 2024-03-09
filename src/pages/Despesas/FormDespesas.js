import { useState} from 'react'
import { TextInput, View, StyleSheet, Text, Button } from 'react-native'
import Api from '../../config/Api';
export default function FormDespesas() {

    const [titulo, setTitulo] = useState('');
    const [valor, setValor] = useState('');

    async function salvar() {

        await Api.post('despesas', {
            titulo: titulo,
            valor: valor
        });
        alert("Despesa criada com sucesso!");
    }

    return (
        <View style={styles.container}>

            <Text>Título</Text>
            <TextInput 
                style={styles.input}
                onChangeText={value => setTitulo(value)}
            />
            <Text>Valor</Text>
            <TextInput 
                style={styles.input}
                onChangeText={value => setValor(value)}
            />

            <Button
                title='Salvar'
                onPress={() => salvar()}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10
    },  
    input: {
        padding: 10,
        borderColor: '#CCC',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 10
    }
});
