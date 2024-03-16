import CardBlock from "@/components/CardBlock";
import { Col, Row } from "antd";
import TableTrainingCourse from "./TableTraningCourse";
import TableMajors from "./TableMajors";

function ManageTrainingCourse() {
    return (
        <>
           <Row gutter={[15, 10]}>
                <Col sm={24} md={24} lg={11} >
                    <CardBlock header={'Khóa đào tạo'} style={{backgroundColor: '#fff'}}>
                        <TableTrainingCourse />
                    </CardBlock>
                </Col>

                <Col sm={24} md={24} lg={13} >
                    <CardBlock header={'Ngành đào tạo'} style={{backgroundColor: '#fff'}}>
                        <TableMajors />
                    </CardBlock>
                </Col>
            </Row> 
        </>
    )
}
export default ManageTrainingCourse;