import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
const MainLayout=()=>{
    return(
        <>
        <Container>
        <Header />
        </Container>
        <Suspense fallback={<div>Loading...</div>}>
          <main>
            <Outlet />
          </main>
        </Suspense>
        </>
    )
}
export default MainLayout;