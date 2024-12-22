import {createContext, ReactNode, useContext, useState} from "react";
import {ITask, TCreateTaskParams} from "@/types/types";

interface TaskContextType {
    tasks: ITask[];
    createTask: (params: TCreateTaskParams) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({children}: { children: ReactNode }) => {
    const [nextId, setNextId] = useState<number>(0);
    const [tasks, setTasks] = useState<ITask[]>([]);

    function createTask(params: TCreateTaskParams): void {
        const task: ITask = {
            id: nextId,
            ...params,
        };
        setTasks(prev => prev.concat([task]));
        setNextId(prev => prev + 1);
    }

    return (
        <TaskContext.Provider value={{tasks, createTask}}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTask = (): TaskContextType => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTask must be used within a TaskProvider");
    }
    return context;
};