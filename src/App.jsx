import { Route, Routes } from 'react-router-dom'
import { GuestTemplates } from './componets/templates/guestTemplates'
//  PRINCIPALS PAGES
import { HomePage } from './componets/pages/homePage'
import { RegisterPage } from './componets/pages/registerPage'
import { ContactPage } from './componets/pages/contactPage'
// STUDENTS MENU
import { StudentsSchedules } from './componets/pages/studentsSchedulesPage'
import { StudentesCourses } from './componets/pages/studentsCoursesPage'
import { StudentsGrades } from './componets/pages/studentsGradesPage'
import { StudentsAttendance } from './componets/pages/studentsAttendance'
//TEACHERS MENU
import { TeachersCourses } from './componets/pages/teachersCoursesPage'
import { TeachersCareers } from './componets/pages/teachersCareersPages'
import { TeachersSchedules } from './componets/pages/teachersSchedulesPag'
import { TeachersEvaluations } from './componets/pages/teachersEvaluationsPage'
import './App.css'

function App() {
  const pages =[
    {
      path : '/',
      component : HomePage
    },
    {
      path : '/register',
      component : RegisterPage
    },
    {
      path : '/students/schedules',
      component : StudentsSchedules
    },
    {
      path : '/students/courses',
      component : StudentesCourses
    },
    {
      path : '/students/grades',
      component : StudentsGrades
    },
    {
      path : '/students/attendance',
      component : StudentsAttendance
    },
    {
      path : '/teachers/courses',
      component :TeachersCourses
    },
    {
      path : '/teachers/careers',
      component :TeachersCareers
    },
    {
      path : '/teachers/schedule',
      component :TeachersSchedules
    },
    {
      path : '/teachers/evaluations',
      component :TeachersEvaluations
    },
    {
      path : '/contact',
      component : ContactPage
    },

  ]

  return (
    <GuestTemplates>
      <Routes>
        {
          pages.map((route) =>{
            return (
              <Route path={route.path} Component={route.component}/>
            )
          })
        }
      </Routes>
    </GuestTemplates>
  )
}

export default App
