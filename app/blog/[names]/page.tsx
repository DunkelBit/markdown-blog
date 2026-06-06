// dynamic route sample
import { getPostbyNames } from '../../../lib/posts'
import reactMarkDOWN from 'react-markdown'

export default function postPage({ para }) {
  const post_ = getPostbyNames(para.name)

  
}