import torch, torchvision
from torchvision import transforms
from PIL import Image
import sys

def perform_inference(path):
  '''
  Performs inference on provided image
  
  Arguments:
   path: string containing relative path to image
  Returns:
    string containing annotation for provided image
    OR 'ERROR: {error}' if an error occurs
  '''
  model = torchvision.models.alexnet(pretrained=True)
  TRANSFORM = transforms.Compose([
        transforms.Resize(256),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406], 
            std=[0.229, 0.224, 0.225])
  ])
  
  img = None
  try:
    img = Image.open(path)
  except:
    return "ERROR: invalid file/could not open image"
  if img is None:
    return "ERROR: unable to process image"
  
  device = 'cuda' if torch.cuda.is_available() else 'cpu'
  
  input_tensor = TRANSFORM(img).to(device=device)
  input_batch = input_tensor.unsqueeze(0)
  
  model.to(device=device)
  
  with torch.no_grad():
    output = model(input_batch)
  
  prob = torch.nn.functional.softmax(output[0], dim=0).to(device=device)
  predicted_index = torch.argmax(prob)
  
  try:
    with open("imagenet_classes.txt", "r") as f:
      categories = [s.strip() for s in f.readlines()]
    
    return categories[predicted_index]
  except:
    return 'ERROR: unable to perform inference'  

def main():
  if len(sys.argv) != 2:
    print('ERROR: incorrect usage, correct usage `python ml.py IMG_PATH`')
    return

  img_path = sys.argv[1]
  print(perform_inference(img_path))

if __name__ == '__main__':
  main()

