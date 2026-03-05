export default {
    async fetch(request) {

        try {
            const res = await fetch(request, { cf: { timeout: 2 } });

            if (res.ok) {
                return res;
            }

            throw new Error("primary failed");

        } catch {

            const url = new URL(request.url);

            const backupUrl = "https://backup.afullstackguy.dev" + url.pathname + url.search;

            return fetch(backupUrl);
        }
    }
}