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
        backgroundColor: '#171717',
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
        color: 'white'
    },
    score: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white'
    },
    vs: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white'
    },
    datatextMatch: {
        textAlign: 'center',
        color: 'white'
    }
})

export default styles;