import {Task} from "@/contexts/taskContext";
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {T} from "@/constants/Text";
import {StyleSheet} from "react-native";
import {TTaskStatus} from "@/app/(tabs)/create";

interface ITaskListItemProps {
    task: Task;
}

export const TaskListItem = (p: ITaskListItemProps) => {

    return (
        <ThemedView style={styles.container}>
            <ThemedText>
                {T.identifier}: {p.task.id}
            </ThemedText>
            <ThemedText>
                {T.title}: {p.task.title}
            </ThemedText>
            <ThemedText>
                {T.description}: {p.task.description}
            </ThemedText>
            <ThemedText>
                {T.status}: {resolveStatus(p.task.status)}
            </ThemedText>
        </ThemedView>
    )
}

function resolveStatus(value: TTaskStatus): string {
    if (value === "CREATED")
        return "Створено";
    if (value === "IN_PROGRESS")
        return "В процесі";
    return "Завершено";
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 10,
        padding: 10,
        borderStyle: "solid",
        borderCurve: "circular",
        borderColor: "orange",
        borderRadius: 10,
        borderWidth: 1,
    }
})