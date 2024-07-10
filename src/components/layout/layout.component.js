import renderService from '@/core/services/render.service'

export class Layout {
	constructor({ router, children }) {
		this.router = router
		this.children = children
	}

	render() {
		const headerHTML = renderService.htmlToElement()
		return `
			${headerHTML}
			<main>${this.children}</main>
			
		`
	}
}
