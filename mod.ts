import { serve } from 'https://deno.land/x/sift/mod.ts'

serve({
  '/': () => new Response('hello world'),
  '/blog/:slug': (request, { slug }: any) => {
    const post = `Hello, you visited ${slug}!`
    return new Response(post)
  },
  404: () => new Response('not found')
})
