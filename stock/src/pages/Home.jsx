import { useState } from 'react';
import Gainers from "../components/Gainers";
import Lossers from "../components/Losers";
import Screener from "../components/Screener";
import styles from "../styles/home.module.css";
import { AiOutlineStock, AiFillGold } from "react-icons/ai";
import { TbSpeakerphone } from "react-icons/tb";
import { RiExchangeDollarLine } from "react-icons/ri";
import { BsGraphUp } from "react-icons/bs";
import Routercomponent from "../components/Routercomponent";
import Chatbot from '../components/Chatbot/Chatbot';
const Home = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <Routercomponent />
      <div className={styles.container}>
        <div className={styles.leftDiv}>
          <Screener />
          <Gainers />
          <Lossers />
        </div>

        <div className={styles.rightDiv}>
          <div className={styles.ipo}>
            <div className={styles.future}>
              <div
                style={{
                  backgroundColor: "#F6F6F7",
                  height: "40px",
                  width: "35px",
                  paddingLeft: "3px",
                }}
              >
                <AiOutlineStock
                  style={{ height: "30px", width: "30px", marginTop: "16%" }}
                />
              </div>
              <div>
                <h4
                  style={{
                    marginTop: "5%",
                    fontSize: "20px",
                    fontWeight: "100",
                  }}
                >
                  Future & Options
                </h4>
              </div>
            </div>
            <div
              style={{
                width: "75%",
                marginLeft: "19%",
                border: "0.25px solid black",
              }}
              className={styles.line}
            ></div>
            <div className={styles.future}>
              <div
                style={{
                  backgroundColor: "#F6F6F7",
                  height: "40px",
                  width: "35px",
                  paddingLeft: "3px",
                }}
              >
                <TbSpeakerphone
                  style={{ height: "30px", width: "30px", marginTop: "16%" }}
                />
              </div>
              <div>
                <h4
                  style={{
                    marginTop: "5%",
                    fontSize: "20px",
                    fontWeight: "400",
                  }}
                >
                  Top Intraday Stocks
                </h4>
              </div>
            </div>
            <div
              style={{
                width: "75%",
                marginLeft: "19%",
                border: "0.25px solid black",
              }}
              className={styles.line}
            ></div>
            <div className={styles.future}>
              <div
                style={{
                  backgroundColor: "#F6F6F7",
                  height: "40px",
                  width: "35px",
                  paddingLeft: "3px",
                }}
              >
                <BsGraphUp
                  style={{ height: "30px", width: "30px", marginTop: "16%" }}
                />
              </div>
              <div>
                <h4
                  style={{
                    marginTop: "5%",
                    fontSize: "20px",
                    fontWeight: "100",
                  }}
                >
                  IPO-Initial Public Offer{" "}
                </h4>
              </div>
            </div>
            <div
              style={{
                width: "75%",
                marginLeft: "19%",
                border: "0.25px solid black",
              }}
              className={styles.line}
            ></div>
            <div className={styles.future}>
              <div
                style={{
                  backgroundColor: "#F6F6F7",
                  height: "40px",
                  width: "35px",
                  paddingLeft: "3px",
                }}
              >
                <RiExchangeDollarLine
                  style={{ height: "30px", width: "30px", marginTop: "16%" }}
                />
              </div>
              <div>
                <h4
                  style={{
                    marginTop: "5%",
                    fontSize: "20px",
                    fontWeight: "100",
                  }}
                >
                  ETF- Exchange Trade Fund
                </h4>
              </div>
            </div>
            <div
              style={{
                width: "75%",
                marginLeft: "19%",
                border: "0.25px solid black",
              }}
              className={styles.line}
            ></div>
            <div className={styles.future}>
              <div
                style={{
                  backgroundColor: "#F6F6F7",
                  height: "40px",
                  width: "35px",
                  paddingLeft: "3px",
                }}
              >
                <AiFillGold
                  style={{ height: "30px", width: "30px", marginTop: "16%" }}
                />
              </div>
              <div>
                <h4
                  style={{
                    marginTop: "5%",
                    fontSize: "20px",
                    fontWeight: "100",
                  }}
                >
                  SGB-Soveirgn Gold Bond
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {show && (
        <div
          style={{
            zIndex: "999",
            position: "absolute",
            bottom: "-240px",
            right: "180px",
          }}
        >
          <Chatbot />
        </div>
      )}
      <div className={styles.helpBox}>
        <button
          className={styles.help}
          onClick={() => {
            setShow(!show);
          }}
        >
          Help?
        </button>
      </div>
    </div>
  );
};

export default Home;
