import { Item } from "../types/Item";

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];
    let [year, month] = date.split('-');

    for(let i in list){
      if(
        list[i].date.getFullYear() === parseInt(year) &&//saber o ano específico do item
        (list[i].date.getMonth() + 1 === parseInt(month)) //saber o dia específico do item
      ){
           newList.push(list[i]); //Verificações vão rodar todos os itens da lista e no final vão retornar os intens com o mesmo ano e o mesmo mês
      }
    }

    return newList;
}