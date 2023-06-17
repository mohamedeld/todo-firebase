export const handleAuth = (app) => {

    const auth = getAuth()
  
    handleLogin()
    handleSignUp()
    handleLogout()
}
const handleLogin = (auth) => {
    const loginBtn = document.querySelector('.auth-login')
    loginBtn.addEventListener('click', async (e) => {
      console.log('LOGIN', authForm.email.value, authForm.password.value)
  
    })
  }
  
  const handleSignUp = (auth) => {
    const loginBtn = document.querySelector('.auth-signup')
    loginBtn.addEventListener('click', async (e) => {
      e.preventDefault()
      console.log('SIGNUP', authForm.email.value, authForm.password.value)
  
      
  
    })
  }
  
  const handleLogout = (auth) => {
    const logoutBtn = document.querySelector('.logout');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', async () => {
        console.log('LOGOUT')
      })
    }
  }