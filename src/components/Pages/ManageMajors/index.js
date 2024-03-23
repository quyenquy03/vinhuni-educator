import CardBlock from "@/components/CardBlock";
import TableMajors from "./TableMajors";

function ManageMajors() {
    return (
        <CardBlock header={'Ngành đào tạo'} style={{backgroundColor: '#fff'}}>
            <TableMajors />
        </CardBlock>
    )
}
export default ManageMajors;