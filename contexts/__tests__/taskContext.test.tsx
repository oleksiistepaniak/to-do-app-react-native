import React from "react";
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

const TestComponent = () => {
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

describe("TaskContext.test", () => {
    it("should add a task when createTask is called", () => {
        const { getByText } = render(
            <TaskProvider>
                <TestComponent />
            </TaskProvider>,
        );

        expect(() => getByText("title")).toThrow();

        const addButton = getByText("ADD TASK");
        fireEvent.press(addButton);

        expect(getByText("title")).toBeTruthy();
    });
});
