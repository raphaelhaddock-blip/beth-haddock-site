#!/usr/bin/env python3
"""
Professional AI-Powered Headshot Enhancement
Uses EDSR (Enhanced Deep Super-Resolution) neural network
"""

import os
from PIL import Image, ImageEnhance, ImageFilter
import numpy as np

def ai_upscale(img, scale=4):
    """Use EDSR AI model for super-resolution"""
    from super_image import EdsrModel, ImageLoader

    print(f"Loading EDSR x{scale} model...")
    model = EdsrModel.from_pretrained(f'eugenesiow/edsr-base', scale=scale)

    # Ensure RGB
    if img.mode != 'RGB':
        img = img.convert('RGB')

    # Save temp file for ImageLoader
    temp_path = '/tmp/temp_input.png'
    img.save(temp_path, 'PNG')

    print("Running AI super-resolution...")
    inputs = ImageLoader.load_image(img)
    preds = model(inputs)

    # Convert output to PIL
    output = preds.squeeze(0).permute(1, 2, 0).detach().cpu().numpy()
    output = (output * 255).clip(0, 255).astype(np.uint8)

    return Image.fromarray(output)

def enhance_for_web_display(img):
    """
    Professional enhancement tuned for web hero display on dark background
    """
    import cv2

    # Convert to numpy for OpenCV processing
    img_array = np.array(img)
    img_cv = cv2.cvtColor(img_array, cv2.COLOR_RGB2BGR)

    # 1. Subtle denoise preserving facial details
    print("Applying facial-aware denoising...")
    denoised = cv2.fastNlMeansDenoisingColored(img_cv, None, h=6, hColor=6, templateWindowSize=7, searchWindowSize=21)

    # 2. CLAHE for local contrast (better for faces)
    print("Applying adaptive contrast (CLAHE)...")
    lab = cv2.cvtColor(denoised, cv2.COLOR_BGR2LAB)
    l, a, b = cv2.split(lab)
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
    l = clahe.apply(l)
    enhanced = cv2.merge([l, a, b])
    enhanced = cv2.cvtColor(enhanced, cv2.COLOR_LAB2BGR)

    # 3. Subtle unsharp mask for crisp details
    print("Applying professional sharpening...")
    gaussian = cv2.GaussianBlur(enhanced, (0, 0), 2.0)
    sharpened = cv2.addWeighted(enhanced, 1.3, gaussian, -0.3, 0)

    # Convert back to PIL
    result = cv2.cvtColor(sharpened, cv2.COLOR_BGR2RGB)
    return Image.fromarray(result)

def adjust_levels(img):
    """Fine-tune levels for B&W image on dark site"""
    # Slight contrast boost
    enhancer = ImageEnhance.Contrast(img)
    img = enhancer.enhance(1.08)

    # Ensure blacks are deep (for dark site background blending)
    enhancer = ImageEnhance.Brightness(img)
    img = enhancer.enhance(0.98)

    return img

def save_optimized(img, output_path, quality=93):
    """Save with professional web optimization"""
    if img.mode != 'RGB':
        img = img.convert('RGB')

    img.save(output_path, 'JPEG',
             quality=quality,
             optimize=True,
             progressive=True,
             subsampling=0)  # 4:4:4 for better quality

    return output_path

def professional_enhance(input_path, output_path):
    """Full professional enhancement pipeline"""

    print(f"\n{'='*50}")
    print("PROFESSIONAL HEADSHOT ENHANCEMENT")
    print(f"{'='*50}\n")

    # Load
    print(f"Loading: {input_path}")
    img = Image.open(input_path)
    original_size = img.size
    print(f"Original: {original_size[0]}x{original_size[1]}")

    # Step 1: AI Upscale (4x)
    print("\n[1/4] AI Super-Resolution...")
    img = ai_upscale(img, scale=4)
    print(f"Upscaled: {img.size[0]}x{img.size[1]}")

    # Step 2: Professional enhancement
    print("\n[2/4] Professional Enhancement...")
    img = enhance_for_web_display(img)

    # Step 3: Level adjustments
    print("\n[3/4] Level Adjustments...")
    img = adjust_levels(img)

    # Step 4: Save optimized
    print("\n[4/4] Saving Optimized...")
    save_optimized(img, output_path)

    # Report
    original_size_kb = os.path.getsize(input_path) / 1024
    new_size_kb = os.path.getsize(output_path) / 1024

    print(f"\n{'='*50}")
    print("ENHANCEMENT COMPLETE")
    print(f"{'='*50}")
    print(f"Original: {original_size[0]}x{original_size[1]}, {original_size_kb:.1f}KB")
    print(f"Enhanced: {img.size[0]}x{img.size[1]}, {new_size_kb:.1f}KB")
    print(f"Output: {output_path}")
    print(f"{'='*50}\n")

if __name__ == "__main__":
    # Use ORIGINAL 400x400, not my previous bad enhancement
    input_file = "/Users/raphyhaddock/beth-haddock-site/public/images/beth/headshot-bw.jpeg"
    output_file = "/Users/raphyhaddock/beth-haddock-site/public/images/beth/headshot-bw-pro.jpeg"

    professional_enhance(input_file, output_file)
