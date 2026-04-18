import CategoryPage from '@/components/CategoryPage'
export const metadata = { title: 'The Galley — The Island Skipper', description: 'Boat galley reviews: espresso makers, nesting cookware, provisioning guides and anchor meal ideas from Jersey.' }
export default function GalleyPage() {
  return <CategoryPage silo="galley" title="The Galley" subtitle="Cooking & Provisioning" description="Espresso at anchor, nesting cookware, clever food storage and the art of feeding a crew well in a broom-cupboard kitchen." />
}
