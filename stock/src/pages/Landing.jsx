import styles from '../styles/landing.module.css'
import Button from '../components/Button'

export const Landing =()=>{
    const button = {
        bg: "blue",
        text: "Get Start",
        width: "40%",
        br: "5px",
        color: "#ffffff",
        height: "50px",
        fontSize: "18px",
        
      };
    return (
        <div className={styles.landing}>
            <div>
                <div className={styles.landing1}>
                    <p>Invest in STOCKS</p>
                    <p>Trusted by Millions of Indians. Start investing today</p>
                    <Button styles={button}/>
                </div>
            </div>
            <div>
                <div className={styles.landing2}>
                    <div>
                        <img src="https://securityinvestments.in/web/image/2271/sil-mutual-fund.jpg" alt="logo"/>
                        <p>Mutual Funds</p>
                    </div>
                    <div>
                        <img src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/stockHome.af2af225.svg" alt="logo"/>
                        <p>Stocks</p>
                    </div>
                </div>
                <div className={styles.landing2}>
                    <div>
                        <img src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/optionHome.5e98a896.svg" alt="logo"/>
                        <p>Futures & Options</p>
                    </div>
                    <div>
                        <img src="https://seeklogo.com/images/D/dollar-logo-0683682259-seeklogo.com.jpg" alt="logo"/>
                        <p> US Stocks</p>
                    </div>
                </div>
                <div className={styles.landing2}>
                    <div>
                        <img src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/ipoHome.b071ba94.svg" alt="logo"/>
                        <p>IPO</p>
                    </div>
                    <div>
                        <img src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/fdHome.ba2c5441.svg" alt="logo"/>
                        <p>Fixed Diposits</p>
                    </div>
                </div>
            </div>
        </div>
    )
}