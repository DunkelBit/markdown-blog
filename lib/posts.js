import path from 'path'
import fs from 'fs'
import grayMatter from 'gray-matter'

const dirr = path.join(process.cwd(), 'posts')


export function fetchAllPosts() {
  const blogs = fs.readdirSync(dirr)
  return blogs.map((fileName) => {
    const names = fileName.replace('.md','')
    const path_ = path.join(dirr, fileName)
    const content = fs.readFileSync(path_, 'utf8')
    const { data } = grayMatter(content)
    return { names, ...data }
  })
}
export function getPostbyNames(name) {
  const _path = path.join(dirr, name + '.md')
  const content = fs.readFileSync(_path, 'utf8')
  const result = grayMatter(content)
  return {
    name,
    title: result.data.title,
    date: result.data.date,
    content: result.content
  }
}
