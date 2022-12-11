import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getArticle, patchArticleVotes } from '../utils/api';
import Comments from './Comments';

export default function Article() {
	const { article_id } = useParams();
	const [article, setArticle] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [isOpen, setIsOpen] = useState(false);
	const [buttonText, setButtonText] = useState('Show Comments');
	const [articleVotes, setArticleVotes] = useState();

	useEffect(() => {
		getArticle(article_id).then((article) => {
			setIsLoading(false);
			setArticle(article);
		});
	}, [article_id]);

	function ShowComments() {
		isOpen ? setIsOpen(false) : setIsOpen(true);
		isOpen ? setButtonText(`Show Comments`) : setButtonText('Hide Comments');
	}

	const increaseVotes = () => {
		setArticleVotes(article.votes);
		article.votes++;
		setArticleVotes(article.votes);
		patchArticleVotes(article_id, +1).catch((err) => {
			console.log('Something went wrong - please try again');
		});
	};
	const decreaseVotes = () => {
		setArticleVotes(article.votes);
		article.votes--;
		setArticleVotes(article.votes);
		patchArticleVotes(article_id, -1).catch((err) => {
			console.log('Something went wrong - please try again');
		});
	};

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
							<div className='img-and-body-div'>
								<img className='article-img' src={article.img_url} alt={article.title} />
								<p className='article-body'>{article.body}</p>
							</div>
							<h4>Author: {article.author}</h4>
							<div className='article-date-div'>
								<p className='article-date-p'>Date: {article.created_at.substring(0, 10)}</p>
								<div className='article-votes-counter-div'>
									<p>Likes:</p>
									<button onClick={() => increaseVotes()} className='material-symbols-outlined'>
										thumb_up
									</button>
									<span className='article-votes-counter'>{article.votes}</span>
									<button onClick={() => decreaseVotes()} className='material-symbols-outlined'>
										thumb_down
									</button>
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
