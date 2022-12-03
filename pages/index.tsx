import  Navbar from './components/molecules/navbar'
import  Conversor  from './components/templates/conversor'
import { doc } from './doc'
import React from 'react';
import Head from 'next/head';




export default function Home() {
  const [text, setText] = React.useState("");

  return (
    <>
      <Head>
        <title>Json Doc</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className='flex flex-col h-screen'>
      <Navbar data={text}/>
      <Conversor handleText={setText} text={text}/>
    </main>
    </>
   
  )
}
