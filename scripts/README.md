# Reqres Users CSV Generator

This is a simple Python script that fetches user data from [Reqres API](https://reqres.in/api/users?page=2) and saves it into a CSV file with the following columns:

- First Name
- Last Name
- Email

## How It Works

The script fetches the JSON data from the API and converts it into a CSV file named `users.csv`.  
Due to network restrictions or Cloudflare protection, some networks may return a 403 error. In that case, you can manually save the JSON response from your browser as `users.json` and run the script using the local file.

