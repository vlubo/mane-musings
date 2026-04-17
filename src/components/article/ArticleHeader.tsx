interface Props {
  title: string
  excerpt: string
  categoryTitle: string
  hairTypeLabels: string[]
  readTime: number
  publishedAt: string
}

export function ArticleHeader({ title, excerpt, categoryTitle, hairTypeLabels, readTime, publishedAt }: Props) {
  const tags = [categoryTitle, ...hairTypeLabels].join(' · ')
  const date = new Date(publishedAt).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <header className="max-w-[740px] mx-auto px-8 pt-12 pb-10 border-b border-sage md:px-12 md:pt-14">
      <p className="text-[11px] tracking-[0.25em] uppercase text-gray font-semibold mb-4">
        {tags} · {readTime} min read
      </p>
      <h1 className="font-display text-[20px] text-ink mb-5 md:text-[32px]">
        {title}
      </h1>
      <p className="font-body text-[14px] text-gray leading-[135%] mb-6 md:text-[16px]">
        {excerpt}
      </p>
      <p className="text-[12px] text-gray">{date}</p>
    </header>
  )
}
