import unittest
from password_validator import validate_password

class TestPasswordValidator(unittest.TestCase):
    def test_fxmedia12345678(self):
        self.assertTrue(validate_password('Fxmedia12345678@'))

    def test_another_secure_pwd(self):
        self.assertTrue(validate_password('AnotherSecurePwd$567'))

    def test_super_passphrase(self):
        self.assertTrue(validate_password('SuperP@ssphrase123'))

    def test_short_pwd(self):
        self.assertFalse(validate_password('ShortPwd1!'))

    def test_password(self):
        self.assertFalse(validate_password('Password'))

    def test_lowercase_only(self):
        self.assertFalse(validate_password('lowercaseonly'))

    def test_missing_upper_and_special(self):
        self.assertFalse(validate_password('MISSINGUPPERANDSPECIAL'))

if __name__ == '__main__':
    unittest.main()