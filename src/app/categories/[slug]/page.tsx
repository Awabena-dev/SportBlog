interface PageProps {
    params: Promise<{
        slug: string
    }>
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params

    return (
        <div className="mt-20">
            Category slug: {slug}
        </div>
    )
}
