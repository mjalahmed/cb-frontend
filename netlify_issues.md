3:59:28 PM: Netlify Build                                                 
3:59:28 PM: ────────────────────────────────────────────────────────────────
3:59:28 PM: ​
3:59:28 PM: ❯ Version
3:59:28 PM:   @netlify/build 35.5.5
3:59:28 PM: ​
3:59:28 PM: ❯ Flags
3:59:28 PM:   accountId: 690c82697f0bd5ca8ed1f3c7
3:59:28 PM:   baseRelDir: true
3:59:28 PM:   buildId: 69396e9623bea20008f4c09b
3:59:28 PM:   deployId: 69396e9623bea20008f4c09d
3:59:28 PM: ​
3:59:28 PM: ❯ Current directory
3:59:28 PM:   /opt/build/repo
3:59:28 PM: ​
3:59:28 PM: ❯ Config file
3:59:28 PM:   No config file was defined: using default values.
3:59:28 PM: ​
3:59:28 PM: ❯ Context
3:59:28 PM:   production
3:59:28 PM: ​
3:59:28 PM: ❯ Using Next.js Runtime - v5.14.7
3:59:29 PM: No Next.js cache to restore
3:59:29 PM: ​
3:59:29 PM: Build command from Netlify app                                
3:59:29 PM: ────────────────────────────────────────────────────────────────
3:59:29 PM: ​
3:59:29 PM: $ yarn run build
3:59:30 PM: yarn run v1.22.22
3:59:30 PM: $ prisma generate && next build
3:59:30 PM: Prisma schema loaded from prisma/schema.prisma
3:59:31 PM: ✔ Generated Prisma Client (v5.22.0) to ./node_modules/@prisma/client in 65ms
3:59:31 PM: Start by importing your Prisma Client (See: https://pris.ly/d/importing-client)
3:59:31 PM: Tip: Curious about the SQL queries Prisma ORM generates? Optimize helps you enhance your visibility: https://pris.ly/tip-2-optimize
3:59:31 PM: ⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
3:59:32 PM:   ▲ Next.js 14.2.33
3:59:32 PM:    Creating an optimized production build ...
3:59:47 PM:  ✓ Compiled successfully
3:59:47 PM:    Linting and checking validity of types ...
3:59:53 PM: Failed during stage 'building site': Build script returned non-zero exit code: 2 (https://ntl.fyi/exit-code-2)
3:59:53 PM: Failed to compile.
3:59:53 PM: 
3:59:53 PM: ./lib/utils/password.util.ts:1:20
3:59:53 PM: Type error: Could not find a declaration file for module 'bcryptjs'. '/opt/build/repo/node_modules/bcryptjs/index.js' implicitly has an 'any' type.
3:59:53 PM:   Try `npm i --save-dev @types/bcryptjs` if it exists or add a new declaration (.d.ts) file containing `declare module 'bcryptjs';`
3:59:53 PM: > 1 | import bcrypt from 'bcryptjs';
3:59:53 PM:     |                    ^
3:59:53 PM:   2 |
3:59:53 PM:   3 | export async function hashPassword(password: string): Promise<string> {
3:59:53 PM:   4 |   const saltRounds = 10;
3:59:53 PM: Next.js build worker exited with code: 1 and signal: null
3:59:53 PM: error Command failed with exit code 1. (https://ntl.fyi/exit-code-1)
3:59:53 PM: info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
3:59:53 PM: ​
3:59:53 PM: "build.command" failed                                        
3:59:53 PM: ────────────────────────────────────────────────────────────────
3:59:53 PM: ​
3:59:53 PM:   Error message
3:59:53 PM:   Command failed with exit code 1: yarn run build (https://ntl.fyi/exit-code-1)
3:59:53 PM: ​
3:59:53 PM:   Error location
3:59:53 PM:   In Build command from Netlify app:
3:59:53 PM:   yarn run build
3:59:53 PM: ​
3:59:53 PM:   Resolved config
3:59:53 PM:   build:
3:59:53 PM:     command: yarn run build
3:59:53 PM:     commandOrigin: ui
3:59:53 PM:     environment:
3:59:53 PM:       - DATABASE_URL
3:59:53 PM:       - FRONTEND_URL
3:59:53 PM:       - JWT_EXPIRES_IN
3:59:53 PM:       - JWT_SECRET
3:59:53 PM:       - NEXT_PUBLIC_API_URL
3:59:53 PM:       - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
3:59:53 PM:       - NODE_ENV
3:59:53 PM:       - PORT
3:59:53 PM:       - STRIPE_SECRET_KEY
3:59:53 PM:       - STRIPE_WEBHOOK_SECRET
3:59:53 PM:       - SUPABASE_SERVICE_ROLE_KEY
3:59:53 PM:       - SUPABASE_URL
3:59:53 PM:       - TWILIO_ACCOUNT_SID
3:59:53 PM:       - TWILIO_AUTH_TOKEN
3:59:53 PM:       - TWILIO_PHONE_NUMBER
3:59:53 PM:     publish: /opt/build/repo/.next
3:59:53 PM:     publishOrigin: ui
3:59:53 PM:   plugins:
3:59:53 PM:     - inputs: {}
3:59:53 PM:       origin: ui
3:59:53 PM:       package: "@netlify/plugin-nextjs"
3:59:53 PM: Build failed due to a user error: Build script returned non-zero exit code: 2
3:59:53 PM: Failing build: Failed to build site
3:59:54 PM: Finished processing build request in 50.097s