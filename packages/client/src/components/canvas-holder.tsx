import React, { useRef, useEffect, createContext, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addSegment, addPoint } from '../actions/image'

export const CanvasHolder = () => {
  const dispatch = useDispatch()
  const canvasRef = useRef(null)
  const image = useSelector(state => state.image)

  const [coord, setCoord] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const ctx = canvasRef?.current?.getContext('2d')
    ctx.beginPath()
  }, [])

  useEffect(() => {
    const ctx = canvasRef?.current?.getContext('2d')
    const sgt = image[image.length - 1]

    if (sgt) {
      const { x, y } = sgt[sgt.length - 1]
      if (sgt.length > 1) {
        ctx.lineTo(x, y)
      } else {
        ctx.moveTo(x, y)
      }
      ctx.stroke()
    }
  }, [image])

  const moveHandler = e => {
    const x = e.offsetX
    const y = e.offsetY
    setCoord({ x, y })
    dispatch(addPoint({ x, y }))
  }

  const mouseDown = e => {
    const {
      nativeEvent: { offsetX: x, offsetY: y },
    } = e
    dispatch(addSegment({ x, y }))
    canvasRef?.current?.addEventListener('mousemove', moveHandler)
    canvasRef?.current?.addEventListener('mouseup', () => {
      canvasRef?.current?.removeEventListener('mousemove', moveHandler)
    })
  }

  return (
    <div>
      <div>{JSON.stringify(coord)}</div>
      <canvas
        ref={canvasRef}
        width="300px"
        height="300px"
        onMouseDown={mouseDown}></canvas>
    </div>
  )
}
