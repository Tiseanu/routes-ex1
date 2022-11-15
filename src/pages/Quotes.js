import { useEffect } from 'react';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';
import QuoteList from '../components/quotes/QuoteList';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import LoadingSpinner from '../components/UI/LoadingSpinner';

// const quotes_ojs = [
//     {id: 'q1', title: 'Quote title 1', author: 'Author 2', text: 'This is descripton for Quote 1' },
//     {id: 'q2', title: 'Quote title 2', author: 'Author 2', text: 'This is descripton for Quote 2' },
//     {id: 'q3', title: 'Quote title 3', author: 'Author 3', text: 'This is descripton for Quote 3' }
// ];

const Quotes = () => {
    const {sendRequest, status, data: loadedQuotes, error} = useHttp(getAllQuotes, true);
    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }
    if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuotesFound />;
    }
    if (error) {
        return (
            <p className="centered focused">
                {error}
            </p>
        );
    }

    return (
        <section>
            <h1>Quotes List</h1>
            <QuoteList quotes={loadedQuotes} />
        </section>
    );
}
export default Quotes;