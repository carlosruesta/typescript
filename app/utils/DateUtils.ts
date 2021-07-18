import {DiasDaSemana} from "../enums/dias-da-semana.js";

export class DateUtils {

    public static ehDiaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO
            && data.getDay() < DiasDaSemana.SABADO;
    }
}
