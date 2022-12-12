import { StyleSheet, Platform } from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center'
    },
    screenContainer: {
        flex: 1,
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 20,
        paddingRight: 10,
        // alignItems: 'center',
        // justifyContent: 'flex-start'
        backgroundColor: Colors.accent
    },
    buttonText: {
        color: Colors.buttonText,
        fontSize: 20,
        textAlign: 'center'
    },
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 40 : 0
    },
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 15,
        paddingHorizontal: 35,
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 10
      },
});