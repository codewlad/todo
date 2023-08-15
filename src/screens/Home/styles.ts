import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        height: 173,
        backgroundColor: '#0D0D0D',
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    content: {
        padding: 24,
        paddingTop: 70,
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    todoLogo: {
        width: 120,
        marginBottom: 44,
    },
    newTask: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 32,
    },
    input: {
        flex: 1,
        height: 54,
        backgroundColor: '#262626',
        borderRadius: 6,
        borderColor: '#0D0D0D',
        borderWidth: 1,
        color: '#F2F2F2',
        padding: 16,
        fontSize: 16,
        marginRight: 8,
    },
    button: {
        width: 52,
        height: 52,
        borderRadius: 5,
        backgroundColor: '#0045CC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonPlus: {
        width: 25,
        height: 25,
    },
    tasks: {
        flex: 1,
        width: '100%',
    },
    tasksInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 21,
    },
    tasksTypes: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textCreated: {
        color: '#0084FF',
        fontSize: 14,
        fontWeight: '700',
        marginRight: 8,
    },
    textCompleted: {
        color: '#CC6200',
        fontSize: 14,
        fontWeight: '700',
        marginRight: 8,
    },
    tasksCounter: {
        borderRadius: 999,
        backgroundColor: '#333',
        padding: 2,
        paddingLeft: 8,
        paddingRight: 8,
        minWidth: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTasksCounter: {
        color: '#D9D9D9',
        fontSize: 14,
        fontWeight: '700',
    },
    listEmptyText: {
        color: '#808080',
        fontSize: 14,
        textAlign: 'center',
    },
    listEmptyTextBold: {
        color: '#808080',
        fontSize: 14,
        fontWeight: '700',
        textAlign: 'center',
    },
    listEmpty: {
        padding: 48,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#333'
    },
    imgClipboard: {
        width: 56,
        height: 56,
        marginBottom: 16,
    },
});