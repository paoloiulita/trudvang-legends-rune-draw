import { useContext } from "react";
import { Character } from "../types";
import { AppContext } from "./context";

export const useCharacters = (): Character[] => {
	const state = useContext(AppContext);
	return state.characters;
};