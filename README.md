Deeplearn Tensorflow
====================
A TensorFlow integration for deeplearn.js which allows to load tensorflow
checkpoint files directly.

## Installation

### NPM
For NPM use `npm install deeplearn-tensorflow` in your project folder.

### YARN
For YARN use `yarn add deeplearn-tensorflow` in your project folder.

### Other
Fork, clone, download the source on GitHub to get the latest version like
`git clone https://github.com/google/deeplearn-tensorflow.git`.


## Basic Usage
```javascript
import {NDArray, ...} from 'deeplearn';
import {TensorflowLoader} from 'deeplearn-tensorflow';

const tensorflowReader = new TensorflowLoader(NDArray);
tensorflowReader.loadRemoteFiles('data/model.ckpt-999').then((vars) => {
    ...
});
```

## Demo
For an demo implementation, please check [DEMO.md](DEMO.md).

## Disclaimer
This is not an official Google product.


## Author
[Markus Bordihn](https://github.com/MarkusBordihn)


## License
Apache License, Version 2.0 - http://www.apache.org/licenses/LICENSE-2.0
