/* eslint-disable @typescript-eslint/no-explicit-any */
const Layout = (props: any) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {props.children}
        </div>      
    )
}

export default Layout;