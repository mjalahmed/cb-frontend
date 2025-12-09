3:48:08 PM: build-image version: e939f44b001caa6487d455733296841972e73575 (noble)
3:48:08 PM: buildbot version: 6500ef2da7c345197096dc6f44fc4a0c3324578a
3:48:09 PM: Fetching cached dependencies
3:48:09 PM: Failed to fetch cache, continuing with build
3:48:09 PM: Starting to prepare the repo for build
3:48:09 PM: No cached dependencies found. Cloning fresh repo
3:48:09 PM: git clone --filter=blob:none https://github.com/mjalahmed/cb-frontend
3:48:09 PM: Preparing Git Reference refs/heads/main
3:48:11 PM: Starting to install dependencies
3:48:12 PM: v22.21.1 is already installed.
3:48:12 PM: Now using node v22.21.1 (npm v10.9.4)
3:48:12 PM: Enabling Node.js Corepack
3:48:12 PM: Started restoring cached build plugins
3:48:12 PM: Finished restoring cached build plugins
3:48:12 PM: Started restoring cached corepack dependencies
3:48:12 PM: Finished restoring cached corepack dependencies
3:48:12 PM: Started restoring cached yarn cache
3:48:12 PM: Finished restoring cached yarn cache
3:48:12 PM: No yarn workspaces detected
3:48:12 PM: Started restoring cached node modules
3:48:12 PM: Finished restoring cached node modules
3:48:12 PM: Installing npm packages using Yarn version 1.22.22
3:48:13 PM: yarn install v1.22.22
3:48:13 PM: [1/4] Resolving packages...
3:48:13 PM: [2/4] Fetching packages...
3:48:26 PM: [3/4] Linking dependencies...
3:48:39 PM: [4/4] Building fresh packages...
3:48:41 PM: Done in 28.69s.
3:48:41 PM: npm packages installed using Yarn
3:48:42 PM: Successfully installed dependencies
3:48:42 PM: Starting build script
3:48:42 PM: Detected 1 framework(s)
3:48:42 PM: "next" at version "14.2.33"
3:48:42 PM: Section completed: initializing
3:48:44 PM: ​
3:48:44 PM: Netlify Build                                                 
3:48:44 PM: ────────────────────────────────────────────────────────────────
3:48:44 PM: ​
3:48:44 PM: ❯ Version
3:48:44 PM:   @netlify/build 35.5.5
3:48:44 PM: ​
3:48:44 PM: ❯ Flags
3:48:44 PM:   accountId: 690c82697f0bd5ca8ed1f3c7
3:48:44 PM:   baseRelDir: true
3:48:44 PM:   buildId: 69381a86deabbd00086f9fdd
3:48:44 PM:   deployId: 69381a86deabbd00086f9fdf
3:48:44 PM: ​
3:48:44 PM: ❯ Current directory
3:48:44 PM:   /opt/build/repo
3:48:44 PM: ​
3:48:44 PM: ❯ Config file
3:48:44 PM:   No config file was defined: using default values.
3:48:44 PM: ​
3:48:44 PM: ❯ Context
3:48:44 PM:   production
3:48:44 PM: ​
3:48:44 PM: ❯ Using Next.js Runtime - v5.14.7
3:48:46 PM: No Next.js cache to restore
3:48:46 PM: ​
3:48:46 PM: Build command from Netlify app                                
3:48:46 PM: ────────────────────────────────────────────────────────────────
3:48:46 PM: ​
3:48:46 PM: $ yarn run build
3:48:46 PM: yarn run v1.22.22
3:48:46 PM: $ prisma generate && next build
3:48:46 PM: Prisma schema loaded from prisma/schema.prisma
3:48:47 PM: ✔ Generated Prisma Client (v5.22.0) to ./node_modules/@prisma/client in 60ms
3:48:47 PM: Start by importing your Prisma Client (See: https://pris.ly/d/importing-client)
3:48:47 PM: Tip: Easily identify and fix slow SQL queries in your app. Optimize helps you enhance your visibility: https://pris.ly/--optimize
3:48:47 PM:  ⚠ You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env
3:48:48 PM: ⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
3:48:48 PM:   ▲ Next.js 14.2.33
3:48:48 PM:    Creating an optimized production build ...
3:49:04 PM:  ✓ Compiled successfully
3:49:04 PM:    Linting and checking validity of types ...
3:49:11 PM:    Collecting page data ...
3:49:16 PM:    Generating static pages (0/43) ...
3:49:16 PM:    Generating static pages (10/43)
3:49:17 PM:    Generating static pages (21/43)
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:49:17 PM:   digest: '2227658532'
3:49:17 PM: }
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: Error occurred prerendering page "/en/admin/products". Read more: https://nextjs.org/docs/messages/prerender-error
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:49:17 PM:   digest: '2227658532'
3:49:17 PM: }
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: Error occurred prerendering page "/en/orders". Read more: https://nextjs.org/docs/messages/prerender-error
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:49:17 PM:   digest: '2227658532'
3:49:17 PM: }
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: Error occurred prerendering page "/en/checkout". Read more: https://nextjs.org/docs/messages/prerender-error
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:49:17 PM:   digest: '2227658532'
3:49:17 PM: }
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: Error occurred prerendering page "/ar/checkout". Read more: https://nextjs.org/docs/messages/prerender-error
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:49:17 PM:   digest: '2227658532'
3:49:17 PM: }
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: Error occurred prerendering page "/en/cart". Read more: https://nextjs.org/docs/messages/prerender-error
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:49:17 PM:   digest: '2227658532'
3:49:17 PM: }
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: Error occurred prerendering page "/ar/orders". Read more: https://nextjs.org/docs/messages/prerender-error
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:49:17 PM:   digest: '2227658532'
3:49:17 PM: }
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: Error occurred prerendering page "/ar/cart". Read more: https://nextjs.org/docs/messages/prerender-error
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:49:17 PM:   digest: '2227658532'
3:49:17 PM: }
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: Error occurred prerendering page "/ar/admin/products". Read more: https://nextjs.org/docs/messages/prerender-error
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:49:17 PM:   digest: '2227658532'
3:49:17 PM: }
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: Error occurred prerendering page "/ar". Read more: https://nextjs.org/docs/messages/prerender-error
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:49:17 PM:   digest: '2227658532'
3:49:17 PM: }
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: Error occurred prerendering page "/_not-found". Read more: https://nextjs.org/docs/messages/prerender-error
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
    at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:    Generating static pages (32/43)
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:49:17 PM:   digest: '2227658532'
3:49:17 PM: }
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: Error occurred prerendering page "/en/menu". Read more: https://nextjs.org/docs/messages/prerender-error
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:49:17 PM:   digest: '2227658532'
3:49:17 PM: }
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: Error occurred prerendering page "/en". Read more: https://nextjs.org/docs/messages/prerender-error
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:49:17 PM:   digest: '2227658532'
3:49:17 PM: }
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: Error occurred prerendering page "/en/admin/categories". Read more: https://nextjs.org/docs/messages/prerender-error
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:49:17 PM:   digest: '2227658532'
3:49:17 PM: }
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: Error occurred prerendering page "/ar/admin/categories". Read more: https://nextjs.org/docs/messages/prerender-error
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:49:17 PM:   digest: '2227658532'
3:49:17 PM: }
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: Error occurred prerendering page "/ar/admin/orders". Read more: https://nextjs.org/docs/messages/prerender-error
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:49:17 PM:   digest: '2227658532'
3:49:17 PM: }
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: Error occurred prerendering page "/en/admin/orders". Read more: https://nextjs.org/docs/messages/prerender-error
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:49:17 PM:   digest: '2227658532'
3:49:17 PM: }
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: Error occurred prerendering page "/ar/menu". Read more: https://nextjs.org/docs/messages/prerender-error
3:49:17 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:49:17 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:49:17 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:49:17 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:49:17 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:49:17 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:49:17 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:49:17 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:49:17 PM: Error: <Html> should not be imported outside of pages/_document.
3:49:17 PM: Read more: https://nextjs.org/docs/messages/no-document-import-in-page
3:49:17 PM:     at Q (/opt/build/repo/node_modules/next/dist/compiled/next-server/pages.runtime.prod.js:16:5430)
3:49:17 PM:     at I (/opt/build/repo/.next/server/chunks/1682.js:6:1263)
3:49:17 PM:     at renderWithHooks (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5658:16)
3:49:17 PM:     at renderIndeterminateComponent (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5732:15)
3:49:17 PM:     at renderElement (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5957:7)
3:49:17 PM:     at renderNodeDestructiveImpl (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:6115:11)
3:49:17 PM:     at renderNodeDestructive (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:6087:14)
3:49:17 PM:     at finishClassComponent (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5688:3)
3:49:17 PM:     at renderClassComponent (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5696:3)
3:49:17 PM:     at renderElement (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5954:7)
3:49:17 PM: Error occurred prerendering page "/404". Read more: https://nextjs.org/docs/messages/prerender-error
3:49:17 PM: Error: <Html> should not be imported outside of pages/_document.
3:49:17 PM: Read more: https://nextjs.org/docs/messages/no-document-import-in-page
3:49:17 PM:     at Q (/opt/build/repo/node_modules/next/dist/compiled/next-server/pages.runtime.prod.js:16:5430)
3:49:17 PM:     at I (/opt/build/repo/.next/server/chunks/1682.js:6:1263)
3:49:17 PM:     at renderWithHooks (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5658:16)
3:49:17 PM:     at renderIndeterminateComponent (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5732:15)
3:49:17 PM:     at renderElement (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5957:7)
3:49:17 PM:     at renderNodeDestructiveImpl (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:6115:11)
3:49:17 PM:     at renderNodeDestructive (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:6087:14)
3:49:17 PM:     at finishClassComponent (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5688:3)
3:49:17 PM:     at renderClassComponent (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5696:3)
3:49:17 PM:     at renderElement (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5954:7)
3:49:18 PM: Failed during stage 'building site': Build script returned non-zero exit code: 2 (https://ntl.fyi/exit-code-2)
3:49:18 PM: Error: <Html> should not be imported outside of pages/_document.
3:49:18 PM: Read more: https://nextjs.org/docs/messages/no-document-import-in-page
3:49:18 PM:     at Q (/opt/build/repo/node_modules/next/dist/compiled/next-server/pages.runtime.prod.js:16:5430)
3:49:18 PM:     at I (/opt/build/repo/.next/server/chunks/1682.js:6:1263)
3:49:18 PM:     at renderWithHooks (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5658:16)
3:49:18 PM:     at renderIndeterminateComponent (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5732:15)
3:49:18 PM:     at renderElement (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5957:7)
3:49:18 PM:     at renderNodeDestructiveImpl (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:6115:11)
3:49:18 PM:     at renderNodeDestructive (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:6087:14)
3:49:18 PM:     at finishClassComponent (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5688:3)
3:49:18 PM:     at renderClassComponent (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5696:3)
3:49:18 PM:     at renderElement (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5954:7)
3:49:18 PM: Error occurred prerendering page "/500". Read more: https://nextjs.org/docs/messages/prerender-error
3:49:18 PM: Error: <Html> should not be imported outside of pages/_document.
3:49:18 PM: Read more: https://nextjs.org/docs/messages/no-document-import-in-page
3:49:18 PM:     at Q (/opt/build/repo/node_modules/next/dist/compiled/next-server/pages.runtime.prod.js:16:5430)
3:49:18 PM:     at I (/opt/build/repo/.next/server/chunks/1682.js:6:1263)
3:49:18 PM:     at renderWithHooks (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5658:16)
3:49:18 PM:     at renderIndeterminateComponent (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5732:15)
3:49:18 PM:     at renderElement (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5957:7)
3:49:18 PM:     at renderNodeDestructiveImpl (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:6115:11)
3:49:18 PM:     at renderNodeDestructive (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:6087:14)
3:49:18 PM:     at finishClassComponent (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5688:3)
3:49:18 PM:     at renderClassComponent (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5696:3)
3:49:18 PM:     at renderElement (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5954:7)
3:49:18 PM:  ✓ Generating static pages (43/43)
3:49:18 PM: > Export encountered errors on following paths:
3:49:18 PM: 	/[lang]/admin/categories/page: /ar/admin/categories
3:49:18 PM: 	/[lang]/admin/categories/page: /en/admin/categories
3:49:18 PM: 	/[lang]/admin/orders/page: /ar/admin/orders
3:49:18 PM: 	/[lang]/admin/orders/page: /en/admin/orders
3:49:18 PM: 	/[lang]/admin/products/page: /ar/admin/products
3:49:18 PM: 	/[lang]/admin/products/page: /en/admin/products
3:49:18 PM: 	/[lang]/cart/page: /ar/cart
3:49:18 PM: 	/[lang]/cart/page: /en/cart
3:49:18 PM: 	/[lang]/checkout/page: /ar/checkout
3:49:18 PM: 	/[lang]/checkout/page: /en/checkout
3:49:18 PM: 	/[lang]/menu/page: /ar/menu
3:49:18 PM: 	/[lang]/menu/page: /en/menu
3:49:18 PM: 	/[lang]/orders/page: /ar/orders
3:49:18 PM: 	/[lang]/orders/page: /en/orders
3:49:18 PM: 	/[lang]/page: /ar
3:49:18 PM: 	/[lang]/page: /en
3:49:18 PM: 	/_error: /404
3:49:18 PM: 	/_error: /500
3:49:18 PM: 	/_not-found/page: /_not-found
3:49:18 PM: error Command failed with exit code 1. (https://ntl.fyi/exit-code-1)
3:49:18 PM: info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
3:49:18 PM: ​
3:49:18 PM: "build.command" failed                                        
3:49:18 PM: ────────────────────────────────────────────────────────────────
3:49:18 PM: ​
3:49:18 PM:   Error message
3:49:18 PM:   Command failed with exit code 1: yarn run build (https://ntl.fyi/exit-code-1)
3:49:18 PM: ​
3:49:18 PM:   Error location
3:49:18 PM:   In Build command from Netlify app:
3:49:18 PM:   yarn run build
3:49:18 PM: ​
3:49:18 PM:   Resolved config
3:49:18 PM:   build:
3:49:18 PM:     command: yarn run build
3:49:18 PM:     commandOrigin: ui
3:49:18 PM:     environment:
3:49:18 PM:       - DATABASE_URL
3:49:18 PM:       - FRONTEND_URL
3:49:18 PM:       - JWT_EXPIRES_IN
3:49:18 PM:       - JWT_SECRET
3:49:18 PM:       - NEXT_PUBLIC_API_URL
3:49:18 PM:       - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
3:49:18 PM:       - NODE_ENV
3:49:18 PM:       - PORT
3:49:18 PM:       - STRIPE_SECRET_KEY
3:49:18 PM:       - STRIPE_WEBHOOK_SECRET
3:49:18 PM:       - SUPABASE_SERVICE_ROLE_KEY
3:49:18 PM:       - SUPABASE_URL
3:49:18 PM:       - TWILIO_ACCOUNT_SID
3:49:18 PM:       - TWILIO_AUTH_TOKEN
3:49:18 PM:       - TWILIO_PHONE_NUMBER
3:49:18 PM:     publish: /opt/build/repo/.next
3:49:18 PM:     publishOrigin: ui
3:49:18 PM:   plugins:
3:49:18 PM:     - inputs: {}
3:49:18 PM:       origin: ui
3:49:18 PM:       package: "@netlify/plugin-nextjs"
3:49:18 PM: Build failed due to a user error: Build script returned non-zero exit code: 2
3:49:18 PM: Failing build: Failed to build site
3:49:19 PM: Finished processing build request in 1m10.291s