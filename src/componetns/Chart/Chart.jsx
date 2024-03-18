
import { LineChart, Line, XAxis, YAxis } from 'recharts';
const Chart = () => {
    const data = [
        {"id": 1, "name": "Alice", "math": 85, "physics": 78, "chemistry": 90},
        {"id": 2, "name": "Bob", "math": 72, "physics": 65, "chemistry": 80},
        {"id": 3, "name": "Charlie", "math": 90, "physics": 85, "chemistry": 92},
        {"id": 4, "name": "David", "math": 68, "physics": 62, "chemistry": 75},
        {"id": 5, "name": "Eve", "math": 78, "physics": 70, "chemistry": 85},
        {"id": 6, "name": "Frank", "math": 95, "physics": 88, "chemistry": 96},
        {"id": 7, "name": "Grace", "math": 82, "physics": 75, "chemistry": 88},
        {"id": 8, "name": "Henry", "math": 88, "physics": 82, "chemistry": 90},
        {"id": 9, "name": "Ivy", "math": 75, "physics": 68, "chemistry": 80},
        {"id": 10, "name": "Jack", "math": 70, "physics": 60, "chemistry": 72}
      ]
      
    return (
        <div>
            <h1 className="text-5xl">LINE chart</h1>

            <LineChart width={400} height={400} data={data}>

                <XAxis dataKey={'name'}></XAxis>
                <YAxis dataKey={''}></YAxis>
                <Line dataKey={'math'} stroke='red'></Line>
                <Line dataKey={'physics'} stroke='blue'></Line>
                <Line dataKey={'chemistry'} stroke='yellow'></Line>
            </LineChart>
        </div>
    );
};

export default Chart;