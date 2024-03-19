import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buttonbox: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
    },

    image: {
        width: 40,
        height: 40,
    },
    containerMatch: {
        backgroundColor: '#171742',
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
        justifyContent: 'space-between'

    },
    team: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    tablo: {
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    datatextMatch: {
        textAlign: 'center',
        color: 'white',
        opacity: 0.45,
    },
    datatextMatchLive: {
        textAlign: 'center',
        color: 'red',
        fontWeight: 'bold'
    },
    video: {
        flex: 1,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})

export default styles;