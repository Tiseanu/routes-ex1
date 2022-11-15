import { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const { sendRequest, status } = useHttp(addComment);
  const commentTextRef = useRef();
  const { onAddedComment } = props;
  const params = useParams();

  useEffect(() => {
    if (status === 'completed') {
      onAddedComment();
      // history.push('/comments');
    }
  }, [status, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredTxt = commentTextRef.current.value;
    sendRequest({ 'commentData': enteredTxt, quoteId: params.qid});
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
