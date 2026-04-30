import { useState, useEffect, useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './componets/pages/loginPage'
import { Navbar } from './componets/organims/navbar'
//  PRINCIPALS PAGES
import { HomePage } from './componets/pages/homePage'
import { AboutUs } from './componets/pages/aboutUs'
// STUDENTS MENU
import { StudentsSchedules } from './componets/pages/students/studentsSchedulesPage'
import { StudentesCourses } from './componets/pages/students/studentsCoursesPage'
import { StudentsGrades } from './componets/pages/students/studentsGradesPage'
import { StudentsAttendance } from './componets/pages/students/studentsAttendance'
//TEACHERS MENU
import { TeachersCourses } from './componets/pages/teachers/teachersCoursesPage'
import { TeachersSchedules } from './componets/pages/teachers/teachersSchedulesPag'
import { TeachersEvaluations } from './componets/pages/teachers/teachersEvaluationsPage'
//ATTENDANCES MENU
import { Entry } from './componets/pages/attendances/entry'
import { Classroom } from './componets/pages/attendances/classroom'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userData, setUserData] = useState(null)
  const inactivityTimerRef = useRef(null)

  // Tiempo máximo de inactividad (30 minutos)
  const INACTIVITY_TIME = 3 * 60 * 1000 // 30 min en ms

  // Al iniciar, verificamos si hay sesión guardada en localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem(userData)
    const savedAuth = localStorage.getItem('isAuthenticated')
    const lastActivity = localStorage.getItem('lastActivity')

    if (savedUser && savedAuth === 'true') {
      // Verificar si la sesión expiró mientras estaba cerrada la pestaña
      if (lastActivity) {
        const timeSinceLastActivity = Date.now() - parseInt(lastActivity)
        if (timeSinceLastActivity > INACTIVITY_TIME) {
          // Sesión expirada
          handleLogout()
          return
        }
      }
      
      setIsAuthenticated(true)
      setUserData(JSON.parse(savedUser))
      localStorage.setItem('lastActivity', Date.now().toString())
    }
  }, [])

  // Cuando el usuario inicia sesión
  const handleLogin = (user) => {
    setIsAuthenticated(true)
    setUserData(user)
    localStorage.setItem('isAuthenticated', 'true')
    localStorage.setItem('userData', JSON.stringify(user))
    localStorage.setItem('lastActivity', Date.now().toString())
  }

  // Cuando el usuario cierra sesión
  const handleLogout = () => {
    setIsAuthenticated(false)
    setUserData(null)
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('userData')
    localStorage.removeItem('lastActivity')
    
    // Limpiar el timer si existe
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current)
    }
  }

  // Control del tiempo de inactividad
  useEffect(() => {
    if (!isAuthenticated) return

    const resetTimer = () => {
      // Limpiar timer anterior
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current)
      }

      // Actualizar última actividad
      localStorage.setItem('lastActivity', Date.now().toString())

      // Crear nuevo timer
      inactivityTimerRef.current = setTimeout(() => {
        alert('Tu sesión ha expirado por inactividad. Por favor, inicia sesión nuevamente.')
        handleLogout()
      }, INACTIVITY_TIME)
    }

    // Eventos que indican actividad del usuario
    const activityEvents = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart']
    
    activityEvents.forEach(event => {
      window.addEventListener(event, resetTimer)
    })

    // Iniciar el timer al montar
    resetTimer()

    // Cleanup al desmontar
    return () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current)
      }
      activityEvents.forEach(event => {
        window.removeEventListener(event, resetTimer)
      })
    }
  }, [isAuthenticated])

  const pages = [
    { 
      path: '/', 
      component: HomePage 
    },
    { 
      path: '/students/schedules', 
      component: StudentsSchedules 
    },
    { 
      path: '/students/courses', 
      component: StudentesCourses 
    },
    { 
      path: '/students/grades', 
      component: StudentsGrades 
    },
    { 
      path: '/students/attendance', 
      component: StudentsAttendance 
    },
    { 
      path: '/teachers/courses', 
      component: TeachersCourses 
    },
    { 
      path: '/teachers/schedule', 
      component: TeachersSchedules 
    },
    { 
      path: '/teachers/evaluations', 
      component: TeachersEvaluations 
    },
    { 
      path: '/attendance/entry', 
      component: Entry 
    },
    { 
      path: '/attendance/classroom', 
      component: Classroom 
    },
    { 
      path: '/aboutUs', 
      component: AboutUs 
    },
    
  ]

  // Si no está autenticado, mostrar login
  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />
  }

  //  Si está autenticado, renderizar la app normalmente
  return (
    <>
      <Navbar/>
      <Routes>
        {pages.map((route, index) => (
          <Route key={index} path={route.path} Component={route.component} />
        ))}
      </Routes>
    </>
    
  )
}

export default App