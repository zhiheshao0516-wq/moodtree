from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "review" / "batch1"
PETS = {
    "02": "柴犬",
    "03": "白兔",
    "04": "熊猫",
    "05": "企鹅",
    "06": "水豚",
    "07": "小鸡",
    "08": "仓鼠",
}
TRIPO_REFS = {
    "02": ROOT / "incoming/pets3d-batch1/02-render.webp",
    "04": ROOT / "incoming/pets3d-batch1/package/04-熊猫-render.webp",
    "06": ROOT / "incoming/pets3d-batch1/package/06-水豚-render.webp",
    "08": ROOT / "incoming/pets3d-batch1/package/08-仓鼠-render.webp",
}


def font(size: int):
    paths = [
        "/System/Library/Fonts/PingFang.ttc",
        "/System/Library/Fonts/Supplemental/Arial Unicode.ttf",
    ]
    for path in paths:
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            pass
    return ImageFont.load_default()


def cover(path: Path, size=(420, 420)) -> Image.Image:
    image = Image.open(path).convert("RGB")
    ratio = min(size[0] / image.width, size[1] / image.height)
    resized = image.resize((round(image.width * ratio), round(image.height * ratio)), Image.Resampling.LANCZOS)
    canvas = Image.new("RGB", size, "#f8f5ef")
    canvas.paste(resized, ((size[0] - resized.width) // 2, (size[1] - resized.height) // 2))
    return canvas


title_font = font(36)
label_font = font(24)
note_font = font(18)

for pet_id, name in PETS.items():
    panels = [
        ("官方 2D", ROOT / f"pets-256/{pet_id}-{name}.webp"),
    ]
    if pet_id in TRIPO_REFS:
        panels.append(("Tripo 参考", TRIPO_REFS[pet_id]))
    panels.extend(
        [
            ("正面", OUT / f"{pet_id}-front.png"),
            ("侧面", OUT / f"{pet_id}-side.png"),
            ("背面", OUT / f"{pet_id}-back.png"),
        ]
    )
    width = 48 + len(panels) * 420 + (len(panels) - 1) * 16 + 48
    sheet = Image.new("RGB", (width, 548), "#f2eee7")
    draw = ImageDraw.Draw(sheet)
    draw.text((48, 24), f"{pet_id} · {name} · 3D 批次验收", fill="#30443a", font=title_font)
    x = 48
    for label, path in panels:
        panel = cover(path)
        sheet.paste(panel, (x, 84))
        bbox = draw.textbbox((0, 0), label, font=label_font)
        draw.text((x + (420 - (bbox[2] - bbox[0])) / 2, 512), label, fill="#53645b", font=label_font)
        x += 436
    sheet.save(OUT / f"{pet_id}-comparison.jpg", quality=92, optimize=True)

print("generated", len(PETS), "comparison sheets")
