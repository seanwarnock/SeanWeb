# The Warnock Homepage

### Header test
This is my basic homepage.  Currently the active site is a containerized version of [Caddy](https://caddyserver.com/).
### Automotive Calculations
There is a largish amount of ECMAScript / HTML perform some calculations for automotive applications.  These calculations are extremely simple but more of a DOM script practice.

***

### To do items
1. Edit /etc/caddy/Caddyfile and make certain to add warnocksolutions.com

```
templates
encode zstd gzip
```

# Setup

## NAT Configuration
Big warning that the AT&T router required deleting the NAT translation.  Then clearing out the ARP
table/remembered hosts.  Finally added the NAT entry back in.  This was required to get NAT
working again.  It appears the router locks NAT entries to MAC address or some other identifier.

## Individual host configuration
This is needed to properly support QUIC, HTTP/3 and HTTP/2
https://github.com/quic-go/quic-go/wiki/UDP-Buffer-Sizes
