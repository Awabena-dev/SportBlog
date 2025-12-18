import { contentfulClient } from '../contentful'

export async function getCategories() {
    const res = await contentfulClient.getEntries({
        content_type: 'categories', 
        order: ['fields.name'],
    })

    return res.items.map((item: any) => ({
        id: item.sys.id,
        name: item.fields.name,
        slug: item.fields.slug,
        cover: 
        item.fields.cover?.fields?.file?.url ? `https:${item.fields.cover.fields.file.url}`
        : '/Layout/logo.svg'
    }))
}
