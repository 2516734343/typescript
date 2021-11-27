import { ChessType, GameType } from "../Type/Chess"
import './ChessComp.css';

interface IProps {
  gameStatus: GameType,
  nextChess:ChessType
}

export const GameStatus: React.FC<IProps> = (props) => {
  let content: React.ReactElement;
  if (props.gameStatus !== GameType.gameing) { // 游戏结束
    if (props.gameStatus === GameType.redWin) {
      content = <div className="operation redChess">红方胜利</div>
    } else if (props.gameStatus === GameType.blackWin) {
      content = <div className="operation blackChess">黑方胜利</div>
    } else {
      content = <div className="operation equal">平局</div>
    }
  } else { // 游戏未结束
    if (props.nextChess === ChessType.red) {
      content = <div className="operation redChess">红子下</div>
    } else {
      content = <div className="operation blackChess">黑子下</div>
    }
  }
  return <div>
    {content}
  </div>
}