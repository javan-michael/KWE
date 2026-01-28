import qrcode
import qrcode.image.svg

# Your Link
url = "https://1year.me"

# Use the SVG Factory (No Pillow/Image libraries required)
factory = qrcode.image.svg.SvgPathImage

# Create the QR Code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,
    border=4,
)
qr.add_data(url)
qr.make(fit=True)

# Generate and Save
img = qr.make_image(image_factory=factory)
img.save("Bottle_QR.svg")

print("Success! Bottle_QR.svg created. You can open this in any browser.")