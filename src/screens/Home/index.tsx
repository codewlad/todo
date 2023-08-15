import React, { useState } from "react";
import { View, Image, TextInput, TouchableOpacity, Text, FlatList, Alert } from "react-native";
import { Task } from '../../components/Task';
import { styles } from './styles';

export function Home() {

    const [taskDescription, setTaskDescription] = useState('');
    const [tasks, setTasks] = useState<{ description: string; completed: boolean }[]>([]);

    function handleTaskAdd() {
        if (!taskDescription || taskDescription.trim().length === 0) {
            return Alert.alert('Ei, está trapaceando!', 'Ficar sem fazer nada não é uma opção!');
        };

        if (tasks.some(task => task.description === taskDescription)) {
            return Alert.alert('Tarefa já existe', 'Já existe uma tarefa igual a essa.');
        };

        setTasks(prevState => [...prevState, { description: taskDescription, completed: false }]);
        setTaskDescription('');
    };

    function handleTaskRemove(taskDescription: string) {
        Alert.alert('Remover', 'Remover a tarefa?', [
            {
                text: 'Sim',
                onPress: () => setTasks(prevState => prevState.filter(task => task.description !== taskDescription))
            },
            {
                text: 'Não',
                style: 'cancel'
            },
        ]);
    };

    function handleToggleTask(taskDescription: string, isChecked: boolean) {
        setTasks(prevState =>
            prevState.map(task =>
                task.description === taskDescription ? { ...task, completed: isChecked } : task
            )
        );
    };

    function countCompletedTasks() {
        const quantityCompleted = tasks.reduce((count, task) => count + (task.completed ? 1 : 0), 0);
        return quantityCompleted;
    };

    function countUncompletedTasks() {
        const quantityUncompleted = tasks.reduce((count, task) => count + (task.completed ? 0 : 1), 0);
        return quantityUncompleted;
    };

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}></View>

            <View style={styles.bottomContainer}></View>

            <View style={styles.content}>
                <Image
                    style={styles.todoLogo}
                    source={require('../../assets/logo-todo.png')}
                />

                <View style={styles.newTask}>
                    <TextInput
                        style={styles.input}
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor='#808080'
                        onChangeText={setTaskDescription}
                        value={taskDescription}
                    />

                    <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
                        <Image
                            style={styles.buttonPlus}
                            source={require('../../assets/plus.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.tasks}>
                    <View style={styles.tasksInfo}>
                        <View style={styles.tasksTypes}>
                            <Text style={styles.textCreated}>
                                Criadas
                            </Text>
                            <View style={styles.tasksCounter}>
                                <Text style={styles.textTasksCounter}>{countUncompletedTasks()}</Text>
                            </View>
                        </View>

                        <View style={styles.tasksTypes}>
                            <Text style={styles.textCompleted}>
                                Concluídas
                            </Text>
                            <View style={styles.tasksCounter}>
                                <Text style={styles.textTasksCounter}>{countCompletedTasks()}</Text>
                            </View>
                        </View>
                    </View>

                    <FlatList
                        data={tasks}
                        keyExtractor={item => item.description}
                        renderItem={({ item }) => (
                            <Task
                                key={item.description}
                                taskDescription={item.description}
                                completed={item.completed}
                                onToggle={(isChecked) => handleToggleTask(item.description, isChecked)}
                                onRemove={() => handleTaskRemove(item.description)}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={() => (
                            <View style={styles.listEmpty}>
                                <Image
                                    style={styles.imgClipboard}
                                    source={require('../../assets/clipboard.png')}
                                />
                                <Text style={styles.listEmptyTextBold}>
                                    Você ainda não tem tarefas cadastradas
                                </Text>
                                <Text style={styles.listEmptyText}>
                                    Crie tarefas e organize seus itens a fazer
                                </Text>
                            </View>
                        )}
                    />
                </View>
            </View>
        </View>
    )
}