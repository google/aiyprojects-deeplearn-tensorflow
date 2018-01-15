TensorFlow Tools
================
A TensorFlow integration for deeplearn.js .

Installation
------------
Use NPM using `npm install deeplearn-tensorflow` or fork, clone, download the source on GitHub to get the latest version.


Basic Usage
-----------
```javascript
import {NDArray, ...} from 'deeplearn';
import {TensorflowLoader} from 'tensorflow_loader';

const tensorflowReader = new TensorflowLoader(NDArray);
tensorflowReader.loadRemoteFiles('data/model.ckpt-999').then((vars) => {
    ...
});
```


Disclaimer
----------
This is not an official Google product.


Author
------
[Markus Bordihn](https://github.com/MarkusBordihn)


License
-------
Apache License, Version 2.0 - http://www.apache.org/licenses/LICENSE-2.0
