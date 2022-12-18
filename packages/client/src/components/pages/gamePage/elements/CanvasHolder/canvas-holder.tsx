import React, { useRef, useEffect } from 'react'

import { addPoint, addSegment, typeImage } from './imageSlice'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/store'

export const CanvasHolder = () => {
  const dispatch = useAppDispatch()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const image = useAppSelector(state => state.image) as typeImage

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
