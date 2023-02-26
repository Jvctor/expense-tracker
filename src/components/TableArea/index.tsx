import { Item } from '../../types/Item';
import * as Style from './style';

type Props = {
    list: Item[];
}

export const TableArea = ({ list }: Props) => {
    return(
   <Style.Table>
    <thead>
        <tr>
         <Style.TableHeadColumn width={150}>Data </Style.TableHeadColumn>
         <Style.TableHeadColumn width={130}>Categoria </Style.TableHeadColumn>
         <Style.TableHeadColumn>Título </Style.TableHeadColumn>
         <Style.TableHeadColumn width={150}>Valor </Style.TableHeadColumn>
        </tr>
    </thead>
    <tbody>
     {list.map((item, index) => (
        <tr key={index}>
         <td></td>
         <td></td>
         <td>{item.title}</td>
         <td></td>
        </tr>
     ))}
    </tbody>
   </Style.Table>
    );
}