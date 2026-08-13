# Installation

I've used playwright to test E2E. You will need to:

Actually sign up a test user, use their credentials and enter them into your own .env.test.local file
(use .env.test.example and copy it over and paste your creds)
The base URL will be the deployed URL (vercel) on github however you can change it http://localhost:5001 and run pnpm run dev. One thing to note is that you must sign up another user since it's a dev server. 

Commands after .env.test.local is configured:

cd frontend
pnpm install
pnpm exec playwright install
pnpm exec playwright test
pnpm exec playwright test --ui (if you want interative UI)

### If you have any questions or issues msg me on whatsapp

I've installed playwright into the frontend since we are focusing only on the frontend elements for these tests. 
