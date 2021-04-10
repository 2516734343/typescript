import React from 'react';
import { ChessType } from '../Type/Chess';
import { ChessComp } from './ChessComp';

interface IProps {
  // type: ChessType,
  width: string;
  borderWidth: string;
  borderHeight: string;
  chessList: Array<ChessType>;
  onClick?: (index: number) => void;
}

export const Border: React.FC<IProps> = (props) => {

  return <div style={{ width: props.borderWidth, height: props.borderHeight }} className="wrapper">
    {
      props.chessList.map((type, index) => {
        return <ChessComp width={props.width} type={type} key={index} onClick={() => {
          props.onClick && props.onClick(index);
        }} />
      })
    }
  </div>
}
