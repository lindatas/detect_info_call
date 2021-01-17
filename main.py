import frida
import sys
import time

pid = "cn.kuwo.play"
script_name = "imei_mac.js"

def on_message(message,data):
    print(message)

def load_js(name):
    with open(name) as f:
        script = f.read()
    return script

def chech_argv():
    if sys.argv[1]  is not None:
       pid = sys.argv[1]

    if sys.argv[2]  is not None::
        script_name = sys.argv[2]



devices = frida.get_usb_device()
session = devices.spawn([pid])
devices.resume(pid)
time.sleep(1)
script = session.attach(pid)
