import os, torchvision
def main():
  os.system(
    r'wget https://raw.githubusercontent.com/pytorch/hub/master/imagenet_classes.txt'
  )
  model = torchvision.models.alexnet(pretrained=True)

if __name__ == '__main__':
  main()
