import json
import csv

with open("users.json", "r") as f:
    data = json.load(f)

with open("users.csv", "w", newline="") as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(["First Name", "Last Name", "Email"])
    for user in data.get("data", []):
        writer.writerow([user["first_name"], user["last_name"], user["email"]])

print("Data saved to users.csv successfully!")
