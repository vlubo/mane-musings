'use client'

export function NewsletterSection() {
  return (
    <section className="bg-sage-light border-b border-ink flex flex-col items-center gap-6 px-8 py-12 md:px-0 md:py-20">
      <div className="flex flex-col items-center gap-6 w-full max-w-[472px]">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-[24px] font-medium leading-[135%] text-body">
            Stay in the loop
          </h2>
          <p className="text-[16px] leading-[135%] text-body">
            The latest intel on curl care, from my experience to your inbox.
          </p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-[385px] bg-canvas border border-ink flex items-center justify-between px-[10px] py-2"
        >
          <input
            type="email"
            placeholder="Email"
            className="flex-1 text-[14px] text-body placeholder:text-gray bg-transparent outline-none"
            aria-label="Email address"
          />
          <button
            type="submit"
            aria-label="Subscribe"
            className="shrink-0 text-gray hover:text-body transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.1" />
              <path d="M7.5 10h5m0 0-2-2m2 2-2 2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  )
}
