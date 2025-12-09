8:38:54 PM: Netlify Build                                                 
8:38:54 PM: ────────────────────────────────────────────────────────────────
8:38:54 PM: ​
8:38:54 PM: ❯ Version
8:38:54 PM:   @netlify/build 35.5.5
8:38:54 PM: ​
8:38:54 PM: ❯ Flags
8:38:54 PM:   accountId: 690c82697f0bd5ca8ed1f3c7
8:38:54 PM:   baseRelDir: true
8:38:54 PM:   buildId: 69385e8ae7212e000875cccb
8:38:54 PM:   deployId: 69385e8ae7212e000875cccd
8:38:54 PM: ​
8:38:54 PM: ❯ Current directory
8:38:54 PM:   /opt/build/repo
8:38:54 PM: ​
8:38:54 PM: ❯ Config file
8:38:54 PM:   No config file was defined: using default values.
8:38:54 PM: ​
8:38:54 PM: ❯ Context
8:38:54 PM:   production
8:38:55 PM: ​
8:38:55 PM: ❯ Using Next.js Runtime - v5.14.7
8:38:56 PM: No Next.js cache to restore
8:38:56 PM: ​
8:38:56 PM: Build command from Netlify app                                
8:38:56 PM: ────────────────────────────────────────────────────────────────
8:38:56 PM: ​
8:38:56 PM: $ yarn run build
8:38:56 PM: yarn run v1.22.22
8:38:56 PM: $ prisma generate && next build
8:38:57 PM: Prisma schema loaded from prisma/schema.prisma
8:38:57 PM: ✔ Generated Prisma Client (v5.22.0) to ./node_modules/@prisma/client in 65ms
8:38:57 PM: Start by importing your Prisma Client (See: https://pris.ly/d/importing-client)
8:38:57 PM: Tip: Interested in query caching in just a few lines of code? Try Accelerate today! https://pris.ly/tip-3-accelerate
8:38:59 PM: ⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
8:38:59 PM:   ▲ Next.js 14.2.33
8:38:59 PM:    Creating an optimized production build ...
8:39:16 PM: Failed during stage 'building site': Build script returned non-zero exit code: 2 (https://ntl.fyi/exit-code-2)
8:39:16 PM:  ✓ Compiled successfully
8:39:16 PM:    Linting and checking validity of types ...
8:39:16 PM: It looks like you're trying to use TypeScript but do not have the required package(s) installed.
8:39:16 PM: Please install typescript and @types/node by running:
8:39:16 PM: 	yarn add --dev typescript @types/node
8:39:16 PM: If you are not trying to use TypeScript, please remove the tsconfig.json file from your package root (and any TypeScript files in your pages directory).
8:39:16 PM:  ⨯ ESLint must be installed in order to run during builds: yarn add --dev eslint
8:39:16 PM: Next.js build worker exited with code: 1 and signal: null
8:39:16 PM: error Command failed with exit code 1. (https://ntl.fyi/exit-code-1)
8:39:16 PM: info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
8:39:16 PM: ​
8:39:16 PM: "build.command" failed                                        
8:39:16 PM: ────────────────────────────────────────────────────────────────
8:39:16 PM: ​
8:39:16 PM:   Error message
8:39:16 PM:   Command failed with exit code 1: yarn run build (https://ntl.fyi/exit-code-1)
8:39:16 PM: ​
8:39:16 PM:   Error location
8:39:16 PM:   In Build command from Netlify app:
8:39:16 PM:   yarn run build
8:39:16 PM: ​
8:39:16 PM:   Resolved config
8:39:16 PM:   build:
8:39:16 PM:     command: yarn run build
8:39:16 PM:     commandOrigin: ui
8:39:16 PM:     environment:
8:39:16 PM:       - DATABASE_URL
8:39:16 PM:       - FRONTEND_URL
8:39:16 PM:       - JWT_EXPIRES_IN
8:39:16 PM:       - JWT_SECRET
8:39:16 PM:       - NEXT_PUBLIC_API_URL
8:39:16 PM:       - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
8:39:16 PM:       - NODE_ENV
8:39:16 PM:       - PORT
8:39:16 PM:       - STRIPE_SECRET_KEY
8:39:16 PM:       - STRIPE_WEBHOOK_SECRET
8:39:16 PM:       - SUPABASE_SERVICE_ROLE_KEY
8:39:16 PM:       - SUPABASE_URL
8:39:16 PM:       - TWILIO_ACCOUNT_SID
8:39:16 PM:       - TWILIO_AUTH_TOKEN
8:39:16 PM:       - TWILIO_PHONE_NUMBER
8:39:16 PM:     publish: /opt/build/repo/.next
8:39:16 PM:     publishOrigin: ui
8:39:16 PM:   plugins:
8:39:16 PM:     - inputs: {}
8:39:16 PM:       origin: ui
8:39:16 PM:       package: "@netlify/plugin-nextjs"
8:39:16 PM: Build failed due to a user error: Build script returned non-zero exit code: 2
8:39:16 PM: Failing build: Failed to build site
8:39:17 PM: Finished processing build request in 57.202s