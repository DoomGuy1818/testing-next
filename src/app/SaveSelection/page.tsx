import CatalogSection from '@/components/sections/catalog/Catalog'
import GiftsSection from '@/components/sections/gifts/Gifts'
import InterfaceSection from '@/components/sections/interface/Interface'
import TitlesSection from '@/components/sections/titles/Titles'

export default function SelectionPage() {
	return (
		<>
			<TitlesSection />
			<InterfaceSection />
			<GiftsSection />
			<CatalogSection />
		</>
	)
}

