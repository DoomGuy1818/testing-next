type Props = {
  title: string;
  text: string;
  coins: number;

  updateTask: Function;
  updateSubquest: Function;
  subquestId: string;
  taskId: string;
};
export const updateQuest = async ({
  coins,

  text,
  title,
  taskId,
  subquestId,
  updateSubquest,
  updateTask,
}: Props) => {
  if (title.length > 5 && text.length > 5 && coins !== 0) {
    try {
      const taskData = await updateTask({
        id: taskId,
        name: title,
        description: text,
      });
      console.log(taskData);
      const subquestData = await updateSubquest({
        id: subquestId,
        task_id: taskId,
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
