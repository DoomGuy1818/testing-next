import Link from 'next/link'
import SideNavbar from '../sideNavbar/index'
import styles from './creatingWishInSelection.module.scss'

export default function creatingWishInSelection() {
  return (
    <div className={styles.container}>
      <div className={styles.sector}>
        <div className={styles.sideNavbar}>
          <SideNavbar />
        </div>
        <div className={styles.addGift}>
          <a href="#" className="#">
            Назад
          </a>
          <h1 className={styles.title}>Добавить подарок</h1>
          <div className={styles.blocklink}>
            <span className={styles.text}>Ссылка*</span>
            <input
              className={styles.link}
              placeholder="Например: https://market.yandex.ru/gift"
            />
          </div>
          <div className={styles.bigblock}>
            <div className={styles.import}>
              <span className={styles.text}>Изображение подарка</span>
              <div className={styles.img}>
                <label htmlFor="file-upload" className={styles.fileLabel}>
                  <span>Перетащите сюда файл,</span>
                  <br />
                  <span className={styles.highlightedText}>
                    нажмите для загрузки
                  </span>
                  <br />
                  <span>Формат png, jpg, jpeg, webp</span>
                </label>
                <input
                  id="file-upload"
                  type="file"
                  className={styles.fileInput}
                />
              </div>
            </div>
            <div>
              <div className={styles.block1}>
                <span className={styles.text}>Название*</span>
                <input
                  className={styles.name}
                  placeholder="Например: Клавиатура - Ugreen"
                />
              </div>
              <div className={styles.block2}>
                <span className={styles.text}>Цена</span>
                <div className={styles.price}>
                  <input className={styles.priceInput} placeholder="0.00" />
                  <select className={styles.currencySelect}>
                    <option value="RUB">RUB</option>
                  </select>
                </div>
              </div>
              <div className={styles.block3}>
                <span className={styles.text}>Комментарий</span>
                <input
                  className={styles.comment}
                  placeholder="Ваш комментарий"
                />
              </div>

              <Link href="/save-selection" className={styles.buttonBox}>
                <div className={styles.createButton}>Добавить</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
