import path from 'path'
import fs from 'fs'
import greyMatter from 'grey-matter'

const dirr = path.join('./', 'posts')



export function fetchAllPosts() {
  const blogs = fs.readdirSync(dirr)
  return blogs.map((fileName) => {
    const names = fileName.replace('.md','')
    const path_ = path.join(dirr, fileName)
    const content = fs.readFileSync(path_, 'utf8')
    const { all_data} = greyMatter(content)
    return { names, data }
  })
}