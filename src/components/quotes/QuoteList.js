import { Fragment } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();

  const queryParamsObj = new URLSearchParams(location.search);
  const isSortAsc = queryParamsObj.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes, isSortAsc);

  function onClickSortAsc() {
    history.push({
      pathname: location.pathname,
      search: '?sort=' + (isSortAsc ? 'desc' : 'asc')
    });
   //  history.push(location.pathname + '?sort=' + (isSortAsc ? 'desc' : 'asc'));
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={onClickSortAsc}>Sort {isSortAsc ? 'Desc' : 'Asc'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
