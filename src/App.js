import Login from "./components/Forms/Login"
import Register from "./components/Forms/Register";
import Forgot from "./components/Forms/Forgot";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/Home/NavBar";
import CardGrid from "./components/Home/CardGrid";
import SubjectCard from "./components/Exams/SubjectCard";
import Question from "./components/Exams/Question";
import Routess from "./components/Routess";
import QuestionForm from "./components/TeacherForms/QuestionForm";
import Create from "./components/TeacherForms/Create";
import Begin from "./components/TeacherForms/Begin";
import YourTests from "./components/YourTests/YourTests";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import PurchaseCoins from "./components/Payments/PurchaseCoins";
import AdminDash from "./components/Admin/AdminDash";
import { RequireAuth } from 'react-auth-kit'
import {AuthProvider} from "react-auth-kit";
import useIsAuthenticated from "react-auth-kit";
import TopicGrid from "./components/Exams/TopicGrid";
export default function App() {
  const isAuthenticated = useIsAuthenticated()
  const [page, setPage] = useState(1)
  return <AuthProvider 
    authType={'cookie'}
    authName={'_auth'}
    cookieDomain={window.location.hostname}
    cookieSecure={window.location.protocol === "https:"}>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path={'/subjects'}
          element={
            <RequireAuth loginPath={'/login'}>
              <SubjectCard />
            </RequireAuth>
          }
        />
        <Route path={'/home'}
          element={
            
              <CardGrid />
            
          }
        />
        <Route path={'/qstn'}
          element={
            <RequireAuth loginPath={'/login'}>
              <Question />
            </RequireAuth>
          }
        />  <Route path={'/qstnfrm'}
          element={
            <RequireAuth loginPath={'/login'}>
              <QuestionForm />
            </RequireAuth>
          }
        />  <Route path={'/create'}
          element={
            <RequireAuth loginPath={'/login'}>
              <Create />
            </RequireAuth>
          }
        />  <Route path={'/beginform'}
          element={
            <RequireAuth loginPath={'/login'}>
              <Begin />
            </RequireAuth>
          }
        />  <Route path={'/routes'}
          element={
            <RequireAuth loginPath={'/login'}>
              <Routess />
            </RequireAuth>
          }
        />  <Route path={'/yourtests'}
          element={
            <RequireAuth loginPath={'/login'}>
              <YourTests />
            </RequireAuth>
          }
        />
        <Route path={'/leaderb'}
          element={
            <RequireAuth loginPath={'/login'}>
              <LeaderBoard />
            </RequireAuth>
          }
        /><Route path={'/payments'}
          element={
            <RequireAuth loginPath={'/login'}>
              <PurchaseCoins />
            </RequireAuth>
          }
        /><Route path={'/admindash'}
          element={
            <RequireAuth loginPath={'/login'}>
              <AdminDash />
            </RequireAuth>
          }
        />

        <Route path={'/topic'}
          element={
            <RequireAuth loginPath={'/login'}>
              <TopicGrid />
            </RequireAuth>
          }
        />
       

          </Routes>
    </BrowserRouter>
  </AuthProvider>
}