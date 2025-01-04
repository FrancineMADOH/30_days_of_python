# https://learnpython.com/blog/python-string-exercises/

# Introduce Yourself!
def introduce_user():

    """ 
        You have a few Python variables that describe your age, name, and favorite food:
        Using these variables, create the a string to introduce yourself
    """
    my_name = input("Enter your name: ")
    my_age = input("Enter your age: ")
    favorite_food = input("Enter your favorite food: ")

    greetings = f"Hi! My name is {my_name}. I am {my_age} years old, and my favorite food is {favorite_food}."
    gretting_format = "Hi! My name is {}. I am {} years old, and my favorite food is {}.".format(my_name,my_age,favorite_food)
    print(gretting_format)
    return greetings


# Cities to Visit

cities = ["Paris", "Manille", "Londres", "Bruxelles"]

def make_a_wish(list):
    """ 
    You have a list of cities you would like to visit: 
    Starting from this list, create the following string:
    """ 
    
    joined_string = ','.join(list)

    text = f"i will like to visit these cities: {joined_string}"
    print(text)
    return text


# Letters in a Name
def chat_bot_introducer():

    """ 
    You are asked to create a chatbot at work.
    Create a code that asks the user for their full name. 
    Then it should count the number of letters in their name, ignoring spaces. 
    Finally, it should greet the user and inform them of the length of their name.
   """
    
    username = input("Enter your Full Name: ")

    sanitize_name = username.strip()
    print(sanitize_name)

    grettings = "Hello {}, your name is {} character length excluding white space".format(sanitize_name,len(sanitize_name))

    return grettings


# Convert a Number to a Letter
def convert_number_to_letter():

            """
            Create a function that returns the letter of the alphabet given a numeric index. 
            For example, an index of 1 should return "A", an index of 3 should return "C", and so on.
            """

            # Completer les autres lettres si vous voulez
            #alphabet = ["A","B","C","D"]
            alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

            user_input = input("Enter a number to convert to letter: ")
            char = int(user_input) - 1

            if char  > 26:
                  return "The alphabeth only has 26 letters."
            else: 
                letter = alphabet[char]
                print(letter)
                return letter

# Presenting Numbers
def present_data():

    increase_sales_percent = 12.93720081
    revenue_growth_percent = 18.33206078
    """ 
    The data analyst in your company calculated the sales figures from the last quarter:
    increase_sales_percent = 12.93720081
    revenue_growth_percent = 18.33206078
    # Sales in our company went up by 12.94%, and our revenue has grown by 18.33%.
    """
    result2 = f"Sales in our company went up by {str(increase_sales_percent)[0:5]}%, /
    and our revenue has grown by {str(revenue_growth_percent)[0:5]}%."
    #formatted_sales_percent = "{:.2f}".format(increase_sales_percent) try this implementaion

    return result2

# Blocking Emails by their Domain

def blocking_user_by_domain():
     
     emails = ['john.doe@gmail.com', 'mark.twain@company.com', 'mrwonderful@outlook.com']
     
     """
     Our company has asked us to block all emails that do not come from our company's domain. 
     This means that all emails not sent from the "@company.com" domain should be moved to the spam box.
     Given this task and a list of email senders …
     """