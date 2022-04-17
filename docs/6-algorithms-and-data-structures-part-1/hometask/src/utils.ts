import { MAX } from "./config";

export default class Utills{
    randomizer(): number{
        return Math.floor((Math.random() * MAX) + 1);
    }
}