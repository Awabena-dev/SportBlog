import BigPost from '@/components/BigPost'
import NewsPost from '@/components/NewsPost'
import Title from '@/components/SectionTitle'
import { sportsNews } from '@/content'


const TrendingNews = () => {
    return (
        <section className='w-full max-h-fit bg-primary-200 '>
            <div className='max-wrapper flex flex-wrap gap-y-10 py-20 justify-between'>

                {/* Treanding Post */}
                <div>
                    <Title>Trending News</Title>

                    {/* mapping on news !max 3 news */}
                    <div className='flex flex-col gap-y-6 mt-6'>
                        {sportsNews.map((post) => (
                            <NewsPost
                                key={post.title}
                                img={post.img}
                                author={post.author}
                                date={post.date}
                                title={post.title}
                                summary={post.summary}
                                variant='full' />
                        ))}
                    </div>
                </div>

                {/* big post */}
                <BigPost
                    img='/TrendingNews/4.png'
                    title={sportsNews[0].title}
                    author={sportsNews[0].author}
                    date={sportsNews[0].date}
                    category='Cyceling'
                    summary=''
                    size='lg' />
            </div>
        </section>
    )
}

export default TrendingNews