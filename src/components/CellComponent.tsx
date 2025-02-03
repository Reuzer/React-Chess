import { FC } from 'react';
import '../App.css';
import { Cell } from './models/Cell';

interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void
}

const CellComponent: FC<CellProps> = ({cell, selected, click}) => {
    return (
        <div 
        className={['cell', cell.color, selected ? "selected" : ""].join(' ')}
        onClick={() => click(cell)}
        style={{background: cell.avaliable && cell.figure ? 'green' : ''}}  //Инлайн стили - это плохо
        >
            {cell.avaliable && !cell.figure && <div className={'avaliable'}></div>}
            {cell.figure?.logo && <img src={cell.figure.logo}/>}
        </div>
    )
}

export default CellComponent;