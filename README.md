FX Backend Development Assessment
This repository contains solutions for the Backend Development Assessment, covering Questions 1, 2, 3, and 4 as per the provided instructions. The solutions include implementations in Node.js and Python for Questions 1 and 2, a SQL database schema for Question 3, and a Langflow-based Medical Chatbot using Retrieval-Augmented Generation (RAG) for Question 4.
Table of Contents

Overview
Folder Structure
Prerequisites
Setup and Run Instructions
Question 1: Password Validator (Node.js)
Question 1: Password Validator (Python)
Question 2: Find Pairs (Node.js)
Question 2: Find Pairs (Python)
Question 3: Movie Rating System
Question 4: Langflow Medical Chatbot


Notes

Overview
This repository addresses the following tasks:

Question 1: Implements a password validation function that checks for a minimum length of 15 characters and at least two of four character categories (uppercase, lowercase, digits, special characters). Unit tests are provided for specified passwords in both Node.js and Python.
Question 2: Implements a FindPairs function to find all pairs in an array that sum to a target value and print their indices, implemented in both Node.js and Python.
Question 3: Designs a SQL database schema for a movie rating and commenting system, including tables for Movies, Users, Ratings, Comments, and Genres, with sample queries.
Question 4: Creates a Medical Chatbot using Langflow with RAG, utilizing a custom dataset (health_guidelines.txt) and an OpenAI model for answering health-related questions.

Folder Structure
FX-Backend-Development-Assessment/
├── .gitignore
├── README.md
├── password-validator-node/
│   ├── package.json
│   ├── passwordValidator.js
│   ├── test/
│   │   └── testPasswordValidator.js
├── password-validator-python/
│   ├── password_validator.py
│   ├── test_password_validator.py
├── find-pairs-node/
│   ├── findPairs.js
├── find-pairs-python/
│   ├── find_pairs.py
├── movie-rating-system/
│   ├── movie_rating_schema.sql
├── langflow-chatbot/
│   ├── health_guidelines.txt
│   ├── medical_chatbot.json
│   ├── chat_widget.html
│   ├── langflow/  # Optional, contains Langflow repository clone


.gitignore: Excludes unnecessary files like node_modules, venv, and temporary files.
password-validator-node/: Node.js implementation for Question 1.
password-validator-python/: Python implementation for Question 1.
find-pairs-node/: Node.js implementation for Question 2.
find-pairs-python/: Python implementation for Question 2.
movie-rating-system/: SQL schema and queries for Question 3.
langflow-chatbot/: Files for the Langflow Medical Chatbot for Question 4.

Prerequisites
To run the solutions, ensure the following are installed:

Node.js (v14 or higher): Download
Python (v3.10–3.13): Download
Git: Download
A SQL database (e.g., MySQL, PostgreSQL) for Question 3.
OpenAI API Key for Question 4 (obtain from platform.openai.com).
pip and virtualenv for Python (included with Python installation).

Verify installations:
node -v
npm -v
python --version
git --version

Setup and Run Instructions
Question 1: Password Validator (Node.js)
This implements a password validator that checks for a minimum length of 15 characters and at least two character categories (uppercase, lowercase, digits, special characters). Unit tests validate the provided passwords.

Navigate to the folder:cd password-validator-node


Install dependencies:npm install


Run tests:npm test

Expected Output:Password Validator
  ✓ should validate Fxmedia12345678@ as true
  ✓ should validate AnotherSecurePwd$567 as true
  ✓ should validate SuperP@ssphrase123 as true
  ✓ should validate ShortPwd1! as false (too short)
  ✓ should validate Password as false (too short)
  ✓ should validate lowercaseonly as false (only one category)
  ✓ should validate MISSINGUPPERANDSPECIAL as false (too short)
7 passing (10ms)



Question 1: Password Validator (Python)
This implements the same password validator in Python with unit tests for the same passwords.

Navigate to the folder:cd password-validator-python


Run tests:python -m unittest

Expected Output:......
----------------------------------------------------------------------
Ran 7 tests in 0.001s
OK



Question 2: Find Pairs (Node.js)
This implements a FindPairs function that finds all pairs in an array summing to a target value (e.g., 8) and prints their indices.

Navigate to the folder:cd find-pairs-node


Run the script:node findPairs.js

Expected Output:Pair found at 0 and 3 (1 + 7)
Pair found at 1 and 2 (3 + 5)



Question 2: Find Pairs (Python)
This implements the FindPairs function in Python.

Navigate to the folder:cd find-pairs-python


Run the script:python find_pairs.py

Expected Output:Pair found at 0 and 3 (1 + 7)
Pair found at 1 and 2 (3 + 5)



Question 3: Movie Rating System
This provides a SQL database schema for a movie rating and commenting system, including tables for Users, Movies, Ratings, Comments, Genres, and a junction table MovieGenres for many-to-many relationships. Sample queries are included to retrieve ratings, comments, average ratings, and movies by genre.

Navigate to the folder:cd movie-rating-system


Import the schema into a SQL database (e.g., MySQL, PostgreSQL):
Use a SQL client (e.g., MySQL Workbench, pgAdmin) or command line:mysql -u your_username -p your_database < movie_rating_schema.sql

Replace your_username and your_database with your database credentials.


Run the sample queries provided in movie_rating_schema.sql:
Retrieve all ratings and comments for a specific movie (e.g., movie_id = 1).
Calculate the average rating for a movie.
Retrieve all movies associated with a particular genre (e.g., Action).



Question 4: Langflow Medical Chatbot
This implements a Medical Chatbot using Langflow with Retrieval-Augmented Generation (RAG) to answer health-related questions based on a custom dataset (health_guidelines.txt). The chatbot uses an OpenAI model and is configured via medical_chatbot.json.

Navigate to the Langflow folder:cd langflow-chatbot/langflow


Create and activate a virtual environment:python -m virtualenv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows


Install Langflow:pip install langflow -U


Run Langflow:python -m langflow run


Open http://127.0.0.1:7860 in a browser.
Import the flow:
Click Upload Collection in Langflow and select medical_chatbot.json.
Replace your_openai_api_key in medical_chatbot.json with your OpenAI API key.


Test the chatbot:
In the Langflow Playground, enter questions like:
“Apa itu penyakit jantungan?”
“Bagaimana mencegah diabetes?”


The chatbot uses health_guidelines.txt as the RAG data source.


Optional: Use the web interface:
Open chat_widget.html in a browser (replace your_flow_id with the actual flow ID from Langflow’s API tab).
Ensure Langflow is running (python -m langflow run).



Flow Explanation:

Chat Input: Captures user questions.
File: Loads health_guidelines.txt.
Text Splitter: Splits text into chunks for processing.
OpenAI Embeddings: Converts text chunks to vectors.
InMemory Vector Store: Stores embeddings for retrieval.
Prompt: Combines user question and retrieved context.
OpenAI: Generates answers using the OpenAI model.
Chat Output: Displays the response to the user.

Notes

Ensure Node.js (v14+), Python (3.10–3.13), and Git are installed.
For Question 4, an OpenAI API key is required. Obtain it from platform.openai.com.
The langflow folder is included but excludes venv and temporary files via .gitignore.
For Question 3, a SQL database (e.g., MySQL, PostgreSQL) is required to run the schema and queries.
All solutions have been tested locally to ensure functionality.
For any issues, refer to the repository’s commit history or contact me for clarification.

Thank you for reviewing my submission!
