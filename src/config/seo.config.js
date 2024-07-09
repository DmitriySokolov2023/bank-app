const SITE_NAME = 'My Bank | '

export const getTitle = title => {
	return title ? `${SITE_NAME + title}` : `${SITE_NAME + 'Pure Js'}`
}
