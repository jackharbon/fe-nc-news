import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getArticle } from '../utils/api';
import Comments from './Comments';

export default function Article() {
	const { article_id } = useParams();
	const [article, setArticle] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [isOpen, setIsOpen] = useState(false);
	const [buttonText, setButtonText] = useState('Show Comments');

	function ShowComments() {
		isOpen ? setIsOpen(false) : setIsOpen(true);
		isOpen ? setButtonText('Show Comments') : setButtonText('Hide Comments');
	}

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
							<p className='article-body'>{article.body}</p>
							<h4>Author: {article.author}</h4>
							<div className='article-date-div'>
								<p className='article-date-p'>Date: {article.created_at.substring(0, 10)}</p>
								<div className='article-votes-counter-div'>
									<p>Likes:</p>
									<span className='material-symbols-outlined'>thumb_up</span>
									<span className='article-votes-counter'>{article.votes}</span>
									<span className='material-symbols-outlined'>thumb_down</span>
								</div>
							</div>
							<button className='show-comments-button' onClick={ShowComments}>
								{buttonText}
							</button>
							{isOpen ? <Comments /> : null}
						</div>
					</>
				)}
			</section>
		</>
	);
}
