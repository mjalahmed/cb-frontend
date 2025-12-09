6:53:01 PM: Netlify Build                                                 
6:53:01 PM: ────────────────────────────────────────────────────────────────
6:53:01 PM: ​
6:53:01 PM: ❯ Version
6:53:01 PM:   @netlify/build 35.5.5
6:53:01 PM: ​
6:53:01 PM: ❯ Flags
6:53:01 PM:   accountId: 690c82697f0bd5ca8ed1f3c7
6:53:01 PM:   baseRelDir: true
6:53:01 PM:   buildId: 693845bf369080000814e229
6:53:01 PM:   deployId: 693845bf369080000814e22b
6:53:01 PM: ​
6:53:01 PM: ❯ Current directory
6:53:01 PM:   /opt/build/repo
6:53:01 PM: ​
6:53:01 PM: ❯ Config file
6:53:01 PM:   No config file was defined: using default values.
6:53:01 PM: ​
6:53:01 PM: ❯ Context
6:53:01 PM:   production
6:53:02 PM: ​
6:53:02 PM: ❯ Using Next.js Runtime - v5.14.7
6:53:03 PM: No Next.js cache to restore
6:53:03 PM: ​
6:53:03 PM: Build command from Netlify app                                
6:53:03 PM: ────────────────────────────────────────────────────────────────
6:53:03 PM: ​
6:53:03 PM: $ yarn run build
6:53:03 PM: yarn run v1.22.22
6:53:03 PM: $ prisma generate && next build
6:53:03 PM: Prisma schema loaded from prisma/schema.prisma
6:53:04 PM: ✔ Generated Prisma Client (v5.22.0) to ./node_modules/@prisma/client in 63ms
6:53:04 PM: Start by importing your Prisma Client (See: https://pris.ly/d/importing-client)
6:53:04 PM: Tip: Curious about the SQL queries Prisma ORM generates? Optimize helps you enhance your visibility: https://pris.ly/tip-2-optimize
6:53:06 PM: ⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
6:53:06 PM:   ▲ Next.js 14.2.33
6:53:06 PM:    Creating an optimized production build ...
6:53:13 PM: Failed to compile.
6:53:13 PM: 
6:53:13 PM: ./app/[lang]/AuthInitializer.tsx
6:53:13 PM: Module not found: Can't resolve '@/hooks/useAuth'
6:53:13 PM: https://nextjs.org/docs/messages/module-not-found
6:53:13 PM: ./app/[lang]/admin/AdminNavbar.tsx
6:53:13 PM: Module not found: Can't resolve '@/i18n/routing'
6:53:13 PM: https://nextjs.org/docs/messages/module-not-found
6:53:13 PM: ./app/[lang]/admin/AdminNavbar.tsx
6:53:13 PM: Module not found: Can't resolve '@/store/auth-store'
6:53:13 PM: https://nextjs.org/docs/messages/module-not-found
6:53:13 PM: ./app/[lang]/admin/categories/AdminCategoriesClient.tsx
6:53:13 PM: Module not found: Can't resolve '@/lib/api-client'
6:53:13 PM: https://nextjs.org/docs/messages/module-not-found
6:53:13 PM: ./app/[lang]/admin/categories/AdminCategoriesClient.tsx
6:53:13 PM: Module not found: Can't resolve '@/store/auth-store'
6:53:13 PM: https://nextjs.org/docs/messages/module-not-found
6:53:13 PM: > Build failed because of webpack errors
6:53:13 PM: error Command failed with exit code 1. (https://ntl.fyi/exit-code-1)
6:53:13 PM: info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
6:53:13 PM: ​
6:53:13 PM: "build.command" failed                                        
6:53:13 PM: ────────────────────────────────────────────────────────────────
6:53:13 PM: ​
6:53:13 PM:   Error message
6:53:13 PM:   Command failed with exit code 1: yarn run build (https://ntl.fyi/exit-code-1)
6:53:13 PM: ​
6:53:13 PM:   Error location
6:53:13 PM:   In Build command from Netlify app:
6:53:13 PM:   yarn run build
6:53:13 PM: ​
6:53:13 PM:   Resolved config
6:53:13 PM:   build:
6:53:13 PM:     command: yarn run build
6:53:13 PM:     commandOrigin: ui
6:53:13 PM:     environment:
6:53:13 PM:       - DATABASE_URL
6:53:13 PM:       - FRONTEND_URL
6:53:13 PM:       - JWT_EXPIRES_IN
6:53:13 PM:       - JWT_SECRET
6:53:13 PM:       - NEXT_PUBLIC_API_URL
6:53:13 PM:       - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
6:53:13 PM:       - NODE_ENV
6:53:13 PM:       - PORT
6:53:13 PM:       - STRIPE_SECRET_KEY
6:53:13 PM:       - STRIPE_WEBHOOK_SECRET
6:53:13 PM:       - SUPABASE_SERVICE_ROLE_KEY
6:53:13 PM:       - SUPABASE_URL
6:53:13 PM:       - TWILIO_ACCOUNT_SID
6:53:13 PM:       - TWILIO_AUTH_TOKEN
6:53:13 PM:       - TWILIO_PHONE_NUMBER
6:53:13 PM:     publish: /opt/build/repo/.next
6:53:13 PM:     publishOrigin: ui
6:53:13 PM:   plugins:
6:53:13 PM:     - inputs: {}
6:53:13 PM:       origin: ui
6:53:13 PM:       package: "@netlify/plugin-nextjs"
6:53:14 PM: Failed during stage 'building site': Build script returned non-zero exit code: 2 (https://ntl.fyi/exit-code-2)
6:53:14 PM: Build failed due to a user error: Build script returned non-zero exit code: 2
6:53:14 PM: Failing build: Failed to build site
6:53:14 PM: Finished processing build request in 41.193s