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
    const { all_data } = grayMatter(content)
    return { names, ...all_data }
  })
}