import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export const obake1Atom = atom({
  key: "obake1Atom",
  default: false,
});

export const obake2Atom = atom({
  key: "obake2Atom",
  default: true,
});

export const obake3Atom = atom({
  key: "obake3Atom",
  default: true,
});

export const timeAtom = atom({
  key: "timeAtom",
  default: new Date(),
});
