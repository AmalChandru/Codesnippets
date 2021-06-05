# Classes and Instances

class Employee:

    raise_amount = 1.04#class variable
    num_of_employees = 0

    def __init__(self, first, last, pay):
        self.first = first
        self.last = last
        self.pay = pay
        self.email = first + '.' + last + '@company.com'

        Employee.num_of_employees += 1

    def fullName(self):
        return ('{} {}'.format(self.first, self.last))

    def apply_raise(self):
        self.pay = int(self.pay + self.raise_amount)

    @classmethod
    def set_raise_amt(cls, amount):
        class.raise_amt

emp_1 = Employee('Amal', 'Chandran', 90000 )
emp_2 = Employee('Test', 'User', 7000 )

# print(emp_1)
# print(emp_2)
#print(emp_2.fullName())

# print(Employee.fullName(emp_1))
# print(emp_1.pay)
# emp_1.apply_raise()
# print(emp_1.pay)
print(Employee.num_of_employees)
