# Usage
**MacOS/Linux/Windows without CUDA** 
```
pip install torch torchvision
python setup.py
python ml.py ./path/to/image
```
**Windows with CUDA**
```
pip install -r windows-requirements.txt
python setup.py
python ml.py .\path\to\image
```
**Linux with Cuda**
```
pip install pip3 install torch==1.8.1+cu111 torchvision==0.9.1+cu111 -f https://download.pytorch.org/whl/torch_stable.html
python setup.py
python ml.py ./path/to/image
```
