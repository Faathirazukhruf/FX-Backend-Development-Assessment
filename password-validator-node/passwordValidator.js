function validatePassword(password) {
  // Periksa panjang minimal 15 karakter
  if (password.length < 15) {
    return false;
  }

  // Definisikan kategori karakter
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasDigit = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*]/.test(password);

  // Hitung jumlah kategori yang terpenuhi
  const categoriesMet = [
    hasUpperCase,
    hasLowerCase,
    hasDigit,
    hasSpecialChar
  ].filter(Boolean).length;

  // Kembalikan true jika minimal 2 kategori terpenuhi
  return categoriesMet >= 2;
}

module.exports = { validatePassword };