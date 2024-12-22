import React, { useEffect } from "react";
// @ts-ignore
import { TaskProvider, useTask } from "@/contexts/TaskContext";
import { Button, View } from "react-native";
import { TCreateTaskParams } from "@/types/types";
import { fireEvent, render } from "@testing-library/react-native";
import { ThemedText } from "@/components/ThemedText";

const params: TCreateTaskParams = {
    title: "title",
    description: "description",
    status: "CREATED",
};

const updatedParams: Partial<TCreateTaskParams> = {
    title: "updated",
};

const TestCreateComponent = () => {
    const { tasks, createTask } = useTask();

    return (
        <View>
            <Button title="ADD TASK" onPress={() => createTask(params)} />
            {tasks.map((task) => (
                <ThemedText key={task.id}>{task.title}</ThemedText>
            ))}
        </View>
    );
};

const TestUpdateComponent = () => {
    const { tasks, createTask, updateTask } = useTask();

    useEffect(() => {
        createTask(params);
    }, []);

    return (
        <View>
            <Button title="UPDATE TASK" onPress={() => updateTask(tasks[0].id, updatedParams)} />
            {tasks.map((task) => (
                <ThemedText key={task.id}>{task.title}</ThemedText>
            ))}
        </View>
    );
};

describe("TaskContext.test", () => {
    it("should add a task when createTask is called", () => {
        const { getByText } = render(
            <TaskProvider>
                <TestCreateComponent />
            </TaskProvider>,
        );

        expect(() => getByText("title")).toThrow();

        const addButton = getByText("ADD TASK");
        fireEvent.press(addButton);

        expect(getByText("title")).toBeTruthy();
    });

    it("should update the task when updateTask is called", () => {
        const { getByText } = render(
            <TaskProvider>
                <TestUpdateComponent />
            </TaskProvider>,
        );

        expect(() => getByText("title")).toBeTruthy();

        const updateButton = getByText("UPDATE TASK");
        fireEvent.press(updateButton);

        expect(getByText("updated")).toBeTruthy();
    });
});
