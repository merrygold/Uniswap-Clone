import Head from 'next/head'
import Header from '../components/header'
import Main from '../components/Main'
import TransactionHistory from '../components/TransactionHistory'
const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col`,
}

export default function Home () {
  return (
    <>
    <div className={style.wrapper}>
      <Header/>
      <Main/>
      <TransactionHistory/>
    </div>
    </>
  )
}
