import React from "react";
import { GAME_STATE_PLAYING } from "../Constants";

const Footer = ({onInitClick , onSuggestClick , gameState}) => {
  const renderBoutons = () => {
    if(gameState !== GAME_STATE_PLAYING){
      return <button onClick={onInitClick} className="btn btn-danger">New Game</button>
    }
    return <button onClick={onSuggestClick} gameState={gameState} className="btn btn-danger">Suggest</button>
  }
  return (
    <div className="panel footer">
      { renderBoutons() }
    </div>
  );
};

export default Footer;