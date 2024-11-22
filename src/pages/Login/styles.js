import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF', // Fundo branco
    },
    UserImage: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '',
        width: 180,
        height: 170,
        borderRadius: 100,
        marginBottom: 54,
        marginTop: 60,
    },
    Image: {
        width: 108,
        height: 108,
    },
    form: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputEmail: {
        backgroundColor: '#FFF',
        width: 250,
        height: 35,
        borderRadius: 5,
        padding: 5,       
        borderWidth: 1, // Adicionado borda preta
        borderColor: '#000', // Cor preta
    },
    inputPassword: {
        backgroundColor: '#FFF',
        marginTop: 13,
        width: 250,
        height: 35,
        borderRadius: 5,
        padding: 5,
        borderWidth: 1, // Adicionado borda preta
        borderColor: '#000', // Cor preta
    },
    buttonForm: {
        backgroundColor: '#FFA500', // Botão laranja
        width: 100,
        height: 30,
        borderRadius: 5,
        marginTop: 13,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1, 
         
    },
    textButton: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    ButtonCreate: {
           backgroundColor: '#FFA500',
            marginTop: 20,
            width: 210,
            height: 30,
            borderRadius: 10,
            padding: 5,
            borderWidth: 1, 
            borderColor: '#000', 
            color: '#FFF',
            fontWeight: 'bold',      
}


})
