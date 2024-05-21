'use client'
import { useState } from 'react'
import styles from './Titles2.module.scss'

export default function TitlesSection2() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    userId: '',
    isGenerated: false,
    image: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <div className={styles.title}>
      <div className={styles.container}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className={styles.titleArticle}
          placeholder="Введите название"
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className={styles.titleText}
          placeholder="Опишите вашу подборку"
        />

        {/* <InterfaceSection /> */}
      </div>
    </div>
  )
}
