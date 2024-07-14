export const getSmartPageNumberDisplay = (page: number) => {
	let smartPage = '';
	if (page < 0) {
		switch (page) {
			case -17:
				smartPage = 'xvii';
				break;
			case -20:
				smartPage = 'xx';
				break;
			default:
				smartPage = 'UNKNOWN: ' + String(page)
		}
	} else {
		smartPage = String(page);
	}
	return `- p.&nbsp;${smartPage}`;
}