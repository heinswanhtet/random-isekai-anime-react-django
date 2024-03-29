from datetime import datetime

class ResponseTimeMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        start_time = datetime.now()
        response = self.get_response(request)
        end_time = datetime.now()
        response["X-Response-Time"] = str((end_time - start_time).total_seconds())
        print(f'Response time - {response["X-Response-Time"]}')
        return response
