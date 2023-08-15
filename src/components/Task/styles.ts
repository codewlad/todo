import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        padding: 12,
        backgroundColor: '#262626',
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 8,
        marginBottom: 8,
    },
    trash: {
        width: 25,
        height: 25,
    },
    checkbox: {
        flex: 1,
        paddingRight: 30,
    },
});