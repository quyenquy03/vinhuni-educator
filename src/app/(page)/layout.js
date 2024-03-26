'use client'
import GetNewToken from "@/components/GetNewToken";
import { useSelector } from "react-redux";

const PageLayout = ({children}) => {
    // const cookieStore = cookies();
    const accountReducer = useSelector(state => state.accountReducer);
    const accessToken = accountReducer.accessToken;
    // const accessToken = cookieStore.get('accessToken');
    return (
        <>
            {children}
            {accessToken && <GetNewToken accessToken={accessToken?.value} />}
        </>
    )
}
export default PageLayout;