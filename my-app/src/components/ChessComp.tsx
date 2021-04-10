import { ChessType } from "../Type/Chess"
import React from 'react';
import './ChessComp.css';

interface IProps {
  type: ChessType;
  width: string;
  onClick?: () => void;
}

export const ChessComp: React.FC<IProps> = (props) => {
  let content: React.ReactElement | null;
  if (props.type === ChessType.black) {
      content = <div className="item black"></div>
  } else if (props.type === ChessType.red) {
    content = <div className="item red" ></div>
  } else {
    content = <div ></div>
  }
  return <div className="chess-item" style={{width:props.width}} onClick={props.onClick}>
      {content}
  </div>
}