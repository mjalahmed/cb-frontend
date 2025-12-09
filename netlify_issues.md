3:43:10 PM: Netlify Build                                                 
3:43:10 PM: ────────────────────────────────────────────────────────────────
3:43:10 PM: ​
3:43:10 PM: ❯ Version
3:43:10 PM:   @netlify/build 35.5.5
3:43:10 PM: ​
3:43:10 PM: ❯ Flags
3:43:10 PM:   accountId: 690c82697f0bd5ca8ed1f3c7
3:43:10 PM:   baseRelDir: true
3:43:10 PM:   buildId: 6938193a099de5000831036c
3:43:10 PM:   deployId: 6938193a099de5000831036e
3:43:10 PM: ​
3:43:10 PM: ❯ Current directory
3:43:10 PM:   /opt/build/repo
3:43:10 PM: ​
3:43:10 PM: ❯ Config file
3:43:10 PM:   No config file was defined: using default values.
3:43:10 PM: ​
3:43:10 PM: ❯ Context
3:43:10 PM:   production
3:43:11 PM: ​
3:43:11 PM: ❯ Using Next.js Runtime - v5.14.7
3:43:12 PM: No Next.js cache to restore
3:43:12 PM: ​
3:43:12 PM: Build command from Netlify app                                
3:43:12 PM: ────────────────────────────────────────────────────────────────
3:43:12 PM: ​
3:43:12 PM: $ yarn run build
3:43:12 PM: yarn run v1.22.22
3:43:13 PM: $ prisma generate && next build
3:43:13 PM: Prisma schema loaded from prisma/schema.prisma
3:43:14 PM: ✔ Generated Prisma Client (v5.22.0) to ./node_modules/@prisma/client in 71ms
3:43:14 PM: Start by importing your Prisma Client (See: https://pris.ly/d/importing-client)
3:43:14 PM: Help us improve the Prisma ORM for everyone. Share your feedback in a short 2-min survey: https://pris.ly/orm/survey/release-5-22
3:43:14 PM:  ⚠ You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env
3:43:15 PM: ⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
3:43:15 PM:   ▲ Next.js 14.2.33
3:43:15 PM:    Creating an optimized production build ...
3:43:30 PM:  ✓ Compiled successfully
3:43:30 PM:    Linting and checking validity of types ...
3:43:37 PM:    Collecting page data ...
3:43:42 PM:    Generating static pages (0/43) ...
3:43:43 PM:    Generating static pages (10/43)
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:43:43 PM:   digest: '2227658532'
3:43:43 PM: }
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: Error occurred prerendering page "/_not-found". Read more: https://nextjs.org/docs/messages/prerender-error
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:43:43 PM:   digest: '2227658532'
3:43:43 PM: }
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: Error occurred prerendering page "/ar/admin/categories". Read more: https://nextjs.org/docs/messages/prerender-error
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:43:43 PM:   digest: '2227658532'
3:43:43 PM: }
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: Error occurred prerendering page "/en/admin/products". Read more: https://nextjs.org/docs/messages/prerender-error
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:43:43 PM:   digest: '2227658532'
3:43:43 PM: }
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: Error occurred prerendering page "/en/cart". Read more: https://nextjs.org/docs/messages/prerender-error
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:43:43 PM:   digest: '2227658532'
3:43:43 PM: }
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: Error occurred prerendering page "/en". Read more: https://nextjs.org/docs/messages/prerender-error
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:43:43 PM:   digest: '2227658532'
3:43:43 PM: }
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: Error occurred prerendering page "/ar/checkout". Read more: https://nextjs.org/docs/messages/prerender-error
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:43:43 PM:   digest: '2227658532'
3:43:43 PM: }
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: Error occurred prerendering page "/ar/orders". Read more: https://nextjs.org/docs/messages/prerender-error
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:43:43 PM:   digest: '2227658532'
3:43:43 PM: }
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: Error occurred prerendering page "/ar". Read more: https://nextjs.org/docs/messages/prerender-error
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:43:43 PM:   digest: '2227658532'
3:43:43 PM: }
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: Error occurred prerendering page "/en/admin/orders". Read more: https://nextjs.org/docs/messages/prerender-error
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:43:43 PM:   digest: '2227658532'
3:43:43 PM: }
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: Error occurred prerendering page "/en/menu". Read more: https://nextjs.org/docs/messages/prerender-error
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
    at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:43:43 PM:   digest: '2227658532'
