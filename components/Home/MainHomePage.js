import React from 'react'
import styles from "./MainHomePage.module.css"
import tech from "./public/braditech.png"
import cloud from "./public/bradicloud.png"
import Image from 'next/image'
import Link from 'next/link'

const MainHomePage = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.leftSide}>
        <div className={styles.ContentContainer}>
          <Link href="https://my.bradi.tech/" legacyBehavior>
            <a>
              <Image src="./public/braditech.png" alt="bradi.tech" className={styles.Image} width={175} height={315} />
            </a>
          </Link>
        </div>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.ContentContainer}>
          <Link href="https://www.bradi.cloud/" legacyBehavior>
            <a>
              <Image src="./public/bradicloud.png" alt="bradi.cloud" className={styles.Image} width={175} height={315} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainHomePage