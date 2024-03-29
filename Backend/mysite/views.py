import requests
import random
from bs4 import BeautifulSoup

from rest_framework.views import APIView
from rest_framework.response import Response

BASE_ISEKAI_URL = 'https://myanimelist.net/anime/genre/62/Isekai?page={}'

class ApiIsekaiRandom(APIView):
    def get(self, *args, **kwargs):
        all_isekai = [
            getIsekaiList('1'),
            getIsekaiList('2'),
            getIsekaiList('3'),
        ]

        # data =  all_isekai

        # First: generate a random page, then get a random isekai from that page
        initial =  random.choice(all_isekai)
        data =  random.choice(initial)

        return Response(data)

def getIsekaiList(pageNo):  
    isekai_result = []

    response = requests.get(BASE_ISEKAI_URL.format(pageNo))
    data = response.text
    soup = BeautifulSoup(data, features='html.parser')

    post_listings = soup.find(class_='seasonal-anime-list',).find_all('div', {'class':'js-anime-category-producer seasonal-anime js-seasonal-anime js-anime-type-all js-anime-type-1'})

    id = 0
    for post in post_listings:
        title = post.find(class_='link-title').text
        url = post.find(class_='link-title').get('href')
        image_url = post.find(class_='image').find('img').get('data-src')
        synopsis = post.find(class_='preline').text

        isekai_result.append({'id': id, 'title': title, 'url':url, 'image_url':image_url, 'synopsis':synopsis})
        id += 1
    
    return isekai_result