import rembg
import sys
import PIL.Image

if len(sys.argv) != 3:
    print("Usage: python rm_bg.py <input> <output>")
    sys.exit(1)

rembg.remove(PIL.Image.open(sys.argv[1])).save(sys.argv[2])
