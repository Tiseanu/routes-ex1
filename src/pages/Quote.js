import { Fragment } from 'react';
import { useEffect } from 'react';
import { Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';

// const quotes_ojs = [
//     { id: 'q1', title: 'Quote title 1', author: 'Author 2', text: 'This is descripton for Quote 1' },
//     { id: 'q2', title: 'Quote title 2', author: 'Author 2', text: 'This is descripton for Quote 2' },
//     { id: 'q3', title: 'Quote title 3', author: 'Author 3', text: 'This is descripton for Quote 3' }
// ];

const Quote = () => {
    const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);
    const params = useParams();
    const match = useRouteMatch();
    const { qid } = params;
    
    useEffect(() => {
        sendRequest(qid);
    }, [sendRequest, qid]);

    // const this_quote = quotes_ojs.find(item => item.id === match.params.qid);
    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }
    if (status === 'completed' && !loadedQuote && !loadedQuote.text) {
        return <p>Quote not found!</p>;
    }
    if (error) {
        return (
            <p className="centered focused">
                {error}
            </p>
        );
    }
 
    return (
        <Fragment>
            <h1>y sigle quote</h1>
            <p>{match.params.qid}</p>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
            <Route path={`${match.path}`} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>Show Comments</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
}
export default Quote;