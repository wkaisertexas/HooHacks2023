import Link from 'next/link'

import GenerationGraph  from '../components/GenerationGraph'

export default function IndexPage() {
  return (
    <div>
      <h1 className='text-3xl'>Millennium Power</h1>

      <p>How would you manage the greatest energy transformation since the invention of the lightbulb?</p>

      <GenerationGraph />

      <Link href="/play">Play</Link>
    </div>
  )
}
