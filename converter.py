from pdf2image import convert_from_bytes
import sys
import  cv2

# images = convert_from_bytes(open('VSTAR_paper.pdf', 'rb').read())
# for i in range(8):
#     images[i].save(f"page-{i}.jpg")
    
# img_lst = []
# for i in range(8):
#     img_lst.append(cv2.imread(f'page-{i}.jpg'))
# img = cv2.hconcat(img_lst)
# cv2.imwrite('vstar_paper.jpg', img)

img = convert_from_bytes(open('resources/images/STVD_example2.pdf', 'rb').read())
img[0].save('resources/images/intro.jpg')