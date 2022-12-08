import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTopics } from '../utils/api';

const Topics = () => {
	const [topics, setTopics] = useState([]);

	useEffect(() => {
		getTopics().then((fetchedTopics) => {
			setTopics(fetchedTopics);
		});
	}, []);

	return (
		<section className='topics'>
			<h3>Topics</h3>
			<ul className='topics-menu-ul'>
				{topics.map(({ slug, description }) => (
					<li key={slug}>
						<Link to={`/topics/${slug}`}>
							<h4>{slug}</h4>
						</Link>
						<p>{description}</p>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Topics;
