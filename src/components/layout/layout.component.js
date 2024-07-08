export class Layout {
	constructor({ router, children }) {
		this.router = router
		this.children = children
	}

	render() {
		const headerHTML = `<header>
			<nav>
				<a href="/about-us">About Us</a>
				<a href="/auth">Auth</a>
				<a href="/">Home</a>
			</nav>
		</header>`
		return `
			${headerHTML}
			<main>${this.children}</main>
			
		`
	}
}
