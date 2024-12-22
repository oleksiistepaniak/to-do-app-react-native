export enum ETaskStatus {
    CREATED = "created",
    IN_PROGRESS = "in_progress",
    COMPLETED = "completed",
}

export type TTaskStatus = keyof typeof ETaskStatus;

export interface ITask {
    readonly id: number;
    readonly title: string;
    readonly description: string;
    readonly status: TTaskStatus;
}

export type TCreateTaskParams = Omit<ITask, "id">;
