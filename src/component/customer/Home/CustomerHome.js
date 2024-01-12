import React from 'react'
import Header from '../Header/Header'
import Slides from '../slides/slides'
import Categories from '../Categories/categories';
import Footer from '../footer/footer';
import SeachView from '../SearchView';

import Menubutton from '../Menu/menubutton';
export default function CustomerHome() {
  const [isSearch, setIsSearch] = React.useState(false);
  const [search, setSearch] = React.useState("");
  return (

    <>
    <Header isSearch={setIsSearch} search={setSearch}/>
      {isSearch ? (
          <SeachView  search={search}/>):
          <>
            <Slides/>
            <Categories/>
            <Menubutton/>
            <Footer/>
          </>
      }


    </>

  )
};


