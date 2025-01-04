# 15 Python String Exercises for Beginners

Python String Exercise 1: Introduce Yourself!

You have a few Python variables that describe your age, name, and favorite food:
name = "Mark"
age = 27
favourite_food = "Pizza"

Using these variables, create the following string to introduce yourself:
"Hi! My name is Mark. I am 27 years old, and my favorite food is Pizza."
Solution
name = "Mark"
age = 27
favourite_food = "Pizza"
 
intro_string = f"Hi! My name is {name}. I am {age} years old, and my favorite food is {favourite_food}."
print(intro_string)
 
# output:
# Hi! My name is Mark. I am 27 years old, and my favorite food is Pizza.
Explanation

In this solution, we use an f-string to combine the name, age, and favourite_food variables into a single string following the desired format. Then we simply print the resulting intro_string to view the results.
Holiday Promo. 72% OFF. All Python Courses in One Package. Check now!

Python f-strings are the preferred way to insert values into Python strings. Within the f-string, we place the variable names inside curly braces {} to indicate where their values should be inserted. This way, we can easily create a cohesive string incorporating the values stored in these variables. You can learn more about f-strings and other Python string fundamentals in our other articles.
Python String Exercise 2: Cities to Visit

You have a list of cities you would like to visit:
cities = ["Amsterdam", "Tokyo", "Rio de Janeiro", "Los Angeles"]

Starting from this list, create the following string:
"I would like to visit these cities: Amsterdam, Tokyo, Rio de Janeiro, Los Angeles"
Solution
cities = ["Amsterdam", "Tokyo", "Rio de Janeiro", "Los Angeles"]
cities_string = ", ".join(cities)
result_string = f"I would like to visit these cities: {cities_string}"
print(result_string)
 
# output:
# I would like to visit these cities: Amsterdam, Tokyo, Rio de Janeiro, Los Angeles
Explanation

This exercise is simple if you know about Python’s str.join() method.  It takes a list of strings and adds a separator between each string.

In this solution, we use the str.join() method to concatenate the elements of the cities list with a comma and a space in between. This creates a single string (cities_string) with all the cities separated by commas. Then we simply create the result_string by writing out the desired prefix, and inserting cities_string into it with an f-string.

We also have an article about how to concatenate multiple strings — using the str.join() method and other approaches — so be sure to check it out if you’re curious.
Python Practice String Exercise 3: Letters in a Name

You are asked to create a chatbot at work.

Create a code that asks the user for their full name. Then it should count the number of letters in their name, ignoring spaces. Finally, it should greet the user and inform them of the length of their name.
Solution
full_name = input("Please enter your full name: ")
letter_count = len(full_name.replace(" ", ""))
print(f"Hello, {full_name}! Your name has {letter_count} letters, excluding spaces.")
Explanation

To create our chatbot, we start by using prompting for the user’s name through the input() function. Then we use the str.replace() method to replace any whitespace, like the space separating the user’s first and last names. The result is passed to the len() function, effectively counting the number of characters in the name while excluding spaces. Afterwards, we print this information using an f-string.
Python String Exercise 4: Convert a Number to a Letter

Create a function that returns the letter of the alphabet given a numeric index. For example, an index of 1 should return "A", an index of 3 should return "C", and so on.

Numbers beyond the range of the alphabet should return an empty string.
Solution
def alphabet_index(index):
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if 1 <= index <= 26:
        return alphabet[index - 1]
    else:
        return ''
 
print(alphabet_index(1))  # output: "A"
print(alphabet_index(3))  # output: "C"
print(alphabet_index(30))  # output: ""
Explanation

The alphabet_index function described above initializes a string variable alphabet, which contains all the letters of the alphabet in uppercase.

Inside the function, we check if the index is within the valid range of 1 to 26. If it is, we retrieve the letter at the given index from the alphabet string (we use index - 1 in this step because Python indexing starts at 0). If the index is outside the valid range, the function returns an empty string.
Python Practice String Exercise 5: Presenting Numbers

The data analyst in your company calculated the sales figures from the last quarter:
increase_sales_percent = 12.93720081
revenue_growth_percent = 18.33206078

Using these variables, create the following string:
"Sales in our company went up by 12.94%, and our revenue has grown by 18.33%."
Solution
increase_sales_percent = 12.93720081
revenue_growth_percent = 18.33206078
 
