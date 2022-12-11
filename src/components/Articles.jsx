import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from '../utils/api';

const Articles = () => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getArticles().then((fetchedArticles) => {
			setIsLoading(false);
			setArticles(fetchedArticles);
		});
	}, []);

	return (
		<>
			<h2>Articles</h2>
			<section className='articles'>
				{isLoading ? (
					<h3>... loading</h3>
				) : (
					<>
						{articles.map(({ article_id, topic, title, author, created_at, votes, comment_count, img_url }) => (
							<div className='articles-card-div' key={article_id}>
								<Link className='topic-link' to={`/articles/topics/${topic}`}>
									<h3>{topic}</h3>
								</Link>
								<Link to={`/articles/${article_id}`}>
									<h3>{title}</h3>
									<img className='articles-img' src={img_url} alt={title} />
								</Link>
								<h4>Author: {author}</h4>
								<p>Date: {created_at.substring(0, 10)}</p>
								<p>
									Votes: {votes} | Comments: {comment_count}
								</p>
							</div>
						))}
					</>
				)}
			</section>
		</>
	);
};

export default Articles;
