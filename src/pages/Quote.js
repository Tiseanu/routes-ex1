import { Fragment } from 'react';
import { Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const quotes_ojs = [
    { id: 'q1', title: 'Quote title 1', author: 'Author 2', text: 'This is descripton for Quote 1' },
    { id: 'q2', title: 'Quote title 2', author: 'Author 2', text: 'This is descripton for Quote 2' },
    { id: 'q3', title: 'Quote title 3', author: 'Author 3', text: 'This is descripton for Quote 3' }
];

const Quote = () => {
    // const params = useParams();
    const match = useRouteMatch();
    console.log(match);

    const this_quote = quotes_ojs.find(item => item.id === match.params.qid);
    if (!this_quote) {
        return <p>Quote not found!</p>;
    }
    return (
        <Fragment>
            <h1>y sigle quote</h1>
            <p>{match.params.qid}</p>
            <HighlightedQuote text={this_quote.text} author={this_quote.author} />
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