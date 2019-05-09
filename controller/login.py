import os

from django.shortcuts import render
from django.http import HttpResponse
import base64
import datetime
from fr import AFRTest


def page(request):
    return render(request, "login.html")


def getface(request):
    imgpath = "static/facedata/base/"
    if request.POST:
        time = datetime.datetime.now().strftime('%Y%m%d&%H%M%S')
        strs=request.POST['message']
        imgdata = base64.b64decode(strs)
        try:
            file = open(u'static/facedata/confirm/'+time+'.jpg', 'wb')
            file.write(imgdata)
            file.close()
        except:
            print('as')
        files = os.listdir(imgpath)
        for file in files:
            res=AFRTest.checkFace(imgpath+str(file),u'static/facedata/confirm/'+time+'.jpg')
            if res>=0.6:
                return HttpResponse('login_success')
        return HttpResponse('login_failed')
    else:
        return HttpResponse('no')

