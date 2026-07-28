import qrcode
import qrcode.image.svg

# Your Professional Domain
url = "https://cellherbs.com"

factory = qrcode.image.svg.SvgPathImage

qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H, # High error correction (best for bottles)
    box_size=10,
    border=4,
)
qr.add_data(url)
qr.make(fit=True)

img = qr.make_image(image_factory=factory)
img.save("CellHerbs_QR.svg")

print("Success! 'CellHerbs_QR.svg' created. This is the one for the printer.")