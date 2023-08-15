'use client'

import { useState } from 'react';
import Cell from './cell'

const board = [...Array(9)]

export default function Board() {
  
  const [size, setSize] = useState(9)

  return (
    <div className="flex flex-row justify-center items-center">
      { 
        board.map( (rKey, cIndex) => {
          return (
            <div key={cIndex}>
                {
                  board.map( (cKey, rIndex) => {
                    return (
                      <div className="" key={rIndex + cIndex}>
                        <Cell key={rIndex} row={rIndex} col={cIndex}/>
                      </div>
                    ) 
                  })
                }
            </div>
            )
          })
        
      }
    </div>
  )
}

function checkDuplicates(cells, index){
  indicesToCheck = Array(20).fill(null);
  /* I need to check the row, the column and the remaining 4 cells of the 3x3 grid*/

  /* first for-loop for the row*/
  for(let r = index % 9; r < index; r++){ // Left side
    indicesToCheck.push(r)
  }
  for(let r = index + 1; r < index % 9 + 9; r++){ // Right side
    indicesToCheck.push(r)
  }

   /* then for-loop for the column*/
  for (let r = index; r < 81; r+=9){
    indicesToCheck.push(r)
  }
  for (let r = index % 9; r < index; r+=9){
    indicesToCheck.push(r)
  }

  // Find the top left index, for a given 3x3 square
  var pos = index;
  pos = index - index%3;
  our_row = Math.floor(pos / 9)
  pos = pos - 9 * (our_row % 3)

  /* then for-loop for the remaining 4 cells of the 3x3 grid*/
  for (let r = pos; r < pos + 2; r++){
    for (let v = r; v < r + 19; v+=9){
        indicesToCheck.push(v)
    }
  }

  for (var i of indicesToCheck){
    if (i != index){
      if (cells[i] == cells[index]){
        // there's a duplicate!
        return True;
      }
    }
  }
}
