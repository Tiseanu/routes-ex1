import QuoteList from '../components/quotes/QuoteList';

const quotes_ojs = [
    {id: 'q1', title: 'Quote title 1', author: 'Author 2', text: 'This is descripton for Quote 1' },
    {id: 'q2', title: 'Quote title 2', author: 'Author 2', text: 'This is descripton for Quote 2' },
    {id: 'q3', title: 'Quote title 3', author: 'Author 3', text: 'This is descripton for Quote 3' }
];

const Quotes = () => {
    return (
        <section>
            <h1>Quotes List</h1>
            <QuoteList quotes={quotes_ojs} />
        </section>
    );
}
export default Quotes;