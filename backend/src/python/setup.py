import os, torchvision
def main():
  model = torchvision.models.alexnet(pretrained=True)

if __name__ == '__main__':
  main()
