import CatalogSection from '@/components/sections/catalog/Catalog'
import LikeEditSection from '@/components/sections/likeEdit/likeEdit'
import TitlesSection from '@/components/sections/titles/Titles'

export default function EditPage() {
  return (
    <>
      <TitlesSection />
      <LikeEditSection />
      <CatalogSection />
    </>
  )
}
