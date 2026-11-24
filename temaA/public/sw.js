const CACHE = "lp-v1";
// Instalação: guarda a página inicial no cache
self.addEventListener("install", (evento) => {
    evento.waitUntil(
        caches.open(CACHE).then((cache) => cache.addAll(["/", "/index.html"])),
    );
});
// Toda requisição: tenta a rede; se não tiver internet, usa o cache
self.addEventListener("fetch", (evento) => {
    if (evento.request.method !== "GET") return;
    evento.respondWith(
        fetch(evento.request)
            .then((resposta) => {
                const copia = resposta.clone();
                caches.open(CACHE).then((cache) => cache.put(evento.request, copia));
                return resposta;
            })
            .catch(() => caches.match(evento.request)),
    );
});