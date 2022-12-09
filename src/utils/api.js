import axios from 'axios';

const articlesApi = axios.create({
	baseURL: 'https://be-nc-news-img.cyclic.app/api',
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
export const getTopics = () => {
	return articlesApi
		.get(`/topics`)
		.then((res) => {
			return res.data.topics;
		})
		.catch((err) => {
			console.log(err);
		});
};
export const getArticle = (article_id) => {
	return articlesApi
		.get(`/articles/${article_id}`)
		.then((res) => {
			return res.data.article;
		})
		.catch((err) => {
			console.log(err);
		});
};
