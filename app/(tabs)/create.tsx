import ParallaxScrollView from "@/components/ParallaxScrollView";
import {Button, StyleSheet, TextInput} from "react-native";
import {IconSymbol} from "@/components/ui/IconSymbol";
import {useState} from "react";
import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";
import {Picker} from '@react-native-picker/picker';
import {TCreateTaskParams, useTask} from "@/contexts/taskContext";

export enum ETaskStatus {
    CREATED = "created",
    IN_PROGRESS = "in_progress",
    COMPLETED = "completed",
}

export type TTaskStatus = keyof typeof ETaskStatus;

export default function CreateTask() {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [selectedStatus, setSelectedStatus] = useState<TTaskStatus>("CREATED");
    const {tasks, createTask} = useTask();

    const handleCreateTask = () => {
        const params: TCreateTaskParams = {
            title,
            description,
            status: selectedStatus,
        };
        createTask(params);
    }

    return (
        <ParallaxScrollView
            headerBackgroundColor={{light: '#D0D0D0', dark: '#353636'}}
            headerImage={
                <IconSymbol
                    size={310}
                    color="#808080"
                    name="chevron.left.forwardslash.chevron.right"
                    style={styles.headerImage}
                />
            }>
            <ThemedView style={styles.text}>
                <ThemedText type="defaultSemiBold">
                    Title: {title}
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.text}>
                <ThemedText type="defaultSemiBold">
                    Description: {description}
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.text}>
                <ThemedText type="defaultSemiBold">
                    Status: {selectedStatus}
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.text}>
                <ThemedText type="defaultSemiBold">
                    All number of tasks: {tasks.length}
                </ThemedText>
            </ThemedView>
            <TextInput
                placeholder="task title"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                placeholder="description title"
                value={description}
                onChangeText={setDescription}
            />
            <Picker
                selectedValue={selectedStatus}
                onValueChange={itemValue => setSelectedStatus(itemValue)}
            >
                {Object.keys(ETaskStatus).map((key, index) => {
                    return <Picker.Item
                        key={`status-${index}`}
                        label={key}
                        value={key}
                    />
                })}
            </Picker>
            <Button onPress={handleCreateTask} title="CREATE TASK">

            </Button>
        </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    input: {
        outline: "1px solid red",
    },
    text: {
        outline: "1px solid red",
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});
