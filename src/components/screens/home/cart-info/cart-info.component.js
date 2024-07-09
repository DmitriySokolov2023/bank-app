import ChildComponent from '@/core/component/child.component'
import renderService from '@/core/services/render.service'

import styles from './cart-info.module.scss'
import template from './cart-info.template.html'

export class CartInfo extends ChildComponent {
	render() {
		this.element = renderService.htmlToElement(template, [], styles);
		
		return this.element;
	}
}
