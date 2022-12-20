import React, { FC } from 'react'
import { ROUTS } from '../../../../routs/routsList'
import { Link } from 'react-router-dom'

type ForumItemType = {
  title: string
  description: string
  tag: string
  author?: string
  id?: number | string
}

const ForumItem: FC<ForumItemType> = ({ id, title, description, tag }) => {
  return (
    <div className="list__item">
      <div className="item__title">
        <Link to={ROUTS.FORUM_PAGE + `/${id}`}>{title}</Link>
      </div>

      <div className="item__desc">{description}</div>

      <div className="item__tag">{tag}</div>
    </div>
  )
}

export default ForumItem
