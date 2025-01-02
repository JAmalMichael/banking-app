import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'

const page = () => {

    const loggedIn = {
        firstName: "Jamal"
    }
  return (
    <section className='home'>
        <div className='home-content'>
            <h1 className='home-header'>
                <HeaderBox 
                type='greeting' 
                title='Welcome' 
                user={loggedIn?.firstName || 'Guest'} 
                subtext='Access and manage your account and transactions effectively'/>
            </h1>
            <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.45}/>
        </div>
    </section>
  )
}

export default page