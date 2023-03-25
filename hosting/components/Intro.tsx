// take in the viewmodel as a prop
export default function Intro(props: any) {
    return <div onClick={() => {props.viewModel.setGameState(2)}}>
        <div className='flex h-screen w-screen p-10 flex-col justify-center items-center bg-black text-white'>
            <p>
                MILLENIUM TOWN IS IN DIRE NEED OF POWER.
            </p>
            <p>
                IN THE YEAR 2000, MILENIUM TOWN BEGINS A NEW ERA OF POWER. A SINGLE POLLUTING COAL POWER PLANT WAS ENOUGH, UNTIL NOW. A MASSIVE BOOM IS IN THE WORKS, INCREASING YOUR POPULATION FROM 30,000 TO 200,000. YOUR JOB AS A GRID MANAGER IS TO MANAGE THIS TRANSFORMATION AND KEEP YOUR POWER GRID RUNNING. HOWEVER, YOUR CITIZENS DO NOT TAKE KINDLY TO BLACKOUTS.
            </p>
            <p>
                YOU ARE THE ONLY ONE WHO CAN SAVE US.
            </p>
        </div>
    </div>
  }