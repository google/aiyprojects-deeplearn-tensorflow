Load TensorFlow models with deeplearn-tensorflow
------------------------------------------------

This tutorial demonstrates how to load a TensorFlow model with
deeplearn-tensorflow directly into deeplearn.js.

We will modify the existing MNIST demo to simplify the needed steps.

## Prepare and build the MNIST demo

### Clone the deeplearn.js project
To build the MNIST demo, we need to clone the source code with:
```bash
git clone https://github.com/PAIR-code/deeplearnjs.git
cd deeplearnjs
```

### Install yarn
Yarn is a requirement of deeplearn.js and could be installed with the following
command: 
```bash
npm install --global yarn
```

### Train the MNIST model
Please make sure you have Python and TensorFlow installed to train the MNIST
model by running:
```bash
python demos/mnist/fully_connected_feed.py
```

### Copy the trained MNIST model
The following command will copy the trained model to the mnist demo dirctory:
```bash
cp -R /tmp/tensorflow/mnist/logs/fully_connected_feed demos/mnist/
```
(Note: The trained model could be at a different location depending on
the used operation system.)

### Process dependencies
To load and resolve all dependencies run the following npm command:
```bash
npm run prep
```

### Add deeplearn-tensorflow dependencies over yarn
To be able to use the deeplearn-tensorflow integration add deeplearn-tensorflow
as dependencies for the demos with:
```bash
cd demos
yarn add deeplearn-tensorflow
cd ..
```

### Prepare and run the MNIST demo
First run the unchanged MNIST demo to make sure everything is setup correctly:
```bash
./scripts/watch-demo demos/mnist
```

To view the MNIST demo visit `http://127.0.0.1:8080/demos/mnist/` in your
browser.

## Modify demos/mnist/mnist.ts
To load the trained TensorFlow model with deeplearn-tensorflow, the following
modifications needs to be done for `demos/mnist/mnist.ts`.

### Remove 'CheckpointLoader'
```diff
// tslint:disable-next-line:max-line-length
- import {Array1D, Array2D, CheckpointLoader, ENV, NDArray, Scalar} from 'deeplearn';
+ import {Array1D, Array2D, ENV, NDArray, Scalar} from 'deeplearn';
```

### Import 'TensorflowLoader'
```diff
import {Array1D, Array2D, ENV, NDArray, Scalar} from 'deeplearn';
+ import {TensorflowLoader} from 'deeplearn-tensorflow';
```

### Replace existing CheckpointLoader with TensorflowLoader
```diff
- // manifest.json lives in the same directory as the mnist demo.
- const reader = new CheckpointLoader('.');
- reader.getAllVariables().then(vars => {

+ // Tensorflow reader demo.
+ const tensorflowReader = new TensorflowLoader(NDArray);
+ tensorflowReader.loadRemoteFiles('fully_connected_feed/model.ckpt-999').then((vars) => {
```

### Reload MNIST demo
Visit `http://127.0.0.1:8080/demos/mnist/` to see the new loader in action.