formatted_sales_percent = "{:.2f}".format(increase_sales_percent)
formatted_revenue_percent = "{:.2f}".format(revenue_growth_percent)
 
sales_string = f"Sales in our company went up by {formatted_sales_percent}%, and our revenue has grown by {formatted_revenue_percent}%."
print(sales_string)
 
# output:
# Sales in our company went up by 12.94%, and our revenue has grown by 18.33%.
Explanation

In this solution, we use the str.format() method to format the provided percentages with two decimal places ( the :.2f format specification) and store them as separate variables. Then we use an f-string to incorporate these formatted percentages into the final string.

For this particular example, we can also use the round() function:
formatted_sales_percent = round(increase_sales_percent, 2)
formatted_revenue_percent = round(revenue_growth_percent, 2)

But it’s very useful to get used to the format specifications of the str.format() method. In fact, we have a dedicated Python String Formatting Cheat Sheet!
Python Practice String Exercise 6: Blocking Emails by their Domain

Our company has asked us to block all emails that do not come from our company's domain. This means that all emails not sent from the "@company.com" domain should be moved to the spam box.

Given this task and a list of email senders …
emails = ['john.doe@gmail.com', 'mark.twain@company.com', 'mrwonderful@outlook.com']

… create a function that decides whether a given email should be blocked or not.
Solution
def block_email(email):
    if email.endswith('@company.com'):
        return False  # Email from company domain, don't block
    else:
        return True   # Email not from company domain, block
 
print(block_email('john.doe@gmail.com')) # output: True
print(block_email('mark.twain@company.com')) # output: False
print(block_email('mrwonderful@outlook.com')) # output: True
Explanation

This solution defines the function block_email that takes an email address as input. It checks whether the email address ends with "@company.com" using the str.endswith() method. If it does, it returns False, indicating that the email should not be blocked. Otherwise, it returns True, indicating that the email should be blocked.

You could also use the in operator instead of the str.endswith() method:
if '@company.com' in email:

But the str.endswith() method is a bit more explicit, since we expect the domain to always be at the end of the sender’s email address. You can read An Overview of Python String Methods to learn more about common string methods.
Python Practice String Exercise 7: Password Validator

You are tasked to create a simple password validator. The validation rules are as follows:

    Password length of at least 8 characters.
    At least one uppercase character.
    At least one lowercase character.
    At least one "special" character from the following set of characters: "!#$%&*+-.?~".

Create a function that acts as the password validator.
Solution
def password_validator(password):
    has_upper = False
    has_lower = False
    has_special = False
 
    if len(password) < 8:
        return False
     
    for char in password:
        if char.isupper():
            has_upper = True
        elif char.islower():
            has_lower = True
        elif char in "!#$%&*+-.?~":
            has_special = True
     
    return has_upper and has_lower and has_special
 
print(password_validator("StrongPassWord!@"))  # True
print(password_validator("weak"))  # False
Explanation

This exercise is all about keeping track of each condition that our password_validator has to check for. We initialize three Boolean variables (has_upper, has_lower, and has_special) to track whether the password meets each of the required conditions. Before checking for any of them, we first check if the password has at least 8 characters: if that’s not the case, we immediately return False.

Afterwards, we iterate through each character of the password and update the Boolean variables accordingly. We use the str.isupper() method for checking for uppercase characters, str.islower() for lowercase characters, and the in operator for checking whether a character is contained in the special characters string. If all of these conditions are met, the function finally returns True, indicating that the password is valid. Otherwise, it returns False.
Python Practice String Exercise 8: Palindrome Checker

A palindrome is a word that is written the same backwards as forwards. Some examples are "racecar", "kayak", and "anna".

Write a function to detect whether a given string is a palindrome or not.
Solution
def is_palindrome(word):
    return word == word[::-1]
 
print(is_palindrome('anna'))  # output: True
print(is_palindrome('python'))  # output: False
print(is_palindrome('kayak'))  # output: True
Explanation

This one is short and sweet if you know how to invert a Python string using slicing: you can write word[::-1] to return a copy of the word. Then simply compare it to the initial word, and voilá — the palindrome checker is running.

If you feel unsure about string slicing in Python, our Working with Strings in Python course will get you up to speed!
Python Practice String Exercise 9: Read the Secret Message

You are given a secret message encoded in a Python string:
secret_message = "aS!Ir waQm  VL!eDafrcnXi n=gS .P,yytahgoln.!"

