import { useState } from 'react';
import * as Style from './App.styles';
import { Category } from './types/Category';
import {Item} from './types/Item';
import { categories } from './data/categories';
import { items } from './data/items';

const App = () => {
const [list, setList] = useState(items);


  return(
   <Style.Container>
    <Style.Header>
      <Style.HeaderText>
        Sistema Financeiro
      </Style.HeaderText>
    </Style.Header>
    <Style.Body>

   {/* Area de informações

   Aarea de inserção

   Tabela de itens */}

    </Style.Body>
   </Style.Container>
  );
}

export default App;