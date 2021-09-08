import { atom, useRecoilState, useRecoilValue } from "recoil";

export const sideBarState = atom({
  key: "isHiddenState",
  default: true,
});

export const createNewBoardState = atom({
  key: "createNewBoardState",
  default: true,
});
