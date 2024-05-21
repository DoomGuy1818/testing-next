'use client'
import { CreateSelection } from '@/services/fetch'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from './Interface.module.scss'

export default function InterfaceSection() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    userId: '',
    isGenerated: false,
    image: '',
  })

  const handleCreateCollectionClick = async () => {
    try {
      await CreateSelection(formData)
      console.log(formData)
      console.log('Подборка успешно создана!')
    } catch (error) {
      console.log(formData)
      console.error('Ошибка во время создания подборки:', error)
    }
  }
  return (
    <section className={styles.interface}>
      <div className={styles.container}>
        <div className={styles.interfaceInner}>
          <Link href="/lk" className={styles.interfaceLink}>
            <Image
              width={162}
              height={162}
              src="/images/Arrow.svg"
              alt="arrow"
            />
          </Link>

          <div className={styles.interfaceButtons}>
            <Link href="/admin-selection">
              <button
                onClick={handleCreateCollectionClick}
                className={styles.interfaceGreen}
              >
                Сохранить подборку
              </button>
            </Link>
            <Link href="/lk">
              <button className={styles.interfaceRed}>Удалить подборку</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
