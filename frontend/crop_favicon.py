from PIL import Image

def crop_transparent(image_path, output_path):
    img = Image.open(image_path).convert("RGBA")
    
    # Get bounding box of non-transparent areas
    bbox = img.getbbox()
    if bbox:
        # Crop to the bounding box
        img_cropped = img.crop(bbox)
        img_cropped.save(output_path, "PNG")
        print(f"Successfully cropped and saved to {output_path}")
    else:
        print("Image is entirely transparent.")

crop_transparent("/home/juampi26/MaganMkt/frontend/public/favicon.png", "/home/juampi26/MaganMkt/frontend/public/favicon.png")
