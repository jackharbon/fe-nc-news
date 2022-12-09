import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getComments } from '../utils/api';
// import Article from './Article';

const Comments = () => {
	const { article_id } = useParams();
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getComments(article_id).then((fetchedComments) => {
			setIsLoading(true);
			setComments(fetchedComments);
		});
	}, [article_id]);

	return (
		<>
			<h2>Comments</h2>
			<section className='comments'>
				{isLoading ? (
					<h3>... loading</h3>
				) : (
					<>
						{comments.map(({ comment_id, body, author, created_at, votes }) => (
							<div className='comments-card-div' key={comment_id}>
								<p className='comments-date'>
									Date: {created_at.substring(0, 10)} | Votes: {votes}
								</p>
								<blockquote cite={author} className='comments-body'>
									{body}
								</blockquote>
							</div>
						))}
					</>
				)}
			</section>
		</>
	);
};

export default Comments;