To decode the message, you are told: "Skip the first three characters, then skip every other character." Write the code that decodes the message according to these instructions.
Solution
secret_message = "aS!Ir waQm  VL!eDafrcnXi n=gS .P,yytahgoln.!"
decoded_message = secret_message[3::2]
print(decoded_message)
 
# output:
# I am Learning Python!
Explanation

To decode the secret_message according to the given instructions, we once again use string slicing. We start by skipping the first three characters of the message using the slicing notation [3::]. Then we add the step parameter of slicing [::2] to skip every other character. Combined, these steps result in the slice used in the code, [3::2], which correctly decodes the message to “I am Learning Python!”.
Python Practice String Exercise 10: Email Analyzer

Create a function that takes an email address and prints out the corresponding username and domain name (the username is the part before the @ symbol in the email address, while the domain name comes after it).
Solution
def analyze_email(email):
    username, domain = email.split("@")
    print(f"Username: {username}, Domain: {domain}")
analyze_email("example@email.com")
# output: Username: example, Domain: email.com
Explanation

This one is simple if you know about the str.split() method, which we use to split a string into a list. Since we always expect the email address to contain only one @ symbol, we know that splitting the string at that symbol will produce the username and the domain name, which we assign to the corresponding variables. Afterwards, all that’s left is to print out the username and domain name using an f-string.

There is an alternative solution: finding the index of the  @ symbol in the string using the str.index() method. Afterwards, you can slice up to that index to get the username and slice from that index to get the domain name. Here’s how it looks:
def analyze_email(email):
    at_index = email.index("@")
    username = email[:at_index]
    domain = email[at_index + 1:]
    print(f"Username: {username}, Domain: {domain}")
 
analyze_email("example@email.com")
# output: Username: example, Domain: email.com

Both solutions produce the same result, so use whichever you prefer!
Python Practice String Exercise 11: Calculate Your Pay

You are a technical writer. In your latest report, you wrote the following sentence:
"The turbine efficiency reached 98.7% and 10,000 RPM under optimal conditions."

You get paid 2 cents for each alphabetical character in the reports. Given this information, calculate how much you will get from the sentence above.
Solution
sentence = "The turbine efficiency reached 98.7% and 10,000 RPM under optimal conditions."
alphabetical_characters = 0
 
for char in sentence:
    if char.isalpha():
        alphabetical_characters += 1
 
payment = alphabetical_characters * 0.02
print(f"You will get ${payment:.2f} from the sentence.")
 
# output:
# You will get $1.10 from the sentence.
Explanation

In this exercise, we need to count the number of alphabetical characters while skipping other characters (spaces, punctuation, and numbers). We create the variable alphabetical_characters to keep track of this count. We then iterate through each character in the sentence using a for loop, where we check if the character is alphabetical using the str.isalpha() method. If it is, we increment the alphabetical_characters counter by 1.
Holiday Promo. 72% OFF. All Python Courses in One Package. Check now!

After iterating through all characters, we multiply the count of alphabetical characters by 0.02 (since we are paid 2 cents per alphabetical character) to calculate the payment. Finally, we print out the payment (formatted to two decimal places) using an f-string.
Python Practice String Exercise 12: String to Dictionary

Your coworker has sent you some important data, but it is formatted as the text below:
"humidity:60;wind_speed:10;precipitation:0.2;visibility:15;cloud_cover:40"

Create a code to transform the text into a Python dictionary.
Solution
data_text = "humidity:60;wind_speed:10;precipitation:0.2;visibility:15;cloud_cover:40"
data_dict = {}
 
pairs = data_text.split(";")
 
for pair in pairs:
    key, value = pair.split(":")
    data_dict[key] = float(value)
 
print(data_dict)
 
# output:
# {'humidity': 60.0, 'wind_speed': 10.0, 'precipitation': 0.2, 'visibility': 15.0, 'cloud_cover
': 40.0}
Explanation

We start with the text containing the data in the data_text variable. Since each label-value pair is delimited by a semicolon, we can obtain them as a list by splitting the text with the str.split() method.

Then we iterate over each pair and split the pair itself by colon, thus separating the label from the value. Afterwards, we add the label as the dictionary key, and the value (converted to a float) as the dictionary value. We can see from the printed dictionary that our conversion has indeed worked!
Python Practice String Exercise 13: Count Occurrences

