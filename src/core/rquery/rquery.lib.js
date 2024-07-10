class RQuery {
	constructor(selector) {
		if (typeof selector === 'string') {
			this.element = document.querySelector(selector)
			console.log(this.element)
			if (!this.element) {
				throw new Error(`Element ${selector} not found!`)
			}
		} else if (selector instanceof HTMLElement) {
			this.element = selector
			console.log(this.element)
		} else {
			throw new Error('Invalid selector type')
		}
	}

	find(selector) {
		const element = new RQuery(this.element.querySelector(selector))
		if (element) {
			return element
		} else {
			throw new Error(`Element ${selector} not found!`)
		}
	}
	css(property, value) {
		if (typeof property != 'string' || typeof value != 'string') {
			throw new Error('property and value must be string')
		}
		this.element.style[property] = value
		return this
	}
	append(childElement) {
		this.element.appendChild(childElement)
		return this
	}
	before(newElement){
		if(!(newElement instanceof HTMLElement)){
			throw new Error('Element must be an HTMLElement')
		}
		
	}
}

export function $R(selector) {
	return new RQuery(selector)
}
