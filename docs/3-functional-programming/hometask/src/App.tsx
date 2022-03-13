import { useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { useGlobalDispatch, useGlobalState } from './components/Context';
import { Table, Filters, Sort, Search } from './components';
import { getImages, getUsers, getAccounts } from './mocks/api';

import styles from './App.module.scss';

import type { Row } from './components';
import type { Image, User, Account } from '../types';

function App() {

  const state = useGlobalState();
  const dispatch = useGlobalDispatch()

  const filter = state.filter || [];
  const sort = state.sort || "";
  const search = state.search || "";

  const onlyUnique = (value, index, self) => {
    return self.findIndex(_each => _each.username === value.username) === index;
  }

  const processDataFilters = (data: Row[], filter: string[], sort: 'asc'| 'desc' | '', search: string ) => {
    if(!filter.length && !search && !sort) return data
    let newdataSeach = [];
    if(search){
      newdataSeach = data.filter(_each => {
        const searchparam = search.toLowerCase()
        const isMatchUsername = _each.username.toLowerCase().includes(searchparam);
        const isMatchName = _each.name.toLowerCase().includes(searchparam)
        const isMatchCountry = _each.country.toLowerCase().includes(searchparam)
        return isMatchCountry || isMatchName || isMatchUsername
      } )
    }
    let newdataFilter = [];
    if(filter.length){
      const isWithoutPost = filter.includes('Without posts');
      const isMoreThen100Post = filter.includes('More than 100 posts')
      if(isWithoutPost && isMoreThen100Post) 
        newdataFilter = data.filter(_each => (_each.posts === 0 || _each.posts > 100));
      else if(isWithoutPost) 
        newdataFilter = data.filter(_each => _each.posts === 0);
      else 
        newdataFilter = data.filter(_each => _each.posts > 100);
    }
    let newData = [...newdataSeach, ...newdataFilter].filter(onlyUnique);
    if(sort){
      if(!newData.length) newData = [...data];
      if(sort === 'asc') newData.sort((a,b) => a.lastPayments - b.lastPayments)
      else newData.sort((a,b) => b.lastPayments - a.lastPayments)
    }
    return newData
  }

  const dataConverter = (users: User[], accounts: Account[], images: Image[]): Row[] => {
    if(!users) return []
    const accountsMap = createMap(accounts, "userID");
    const imagesMap = createMap(images, "userID")
    return users.map(_user =>{
      const account = accountsMap[_user.userID]
      const image = imagesMap[_user.userID]
      const payments = account?.payments || []
      payments.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      return ({
        avatar: image?.url || "",
        username: _user.username,
        country: _user.country,
        name: _user.name,
        posts: account?.posts || 0,
        lastPayments: payments[0]?.totalSum || 0
      })
    })
  }

  const createMap = (array: any[], key: string) => {
    if(!array || !key) return {};
    const intial = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: item,
      };
    }, intial)
  }
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
