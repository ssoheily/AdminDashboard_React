import React from 'react'
import "./Chart.css"
import {ResponsiveContainer , LineChart , Line , XAxis , CartesianGrid , Tooltip} from "recharts"
export default function Chart({title, data, dataKey, grid}) {
  return (
    <div className='chart'>
         <h3 className="chartTitle" > {title}</h3>
                   {/* acpect is for size charts */}
         <ResponsiveContainer width="100%" aspect={4}>
                <LineChart data={ data}>
                     <XAxis dataKey="name" stroke='#5550bd' />
                     {/*  type="monotone" : it is same border-radious for Line  */}
                  <Line dataKey={dataKey} stroke='#5550bd'  type="monotone"/>
                    <Tooltip />{/* in Hover */}
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" ></CartesianGrid>}
                </LineChart>
         </ResponsiveContainer>
    </div>
  )
}
