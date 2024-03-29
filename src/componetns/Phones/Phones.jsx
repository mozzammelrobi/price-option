import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Phones = () => {
    const [phones, setPhones] =useState([])

    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data
            const PhoneFakeData = phoneData.map(phone =>{
                const obj ={
                    name:phone.phone_name,
                    price: parseInt(phone.slug.split('_')[2])
                }
                console.log(obj.price)
                return obj
            })
            console.log(PhoneFakeData)
            setPhones(PhoneFakeData)
        })

    },[])
    // console.log(phones)
    return (
        <div>
            <h2 className="text-5xl "> {phones.length}</h2>
            <BarChart width={1200} height={400} data={phones}>
                <Bar dataKey={'price'} stroke="blue"></Bar>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;