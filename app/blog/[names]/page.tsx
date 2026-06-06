// dynamic route sample
import { getPostbyNames } from '../../../lib/posts'
import reactMarkDOWN from 'react-markdown'

export default function postPage({ para }) {
  const post_ = getPostbyNames(para.name)
  return (
    <main>
      <h1>{post_.title}</h1>
      <p>{post_.date}</p>
      <article classname="prose">
        <reactMarkDOWN>{post_.content}</reactMarkDOWN>
      </article>
    </main>
  )
}