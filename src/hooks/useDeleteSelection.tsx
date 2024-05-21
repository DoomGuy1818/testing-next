import { useMutation } from "@tanstack/react-query";
import { deleteSelection} from "@/services/fetch";

export const useDeleteSelection = () => {
    return useMutation({
        mutationFn: deleteSelection
    });

}