'use client'

import React, { useState } from 'react';
import Cell from './cell'

const board = [...Array(9)]

export default function Board() {
  
  const [size, setSize] = useState(9)
  
  return (
    <div className="flex flex-row border border-1 border-slate-500">
      { 
        board.map( (rKey, cIndex) => {
          return (
            <div key={cIndex}>
                {
                  board.map( (cKey, rIndex) => {
                    return (
                      <div className="" key={rIndex + cIndex}>
                        <Cell key={rIndex} name={ (rIndex + 1 ) * (cIndex + 1) } />
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
