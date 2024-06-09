import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
export const selectorWithTypes = useSelector.withTypes<RootState>();

export const dispatchWithTypes = useDispatch.withTypes<AppDispatch>();
