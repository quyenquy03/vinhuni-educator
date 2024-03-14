const { default: HeaderComponent } = require("@/components/HeaderComponent");

function HomeLayout({children}) {
    return (
        <>
            <HeaderComponent />
            {children}
        </>
    )
}
export default HomeLayout;