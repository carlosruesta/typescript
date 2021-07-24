import {Imprimivel} from "./imprimivel.js";
import {Comparavel} from "./comparavel.js";

export interface ObjetoModelo<T> extends Imprimivel, Comparavel<T> {}
