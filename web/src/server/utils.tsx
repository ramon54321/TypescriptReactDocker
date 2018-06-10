import * as React from "react"
import * as ejs from "ejs"
import { renderToString } from "react-dom/server"

export interface PageRenderOptions {
    app: React.ComponentClass<any>
    script: string
}

export function renderReactPage(options: PageRenderOptions) {
    const appHtml = renderToString(React.createElement(options.app))
    const pageOptions: any = { ...options }
    pageOptions.app = appHtml
    return new Promise((resolve, reject) => {
        ejs.renderFile(__dirname + "/templates/base.ejs",
            pageOptions, (err, html) => {
            resolve(html)
        })
    })
}
