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
			setIsLoading(false);
			setComments(fetchedComments);
		});
	}, [article_id]);

	return (
		<>
			<h2>{comments.length} Comments</h2>
			<section className='comments'>
				{isLoading ? (
					<h3>... loading</h3>
				) : (
					<>
						{comments.map(({ comment_id, body, author, created_at, votes }) => (
							<div className='comments-card-div' key={comment_id}>
								<blockquote cite={author} className='comments-body'>
									{body}
									<div className='comments-date-div'>
										<p className='comments-date-p'>Date: {created_at.substring(0, 10)}</p>
										<div className='comments-votes-counter-div'>
											<p>Likes:</p>
											<span className='material-symbols-outlined'>thumb_up</span>
											<span className='comments-votes-counter'>{votes}</span>
											<span className='material-symbols-outlined'>thumb_down</span>
										</div>
									</div>
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
