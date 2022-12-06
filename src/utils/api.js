import axios from 'axios';

const articlesApi = axios.create({
	baseURL: 'https://easy-gray-walrus-coat.cyclic.app/api/',
});

export const getArticles = () => {
	return articlesApi
		.get(`/articles`)
		.then((res) => {
			return res.data.articles;
		})
		.catch((err) => {
			console.log(err);
		});
};
