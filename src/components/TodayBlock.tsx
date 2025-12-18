import SimpleNewsCard from './SimpleNewsCard'
import { cn } from '@/lib/utils'

// ---------------- Types ----------------
type Blog = {
  id: number
  title: string
  date: string
  cover: string
}

// ---------------- Placeholder ----------------
const blogs: Blog[] = [
  {
    id: 1,
    title: "Ethiopian runner took the top four spots",
    date: "2023-06-03",
    cover: "/Hero/african-woman.png",
  },
  {
    id: 2,
    title: "Race car driver dominates the track",
    date: "2023-06-03",
    cover: "/Hero/f1-car.png",
  },
]

// ---------------- Component ----------------
interface TodayBlockProps {
  className?: string
}

const TodayBlock = ({ className }: TodayBlockProps) => {
  return (
    <section className={cn(className)}>
      <h3 className="inline-block px-4 py-1 bg-primary-400 rounded-[3px] text-primary-600 font-medium">
        Today
      </h3>

      {/* Blog list */}
      <div className="mt-10 flex flex-row flex-wrap gap-x-6 gap-y-8 mmd:flex-col">
        {blogs.map(blog => (
          <SimpleNewsCard
            key={blog.id}
            title={blog.title}
            date={blog.date}
            cover={blog.cover}
          />
        ))}
      </div>
    </section>
  )
}

export default TodayBlock
