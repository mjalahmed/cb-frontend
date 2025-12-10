9:02:49 PM: Netlify Build                                                 
9:02:49 PM: ────────────────────────────────────────────────────────────────
9:02:49 PM: ​
9:02:49 PM: ❯ Version
9:02:49 PM:   @netlify/build 35.5.5
9:02:49 PM: ​
9:02:49 PM: ❯ Flags
9:02:49 PM:   accountId: 690c82697f0bd5ca8ed1f3c7
9:02:49 PM:   baseRelDir: true
9:02:49 PM:   buildId: 693862ae1f1ee68be2cac742
9:02:49 PM:   deployId: 693862ae1f1ee68be2cac744
9:02:49 PM: ​
9:02:49 PM: ❯ Current directory
9:02:49 PM:   /opt/build/repo
9:02:49 PM: ​
9:02:49 PM: ❯ Config file
9:02:49 PM:   No config file was defined: using default values.
9:02:49 PM: ​
9:02:49 PM: ❯ Context
9:02:49 PM:   production
9:02:49 PM: ​
9:02:49 PM: ❯ Using Next.js Runtime - v5.14.7
9:02:51 PM: No Next.js cache to restore
9:02:51 PM: ​
9:02:51 PM: Build command from Netlify app                                
9:02:51 PM: ────────────────────────────────────────────────────────────────
9:02:51 PM: ​
9:02:51 PM: $ yarn run build
9:02:51 PM: yarn run v1.22.22
9:02:51 PM: $ prisma generate && next build
9:02:51 PM: Prisma schema loaded from prisma/schema.prisma
9:02:52 PM: ✔ Generated Prisma Client (v5.22.0) to ./node_modules/@prisma/client in 72ms
9:02:52 PM: Start by importing your Prisma Client (See: https://pris.ly/d/importing-client)
9:02:52 PM: Tip: Want to react to database changes in your app as they happen? Discover how with Pulse: https://pris.ly/tip-1-pulse
9:02:52 PM: ⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
9:02:52 PM:   ▲ Next.js 14.2.33
9:02:52 PM:    Creating an optimized production build ...
9:03:10 PM:  ✓ Compiled successfully
9:03:10 PM:    Linting and checking validity of types ...
9:03:17 PM: Failed to compile.
9:03:17 PM: 
9:03:17 PM: ./lib/utils/jwt.util.ts:1:17
9:03:17 PM: Type error: Could not find a declaration file for module 'jsonwebtoken'. '/opt/build/repo/node_modules/jsonwebtoken/index.js' implicitly has an 'any' type.
9:03:17 PM:   Try `npm i --save-dev @types/jsonwebtoken` if it exists or add a new declaration (.d.ts) file containing `declare module 'jsonwebtoken';`
9:03:17 PM: > 1 | import jwt from 'jsonwebtoken';
9:03:17 PM:     |                 ^
9:03:17 PM:   2 |
9:03:17 PM:   3 | export interface JwtPayload {
9:03:17 PM:   4 |   id: string;
9:03:17 PM: Next.js build worker exited with code: 1 and signal: null
9:03:17 PM: error Command failed with exit code 1. (https://ntl.fyi/exit-code-1)
9:03:17 PM: info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
9:03:17 PM: ​
9:03:17 PM: "build.command" failed                                        
9:03:17 PM: ────────────────────────────────────────────────────────────────
9:03:17 PM: ​
9:03:17 PM:   Error message
9:03:17 PM:   Command failed with exit code 1: yarn run build (https://ntl.fyi/exit-code-1)
9:03:17 PM: ​
9:03:17 PM:   Error location
9:03:17 PM:   In Build command from Netlify app:
9:03:17 PM:   yarn run build
9:03:17 PM: ​
9:03:17 PM:   Resolved config
9:03:17 PM:   build:
9:03:17 PM:     command: yarn run build
9:03:17 PM:     commandOrigin: ui
9:03:17 PM:     environment:
9:03:17 PM:       - DATABASE_URL
9:03:17 PM:       - FRONTEND_URL
9:03:17 PM:       - JWT_EXPIRES_IN
9:03:17 PM:       - JWT_SECRET
9:03:17 PM:       - NEXT_PUBLIC_API_URL
9:03:17 PM:       - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
9:03:17 PM:       - NODE_ENV
9:03:17 PM:       - PORT
9:03:17 PM:       - STRIPE_SECRET_KEY
9:03:17 PM:       - STRIPE_WEBHOOK_SECRET
9:03:17 PM:       - SUPABASE_SERVICE_ROLE_KEY
9:03:17 PM:       - SUPABASE_URL
9:03:17 PM:       - TWILIO_ACCOUNT_SID
9:03:17 PM:       - TWILIO_AUTH_TOKEN
9:03:17 PM:       - TWILIO_PHONE_NUMBER
9:03:17 PM:     publish: /opt/build/repo/.next
9:03:17 PM:     publishOrigin: ui
9:03:17 PM:   plugins:
9:03:17 PM:     - inputs: {}
9:03:17 PM:       origin: ui
9:03:17 PM:       package: "@netlify/plugin-nextjs"
9:03:17 PM: Build failed due to a user error: Build script returned non-zero exit code: 2
9:03:18 PM: Failed during stage 'building site': Build script returned non-zero exit code: 2 (https://ntl.fyi/exit-code-2)
9:03:18 PM: Failing build: Failed to build site
9:03:18 PM: Finished processing build request in 56.772s