import CategoryPage from '@/components/CategoryPage'
export const metadata = { title: 'The Cabin — The Island Skipper', description: 'Boat cabin comfort: dehumidifiers, bedding, lighting and liveaboard gear reviewed from Jersey, Channel Islands.' }
export default function CabinPage() {
  return <CategoryPage silo="cabin" title="The Cabin" subtitle="Comfort & Liveaboard" description="Dehumidifiers for Jersey's damp climate, bedding that works, lighting that sets the mood. Making a boat feel like home." />
}
