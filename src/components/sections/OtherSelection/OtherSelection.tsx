import SelectionCard from '@/components/selectionCard/selectionCard'
import styles from './OtherSelection.module.scss'
import { useGetManySelections } from '@/hooks/useGetManySelections'


export default function OtherSelection() {
  const{data} = useGetManySelections();
  return (
    <div className={styles.selection}>
      <div className={styles.container}>
        <div className={styles.Title}>По поводам и без повода</div>
        <div className={styles.selectionInner}>
          <SelectionCard />
          <SelectionCard />
          <SelectionCard />
          <SelectionCard />
          <SelectionCard />
          <SelectionCard />
          <SelectionCard />
          <SelectionCard />        
        </div>
      </div>
    </div>
  )
}
