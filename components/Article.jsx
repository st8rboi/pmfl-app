import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ArticleItem = ({ title, lead, img_url }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: img_url }} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.lead}>{lead}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        elevation: 2,
        marginTop: 10,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 8,
        borderRadius: 4
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8
    },
    lead: {
        fontSize: 16
    }
});

export default ArticleItem;
