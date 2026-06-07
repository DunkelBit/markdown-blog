// dynamic route sample
import { getPostbyNames } from '../../../lib/posts'
import ReactMarkDOWN from 'react-markdown'

export default async function postPage({ params }) {
  const { page_name } = await params
  const post_ = getPostbyNames(page_name)
  return (
    <main>
      <h1>{post_.title}</h1>
      <p>{post_.date}</p>
      <article className="prose">
        <ReactMarkDOWN>{post_.content}</ReactMarkDOWN>
      </article>
    </main>
  )
}