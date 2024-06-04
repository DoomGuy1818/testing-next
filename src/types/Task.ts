export type Task = {
  id: string;
  description: string;
  name: string;
};

export interface CreateTask extends Omit<Task, "id"> {}
