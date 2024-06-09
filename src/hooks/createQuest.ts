import { usePostSubquestMutation, usePostTasksMutation } from "@/service/api";
type Props = {
  title: string;
  text: string;
  coins: number;
  postTasks: Function;
  postSubquest: Function;
};

export const createQuest = async ({
  title,
  text,
  coins,

  postTasks,
  postSubquest,
}: Props) => {
  if (title.length > 5 && text.length > 5 && coins !== 0) {
    try {
      const taskData = await postTasks({
        name: title,
        description: text,
      });
      console.log(taskData);
      const subquestData = await postSubquest({
        task_id: taskData.data!.id,
        is_done: false,
        reward: coins,
      });
      console.log(subquestData);
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("incorrect data");
  }
};
