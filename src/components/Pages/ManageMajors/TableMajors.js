import axios from "axios";
import RenderMajorsTable from "./RenderMajors";

const TableMajors = async () => {
    const res = await axios.get('https://65e720dc53d564627a8e0375.mockapi.io/api/Majors');
    const data = await res.data;
    const customData = data.map((item, index) => {
        item.key = index + 1;
        item.MinTrainingTime = item.MinTrainingTime + ' năm';
        item.MaxTrainingTime = item.MaxTrainingTime + ' năm';
        return item;
    })
    return (
        <RenderMajorsTable data={customData} />
    )
}
export default TableMajors;