import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        textAlign: 'center',
        padding: '2rem'
      }}
    >
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(6rem, 20vw, 12rem)', lineHeight: 1, color: 'var(--border-strong)' }}>
        404
      </h1>
      <h2>Page not found</h2>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        to="/"
        style={{
          marginTop: '1rem',
          padding: '0.75rem 2rem',
          background: 'var(--primary)',
          color: 'var(--bg)',
          borderRadius: 'var(--radius-full)',
          fontFamily: 'var(--font-body)',
          fontWeight: 500,
          fontSize: '0.9rem',
          letterSpacing: '0.04em'
        }}
      >
        Back home
      </Link>
    </motion.div>
  )
}