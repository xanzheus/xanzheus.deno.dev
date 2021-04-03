import { serve } from 'https://deno.land/x/sift/mod.ts'
import HomePage from './pages/home.jsx'
import GreetingsPage from './pages/greetings.jsx'

serve({
  '/': () => HomePage,
  '/:name': (_, { name }) => GreetingsPage({ name }),
  404: () => new Response('not found')
})
