
import io from "socket.io-client"
import {Line,CartesianGrid,LineChart,XAxis,YAxis} from "recharts"
import { useEffect, useState } from "react";
import styles from '../styles/chart.module.css'

export const Chart = ()=>{
    const socket = io.connect("https://real-trade.herokuapp.com");
   const [chartData,setChartData] = useState([])
    useEffect(()=>{
        socket.on("cpu",(cpuPercent)=>{
            setChartData((currentData)=>[...currentData,cpuPercent])
        })
    },[])
    return (
        <div className={styles.chart}>
               <div >
                 <h1>Stock Market Data</h1>
               </div>
               <LineChart width={900} height={500} data={chartData}>
                    <XAxis dataKey/>
                    <YAxis/>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <Line dataKey="value" />
              </LineChart>
        </div>
    )
}