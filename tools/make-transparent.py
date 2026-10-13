"""把奶蛙素材的背景转成透明通道，输出 PNG。

用法：python tools/make-transparent.py
依赖：pillow（装在隔离 venv 里）

说明：
- 用 floodfill 从四角连通填充背景色（而不是全局阈值），所以主体内部的白色
  （比如眼白）不会被误伤。
- default 那张底部是一整条灰绿纹理背景，颜色不均匀、无法按背景填充，
  因此先裁掉底部再抠；同时给底边做一小段 alpha 渐隐，让奶蛙看起来像浮在水面上。
"""
from PIL import Image, ImageDraw, ImageFilter

MARK = (255, 0, 255)


def remove_background(src, dst, crop_top=0.0, crop_bottom=None, fade_tail=0.06):
    image = Image.open(src).convert("RGB")

    if crop_top or crop_bottom:
        width, height = image.size
        top = int(height * crop_top)
        bottom = int(height * crop_bottom) if crop_bottom else height
        image = image.crop((0, top, width, bottom))

    width, height = image.size
    corners = [(1, 1), (width - 2, 1), (1, height - 2), (width - 2, height - 2)]

    for corner in corners:
        try:
            ImageDraw.floodfill(image, corner, MARK, thresh=32)
        except Exception:
            pass

    image = image.convert("RGBA")
    pixels = image.load()

    for y in range(height):
        for x in range(width):
            red, green, blue, alpha = pixels[x, y]
            if red > 240 and green < 40 and blue > 240:
                pixels[x, y] = (red, green, blue, 0)

    start = int(height * (1 - fade_tail))
    span = max(1, height - start)
    for y in range(start, height):
        keep = max(0.0, 1.0 - (y - start) / span)
        for x in range(width):
            red, green, blue, alpha = pixels[x, y]
            pixels[x, y] = (red, green, blue, int(alpha * keep))

    alpha_channel = image.split()[3].filter(ImageFilter.GaussianBlur(0.7))
    image.putalpha(alpha_channel)

    box = alpha_channel.getbbox()
    if box:
        image = image.crop(box)

    max_width = 420
    if image.size[0] > max_width:
        ratio = max_width / image.size[0]
        image = image.resize((max_width, round(image.size[1] * ratio)), Image.LANCZOS)

    image.save(dst, "PNG", optimize=True)
    print(f"{dst}  {image.size}")


remove_background("cityu-nailoong.jpg", "cityu-nailoong.png", fade_tail=0.06)
remove_background("default-nailoong.jpg", "default-nailoong.png", crop_top=0.1, crop_bottom=0.82, fade_tail=0.1)
