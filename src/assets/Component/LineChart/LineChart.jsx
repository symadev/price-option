import { LineChart as  LChart,Line ,XAxis,YAxis, CartesianGrid} from 'recharts';
//i want to draw a line chart for different subject marks.please give me data of ten students
const LineChart = () => {
    const studentMarks = [
        { name: "Alice", Math: 85, Science: 78, English: 90, History: 72, Computer: 88 },
        { name: "Bob", Math: 75, Science: 80, English: 85, History: 68, Computer: 82 },
        { name: "Charlie", Math: 34, Science: 85, English: 88, History: 80, Computer: 77 },
        { name: "David", Math: 65, Science: 99, English: 90, History: 60, Computer: 75 },
        { name: "Emma", Math: 92, Science: 92, English: 100, History: 77, Computer: 55 },
        { name: "Frank", Math: 70, Science: 75, English: 66, History: 55, Computer: 78 },
        { name: "Grace", Math: 44, Science: 90, English: 94, History: 89, Computer: 99 },
        { name: "Henry", Math: 80, Science: 83, English: 99, History: 75, Computer: 85 },
        { name: "Ivy", Math: 99, Science: 88, English: 91, History: 87, Computer: 89 },
        { name: "Jack", Math: 78, Science: 82, English: 84, History: 70, Computer: 80 }
      ];
      
    
    return (
        <div>
            <LChart  width={800} height={300} data={studentMarks}>
            < CartesianGrid></CartesianGrid>
            <XAxis dataKey="name"/>
            <YAxis />
            <Line dataKey="Math" stroke="red" ></Line>
            <Line dataKey="English" stroke="yellow"></Line>
            <Line dataKey="History" stroke="green"></Line>
            <Line dataKey="Computer" stroke="blue"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;