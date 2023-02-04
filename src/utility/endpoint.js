// import env.api_key
const key = '9fb2a69b-0046-437c-b8f8-4962459d2092';
const url = `https://content.guardianapis.com/search`;

export const getArticles = async () => {
	const query =
		'show-fields=headline,thumbnail,short-url,body,bodyText,trailText&order-by=newest&query-fields=body';
	const query2 = 'section=lifeandstyle';

	try {
		let response = await fetch(`${url}?api-key=${key}&${query}&${query2}`);
		let articles = await response.json();

		let result = articles.response.results.slice(0, 8);

		return result;
	} catch (error) {
		throw error;
	}
};
