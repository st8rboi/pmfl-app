import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        borderRadius: 15,
        overflow: 'hidden',
    },

    image: {
        width: 40,
        height: 40,
    },
    container: {
        backgroundColor: '#FFF',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        flexDirection: "column",
        borderRadius: 12,
        padding: 15,
    },
    card: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    team: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    score: {
        fontSize: 24,
        textAlign: 'center'
    },
    vs: {
        fontSize: 18,
        textAlign: 'center'
    },
    datatext: {
        textAlign: 'center'
    }
})

export default styles;