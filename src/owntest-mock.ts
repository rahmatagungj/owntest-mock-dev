import { localStorage, LocalStorageInterface } from "./mock/localStorage";
import { fn } from "./mock/function";

let owntestMocks: any = {
    localStorage: (): LocalStorageInterface => localStorage(),
    fn: (callback?: Function): any => fn(callback),
}

// exporting the mock to be used in any test file
export default function owntestMock() {
    return owntestMocks
}

module.exports = owntestMocks;