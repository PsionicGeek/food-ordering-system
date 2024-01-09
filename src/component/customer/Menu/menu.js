import React from 'react'
import Indianfood from '../Categories/Indianfood/Indianfood';
import Koreanfood from '../Categories/koreanfood/Koreanfood';
import Italianfood from '../Categories/Italianfood/Italianfood';
import Header from '../Header/Header';
export default function Menu() {

  return (
    <>
    <Header/>
    <Indianfood />
    <Italianfood />
    <Koreanfood />
    </>
  )
}
