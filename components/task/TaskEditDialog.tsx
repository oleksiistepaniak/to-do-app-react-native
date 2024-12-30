import { BaseDialog } from "@/components/common/BaseDialog";
import { T } from "@/constants/Text";
import { StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { ITask } from "@/types/types";
import { ThemedView } from "@/components/common/ThemedView";
import { useTask } from "@/contexts/TaskContext";
import { NotificationHelper } from "@/helpers/NotificationHelper";

interface ITaskEditDialogProps {
    task: ITask;
    open: boolean;
    onClose: () => void;
}

export const TaskEditDialog = (p: ITaskEditDialogProps) => {
    const [params, setParams] = useState<ITask>({
        id: p.task.id,
        status: p.task.status,
        title: p.task.title,
        description: p.task.description,
    });
    const { updateTask } = useTask();

    const handleClose = () => {
        setParams((prev) => ({ ...prev, title: p.task.title, description: p.task.description, status: p.task.status }));
        p.onClose();
    };

    const handleUpdateTask = () => {
        updateTask(p.task.id, params);
        p.onClose();
        NotificationHelper.displaySuccessMessage(T.notifications.task.updated);
    };

    return (
        <BaseDialog
            open={p.open}
            title={T.titles.edit_task_dialog}
            submitBtnLabel={T.common.update}
            cancelBtnLabel={T.common.close}
            description={T.descriptions.edit_task}
            onSubmit={handleUpdateTask}
            onClose={handleClose}
        >
            <ThemedView style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder={T.input_placeholders.task_title}
                    value={params.title}
                    onChangeText={(val) => setParams((prev) => ({ ...prev, title: val }))}
                />
                <TextInput
                    multiline
                    numberOfLines={10}
                    style={styles.textarea}
                    placeholder={T.input_placeholders.task_description}
                    value={params.description}
                    onChangeText={(val) => setParams((prev) => ({ ...prev, description: val }))}
                />
            </ThemedView>
        </BaseDialog>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        gap: 20,
        margin: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: "orange",
        borderRadius: 5,
        color: "white",
        paddingVertical: 4,
        paddingHorizontal: 10,
        height: 40,
    },
    textarea: {
        borderWidth: 1,
        borderColor: "orange",
        borderRadius: 5,
        color: "white",
        paddingVertical: 10,
        paddingHorizontal: 10,
        minHeight: 70,
    },
});
