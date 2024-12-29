import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { T } from "@/constants/Text";
import { Button, StyleSheet } from "react-native";
import { ITask, TTaskStatus } from "@/types/types";
import { useState } from "react";
import { TaskEditDialog } from "@/components/task/TaskEditDialog";
import { useTask } from "@/contexts/TaskContext";
import { NotificationHelper } from "@/helpers/NotificationHelper";

interface ITaskListItemProps {
    task: ITask;
}

export const TaskListItem = (p: ITaskListItemProps) => {
    const { updateTask } = useTask();
    const [isEditDialogOpen, setIsEditDialogOpen] = useState<boolean>(false);

    const handleOpenEditDialog = () => {
        setIsEditDialogOpen(true);
    };

    const handleStartTask = () => {
        if (p.task.status === "IN_PROGRESS") {
            NotificationHelper.displayErrorMessage(T.notifications.task.already_started);
            return;
        }
        updateTask(p.task.id, { status: "IN_PROGRESS" });
        NotificationHelper.displaySuccessMessage(T.notifications.task.started);
    };

    const handleCompleteTask = () => {
        if (p.task.status === "COMPLETED") {
            NotificationHelper.displayErrorMessage(T.notifications.task.already_completed);
            return;
        }
        updateTask(p.task.id, { status: "COMPLETED" });
        NotificationHelper.displaySuccessMessage(T.notifications.task.completed);
    };

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
            <ThemedView style={styles.buttonContainer}>
                <Button color="darkgreen" title={T.common.edit} onPress={handleOpenEditDialog} />
                <Button color="darkred" title={"Видалити"} />
                <Button color="darkorange" title={"Виконувати"} onPress={handleStartTask} />
                <Button color="darkgray" title={"Завершити"} onPress={handleCompleteTask} />
            </ThemedView>
            <TaskEditDialog
                task={p.task}
                open={isEditDialogOpen}
                onClose={() => {
                    setIsEditDialogOpen(false);
                }}
            />
        </ThemedView>
    );
};

function resolveStatus(value: TTaskStatus): string {
    if (value === "CREATED") return "Створено";
    if (value === "IN_PROGRESS") return "В процесі";
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
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
    },
});
