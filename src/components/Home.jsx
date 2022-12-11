import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from '../utils/api';

const Home = () => {
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
			<h2>Home</h2>
			<div className='introText'>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Cras sed felis eget velit. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet.{' '}
					<i>Turpis egestas</i> pretium aenean pharetra magna ac placerat vestibulum. Orci dapibus ultrices in iaculis nunc sed
					augue. Bibendum at varius vel pharetra vel turpis nunc.
				</p>
				<h4>Odio eu feugiat pretium </h4>
				<p>
					Pibh ipsum consequat nisl vel pretium. Leo vel fringilla est ullamcorper eget. Praesent elementum facilisis leo vel
					fringilla est ullamcorper eget nulla. Magna etiam tempor orci eu. Fringilla phasellus faucibus scelerisque eleifend
					donec pretium vulputate. In aliquam sem fringilla ut morbi tincidunt augue interdum.
				</p>
			</div>
			<section className='home'>
				{isLoading ? (
					<h3>... loading</h3>
				) : (
					<>
						{articles.map(({ article_id, topic, title, author, created_at, img_url }) => (
							<div className='home-card-div' key={article_id}>
								<h4>{topic}</h4>
								<Link to={`/articles/${article_id}`}>
									<h3>{title}</h3>
									<img className='articles-img' src={img_url} alt={title} />
								</Link>
								<h4>Author: {author}</h4>
							</div>
						))}
					</>
				)}
			</section>
		</>
	);
};

export default Home;
