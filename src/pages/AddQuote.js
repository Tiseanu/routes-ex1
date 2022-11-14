import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

const AddQuote = () => {
    const history = useHistory();

    const addQuoteFct = (obj) => {
        console.log(obj);
        history.push('/quotes');
    };
    return (
        <section>
            <h1>Add Quote page</h1>
            <QuoteForm onAddQuote={addQuoteFct} />
        </section>
    );
}
export default AddQuote;