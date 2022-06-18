import React from 'react'
import styles from '../styles/Teams.module.css'
import Circle from './Circle'
import { teams} from '../data'
import Image from 'next/image'

const Teams = () => {
  return (
    <div className={styles.container}>
        <Circle  backgroundColor="#01c686" top="-75vh" left="0" right="0"/>
        <h1 className={styles.title}>Founding Team</h1>
        <div className={styles.wrapper}>
            {
                 teams.map((member) =>( 
                    <div key={member.id} className={styles.card}>
                         <div className={styles.person}>
                            <Image 
                            className={styles.img}
                            src={`/src/img/${member.photo}`}
                            width="45"
                            height="45"
                            alt="image"
                             />
                             <div className={styles.info}>
                             <span className={styles.name}>{member.name}</span>
                             <span className={styles.post}>{member.title}</span>
                             <span className={styles.bio}>{member.bio}</span>
                             </div>
                             <div className={styles.link}>
                             <Image
                                src="/src/img/google.png"
                                width="30"
                                height="30"
                                alt="image"
                                />
                                <Image
                                src="/src/img/facebook.png"
                                width="30"
                                height="30"
                                alt="image"
                                />
                                <Image
                                src="/src/img/google.png"
                                width="30"
                                height="30"
                                alt="image"
                                />
                             </div>
                             

                        

                        </div>
                    
                    </div>
                ))}

        </div>

 
      
    </div>
  )
}
  
export default Teams
   