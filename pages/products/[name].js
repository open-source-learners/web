import React from 'react'
import styles from '../../styles/Products.module.css'
import { data } from '../../data' 
import Image from 'next/image'
import Link from "next/link";
import Head from "next/head";

const Product = ({product}) => {
  return (
    <div className={styles.container}>
        <div className={styles.cardB}>
        {product.images.map((img) => (
          <div key={img.id} className={styles.imgContainer}>
            <Image src={`/src/img/${img.url}`} layout="fill" objectFit="cover" alt="" />
          </div>
        ))}
        </div>
        <div className={styles.cardS}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.desc}>{product.longDesc}</p>
        <button className={styles.button}>
          <Link href="/Contact">Contact</Link>
        </button>
      </div>
    </div>
  );
};
  

export const getStaticPaths = async () =>{
    const products = data;
    const paths = products.map((content) =>{
        return{
            // {object}context to be used in getStaticP rops
            params: {name: content.name},
        }; });
        return{
            paths,
            fallback: false,
        }
};
/**
 * fore Geting data from by navigating(navber  ) in the URL
 * 
 */
export const getStaticProps = async (context)=>{
   const name = context.params.name;
/**
 * if data is from tha api we used axios or 
 */
 const product = data.filter((content) => content.name === name)[0];

 return{
    props: {product},  
 }
}
 

export default Product
