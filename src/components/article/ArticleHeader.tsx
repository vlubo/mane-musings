interface Props {
  title: string
  excerpt: string
  categoryTitle: string
  hairTypeLabels: string[]
  readTime: number
  publishedAt: string
}

export function ArticleHeader({ title, excerpt, categoryTitle, readTime }: Props) {
  return (
    <header className="w-full border-b border-ink flex flex-col justify-end items-center min-h-[311px] md:h-[320px] px-8 pb-12 md:px-16 md:pb-16">
      <div className="flex flex-col items-center gap-10 w-full max-w-[740px]">
        <p className="font-meta text-[12px] leading-none tracking-[0.04em] text-ink">
          {categoryTitle} · {readTime} min read
        </p>
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-[28px] md:text-[32px] font-normal leading-none text-ink">
            {title}
          </h1>
          {excerpt && (
            <p className="text-[16px] leading-[135%] text-ink">
              {excerpt}
            </p>
          )}
        </div>
      </div>
    </header>
  )
}
