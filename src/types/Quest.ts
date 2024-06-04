export type Quest = {
  id: string;
  user_id: string;
  is_done: boolean;
  subquest_id: string;
};

export interface CreateQuest extends Omit<Quest, "id"> {}
