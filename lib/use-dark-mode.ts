import React from 'react'

import useDarkModeImpl from '@fisch0920/use-dark-mode'

export function useDarkMode() {
  const darkMode = useDarkModeImpl(false, { classNameDark: 'dark-mode' })
  const [hasMounted, setHasMounted] = React.useState(false)

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return {
    isDarkMode: hasMounted && darkMode.value,
    toggleDarkMode: darkMode.toggle
  }
}
