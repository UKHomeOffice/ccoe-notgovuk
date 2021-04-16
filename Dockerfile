FROM node:12-alpine

RUN apk add --no-cache ca-certificates \
 && apk upgrade --no-cache \
 && addgroup -S app \
 && adduser -S app -G app -u 31337 -h /app/ \
 && chown -R app:app /app/

USER app
WORKDIR /app
ENV NODE_ENV production
ENV MODE server

COPY package.json /app/
COPY dist/ /app/dist/

USER 31337
ENV LISTEN_HOST="0.0.0.0" \
    LISTEN_PORT="8080" \
    SSR_ONLY="false" \
    SESSIONS_SECRET="changeme" \
    AUTH_METHOD="oidc" \
    OIDC_ISSUER="https://sso-dev.notprod.homeoffice.gov.uk/auth/realms/prototype/" \
    OIDC_CLIENT_ID="local-dev" \
    OIDC_CLIENT_SECRET="" \
    OIDC_REDIRECT_URI="http://localhost:8080" \
    AUTH_HEADER_USERNAME="x-auth-username" \
    AUTH_HEADER_GROUPS="x-auth-groups" \
    AUTH_HEADER_ROLES="x-auth-roles"
CMD ["node", "."]
