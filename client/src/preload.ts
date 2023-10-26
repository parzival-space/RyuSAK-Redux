import { shell, contextBridge } from "electron";

contextBridge.exposeInMainWorld("electron", {
    // allow access to open url in default browser
    async openInBrowser(url: string) {
        const verifyRegex = /^https?:\/\//;

        // check if url is valid
        if (!verifyRegex.test(url))
            throw `The entered URL ${url} is not a valid web URL.`;

        await shell.openExternal(url)
    }
})