3:43:43 PM: }
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: Error occurred prerendering page "/ar/admin/orders". Read more: https://nextjs.org/docs/messages/prerender-error
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:    Generating static pages (21/43)
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:43:43 PM:   digest: '2227658532'
3:43:43 PM: }
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: Error occurred prerendering page "/ar/cart". Read more: https://nextjs.org/docs/messages/prerender-error
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:43:43 PM:   digest: '2227658532'
3:43:43 PM: }
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: Error occurred prerendering page "/ar/admin/products". Read more: https://nextjs.org/docs/messages/prerender-error
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:43:43 PM:   digest: '2227658532'
3:43:43 PM: }
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: Error occurred prerendering page "/en/checkout". Read more: https://nextjs.org/docs/messages/prerender-error
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:43:43 PM:   digest: '2227658532'
3:43:43 PM: }
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: Error occurred prerendering page "/ar/menu". Read more: https://nextjs.org/docs/messages/prerender-error
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:43:43 PM:   digest: '2227658532'
3:43:43 PM: }
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: Error occurred prerendering page "/en/orders". Read more: https://nextjs.org/docs/messages/prerender-error
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908) {
3:43:43 PM:   digest: '2227658532'
3:43:43 PM: }
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: Error occurred prerendering page "/en/admin/categories". Read more: https://nextjs.org/docs/messages/prerender-error
3:43:43 PM: TypeError: Cannot read properties of null (reading 'useContext')
3:43:43 PM:     at t.useContext (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:109365)
3:43:43 PM:     at s (/opt/build/repo/.next/server/chunks/4471.js:1:21461)
3:43:43 PM:     at h (/opt/build/repo/.next/server/chunks/4471.js:1:13428)
3:43:43 PM:     at au (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:15122
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM:     at a_ (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
3:43:43 PM:     at ab (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
3:43:43 PM:     at /opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
3:43:43 PM:     at aw (/opt/build/repo/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
3:43:43 PM: Error: <Html> should not be imported outside of pages/_document.
3:43:43 PM: Read more: https://nextjs.org/docs/messages/no-document-import-in-page
3:43:43 PM:     at Q (/opt/build/repo/node_modules/next/dist/compiled/next-server/pages.runtime.prod.js:16:5430)
3:43:43 PM:     at I (/opt/build/repo/.next/server/chunks/1682.js:6:1263)
3:43:43 PM:     at renderWithHooks (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5658:16)
3:43:43 PM:     at renderIndeterminateComponent (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5732:15)
3:43:43 PM:     at renderElement (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5957:7)
3:43:43 PM:     at renderNodeDestructiveImpl (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:6115:11)
3:43:43 PM:     at renderNodeDestructive (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:6087:14)
3:43:43 PM:     at finishClassComponent (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5688:3)
3:43:43 PM:     at renderClassComponent (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5696:3)
3:43:43 PM:     at renderElement (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5954:7)
3:43:43 PM: Error occurred prerendering page "/500". Read more: https://nextjs.org/docs/messages/prerender-error
3:43:43 PM: Error: <Html> should not be imported outside of pages/_document.
3:43:43 PM: Read more: https://nextjs.org/docs/messages/no-document-import-in-page
3:43:43 PM:     at Q (/opt/build/repo/node_modules/next/dist/compiled/next-server/pages.runtime.prod.js:16:5430)
3:43:43 PM:     at I (/opt/build/repo/.next/server/chunks/1682.js:6:1263)
3:43:43 PM:     at renderWithHooks (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5658:16)
3:43:43 PM:     at renderIndeterminateComponent (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5732:15)
3:43:43 PM:     at renderElement (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5957:7)
3:43:43 PM:     at renderNodeDestructiveImpl (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:6115:11)
3:43:43 PM:     at renderNodeDestructive (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:6087:14)
3:43:43 PM:     at finishClassComponent (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5688:3)
3:43:43 PM:     at renderClassComponent (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5696:3)
3:43:43 PM:     at renderElement (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5954:7)
3:43:43 PM:    Generating static pages (32/43)
3:43:43 PM: Error: <Html> should not be imported outside of pages/_document.
3:43:43 PM: Read more: https://nextjs.org/docs/messages/no-document-import-in-page
3:43:43 PM:     at Q (/opt/build/repo/node_modules/next/dist/compiled/next-server/pages.runtime.prod.js:16:5430)
3:43:43 PM:     at I (/opt/build/repo/.next/server/chunks/1682.js:6:1263)
3:43:43 PM:     at renderWithHooks (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5658:16)
3:43:43 PM:     at renderIndeterminateComponent (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5732:15)
3:43:43 PM:     at renderElement (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5957:7)
3:43:43 PM:     at renderNodeDestructiveImpl (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:6115:11)
3:43:43 PM:     at renderNodeDestructive (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:6087:14)
3:43:43 PM:     at finishClassComponent (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5688:3)
3:43:43 PM:     at renderClassComponent (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5696:3)
3:43:43 PM:     at renderElement (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5954:7)
3:43:43 PM: Error occurred prerendering page "/404". Read more: https://nextjs.org/docs/messages/prerender-error
3:43:43 PM: Error: <Html> should not be imported outside of pages/_document.
3:43:43 PM: Read more: https://nextjs.org/docs/messages/no-document-import-in-page
3:43:43 PM:     at Q (/opt/build/repo/node_modules/next/dist/compiled/next-server/pages.runtime.prod.js:16:5430)
3:43:43 PM:     at I (/opt/build/repo/.next/server/chunks/1682.js:6:1263)
3:43:43 PM:     at renderWithHooks (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5658:16)
3:43:43 PM:     at renderIndeterminateComponent (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5732:15)
3:43:43 PM:     at renderElement (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5957:7)
3:43:43 PM:     at renderNodeDestructiveImpl (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:6115:11)
3:43:43 PM:     at renderNodeDestructive (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:6087:14)
3:43:43 PM:     at finishClassComponent (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5688:3)
3:43:43 PM:     at renderClassComponent (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5696:3)
3:43:43 PM:     at renderElement (/opt/build/repo/node_modules/react-dom/cjs/react-dom-server.browser.development.js:5954:7)
3:43:44 PM: Failed during stage 'building site': Build script returned non-zero exit code: 2 (https://ntl.fyi/exit-code-2)
3:43:44 PM:  ✓ Generating static pages (43/43)
3:43:44 PM: > Export encountered errors on following paths:
3:43:44 PM: 	/[lang]/admin/categories/page: /ar/admin/categories
3:43:44 PM: 	/[lang]/admin/categories/page: /en/admin/categories
3:43:44 PM: 	/[lang]/admin/orders/page: /ar/admin/orders
3:43:44 PM: 	/[lang]/admin/orders/page: /en/admin/orders
3:43:44 PM: 	/[lang]/admin/products/page: /ar/admin/products
3:43:44 PM: 	/[lang]/admin/products/page: /en/admin/products
3:43:44 PM: 	/[lang]/cart/page: /ar/cart
3:43:44 PM: 	/[lang]/cart/page: /en/cart
3:43:44 PM: 	/[lang]/checkout/page: /ar/checkout
3:43:44 PM: 	/[lang]/checkout/page: /en/checkout
3:43:44 PM: 	/[lang]/menu/page: /ar/menu
3:43:44 PM: 	/[lang]/menu/page: /en/menu
3:43:44 PM: 	/[lang]/orders/page: /ar/orders
3:43:44 PM: 	/[lang]/orders/page: /en/orders
3:43:44 PM: 	/[lang]/page: /ar
3:43:44 PM: 	/[lang]/page: /en
3:43:44 PM: 	/_error: /404
3:43:44 PM: 	/_error: /500
3:43:44 PM: 	/_not-found/page: /_not-found
3:43:44 PM: error Command failed with exit code 1. (https://ntl.fyi/exit-code-1)
3:43:44 PM: info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
3:43:44 PM: ​
3:43:44 PM: "build.command" failed                                        
3:43:44 PM: ────────────────────────────────────────────────────────────────
3:43:44 PM: ​
3:43:44 PM:   Error message
3:43:44 PM:   Command failed with exit code 1: yarn run build (https://ntl.fyi/exit-code-1)
3:43:44 PM: ​
3:43:44 PM:   Error location
3:43:44 PM:   In Build command from Netlify app:
3:43:44 PM:   yarn run build
3:43:44 PM: ​
3:43:44 PM:   Resolved config
3:43:44 PM:   build:
3:43:44 PM:     command: yarn run build
3:43:44 PM:     commandOrigin: ui
3:43:44 PM:     environment:
3:43:44 PM:       - DATABASE_URL
3:43:44 PM:       - FRONTEND_URL
3:43:44 PM:       - JWT_EXPIRES_IN
3:43:44 PM:       - JWT_SECRET
3:43:44 PM:       - NEXT_PUBLIC_API_URL
3:43:44 PM:       - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
3:43:44 PM:       - NODE_ENV
3:43:44 PM:       - PORT
3:43:44 PM:       - STRIPE_SECRET_KEY
3:43:44 PM:       - STRIPE_WEBHOOK_SECRET
3:43:44 PM:       - SUPABASE_SERVICE_ROLE_KEY
3:43:44 PM:       - SUPABASE_URL
3:43:44 PM:       - TWILIO_ACCOUNT_SID
3:43:44 PM:       - TWILIO_AUTH_TOKEN
3:43:44 PM:       - TWILIO_PHONE_NUMBER
3:43:44 PM:     publish: /opt/build/repo/.next
3:43:44 PM:     publishOrigin: ui
3:43:44 PM:   plugins:
3:43:44 PM:     - inputs: {}
3:43:44 PM:       origin: ui
3:43:44 PM:       package: "@netlify/plugin-nextjs"
3:43:44 PM: Build failed due to a user error: Build script returned non-zero exit code: 2
3:43:44 PM: Failing build: Failed to build site
3:43:45 PM: Finished processing build request in 1m8.903s