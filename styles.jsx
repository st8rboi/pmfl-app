import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buttonbox: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10
    },

    image: {
        width: 40,
        height: 40,
    },
    containerMatch: {
        backgroundColor: '#FFF',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        flexDirection: "column",
        borderRadius: 12,
        padding: 15,
    },
    cardMatch: {
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
    datatextMatch: {
        textAlign: 'center'
    }
})

export default styles;