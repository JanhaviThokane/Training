import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashobard/Dashboard';
import SignUp from '../Pages/SignUp/SignUp';
import SignIn from '../Pages/SignIn/SignIn';
import CoursesD from '../Pages/CoursesD/CoursesD';
import Course from '../Pages/Course/Course';
import FeedbackCards from '../Pages/Dashobard/FeedbackCards/FeedbackCards';

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/coursesd" element={<CoursesD />} />
      <Route path="/course" element={<Course />} />
      <Route path="/FeedbackCards" element={<FeedbackCards/>}/>
    </Routes>
  );
};

export default RoutesConfig;