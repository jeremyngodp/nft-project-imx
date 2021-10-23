from PIL import Image, ImageOps
import os

scriptDir = os.path.dirname(__file__)
imagePath = os.path.join(scriptDir, '..\image')

im3 = Image.open('../image/hidden.jpg').convert("RGBA")
im3 = im3.resize((499,499))

out = im3.convert('RGB').save('../image/resizedHidden.jpg')