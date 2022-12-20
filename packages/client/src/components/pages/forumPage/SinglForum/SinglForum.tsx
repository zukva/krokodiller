import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../../../hooks/store'
import { SectionTemp } from '../SectionTemp'

const SinglForum = () => {
  const { id } = useParams()
  const forum = useAppSelector(state => state.forum)
  const singleItem = forum.filter((f: any) => +f.id === Number(id))[0]
  return (
    <SectionTemp>
      <>
        <h3>{singleItem.title}</h3>
        <p>{singleItem.body}</p>
        <form className="">
          <input type="text" />
          <textarea></textarea>
          <button>answer</button>
        </form>
      </>
    </SectionTemp>
  )
}

export default SinglForum
