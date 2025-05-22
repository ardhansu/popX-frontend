import '../styles/components/Button.css'

function Button({ children, variant = 'primary', size = 'medium', fullWidth = false, ...props }) {
  const classes = [
    'button',
    `button-${variant}`,
    `button-${size}`,
    fullWidth ? 'button-full-width' : '',
  ].filter(Boolean).join(' ')
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button