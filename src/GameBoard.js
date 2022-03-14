import React from 'react';

import GameCell from './GameCell.js';

const GameBoard = () => {
    
    const horizontal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q"];
    const vertical = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    
    let board = [];
    
    for (let i = 0; i < horizontal.length; i++) {
        for (let j = 0; j < vertical.length; j++) {
            board.push(<GameCell>{horizontal[i]} {vertical[j]}</GameCell>)
        }
    }
    
    return(
        <div>
            {board}
        </div>
        )
}

export default GameBoard;

