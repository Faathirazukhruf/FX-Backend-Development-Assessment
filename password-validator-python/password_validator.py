import re

def validate_password(password):
    # Periksa panjang minimal 15 karakter
    if len(password) < 15:
        return False

    # Definisikan kategori karakter
    has_uppercase = bool(re.search(r'[A-Z]', password))
    has_lowercase = bool(re.search(r'[a-z]', password))
    has_digit = bool(re.search(r'[0-9]', password))
    has_special_char = bool(re.search(r'[!@#$%^&*]', password))

    # Hitung jumlah kategori yang terpenuhi
    categories_met = sum([
        has_uppercase,
        has_lowercase,
        has_digit,
        has_special_char
    ])

    # Kembalikan True jika minimal 2 kategori terpenuhi
    return categories_met >= 2