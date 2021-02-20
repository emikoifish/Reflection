import requests

response = requests.get("api.datamuse.com/words")
print(response.status_code)
