import { useState } from 'react'
import { Lock, User, Eye, EyeOff } from 'lucide-react'
import { Logo } from '../molecules/logo'
import styles from './loginPage.module.css'

export const LoginPage = ({ onLogin }) => {

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    if (!formData.username || !formData.password) {
      setError('Por favor completa todos los campos')
      return
    }

    if (formData.username === 'Wynsley' && formData.password === '1234') {
      onLogin({
        username: formData.username,
        role: 'admin'
      })
    } else if (formData.username === 'estudiante' && formData.password === '1234') {
      onLogin({
        username: formData.username,
        role: 'student'
      })
    } else if (formData.username === 'profesor' && formData.password === '1234') {
      onLogin({
        username: formData.username,
        role: 'teacher'
      })
    } else {
      setError('Usuario o contraseña incorrectos')
    }
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.containerlogo}>
        <div>
          <Logo className={styles.logoLogin}/>
          <h2 className={styles.title}>Sistema de educación virtual</h2>
          <p className={styles.paragraph}>Plataforma virtual integral diseñada 
            para fortalecer la gestión académica y administrativa 
            en instituciones educativas.</p>
        </div>
      </div>
      <div className={styles.loginBox}>
        <div className={styles.loginHeader}>
          <div className={styles.loginIcon}>
            <Lock size={40} />
          </div>
          <h1>Bienvenido</h1>
          <p>A tu plataforma virtual</p>
        </div>

        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Usuario</label>
            <div className={styles.inputWrapper}>
              <User className={styles.inputIcon} size={20} />
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Ingresa tu usuario"
                autoComplete="username"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Contraseña</label>
            <div className={styles.inputWrapper}>
              <Lock className={styles.inputIcon} size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Ingresa tu contraseña"
                autoComplete="current-password"
              />
              <button
                type="button"
                className={styles.togglePassword}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && (
            <div className={styles.errorMessage}>
              {error}
            </div>
          )}

          <button 
            type="submit" 
            className={styles.loginButton}
            onClick={handleSubmit}
            disabled={loading}
            >
            {loading ? 'Cargando...' : 'Inicias Seción'}
          </button>
        </form>
      </div>
    </div>
  )
}
