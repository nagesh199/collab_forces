
import React from "react";
import io from "socket.io-client"
import {Line,CartesianGrid,LineChart,XAxis,YAxis,Tooltip} from "recharts"
import { useEffect,useState } from "react";

export const Chart = ()=>{
    const socket = io.connect("http://localhost:8080");
   const [chartData,setChartData] = useState([])
    useEffect(()=>{
        socket.on("cpu",(cpuPercent)=>{
            setChartData((currentData)=>[...currentData,cpuPercent])
        })
    },[])
    return (
        <div>
               <LineChart width={500} height={300} data={chartData}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <Line dataKey="value" />
              </LineChart>
        </div>
    )
}