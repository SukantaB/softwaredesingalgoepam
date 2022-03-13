import { useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { useGlobalDispatch, useGlobalState } from './components/Context';
import { Table, Filters, Sort, Search } from './components';
import { getImages, getUsers, getAccounts } from './mocks/api';

import styles from './App.module.scss';

import type { Image, User, Account } from '../types';
import { dataConverter, processDataFilters } from './utils';



function App() {

  const state = useGlobalState();
  const dispatch = useGlobalDispatch()

  const filter = state.filter || [];
  const sort = state.sort || "";
  const search = state.search || "";

  useEffect(() => {
    // fetching data from API
    Promise.all([getImages(), getUsers(), getAccounts()])
    .then(([images, users, accounts]: [Image[], User[], Account[]]) => 
      dispatch({ type: "TABLE_DATA", payload: dataConverter(users, accounts, images)})
    )
    .catch(err => {});
  }, [])

  const data = processDataFilters(state.data || [], filter, sort, search)

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters />
            <Sort />
          </div>
          <Search />
        </div>
        <Table rows={data} />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
