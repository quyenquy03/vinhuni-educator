'use client'
import GetNewToken from "@/components/GetNewToken";
import HeaderComponent from "@/components/HeaderComponent";
import { useSelector } from "react-redux";

const PageLayout = ({children}) => {
    // const cookieStore = cookies();
    const accountReducer = useSelector(state => state.accountReducer);
    const accessToken = accountReducer.accessToken;
    // const accessToken = cookieStore.get('accessToken');
    return (
        <>
            <HeaderComponent />
            <div style={{marginTop: 'var(--margin-top-body)'}}>
                {children}
            </div>
            {accessToken && <GetNewToken accessToken={accessToken?.value} />}
        </>
    )
}
export default PageLayout;