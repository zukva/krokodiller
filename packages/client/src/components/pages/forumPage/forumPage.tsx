import React, { useEffect, useRef, useState } from 'react'

import './ForumPage.css'

import Modal from '../../Modal/Modal'
import ForumItem from './ForumItem/ForumItem'
import { useAppDispatch, useAppSelector } from '../../../hooks/store'
import { getForum, setForum } from './forumSlice'

type dataType = {
  id: number
  title: string
  description: string
  tag: string
}

export const ForumPage = () => {
  const [option, setOption] = useState('#игра')
  const [activeFilter, setActiveFilter] = useState('#все')
  const [isOpen, setIsOpen] = useState(false)
  const [forumData, setForumData] = useState([
    {
      id: 1,
      title: 'Как это работает',
      body: 'Что это такое',
      tag: '#игра',
    },
    {
      id: 2,
      title: 'Все отлично',
      body: 'Что у вас нового',
      tag: '#общее',
    },
  ])
  const [filteredForumData, setFilteredForumData] = useState<any>([])
  const [category, setCategory] = useState('Все категории')
  const refInput: any = useRef()
  const refTextAreat: any = useRef()

  const dispatch = useAppDispatch()
  const [fData, setFdata] = useState([])
  const forum = useAppSelector(state => state.forum)

  useEffect(() => {
    dispatch(getForum())
    console.log(forum)
    setFdata(forum)
  }, [])

  useEffect(() => {
    console.log(forum)
    setFdata(forum)
  }, [forum])

  const tagHandler = (e: any) => {
    let tagText = e.target!.textContent.toLowerCase()

    console.log(tagText)
    if (activeFilter === tagText) {
      tagText = 'Все категории'
      setActiveFilter('#все')
      setCategory(tagText)
    } else {
      const formatTagText = tagText[1].toUpperCase() + tagText.slice(2)
      setActiveFilter(tagText)
      setCategory(formatTagText)
    }
  }

  const modalHandler = () => {
    console.log('modal forum')
    setIsOpen(true)
  }

  useEffect(() => {
    setFilteredForumData(
      forumData.filter((item: any) => item.tag === activeFilter)
    )
  }, [activeFilter])

  const textAreaHandler = () => {
    //@ts-ignore
    console.log(refTextAreat.current.value)
  }

  const inputHandler = () => {
    //@ts-ignore
    console.log(refInput.current.value)
  }

  const addPostHandler = () => {
    console.log(forumData)
    if (refInput?.current?.value) {
      const obj: any = {
        id: Math.random(),
        title: refInput.current.value,
        body: refTextAreat.current.value,
        tag: option,
      }
      //@ts-ignore
      // setFdata([obj, ...fData])
      //@ts-ignore
      // dispatch(setForum([obj, ...fData]))
      setForumData([obj, ...forumData])
    }
  }

  const checkChecked = (e: any) => {
    if (e.target.checked) {
      setOption(e.target.value)
    }
  }

  // useEffect(() => {
  //   setOption('#game')
  // }, [])
  return (
    <>
      {/* <Header /> */}
      <main className="main">
        {/* @ts-ignore */}
        <Modal
          // @ts-ignore
          addPost={() => addPostHandler()}
          title={'Добавте тему'}
          isOpen={isOpen}
          isOpenFn={(show: any) => setIsOpen(!isOpen)}>
          <form action="#" className="form">
            <input
              type="text"
              className="form__input"
              placeholder="Ваш тема"
              // @ts-ignore
              ref={refInput}
              onChange={() => inputHandler()}
            />
            <textarea
              // @ts-ignore
              ref={refTextAreat}
              onChange={() => textAreaHandler()}
              name=""
              id=""
              cols={1}
              rows={4}
              placeholder="Если нужно больше описаний"></textarea>
            <div>
              <div className="options">
                #игра
                <input
                  onChange={checkChecked}
                  type="radio"
                  name="forum-name"
                  id="game"
                  defaultChecked
                  value={'#игра'}
                />
              </div>
              <div className="options">
                #общее
                <input
                  type="radio"
                  name="forum-name"
                  value={'#общее'}
                  id=""
                  onChange={checkChecked}
                />
              </div>
            </div>
          </form>
        </Modal>
        <section className="forum container">
          <div className="forum__actions">
            <button className="add-post" onClick={() => modalHandler()}>
              Создать
            </button>
          </div>
          <div className="forum__tags">
            <div className="tag">
              <button
                className={
                  activeFilter === '#игра' ? 'tag-btn active-filter' : 'tag-btn'
                }
                onClick={e => tagHandler(e)}>
                #Игра
              </button>
            </div>
            <div className="tag">
              <button
                className={
                  activeFilter === '#общее'
                    ? 'tag-btn active-filter'
                    : 'tag-btn'
                }
                onClick={e => tagHandler(e)}>
                #Общее
              </button>
            </div>
          </div>
          <div className="forum__category-title">
            <p>{category}</p>
            {/* {activeFilter === '#all' ? forumData : filteredForumData} */}
          </div>
          <div className="forum__list">
            {activeFilter === '#все'
              ? forumData.map((item: any) => {
                  const { userId, id, title, body, tag } = item
                  !tag ? '#игра' : tag
                  return (
                    <ForumItem
                      id={id}
                      key={id}
                      title={title}
                      description={body}
                      tag={tag}
                      author={userId}
                    />
                  )
                })
              : filteredForumData.map(
                  ({ id, title, body, userId, tag }: any) => {
                    !tag ? '#игра' : tag

                    return (
                      <ForumItem
                        key={id}
                        id={id}
                        title={title}
                        description={body}
                        tag={tag}
                        author={userId}
                      />
                    )
                  }
                )}
          </div>
        </section>
      </main>
    </>
  )
}
