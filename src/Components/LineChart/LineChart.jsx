import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {



    const subjectMarksData = [
        { "id": 1, "name": "John", "math_marks": 85, "physics_marks": 90, "chemistry_marks": 78 },
        { "id": 2, "name": "Alice", "math_marks": 78, "physics_marks": 85, "chemistry_marks": 92 },
        { "id": 3, "name": "Bob", "math_marks": 92, "physics_marks": 88, "chemistry_marks": 76 },
        { "id": 4, "name": "Eva", "math_marks": 65, "physics_marks": 70, "chemistry_marks": 85 },
        { "id": 5, "name": "Charlie", "math_marks": 88, "physics_marks": 82, "chemistry_marks": 90 },
        { "id": 6, "name": "Grace", "math_marks": 75, "physics_marks": 78, "chemistry_marks": 80 },
        { "id": 7, "name": "David", "math_marks": 95, "physics_marks": 92, "chemistry_marks": 88 },
        { "id": 8, "name": "Sophia", "math_marks": 70, "physics_marks": 75, "chemistry_marks": 72 },
        { "id": 9, "name": "Michael", "math_marks": 82, "physics_marks": 80, "chemistry_marks": 85 },
        { "id": 10, "name": "Olivia", "math_marks": 89, "physics_marks": 88, "chemistry_marks": 92 }
    ];




    return (
        <div>
            <LChart width={800} height={400} data={subjectMarksData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line dataKey="math_marks" stroke='green'></Line>
                <Line dataKey="physics_marks" stroke='red'></Line>
                <Line dataKey="chemistry_marks" stroke='purple'></Line>



            </LChart >


        </div >
    );
};

export default LineChart;