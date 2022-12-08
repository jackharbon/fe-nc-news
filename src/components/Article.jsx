import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getArticle } from '../utils/api';

export default function Article() {
	const { article_id } = useParams();
	const [article, setArticle] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getArticle(article_id).then((article) => {
			setIsLoading(false);
			setArticle(article);
		});
	}, [article_id]);
	return (
		<>
			<h2>{article.title}</h2>
			<section className='article'>
				{isLoading ? (
					<h3>... loading</h3>
				) : (
					<>
						<div className='article-card-div'>
							<Link className='topic-link' to={`/articles/topics/${article.slug}`}>
								<h3>{article.topic}</h3>
							</Link>
							<img className='article-img' src={article.img_url} alt={article.title} />
							<p>{article.body}</p>
							<h4>Author: {article.author}</h4>
							<p className='article-date'>
								Date: {article.created_at.substring(0, 10)}
								<span className='article-votes'>
									Votes: {article.votes} | Comments: {article.comment_count}
								</span>
							</p>
						</div>
					</>
				)}
			</section>
		</>
	);
}