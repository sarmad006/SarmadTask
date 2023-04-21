import Highlights from '@/components/Highlights'
import NFTList from '@/components/NFT'
import ProfileView from '@/components/ProfileView'


export default function Home() {
  return (
    <>
    <div className='flex pl-8 pt-16 pb-8 space-x-20'>
    <ProfileView/>
    <div className='flex flex-col space-y-16'>
    <Highlights/>
    <NFTList/>
    </div>
    </div>
    </>
  )
}
