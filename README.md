## Next.js ChatGPT Integration

Integration with OpenAI API using Next.js, TailwindCSS and shadcn/ui.

## Overview

Simple app that allows to interact with OpenAI ChatGPT by using basic form.
Also used here Vercel AI SDK for streaming text response.

## Getting started

You can clone this repo and use it on your local maschine.

Remeber: Fill .env with proper API key. Look .env.template.

It is also possible to choose AI model version. Change it in /src/app/api/chat/route.ts

Then simply:

```bash
npm run build
# and
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Good to know

This app wasn't realy tested in production, so keep it in mind.
