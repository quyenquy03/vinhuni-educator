import axios from "axios";
import RenderTrainingCourseTable from "./RenderTrainingCourse";

const TableTrainingCourse = async() => {
    const res = await axios.get('https://65e720dc53d564627a8e0375.mockapi.io/api/TrainingCourse', {
        method: 'GET',
        next: {tags : ['fetch-training-course']}
      });
    const data = await res.data;
    const customData = data.map((item, index) => {
        item.key = index + 1;
        item.StartYear = 'Năm '+ item.StartYear;
        return item;
    })
    return (
        <RenderTrainingCourseTable data={customData} />
    )
}
export default TableTrainingCourse;