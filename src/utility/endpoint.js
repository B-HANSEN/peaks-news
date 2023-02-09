const key = '9fb2a69b-0046-437c-b8f8-4962459d2092';
// const key = 'YOUR_API_KEY';
const url = 'https://content.guardianapis.com/search';

export const getTopStories = async filter => {
	const fields =
		'show-fields=headline,thumbnail,short-url,body,bodyText,trailText&query-fields=body';
	const order = filter === 'old' ? 'order-by=oldest' : 'order-by=newest';

	try {
		let response = await fetch(`${url}?api-key=${key}&${fields}&${order}`);
		let articles = await response.json();
		let result = articles.response;

		return result;
	} catch (error) {
		throw error;
	}
};

export const getCategoryStories = async filter => {
	const fields = 'show-fields=headline,thumbnail';
	const section = 'section=sport';
	const order = filter === 'old' ? 'order-by=oldest' : 'order-by=newest';

	try {
		let response = await fetch(
			`${url}?api-key=${key}&${fields}&${order}&${section}`
		);
		let articles = await response.json();
		let result = articles.response;

		return result;
	} catch (error) {
		throw error;
	}
};

const articleUrl = 'https://content.guardianapis.com';
const query_body = 'show-fields=body,headline,trailText,thumbnail';

export const getSingleArticle = async id => {
	try {
		let response = await fetch(
			`${articleUrl}${`${id}`}?api-key=${key}&${query_body}`
		);
		let articles = await response.json();
		let result = articles.response;

		return result;
	} catch (error) {
		console.log('ERROR');
		throw error;
	}
};
