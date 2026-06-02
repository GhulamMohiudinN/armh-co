import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogPostBySlug, getBlogPostsByMarket } from '@/lib/data/blog-posts'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getBlogPostsByMarket('uk')
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug, 'uk')
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | ARMH & Co UK',
    }
  }

  return {
    title: `${post.title} | ARMH & Co UK`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug, 'uk')

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-off-white">
      <article className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div>
            <Link 
              href="/uk/blog" 
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-500 mb-8 font-sans text-sm font-medium"
            >
              ← Back to Blog
            </Link>
            
            <div className="mb-10">
              <span className="inline-block bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-4 font-sans">
                {post.category}
              </span>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-950 mb-6 tracking-tight leading-[1.15]">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-charcoal-500 text-sm font-sans mb-6">
                <span className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-semibold text-xs">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  {post.author}
                </span>
                <span>·</span>
                <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <p className="font-sans text-charcoal-600 text-lg leading-relaxed border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/50">
                {post.excerpt}
              </p>
            </div>

            <div className="prose prose-lg prose-emerald max-w-none font-sans text-charcoal-700 leading-relaxed
              prose-headings:font-serif prose-headings:text-charcoal-900 prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:leading-relaxed prose-p:text-charcoal-700 prose-p:mb-4
              prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
              prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
              prose-li:text-charcoal-700 prose-li:leading-relaxed
              prose-strong:text-charcoal-900 prose-strong:font-semibold
              prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline
              prose-code:text-emerald-600 prose-code:bg-emerald-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-charcoal-900 prose-pre:text-charcoal-100
              prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 prose-blockquote:bg-emerald-50 prose-blockquote:pl-4 prose-blockquote:py-2 prose-blockquote:my-4
              prose-table:w-full prose-table:border-collapse prose-table:my-6
              prose-th:bg-charcoal-900 prose-th:text-white prose-th:font-semibold prose-th:px-4 prose-th:py-3 prose-th:text-left
              prose-td:border prose-td:border-charcoal-200 prose-td:px-4 prose-td:py-3
              prose-tr:nth-child-odd:bg-charcoal-50
              prose-img:rounded-lg prose-img:shadow-lg prose-img:my-6">
              {/* Note: Blog content is sanitized before storage. Ensure content is trusted before rendering. */}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <div className="mt-16 pt-8 border-t border-charcoal-200">
              <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-xl border border-emerald-100">
                <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">
                  Need Professional Advice?
                </h3>
                <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
                  Our team of qualified accountants and tax advisors can help you implement the strategies discussed in this article.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/uk/contact" className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-colors tracking-wide font-sans text-center">
                    Book Free Consultation
                  </Link>
                  <Link href="/uk/resources" className="inline-block border border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors tracking-wide font-sans text-center">
                    View Free Resources
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
