6:35:42 PM: build-image version: e939f44b001caa6487d455733296841972e73575 (noble)
6:35:42 PM: buildbot version: 6500ef2da7c345197096dc6f44fc4a0c3324578a
6:35:42 PM: Fetching cached dependencies
6:35:42 PM: Failed to fetch cache, continuing with build
6:35:42 PM: Starting to prepare the repo for build
6:35:42 PM: No cached dependencies found. Cloning fresh repo
6:35:42 PM: git clone --filter=blob:none https://github.com/mjalahmed/cb-frontend
6:35:42 PM: Preparing Git Reference refs/heads/main
6:35:44 PM: Starting to install dependencies
6:35:45 PM: v22.21.1 is already installed.
6:35:45 PM: Now using node v22.21.1 (npm v10.9.4)
6:35:45 PM: Enabling Node.js Corepack
6:35:45 PM: Started restoring cached build plugins
6:35:45 PM: Finished restoring cached build plugins
6:35:45 PM: WARNING: The environment variable 'NODE_ENV' is set to 'production'. Any 'devDependencies' in package.json will not be installed
6:35:45 PM: Started restoring cached corepack dependencies
6:35:45 PM: Finished restoring cached corepack dependencies
6:35:45 PM: Started restoring cached yarn cache
6:35:45 PM: Finished restoring cached yarn cache
6:35:45 PM: No yarn workspaces detected
6:35:45 PM: Started restoring cached node modules
6:35:45 PM: Finished restoring cached node modules
6:35:45 PM: Installing npm packages using Yarn version 1.22.22
6:35:46 PM: yarn install v1.22.22
6:35:46 PM: [1/4] Resolving packages...
6:35:46 PM: [2/4] Fetching packages...
6:35:58 PM: [3/4] Linking dependencies...
6:36:01 PM: [4/4] Building fresh packages...
6:36:06 PM: Done in 20.64s.
6:36:06 PM: npm packages installed using Yarn
6:36:07 PM: Successfully installed dependencies
6:36:07 PM: Starting build script
6:36:07 PM: Detected 1 framework(s)
6:36:07 PM: "next" at version "14.2.33"
6:36:07 PM: Section completed: initializing
6:36:09 PM: ​
6:36:09 PM: Netlify Build                                                 
6:36:09 PM: ────────────────────────────────────────────────────────────────
6:36:09 PM: ​
6:36:09 PM: ❯ Version
6:36:09 PM:   @netlify/build 35.5.5
6:36:09 PM: ​
6:36:09 PM: ❯ Flags
6:36:09 PM:   accountId: 690c82697f0bd5ca8ed1f3c7
6:36:09 PM:   baseRelDir: true
6:36:09 PM:   buildId: 693841cc4afe83058a4d44f0
6:36:09 PM:   deployId: 693841cc4afe83058a4d44f2
6:36:09 PM: ​
6:36:09 PM: ❯ Current directory
6:36:09 PM:   /opt/build/repo
6:36:09 PM: ​
6:36:09 PM: ❯ Config file
6:36:09 PM:   No config file was defined: using default values.
6:36:09 PM: ​
6:36:09 PM: ❯ Context
6:36:09 PM:   production
6:36:10 PM: ​
6:36:10 PM: ❯ Using Next.js Runtime - v5.14.7
6:36:11 PM: No Next.js cache to restore
6:36:11 PM: ​
6:36:11 PM: Build command from Netlify app                                
6:36:11 PM: ────────────────────────────────────────────────────────────────
6:36:11 PM: ​
6:36:11 PM: $ yarn run build
6:36:11 PM: yarn run v1.22.22
6:36:11 PM: $ prisma generate && next build
6:36:12 PM: Prisma schema loaded from prisma/schema.prisma
6:36:12 PM: ✔ Generated Prisma Client (v5.22.0) to ./node_modules/@prisma/client in 62ms
6:36:12 PM: Start by importing your Prisma Client (See: https://pris.ly/d/importing-client)
6:36:12 PM: Tip: Want real-time updates to your database without manual polling? Discover how with Pulse: https://pris.ly/tip-0-pulse
6:36:13 PM: ⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
6:36:13 PM:   ▲ Next.js 14.2.33
6:36:13 PM:    Creating an optimized production build ...
6:36:20 PM: Failed during stage 'building site': Build script returned non-zero exit code: 2 (https://ntl.fyi/exit-code-2)
6:36:20 PM: Failed to compile.
6:36:20 PM: 
6:36:20 PM: app/[lang]/layout.tsx
6:36:20 PM: An error occurred in `next/font`.
6:36:20 PM: Error: Cannot find module 'tailwindcss'
6:36:20 PM: Require stack:
6:36:20 PM: - /opt/build/repo/node_modules/next/dist/build/webpack/config/blocks/css/plugins.js
6:36:20 PM: - /opt/build/repo/node_modules/next/dist/build/webpack/config/blocks/css/index.js
6:36:20 PM: - /opt/build/repo/node_modules/next/dist/build/webpack/config/index.js
6:36:20 PM: - /opt/build/repo/node_modules/next/dist/build/webpack-config.js
6:36:20 PM: - /opt/build/repo/node_modules/next/dist/build/webpack/plugins/next-trace-entrypoints-plugin.js
6:36:20 PM: - /opt/build/repo/node_modules/next/dist/build/collect-build-traces.js
6:36:20 PM: - /opt/build/repo/node_modules/next/dist/build/index.js
6:36:20 PM: - /opt/build/repo/node_modules/next/dist/cli/next-build.js
6:36:20 PM:     at Function.<anonymous> (node:internal/modules/cjs/loader:1383:15)
6:36:20 PM:     at /opt/build/repo/node_modules/next/dist/server/require-hook.js:55:36
6:36:20 PM:     at Function.resolve (node:internal/modules/helpers:157:19)
6:36:20 PM:     at loadPlugin (/opt/build/repo/node_modules/next/dist/build/webpack/config/blocks/css/plugins.js:49:32)
6:36:20 PM:     at /opt/build/repo/node_modules/next/dist/build/webpack/config/blocks/css/plugins.js:157:56
6:36:20 PM:     at Array.map (<anonymous>)
6:36:20 PM:     at getPostCssPlugins (/opt/build/repo/node_modules/next/dist/build/webpack/config/blocks/css/plugins.js:157:47)
6:36:20 PM:     at async /opt/build/repo/node_modules/next/dist/build/webpack/config/blocks/css/index.js:124:36
6:36:20 PM:     at async /opt/build/repo/node_modules/next/dist/build/webpack/loaders/next-font-loader/index.js:86:33
6:36:20 PM:     at async Span.traceAsyncFn (/opt/build/repo/node_modules/next/dist/trace/trace.js:154:20)
6:36:20 PM: app/[lang]/layout.tsx
6:36:20 PM: An error occurred in `next/font`.
6:36:20 PM: Error: Cannot find module 'tailwindcss'
6:36:20 PM: Require stack:
6:36:20 PM: - /opt/build/repo/node_modules/next/dist/build/webpack/config/blocks/css/plugins.js
6:36:20 PM: - /opt/build/repo/node_modules/next/dist/build/webpack/config/blocks/css/index.js
6:36:20 PM: - /opt/build/repo/node_modules/next/dist/build/webpack/config/index.js
6:36:20 PM: - /opt/build/repo/node_modules/next/dist/build/webpack-config.js
6:36:20 PM: - /opt/build/repo/node_modules/next/dist/build/webpack/plugins/next-trace-entrypoints-plugin.js
6:36:20 PM: - /opt/build/repo/node_modules/next/dist/build/collect-build-traces.js
6:36:20 PM: - /opt/build/repo/node_modules/next/dist/build/index.js
6:36:20 PM: - /opt/build/repo/node_modules/next/dist/cli/next-build.js
6:36:20 PM:     at Function.<anonymous> (node:internal/modules/cjs/loader:1383:15)
6:36:20 PM:     at /opt/build/repo/node_modules/next/dist/server/require-hook.js:55:36
6:36:20 PM:     at Function.resolve (node:internal/modules/helpers:157:19)
6:36:20 PM:     at loadPlugin (/opt/build/repo/node_modules/next/dist/build/webpack/config/blocks/css/plugins.js:49:32)
6:36:20 PM:     at /opt/build/repo/node_modules/next/dist/build/webpack/config/blocks/css/plugins.js:157:56
6:36:20 PM:     at Array.map (<anonymous>)
6:36:20 PM:     at getPostCssPlugins (/opt/build/repo/node_modules/next/dist/build/webpack/config/blocks/css/plugins.js:157:47)
6:36:20 PM:     at async /opt/build/repo/node_modules/next/dist/build/webpack/config/blocks/css/index.js:124:36
6:36:20 PM:     at async /opt/build/repo/node_modules/next/dist/build/webpack/loaders/next-font-loader/index.js:86:33
6:36:20 PM:     at async Span.traceAsyncFn (/opt/build/repo/node_modules/next/dist/trace/trace.js:154:20)
6:36:20 PM: ./app/[lang]/AuthInitializer.tsx
6:36:20 PM: Module not found: Can't resolve '@/hooks/useAuth'
6:36:20 PM: https://nextjs.org/docs/messages/module-not-found
6:36:20 PM: ./app/[lang]/admin/AdminNavbar.tsx
6:36:20 PM: Module not found: Can't resolve '@/i18n/routing'
6:36:20 PM: https://nextjs.org/docs/messages/module-not-found
6:36:20 PM: ./app/[lang]/admin/AdminNavbar.tsx
6:36:20 PM: Module not found: Can't resolve '@/store/auth-store'
6:36:20 PM: https://nextjs.org/docs/messages/module-not-found
6:36:20 PM: > Build failed because of webpack errors
6:36:20 PM: error Command failed with exit code 1. (https://ntl.fyi/exit-code-1)
6:36:20 PM: info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
6:36:20 PM: ​
6:36:20 PM: "build.command" failed                                        
6:36:20 PM: ────────────────────────────────────────────────────────────────
6:36:20 PM: ​
6:36:20 PM:   Error message
6:36:20 PM:   Command failed with exit code 1: yarn run build (https://ntl.fyi/exit-code-1)
6:36:20 PM: ​
6:36:20 PM:   Error location
6:36:20 PM:   In Build command from Netlify app:
6:36:20 PM:   yarn run build
6:36:20 PM: ​
6:36:20 PM:   Resolved config
6:36:20 PM:   build:
6:36:20 PM:     command: yarn run build
6:36:20 PM:     commandOrigin: ui
6:36:20 PM:     environment:
6:36:20 PM:       - DATABASE_URL
6:36:20 PM:       - FRONTEND_URL
6:36:20 PM:       - JWT_EXPIRES_IN
6:36:20 PM:       - JWT_SECRET
6:36:20 PM:       - NEXT_PUBLIC_API_URL
6:36:20 PM:       - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
6:36:20 PM:       - NODE_ENV
6:36:20 PM:       - PORT
6:36:20 PM:       - STRIPE_SECRET_KEY
6:36:20 PM:       - STRIPE_WEBHOOK_SECRET
6:36:20 PM:       - SUPABASE_SERVICE_ROLE_KEY
6:36:20 PM:       - SUPABASE_URL
6:36:20 PM:       - TWILIO_ACCOUNT_SID
6:36:20 PM:       - TWILIO_AUTH_TOKEN
6:36:20 PM:       - TWILIO_PHONE_NUMBER
6:36:20 PM:     publish: /opt/build/repo/.next
6:36:20 PM:     publishOrigin: ui
6:36:20 PM:   plugins:
6:36:20 PM:     - inputs: {}
6:36:20 PM:       origin: ui
6:36:20 PM:       package: "@netlify/plugin-nextjs"
6:36:20 PM: Build failed due to a user error: Build script returned non-zero exit code: 2
6:36:20 PM: Failing build: Failed to build site
6:36:20 PM: Finished processing build request in 38.688s