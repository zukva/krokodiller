import React, { useRef, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../../../../store/rootReducer'
import { addPoint, addSegment, typeImage } from './imageSlice'

export const CanvasHolder = () => {
  const dispatch = useDispatch()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const image = useSelector((state: RootState) => state.image) as typeImage

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d')
    ctx?.beginPath()
  }, [])

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d')
    const sgt = image[image.length - 1]

    if (sgt) {
      const { x, y } = sgt[sgt.length - 1]
      if (sgt.length > 1) {
        ctx?.lineTo(x, y)
      } else {
        ctx?.moveTo(x, y)
      }
      ctx?.stroke()
    }
  }, [image])

  const moveHandler = (e: MouseEvent): void => {
    const x = e.offsetX
    const y = e.offsetY
    dispatch(addPoint({ x, y }))
  }

  const mouseDown = (e: React.MouseEvent) => {
    const {
      nativeEvent: { offsetX: x, offsetY: y },
    } = e
    dispatch(addSegment({ x, y }))
    canvasRef.current?.addEventListener('mousemove', moveHandler)
    canvasRef.current?.addEventListener('mouseup', () => {
      canvasRef.current?.removeEventListener('mousemove', moveHandler)
    })
  }

  return (
    <div className="game">
      <canvas
        ref={canvasRef}
        width="300px"
        height="300px"
        onMouseDown={mouseDown}></canvas>
    </div>
  )
}
