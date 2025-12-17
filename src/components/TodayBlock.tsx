import React from 'react'
import SimpleNewsCard from './SimpleNewsCard'
import { cn } from '@/lib/utils'

// Placeholder 
const blog = [
  {
    title: "Ethiopain runner took the Top four spots kkkkkkkkkkkkkkkkkkk",
    date: "2023-06-03",
    cover: "/Hero/african-woman.png"
  },
  {
    title: "Race Car Dixes Driver",
    date: "2023-06-03",
    cover: "/Hero/f1-car.png"
  }
]


const TodayBlock = ({ className }: { className?: string }) => {
  return (
    <div className={cn("", className)}>
      <span className='px-4 py-1 bg-primary-400 rounded-[3px] text-primary-600 font-medium'>Today</span>
      {/* Blog */}
      <div className='flex flex-row flex-wrap gap-x-6 mmd:flex-col gap-y-8 mt-10'>
        {blog.map((blog) => (
          <SimpleNewsCard title={blog.title} date={blog.date} cover={blog.cover} key={blog.title} />
        ))}
      </div>
    </div>
  )
}

export default TodayBlock