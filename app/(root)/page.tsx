import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = {firstName: "Mamba", lastName: "Kay", 
    email: "contact@zenithtrust.com"}



  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstName || "Guest"}
                subtext="Effortlessly Navigate Your Accounts and Transactions."
                />

                <TotalBalanceBox 
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1240.87}
                
                />
            </header>
            RECENT TRANSACTIONS
        </div>
        <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{}, {}]}
        />
    </section>
  )
}

export default Home