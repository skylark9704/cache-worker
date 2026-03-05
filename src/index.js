export default {
    async fetch(request) {
        try {
            return await fetch("https://afullstackguy.dev", {
                cf: { timeout: 3 }
            })
        } catch (e) {
            return fetch("https://backup.afullstackguy.dev")
        }
    }
}
