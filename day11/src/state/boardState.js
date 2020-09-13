import {getBoards} from "../apis/boardApi";
import {atom} from "recoil";

export const boardState = atom({
  key: "boardState",
  default: getBoards()
})