import { Layout } from '@/components/layout/layuot.component'
import { NotFound } from '@/components/screens/not-found/not-found.component'

import { ROUTES } from './routes.data'

export class Router {
	#routes
	#currentRoute
	#layout = null
	constructor() {
		this.#routes = ROUTES
		this.#currentRoute = null
		this.#handleRouteChange()
	}

	getCurrentPath() {
		return window.location.pathname
	}
	#handleRouteChange() {
		const path = this.getCurrentPath() || '/'
		let route = this.#routes.find(rout => rout.path === path)

		if (!route) {
			route = {
				component: NotFound
			}
		}
		this.#currentRoute = route
		this.#render()
	}
	#render() {
		const component = new this.#currentRoute.component()

		if (!this.#layout) {
			this.#layout = new Layout({
				router: this,
				children: component.render()
			})
		} else {
			document.querySelector('main').innerHTML = component.render()
		}

		document.getElementById('app').innerHTML = this.#layout.render()
	}
}
