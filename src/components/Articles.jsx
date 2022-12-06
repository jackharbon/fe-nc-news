import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from '../utils/api';

const Articles = () => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getArticles().then((fetchedArticles) => {
			setLoading(false);
			setArticles(fetchedArticles);
		});
	}, []);

	return (
		<main>
			{loading ? (
				<p>... loading</p>
			) : (
				<>
					<section className='content'>
						<h2>Articles</h2>
						{articles.map(({ article_id, topic, title, author, created_at, votes, comment_count, body }) => (
							<section className='articles' key={article_id}>
								<Link to={`/articles/${article_id}`}>
									<h3>{title}</h3>
								</Link>
								<h4>{author}</h4>
								<h3>{topic}</h3>
								<p>{created_at}</p>
								<p>{votes}</p>
								<p>{comment_count}</p>
								<p>{body}</p>
							</section>
						))}
					</section>
				</>
			)}
		</main>
	);
};

export default Articles;
