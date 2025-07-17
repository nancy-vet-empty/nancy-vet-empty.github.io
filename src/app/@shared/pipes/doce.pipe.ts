import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name        : 'docePipe',
  standalone  : true
})
export class DosePipe implements PipeTransform {

  public transform(value: any, ...args: any[]) {

    if(value == 'mg_kg'             ) return 'mg/kg';
    if(value == 'µg_kg'             ) return 'µg/kg';
    if(value == 'g_kg'              ) return 'g/kg';
    if(value == 'g'                 ) return 'g';
    if(value == 'mg'                ) return 'mg';
    if(value == 'ml'                ) return 'ml';
    if(value == 'ml_kg'             ) return 'ml/kg';
    if(value == 'ml_4_kg'           ) return 'ml/4 kg';
    if(value == 'ml_4.5_kg'         ) return 'ml/4.5 kg';
    if(value == 'ml_5_kg'           ) return 'ml/5 kg';
    if(value == 'ml_10_kg'          ) return 'ml/10 kg';
    if(value == 'tabl'              ) return 'tabl';
    if(value == 'mg_tabl'           ) return 'mg/tabl';
    if(value == 'µg_tabl'           ) return 'µg/tabl';
    if(value == 'tabl_5_kg'         ) return 'tabl/5 kg';
    if(value == 'tabl_2.5_kg'       ) return 'tabl/2.5 kg';
    if(value == 'tabl_10_kg'        ) return 'tabl/10 kg';
    if(value == 'tabl_15_kg'        ) return 'tabl/15 kg';
    if(value == 'tabl_25_kg'        ) return 'tabl/25 kg';
    if(value == 'tabl_40_kg'        ) return 'tabl/40 kg';
    if(value == 'implant'           ) return 'имплант';
    if(value == 'gtt'               ) return 'капки';
    if(value == 'gtt_2_kg'          ) return 'drops/2 kg';
    if(value == 'cm'                ) return 'cm';
    if(value == 'ml'                ) return 'ml';
    if(value == 'caps'              ) return 'caps';
    if(value == 'caps_5_kg'         ) return 'caps/5 kg';
    if(value == 'caps_10_kg'        ) return 'caps/10 kg';
    if(value == 'sprays'            ) return 'sprays';
    if(value == 'ampula'            ) return 'ампула';
    if(value == 'paketche'          ) return 'пакетче';
    if(value == 'tbsp'              ) return 'с. л.';
    if(value == 'tsp'               ) return 'ч. л.';
    if(value == 'tsp_5_kg'          ) return 'ч. л. на 5 кг';
    if(value == 'MU_kg'             ) return 'MU/kg';
    if(value == 'малко количество'  ) return 'малко количество';
    if(value == 'няколко капки'     ) return 'няколко капки';

    return '';
  }
}
