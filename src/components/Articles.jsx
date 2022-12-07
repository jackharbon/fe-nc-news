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
		<section className='articles'>
			<h2>Articles</h2>
			{isLoading ? (
				<h3>... loading</h3>
			) : (
				<>
					{articles.map(({ article_id, topic, title, author, created_at, votes, comment_count, img_url }) => (
						<div key={article_id}>
							<Link to={`/articles/${article_id}`}>
								<h3>{title}</h3>
							</Link>
							<img src={img_url} alt={title} />
							<h4>{author}</h4>
							<h3>{topic}</h3>
							<p>{created_at}</p>
							<p>{votes}</p>
							<p>{comment_count}</p>
						</div>
					))}
				</>
			)}
		</section>
	);
};

export default Articles;
