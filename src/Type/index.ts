
export interface SimpleNews {
    cover: string;
    title: string;
    date: string
}

export interface PostNewsProps{
    title: string
    summary: string
    date: string
    author:string
    img: string
}

export interface ArticlePostType{
    category: string
    title: string
    summary: string
    date: string
    author:string
    authorImg: string
    img: string
}