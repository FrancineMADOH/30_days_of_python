

def mul_number():
    x = input('Enter your first number: ')
    y = input('Enter the second number: ')

    try:
        z = int(x*y)
        print(z)
        return z
    except ValueError:
        print('Please enter valid number')
        return ValueError
    
# add_number()
    
def div_number():
    x = input('Enter your first number: ')
    y = input('Enter the second number: ')

    try:
        if y == 0:
            print('Cannot divide by zero')
            return ZeroDivisionError
        else:
            z = int(x / y)
            print(z)
            return z
    except ValueError:
        print('Please enter a valid number')
        return ValueError
    
#div_number()
    
