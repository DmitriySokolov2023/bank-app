export class Layout {
	constructor({ router, children }) {
		this.router = router
		this.children = children
	}

	render() {
		const header = '<header>Header</header>'
		return `
			${header}
			<main>${this.children}</main>
			
		`
	}
}
