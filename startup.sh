docker run -d -p 80:80 -p 443:443 -p 443:443/udp \
    -v $PWD/Caddyfile:/etc/caddy/Caddyfile \
    -v caddy_data:/data \
    caddy
