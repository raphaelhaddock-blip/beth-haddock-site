#!/usr/bin/env python3
"""
Professional Headshot Enhancement Script
Enhances image quality: sharpen, contrast, noise reduction, web optimization
"""

import os
import sys
from PIL import Image, ImageEnhance, ImageFilter
import cv2
import numpy as np

def load_image(path):
    """Load image using PIL"""
    return Image.open(path)

def upscale_image(img, scale_factor=2):
    """Upscale image using high-quality Lanczos resampling"""
    new_size = (img.width * scale_factor, img.height * scale_factor)
    return img.resize(new_size, Image.Resampling.LANCZOS)

def enhance_contrast(img, factor=1.15):
    """Enhance contrast subtly for professional look"""
    enhancer = ImageEnhance.Contrast(img)
    return enhancer.enhance(factor)

def enhance_brightness(img, factor=1.05):
    """Slight brightness adjustment"""
    enhancer = ImageEnhance.Brightness(img)
    return enhancer.enhance(factor)

def enhance_sharpness(img, factor=1.3):
    """Sharpen image for crisp details"""
    enhancer = ImageEnhance.Sharpness(img)
    return enhancer.enhance(factor)

def reduce_noise_cv2(img):
    """Use OpenCV for noise reduction while preserving edges"""
    # Convert PIL to OpenCV format
    img_array = np.array(img)

    # Convert RGB to BGR for OpenCV
    if len(img_array.shape) == 3:
        img_cv = cv2.cvtColor(img_array, cv2.COLOR_RGB2BGR)
    else:
        img_cv = img_array

    # Apply bilateral filter - preserves edges while reducing noise
    denoised = cv2.bilateralFilter(img_cv, d=9, sigmaColor=75, sigmaSpace=75)

    # Convert back to RGB
    if len(img_array.shape) == 3:
        denoised = cv2.cvtColor(denoised, cv2.COLOR_BGR2RGB)

    return Image.fromarray(denoised)

def unsharp_mask(img, radius=2, percent=150, threshold=3):
    """Apply unsharp mask for professional sharpening"""
    img_array = np.array(img)

    # Convert to OpenCV format
    if len(img_array.shape) == 3:
        img_cv = cv2.cvtColor(img_array, cv2.COLOR_RGB2BGR)
    else:
        img_cv = img_array

    # Create blurred version
    blurred = cv2.GaussianBlur(img_cv, (0, 0), radius)

    # Apply unsharp mask
    sharpened = cv2.addWeighted(img_cv, 1.0 + percent/100.0, blurred, -percent/100.0, 0)

    # Convert back
    if len(img_array.shape) == 3:
        sharpened = cv2.cvtColor(sharpened, cv2.COLOR_BGR2RGB)

    return Image.fromarray(sharpened)

def optimize_for_web(img, output_path, quality=90):
    """Save optimized for web - balance quality and file size"""
    # Ensure RGB mode for JPEG
    if img.mode in ('RGBA', 'P'):
        img = img.convert('RGB')

    # Save with optimization
    img.save(output_path, 'JPEG', quality=quality, optimize=True, progressive=True)

    return output_path

def enhance_headshot(input_path, output_path):
    """Main enhancement pipeline"""
    print(f"Loading image: {input_path}")
    img = load_image(input_path)
    original_size = img.size
    print(f"Original size: {original_size}")

    # Step 1: Upscale if small (less than 800px)
    if max(img.size) < 800:
        scale = 3 if max(img.size) < 500 else 2
        print(f"Upscaling {scale}x...")
        img = upscale_image(img, scale)
        print(f"New size: {img.size}")

    # Step 2: Noise reduction (do before sharpening)
    print("Reducing noise...")
    img = reduce_noise_cv2(img)

    # Step 3: Contrast enhancement
    print("Enhancing contrast...")
    img = enhance_contrast(img, factor=1.12)

    # Step 4: Slight brightness adjustment
    print("Adjusting brightness...")
    img = enhance_brightness(img, factor=1.03)

    # Step 5: Professional sharpening via unsharp mask
    print("Applying unsharp mask...")
    img = unsharp_mask(img, radius=1.5, percent=80, threshold=3)

    # Step 6: Final subtle sharpness boost
    print("Final sharpness pass...")
    img = enhance_sharpness(img, factor=1.15)

    # Step 7: Optimize and save for web
    print(f"Saving optimized image: {output_path}")
    optimize_for_web(img, output_path, quality=92)

    # Report results
    original_filesize = os.path.getsize(input_path)
    new_filesize = os.path.getsize(output_path)
    print(f"\n--- Enhancement Complete ---")
    print(f"Original: {original_size[0]}x{original_size[1]}, {original_filesize/1024:.1f}KB")
    print(f"Enhanced: {img.size[0]}x{img.size[1]}, {new_filesize/1024:.1f}KB")
    print(f"Output: {output_path}")

    return output_path

if __name__ == "__main__":
    input_file = "/Users/raphyhaddock/beth-haddock-site/public/images/beth/headshot-bw.jpeg"
    output_file = "/Users/raphyhaddock/beth-haddock-site/public/images/beth/headshot-bw-enhanced.jpeg"

    enhance_headshot(input_file, output_file)
