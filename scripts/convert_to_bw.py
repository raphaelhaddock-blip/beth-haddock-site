#!/usr/bin/env python3
"""
Professional B&W Conversion for Hero Image
Uses luminosity method for natural skin tones
"""

import os
from PIL import Image, ImageEnhance
import numpy as np

def luminosity_bw(img):
    """
    Convert to B&W using luminosity method
    Weights: R=0.2126, G=0.7152, B=0.0722 (ITU-R BT.709)
    This preserves natural skin tone gradations better than simple average
    """
    if img.mode != 'RGB':
        img = img.convert('RGB')

    img_array = np.array(img, dtype=np.float32)

    # Luminosity formula
    gray = (0.2126 * img_array[:,:,0] +
            0.7152 * img_array[:,:,1] +
            0.0722 * img_array[:,:,2])

    gray = np.clip(gray, 0, 255).astype(np.uint8)
    return Image.fromarray(gray, mode='L')

def professional_bw_conversion(input_path, output_path):
    """
    Full professional B&W conversion pipeline
    """
    print(f"\n{'='*50}")
    print("PROFESSIONAL B&W CONVERSION")
    print(f"{'='*50}\n")

    # Load
    print(f"Loading: {input_path}")
    img = Image.open(input_path)
    print(f"Original size: {img.size[0]}x{img.size[1]}")

    # Step 1: Luminosity B&W conversion
    print("\n[1/4] Luminosity B&W conversion...")
    bw = luminosity_bw(img)

    # Step 2: Subtle contrast boost
    print("[2/4] Adjusting contrast...")
    bw_rgb = bw.convert('RGB')
    enhancer = ImageEnhance.Contrast(bw_rgb)
    bw_rgb = enhancer.enhance(1.12)  # Subtle boost

    # Step 3: Slight brightness adjustment for dark background
    print("[3/4] Adjusting brightness for dark site...")
    enhancer = ImageEnhance.Brightness(bw_rgb)
    bw_rgb = enhancer.enhance(0.97)  # Slightly darker blacks

    # Step 4: Save optimized for web
    print("[4/4] Saving optimized...")
    bw_rgb.save(output_path, 'JPEG',
                quality=92,
                optimize=True,
                progressive=True,
                subsampling=0)

    # Report
    original_kb = os.path.getsize(input_path) / 1024
    new_kb = os.path.getsize(output_path) / 1024

    print(f"\n{'='*50}")
    print("CONVERSION COMPLETE")
    print(f"{'='*50}")
    print(f"Original: {img.size[0]}x{img.size[1]}, {original_kb:.1f}KB (color)")
    print(f"Output: {bw_rgb.size[0]}x{bw_rgb.size[1]}, {new_kb:.1f}KB (B&W)")
    print(f"Saved to: {output_path}")
    print(f"{'='*50}\n")

    return output_path

if __name__ == "__main__":
    input_file = "/Users/raphyhaddock/Downloads/BETH PHOTOS/_DSC1908.JPG"
    output_file = "/Users/raphyhaddock/beth-haddock-site/public/images/beth/hero-bw.jpeg"

    professional_bw_conversion(input_file, output_file)
