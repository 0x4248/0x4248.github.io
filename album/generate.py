import os
from datetime import datetime

BASE_DIR = "album/imgs"
TEMPLATE_FILE = "template.html"
OUTPUT_FILE = "album/index.html"

HEADERS = """
<p class="logo">My Album</p>
<p>Photos from my life, organised by date with some captions. No AI and real cameras used from the 90s to the present day.</p>
<p>Contains images from 4248 Media and the 4248 Arial Space Photography Laboratory (4248 ASPL)</p>
<i>© 2026 4248 Media, A part of 0x4248. Licensed under the Creative Commons Attribution-ShareAlike 4.0 License (CC BY-SA 4.0).</i>
<i>© 2026 4248 ASPL (4248 Arial Space Photography Laboratory), A part of 0x4248. Licensed under the Creative Commons Attribution-ShareAlike 4.0 License (CC BY-SA 4.0).</i>
<i>© 2026 0x4248.</i>

<div>
<h2>My camera collection:</h2>
<img src="/album/cam_imgs/SONY_Mavica.jpg" loading="lazy" width="200">
<img src="/album/cam_imgs/Canon_4000D.jpg" loading="lazy" width="200">
<img src="/album/cam_imgs/Canon_5D.jpg" loading="lazy"  width="200"> 
"""

def month_name(year, month):
    return datetime(int(year), int(month), 1).strftime("%B %Y")

def generate_album_html():
    html = []
    html.append(HEADERS)

    for year in sorted(os.listdir(BASE_DIR), reverse=True):
        year_path = os.path.join(BASE_DIR, year)
        if not os.path.isdir(year_path):
            continue

        for month in sorted(os.listdir(year_path), reverse=True):
            month_path = os.path.join(year_path, month)
            if not os.path.isdir(month_path):
                continue

            html.append(f"<h2>{month_name(year, month)}</h2>")

            for day in sorted(os.listdir(month_path), reverse=True):
                day_path = os.path.join(month_path, day)
                if not os.path.isdir(day_path):
                    continue

                # Full day name for heading
                full_day_name = datetime(int(year), int(month), int(day)).strftime("%A %d %B %Y")
                html.append('<br style="clear:both;"><hr>')
                html.append(f"<h3>{full_day_name}</h3>")

                # Read optional index.txt for the day
                index_txt_path = os.path.join(day_path, "index.txt")
                if os.path.exists(index_txt_path):
                    with open(index_txt_path, "r", encoding="utf-8") as f:
                        day_index_text = f.read().strip()
                    if day_index_text:
                        # Wrap in <p> or <div>
                        html.append(f"<p>{day_index_text}</p>")

                # Now list images
                for file in sorted(os.listdir(day_path)):
                    if file.lower().endswith((".jpg", ".jpeg", ".png", ".webp", ".gif")):
                        img_path = f"/{BASE_DIR}/{year}/{month}/{day}/{file}"
                        caption_path = os.path.join(
                            day_path,
                            file.rsplit(".", 1)[0] + ".txt"
                        )

                        caption = ""
                        if os.path.exists(caption_path):
                            with open(caption_path, "r", encoding="utf-8") as f:
                                caption = f.read().strip()
                        if not caption:
                            caption = "&nbsp;"  # prevent layout issues

                        html.append(f"""
<figure>
  <a href="{img_path}">
    <img src="{img_path}" loading="lazy">
  </a>
  <figcaption>{caption}</figcaption>
</figure>
"""
)
            # Clear floats after month
            

    return "\n".join(html)


def generate():
    # Read template
    with open(TEMPLATE_FILE, "r", encoding="utf-8") as f:
        template = f.read()

    album_html = generate_album_html()

    # Replace placeholder
    final_html = template.replace("{{ content}}", album_html)
    final_html = final_html.replace("{{ content }}", album_html)

    # Write output
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(final_html)

    print("index.html generated successfully.")

if __name__ == "__main__":
    generate()
