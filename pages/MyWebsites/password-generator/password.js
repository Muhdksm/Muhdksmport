function generatePassword() {
  const chars = "abcdefghigklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+~?"
  let password = "";
  const lenght = 12;

  for (let i = 0; i < lenght; i++) {
    const randomIndex =
    Math.floor(Math.random() * 
    chars.length);
    password += chars[randomIndex]
  }

  document.getElementById("password").value = password;
}