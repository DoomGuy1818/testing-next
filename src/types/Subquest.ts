export type Subquest = {
  id: string;
  task_id: string;
  is_done: boolean;
  reward: number;
};
export interface CreateSubquest extends Omit<Subquest, "id"> {}
