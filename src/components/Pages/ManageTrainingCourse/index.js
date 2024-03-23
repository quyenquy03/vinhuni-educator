import CardBlock from "@/components/CardBlock";
import TableTrainingCourse from "./TableTraningCourse";

function ManageTrainingCourse() {
    return (
        <CardBlock header={'Khóa đào tạo'} style={{backgroundColor: '#fff'}}>
            <TableTrainingCourse />
        </CardBlock>
    )
}
export default ManageTrainingCourse;