# Ein ganz einfaches Frontend

Vue und axios Bibliotheken einbinden:
```html
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

Proxy auf Backend in VS Code _Live Server_ konfigurieren (`Ctrl+,`):
```json
"liveServer.settings.proxy": {
  "enable": true,
  "baseUri": "/api",
  "proxyUri": "http://127.0.0.1:3000/api"
},
```
