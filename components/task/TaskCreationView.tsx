import ParallaxScrollView from "@/components/common/ParallaxScrollView";
import { Button, StyleSheet, TextInput } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useMemo, useState } from "react";
import { ThemedText } from "@/components/common/ThemedText";
import { ThemedView } from "@/components/common/ThemedView";
import { T } from "@/constants/Text";
import { NotificationHelper } from "@/helpers/NotificationHelper";
import { TCreateTaskParams } from "@/types/types";
import { useTask } from "@/contexts/TaskContext";

export const TaskCreationView = () => {
    const [params, setParams] = useState<TCreateTaskParams>({
        status: "CREATED",
        title: "",
        description: "",
    });
    const { createTask } = useTask();

    const isSubmitButtonDisabled = useMemo(() => {
        return !Object.values(params).every(Boolean);
    }, [params]);

    const handleCreateTask = () => {
        createTask(params);
        setParams((prev) => ({ ...prev, title: "", description: "" }));
        NotificationHelper.displaySuccessMessage(T.notifications.task.created);
    };

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
            headerImage={<IconSymbol size={220} color="orange" name="arrow.down.doc" style={styles.headerImage} />}
        >
            <ThemedView style={styles.block_title}>
                <ThemedText type="subtitle" style={{ textAlign: "center" }}>
                    {T.titles.create_task}
                </ThemedText>
            </ThemedView>
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
            <Button disabled={isSubmitButtonDisabled} color="orange" title={T.common.create} onPress={handleCreateTask} />
        </ParallaxScrollView>
    );
};

const styles = StyleSheet.create({
    headerImage: {
        color: "#808080",
        bottom: 0,
        left: 90,
        position: "absolute",
    },
    block_title: {
        display: "flex",
        alignItems: "center",
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
