import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import CommentsList from './CommentsList';
import LoadingSpinner from '../UI/LoadingSpinner';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const qid = params.qid;
  const { sendRequest, status, data: loadedComments, error } = useHttp(getAllComments, true);
  let comments;

  useEffect(() => {
    sendRequest(qid);
  }, [sendRequest, qid]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const onAddedCommentFct = useCallback(() => {
    sendRequest(qid);
  }, [sendRequest, qid]);

  if (status === 'pending') {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === 'completed' && loadedComments) {
    comments = <CommentsList comments={loadedComments} />
  }
  if (status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
    comments = (
      <div className="centered">No comments</div>
    );
  }
  if (error) {
    return (
      <p className="centered focused">
        {error}
      </p>
    );
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm qid={qid} onAddedComment={onAddedCommentFct} />}
      {comments}
    </section>
  );
};

export default Comments;
