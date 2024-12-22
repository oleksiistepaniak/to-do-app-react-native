import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { T } from "@/constants/Text";
import { Button, StyleSheet } from "react-native";
import { ITask, TTaskStatus } from "@/types/types";
import { useState } from "react";
import { BaseDialog } from "@/components/common/BaseDialog";

interface ITaskListItemProps {
    task: ITask;
}

export const TaskListItem = (p: ITaskListItemProps) => {
    const [isEditDialogOpen, setIsEditDialogOpen] = useState<boolean>(false);

    const handleOpenEditDialog = () => {
        setIsEditDialogOpen(true);
    }

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
            <Button color="darkgreen" title="Редагувати" onPress={handleOpenEditDialog}/>
            <BaseDialog open={isEditDialogOpen} title="Редагувати завдання" description="Тут ви можете редагувати Ваше завдання!" onClose={() => setIsEditDialogOpen(false)}/>
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
});
