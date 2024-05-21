import { useMutation } from "@tanstack/react-query";
import { UpdateSelection} from "@/services/fetch";

export const useUpdateSelection = () => {
    return useMutation({
        mutationFn: UpdateSelection
    });

}
