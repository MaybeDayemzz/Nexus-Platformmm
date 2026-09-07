# NEXUS

Premium, frontend-only SaaS workspace built with HTML, CSS and vanilla JavaScript.

## Run
Serve the extracted folder with any static server, then open `index.html`.
Example: `python -m http.server 8080`

## Included
- Responsive desktop/tablet/mobile application shell
- Communities CRUD, switcher, member search/filter/sort and CSV export
- Local-first chat, message editing/deletion, search and threads
- Projects, tasks and native HTML5 drag-and-drop Kanban
- Analytics range controls, responsive Canvas charts and CSV export
- Developer API key demo boundary, webhooks UI, API docs and Roblox integration boundary
- Creator search/filter/sort/follow/like
- Moderation actions and searchable/exportable audit logs
- Notifications, command palette, global search, settings, profile and sessions
- PWA manifest, service worker and offline page
- Accessibility and reduced-motion support

## Important security boundary
This is a static frontend demo. It does not provide secure authentication, real WebSocket delivery, payment processing, privileged Discord/Roblox access, or secure secret storage. It never stores passwords, authentication tokens, private credentials or production API secrets in localStorage.

External integrations display an explicit configuration boundary rather than claiming success.

## Local state
Non-sensitive demo state is stored under the `nexus-v1` localStorage key. Reset with:
```js
localStorage.removeItem('nexus-v1'); location.reload();
```

## Production roadmap
Recommended backend: Node.js + PostgreSQL + Redis + authenticated WebSockets, OAuth/OIDC, Stripe, and server-side Discord/Roblox integrations.

Example API surface:
- `GET/POST /api/communities`
- `GET /api/communities/:id/members`
- `GET/POST /api/channels/:id/messages`
- `GET/POST/PATCH/DELETE /api/projects`
- `GET /api/analytics?range=30d`
- `POST /api/billing/checkout`
- `GET /api/integrations/roblox/profile`

For production chat, authenticate WebSockets server-side, persist messages in PostgreSQL, use Redis for fan-out/rate limiting, and enforce permissions on the server.

## Deployment/security checklist
HTTPS, strict CSP, secure headers, backend authorization, secret management, rate limiting, webhook signature verification, CSRF protection for cookie sessions, logging/monitoring, accessibility testing, browser testing and backups should be added before production use.

## License
MIT. See `LICENSE`.
