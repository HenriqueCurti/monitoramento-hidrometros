import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Row, Col, Space } from 'antd';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

const DashboardPage = () => {  
   
  const { leituraList } = useSelector(rootReducer => rootReducer.leituraReducer);

  const [data, setData] = useState([]);

  const newData = [];

  // leituraList.map((item) => {
  //   newData.push({
  //     name: item.readingDate,
  //     uv: item.readingValue,
  //     pv: item.meter.building.buildingName,
  //     amt: 2100
  //   })
  // })

  const organizedData = leituraList.reduce((acc, item) => {
    const { buildingName } = item.meter.building;
    const existing = acc.find(d => d.name === item.readingDate);
    if (existing) {
      existing[buildingName] = item.readingValue;
    } else {
      acc.push({ name: item.readingDate, [buildingName]: item.readingValue });
    }
    return acc;
  }, []);

  

  useEffect(() => {
    setData(organizedData);
  }, [leituraList])
  

    return (
    //   <ResponsiveContainer width="100%" height="100%">      
    <Row justify="space-around">      
      <Col xs={24} sm={20} md={16} lg={10} xl={16}>  
        <LineChart
          width={800}
          height={490}
          data={data}
          margin={{
            top: 70,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
          <Line type="monotone" dataKey="Bloco A" stroke="#8884d8" />
          <Line type="monotone" dataKey="Bloco B" stroke="#82ca9d" />
        </LineChart>
    
      </Col>   
    </Row> 
      //   </ResponsiveContainer>
    );  
  }

export default DashboardPage
