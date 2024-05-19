import CatalogSection from '@/components/sections/catalog/Catalog'
import LikeSection from '@/components/sections/like/like'
import TitlesSection from '@/components/sections/titles/Titles'

export default function UserPage() {
  return (
    <>
      <TitlesSection />
      <LikeSection />
      <CatalogSection />
    </>
  )
}
