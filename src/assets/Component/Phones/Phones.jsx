import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Rectangle, XAxis,YAxis ,Tooltip, CartesianGrid} from 'recharts';
// import { Grid } from "react-spinners";





const Phones = () => {

    const [phones,setPhones] = useState([]);

    useEffect(()=>{
// fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
// .then(res=> res.json())
// .then(data=> setPhones(data.data))
// data is inside another a data

axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
.then(data=>{

    const phoneData= data.data.data;
    const phoneWithFakeData = phoneData.map(phone=>{
        const obj= {
            name:phone.phone_name,
            price:parseInt(phone.slug.split('-')[1])
        }
        return obj;
    });
    console.log(phoneWithFakeData);
    setPhones(phoneWithFakeData);
})

// এই কোডটি একটি API-তে অনুরোধ পাঠায় এবং "iphone" সম্পর্কিত ফোনের তথ্য নিয়ে আসে।
// এরপর প্রাপ্ত তথ্য থেকে নতুন একটি অবজেক্ট তৈরি করে, যেখানে শুধুমাত্র ফোনের নাম এবং একটি অনুমানকৃত দাম রাখা হয়।




//axios automatically convert the data into json formate that mean the next line of then it automatically convert it
    },[]);
    return (
        <div>
             {/* <Grid
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="grid-loading"
  radius="12.5"
  wrapperStyle={{}}
  wrapperClass="grid-wrapper"
  /> */} 
  {/* it do not working */}



            <h2 className="text-4xl">Phones:{phones.length}</h2>
            <BarChart width={600} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          < Rectangle></Rectangle>
          <XAxis dataKey="name" />
        <YAxis />
        < CartesianGrid></CartesianGrid>
        <Tooltip></Tooltip>
      
        </BarChart>
        
        </div>
    );
};

export default Phones;