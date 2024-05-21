import { useMutation } from "@tanstack/react-query";
import { CreateSelection} from "@/services/fetch";

export const useCreateSelection = () => {
    return useMutation({
        mutationFn: CreateSelection
    });

}