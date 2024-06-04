export type Subquest = {
  id: string;
  is_done: boolean;
  reward: number;
  task_id: string;
};
export interface CreateSubquest extends Omit<Subquest, "id"> {}