You wrote a short paragraph about your friends:
"In the bustling city of New York, Sarah and John were longtime friends who often met for coffee. At the cafe, they frequently ran into Emily, their mutual acquaintance from college. Meanwhile, across town, Michael and Jessica prepared for their upcoming presentation at work. Later that day, Sarah bumped into John again while shopping, and they exchanged greetings before parting ways."

Create a function that lets you count the number of occurrences of one of your friends, given their name.
Solution
def count_friend_occurrences(paragraph, friend_name):
    return paragraph.lower().count(friend_name.lower())
 
paragraph = "In the bustling city of New York, Sarah and John were longtime friends who often met for coffee. At the cafe, they frequently ran into Emily, their mutual acquaintance from college. Meanwhile, across town, Michael and Jessica prepared for their upcoming presentation at work. Later that day, Sarah bumped into John again while shopping, and they exchanged greetings before parting ways."
 
friend_name = "Sarah"
 
occurrences = count_friend_occurrences(paragraph, friend_name)
print(f"{friend_name} appears {occurrences} times in the paragraph.")
 
# output: Sarah appears 2 times in the paragraph.
Explanation

Here, we create the function count_friend_occurrences. The function takes two arguments: the paragraph of text, and the name of the friend whose occurrences in the paragraph we want to count.

Inside the function, we convert both the paragraph and the friend's name to lowercase using the str.lower(), so that the search becomes case-insensitive. Then we use str.count() method to count and return the occurrences of the friend's name in the paragraph.
Python Practice String Exercise 14: Word Frequency Counter

You are given this paragraph:
"The cat cat sat on on the the mat. Nearby, a dog dog watched with with curious eyes as the cat cat made itself comfortable on on the the soft surface. The sun sun streamed through through the window, casting a warm glow over over the room."

You are then tasked to count the frequency of each word in the paragraph (in a case-insensitive fashion). Present your results as a dictionary, where the key is a word and the value is its count.
Solution
paragraph = "The cat cat sat on on the the mat. Nearby, a dog dog watched with with curious eyes as the cat cat made itself comfortable on on the the soft surface. The sun sun streamed through through the window, casting a warm glow over over the room."
 
paragraph_no_punctuation = paragraph.replace('.', '').replace(',', '')
words = paragraph_no_punctuation.lower().split()
 
word_counts = {}
for word in words:
    if word not in word_counts:
        word_counts[word] = 1
    else:
        word_counts[word] += 1
 
print(word_counts)
 
# output:
# {'the': 9, 'cat': 4, 'sat': 1, 'on': 4, ... }
Explanation

For this exercise, we start with the given paragraph and first remove any punctuation marks (like periods and commas) using the str.replace() method. Then we convert the paragraph to lowercase using the str.lower() method to ensure case-insensitive counting. We then split the paragraph into a list of words using the str.split() method.

We create the word_counts dictionary to store the frequency of each word. Next, we iterate over each word in the list, checking if it is already in the dictionary. If it's not, we add the word as a key with a value of 1 (indicating that it is the first occurrence). Otherwise, we increment its count by 1.

Once the loop is done, we have our dictionary ready. We need only to print it to see the results!
Python Practice String Exercise 15: Can you Build the Word?

You are creating a Scrabble game in Python. As your first assignment, you need to implement the logic that checks whether you can build a word from a set of characters.

Create a function that takes a word and a list of characters as its input. The function should return True if you can write out the word from the characters in the list. Remember that you are not allowed to use the same character multiple times, just like in Scrabble!
Solution
def can_build_word(word, char_list):
    char_list_copy = char_list.copy()
    for char in word:
        if char in char_list_copy:
            char_list_copy.remove(char)
        else:
            return False
    return True
 
print(can_build_word("hello", ["h", "e", "l", "l", "o"]))
# output: True
 
print(can_build_word("hello", ["h", "e", "l", "o"]))
# output: False
 
print(can_build_word("python", ["n", "h", "p", "t", "o", "y"]))
# output: True
Explanation

We start by creating the can_build_word function, which takes a word and a list of characters as input. We create a copy of the original list to ensure that the original list remains unchanged. We then iterate over each character in the word.

For each character, if it exists in the copied list, we remove it from the list using the list.remove() method. If that’s not the case, we can immediately return False because it means that the word cannot be built. On the other hand, if the iteration ends, this means that all characters in the word could be removed from the list. We then return True, because we are sure that the word can be built from the list.
