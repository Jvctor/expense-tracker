import { useState, useEffect } from 'react';
import * as Style from './App.styles';
import { Category } from './types/Category';
import {Item} from './types/Item';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth } from './helpers/dateFilter';
import { filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';


  // Lógica: Ao adicionar um item ele vai para o estado de listaGeral(setList)
  // 2: Filtrar lista para pegar o mes atual, a mesma coisa ao mudar de mês
  // Sendo assim vamos monitorar list para quando houver uma modificação nele e currentMonth para quando modificar o mês atual

const App = () => {
const [list, setList] = useState(items);
const [filteredList, setFilteredList] = useState<Item[]>([]); //Array de itens vazios 
const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

useEffect (() => {
  setFilteredList( filterListByMonth (list, currentMonth));
}, [list, currentMonth])

  return(
   <Style.Container>
    <Style.Header>
      <Style.HeaderText>
        Sistema Financeiro
      </Style.HeaderText>
    </Style.Header>
    <Style.Body>

   {/* Area de informações

   Aarea de inserção*/}

   < TableArea list={filteredList}/>

    </Style.Body>
   </Style.Container>
  );
}

export default App;