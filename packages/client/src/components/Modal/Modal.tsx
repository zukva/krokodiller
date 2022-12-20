import React, { useState, useRef, useEffect } from 'react'

import './Modal.css'

type ModalType = {
  children?: JSX.Element
  title: string
  isOpen: boolean
  isOpenFn?: any
  addPost?: any
  btnTitle?: string
}

const Modal: React.FC<ModalType> = ({
  children,
  title,
  isOpen,
  isOpenFn,
  addPost,
  btnTitle,
}) => {
  const [showModal, setShowModal] = useState(false)

  const showModalHandler = (e: Event) => {
    console.log('hey hey')
    if (e.target === document.querySelector('.modal')) {
      setShowModal(!showModal)
      if (isOpenFn) {
        isOpenFn(!isOpen)
      }
    }
  }

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])
  return (
    <div
      className={showModal ? 'modal show-modal' : 'modal close-modal'}
      onClick={(e: any) => showModalHandler(e)}>
      <div className="modal__content">
        <h3 className="modal__content-header">
          {title ? title : 'Write in your name'}
        </h3>
        {children}
        <div className="modal__content-btn">
          <button
            className="button"
            onClick={() => {
              isOpenFn(!isOpen)
              addPost()
            }}>
            {btnTitle ? btnTitle : 'Создать'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
