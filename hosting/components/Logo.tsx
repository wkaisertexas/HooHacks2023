import Image from 'next/image'

export default function Logo() {
    return (
        <div className='flex flex-col items-center'>
        <Image alt='Millenium Power' width="320" height="288" src='/title.png'></Image>
        </div>
    )
}
