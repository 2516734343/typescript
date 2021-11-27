import { render } from "@testing-library/react";
import React from "react";
import { ChessType, GameType } from "../Type/Chess";
import { Border } from "./Border";
import { GameStatus } from "./GameStatus";
import './ChessComp.css';

interface IState {
  chessList: Array<ChessType>;
  nextChess: ChessType.red | ChessType.black;
  gameStatus: GameType,
}
export class Game extends React.Component<{},IState> {
  state: IState = {
    chessList: [],
    nextChess: ChessType.black,
    gameStatus: GameType.gameing,
  }
  componentDidMount() {
    this.init();
  }
  init = () => {
    const arr = [];
    for (let index = 0; index < 9; index++) {
      arr.push(ChessType.none)
      
    }
    this.setState({
      chessList: [...arr],
      nextChess: ChessType.black,
      gameStatus: GameType.gameing,
    })
  }
  handleClick = (index: number) => {
    const chessArr = [...this.state.chessList];
    if (this.state.gameStatus !== GameType.gameing) {
      return;
    }
    if (chessArr[index] !== ChessType.none) { // 已经有棋子的不能再点击
      return;
    }
    chessArr[index] = this.state.nextChess;
    this.setState(preState => {
      return {
        chessList: [...chessArr],
        nextChess: preState.nextChess === ChessType.red ? ChessType.black : ChessType.red,
        gameStatus: this.getGameStatus(chessArr, index)
      }
    })
  }
  getGameStatus(chessArr: Array<ChessType>, index: number): GameType {
    let horMin: number = Math.floor(index / 3) * 3;
    let verMin: number = index % 3;
    // 一方获胜
    if ((chessArr[horMin] === chessArr[horMin + 1] && chessArr[horMin] === chessArr[horMin + 2])
      || (chessArr[verMin] === chessArr[verMin + 3] && chessArr[verMin] === chessArr[verMin + 6])
      || (chessArr[0] === chessArr[4] && chessArr[0] === chessArr[8] && chessArr[2] !== ChessType.none)
    || (chessArr[2] === chessArr[4] && chessArr[2] === chessArr[6] && chessArr[2] !== ChessType.none)) {
      if (this.state.nextChess === ChessType.red) {
        return GameType.redWin
      }
      if (this.state.nextChess === ChessType.black) {
        return GameType.blackWin
      }
    }
    // 平局
    if (!chessArr.includes(ChessType.none)) {
      return GameType.equal
    }
    
    // 游戏进行中
    return GameType.gameing
  }
    render(): React.ReactNode {
      return <div className="gameWrapper">
        <GameStatus gameStatus={this.state.gameStatus} nextChess={ this.state.nextChess}/>
        <Border chessList={this.state.chessList}
                width={'50px'}
                borderHeight={'150px'}
          onClick={this.handleClick}
          borderWidth={'150px'} />
        <div style={{marginTop: '20px'}}>
          <button onClick={this.init}>重新开始</button>
        </div>
      </div>
    }
}