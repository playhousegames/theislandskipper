import CategoryPage from '@/components/CategoryPage'
export const metadata = { title: 'Deck & Dock — The Island Skipper', description: 'Sailing apparel reviewed from Jersey: foul weather jackets, deck shoes, sunglasses and après-sail style.' }
export default function DeckPage() {
  return <CategoryPage silo="deck" title="Deck & Dock" subtitle="Apparel & Lifestyle" description="Foul weather gear tested in the Race of Alderney. Deck shoes reviewed on Jersey's weedy slipways. Après-sail style for St. Helier." />
}
