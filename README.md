# Portfolio Setup

## Environment Variables

Copy `.env.example` to `.env` or `.env.local` and provide your real Cerebras credentials:

```bash
CEREBRAS_API_KEY=your_key_here
CEREBRAS_MODEL=gpt-oss-120b
```

The browser never receives the secret. The chat UI calls `app/api/assistant/route.ts`, and that route sends the request to Cerebras server-side.

## Production Checks

Run the local verification flow before deploying:

```bash
npm run typecheck
npm run build
npm run start
```

## Deployment Notes

This project requires a Node-capable deployment target because it uses:

- App Router server rendering
- `app/api/assistant/route.ts`
- server-side outbound requests to Cerebras

A static-only host is not enough for the AI assistant.

Before production deploy, make sure:

- `CEREBRAS_API_KEY` is configured in the hosting platform
- `CEREBRAS_MODEL` is set if you want to override the default model
- the deployment platform allows outbound HTTPS requests to `https://api.cerebras.ai`

## Portfolio Data Source

The assistant is grounded from the portfolio data already maintained in the repo, primarily from:

- `data/profile.ts`
- `data/projects.ts`
- `data/thinking.ts`
- `data/about.ts`
- `data/experience.ts`
- `data/education.ts`
- `data/framework.ts`
- `data/real-decision-cases.ts`

Update those source files to change what the assistant can safely answer.
