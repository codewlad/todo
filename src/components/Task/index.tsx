import React from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { View, Pressable, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type Props = {
    taskDescription: string;
    completed: boolean;
    onToggle: (isChecked: boolean) => void;
    onRemove: () => void;
}

export function Task({ taskDescription, completed, onToggle, onRemove }: Props) {

    return (
        <View style={styles.container}>
            <BouncyCheckbox
                style={styles.checkbox}
                size={25}
                fillColor={completed ? '#F19F00' : '#0084FF'}
                TouchableComponent={Pressable}
                disableText={false}
                unfillColor="transparent"
                text={taskDescription}
                isChecked={completed}
                onPress={(isChecked) => onToggle(isChecked)}
            />

            <TouchableOpacity onPress={onRemove}>
                <Image
                    style={styles.trash}
                    source={require('../../assets/trash.png')}
                />
            </TouchableOpacity>
        </View>
    )
}