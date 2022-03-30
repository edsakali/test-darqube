import { atom } from "recoil";
import {recoilPersist} from "recoil-persist";

const {persistAtom} = recoilPersist()

export const searchState = atom<string>({
    key: 'search',
    default: ''
})

export const bookmarksState = atom<Array<number>>({
    key: 'bookmarks',
    default: [],
    effects_UNSTABLE: [persistAtom]
})