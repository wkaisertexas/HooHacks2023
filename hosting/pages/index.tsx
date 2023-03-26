import Link from 'next/link'

import GenerationGraph  from '../components/GenerationGraph'

export default function IndexPage() {
  
  return (
    <div>
      <div className="flex justify-center items-center">
        <br /><br /><img src="title.png" width="528" height="288"/><br />
      </div>

      <div className='text-center'>
        <p className='text-3xl'>How would you manage the greatest energy transformation since the invention of the lightbulb?<br /></p>
        <p className='text-2xl'><br />Millennium Power puts you in charge of managing the power grids of Millenium Town.<br />
        Do you have what it takes to keep the town happy?</p>

      
        <Link className='text-3xl button' style={{color: "green"}} href="/play"><b>Play</b></Link><br /><br /><br />
      </div>
    </div>
  )
}
