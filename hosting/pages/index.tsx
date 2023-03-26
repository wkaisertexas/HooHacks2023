import Link from 'next/link'

import GenerationGraph  from '../components/GenerationGraph'

export default function IndexPage() {
  
  return (
    <div className='text-center'>
      <br /><br /><br /><u><h1 className='text-5xl' >Millennium Power</h1></u><br />

      <p className='text-3xl'>How would you manage the greatest energy transformation since the invention of the lightbulb?<br /></p>
      <p className='text-2xl'><br />Millennium Power puts you in charge of managing the power grids of Millenium Town.<br />
      Do you have what it takes to keep the town happy?</p>

    
      <Link className='text-3xl button' style={{color: "green"}} href="/play"><b>Play</b></Link>
    </div>
  )
}
