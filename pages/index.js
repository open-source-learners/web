/**
 * Head is from next js Features that make it a Good choose over react 
 * inter of search ranking
 */
import Head from 'next/head'
import Intro from '../components/Intro'
import Services from '../components/About'
import Teams from '../components/Teams';
import { data } from '../data'
export default function Home({about}) {
  return (
    <div>
      <Head>
        <title>Home | open source learners..</title>
        <meta name="description" content="open source learners" />
        <link rel="apple-touch-icon" sizes="180x180" href="/src/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/src/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/src/favicon/favicon-16x16.png"/>
        </Head> 
        <Intro/>
        <Services  about={about}/>
        <Teams/>
    </div>
  )
}
/**
 * replecement of useEffect state in react 
 */
export const getStaticProps = async () =>{
  const about = data;
  return{
    props: {about},
  }

}