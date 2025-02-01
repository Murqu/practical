import requests
import json
from bs4 import BeautifulSoup

# Wikipedia page URL
url = "https://en.wikipedia.org/wiki/List_of_jazz_tunes"

# Fetch the page content
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

# Find all tunes in the list
jazz_tunes = []

# Wikipedia uses <div class="div-col"> for lists of jazz tunes
for div in soup.find_all("div", class_="div-col"):
    for li in div.find_all("li"):
        a_tag = li.find("a")
        if a_tag and a_tag.get("href", "").startswith("/wiki/"):  # Likely a valid tune link
            jazz_tunes.append(a_tag.text)

# Save to a JSON file
with open("jazz_tunes.json", "w", encoding="utf-8") as file:
    json.dump(jazz_tunes, file, indent=4)

print(f"Extracted {len(jazz_tunes)} jazz tunes and saved to jazz_tunes.json")
