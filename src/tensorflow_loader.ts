/**
 * @fileoverview TensorFlow tools - Collection of manipulation tools.
 *
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author mbordihn@google.com (Markus Bordihn)
 */
import * as TensorflowTools from 'tensorflow-tools';

export class TensorflowLoader {
  private checkpointReader = TensorflowTools.readers.getCheckpointReader();
  private values: any = {};
  private NDARRAY: any;

  constructor(NDArrayWrapper: any) {
    this.NDARRAY = NDArrayWrapper;
  }

  loadLocalFiles(path:string): Promise<{[varName: string]: any}> {
    return new Promise<{[varName: string]: any}>((resolve, reject) => {
      this.checkpointReader.decodeLocalFiles(path).then(() => {
        this.parseValues();
        resolve(this.values);
      });
    });
  }

  loadRemoteFiles(url:string): Promise<{[varName: string]: any}> {
    return new Promise<{[varName: string]: any}>((resolve, reject) => {
      this.checkpointReader.decodeRemoteFiles(url).then(() => {
        this.parseValues();
        resolve(this.values);
      });
    });
  }

  parseValues() {
    this.values = {};
    const data = this.checkpointReader.getValues();
    for (const key in data) {
      const values = data[key].values;
      const shape = data[key].shape;
      this.values[key] = this.NDARRAY.make(shape, {values});
      this.values[key].data();
    }
  }

  getValues(): any {
    return this.values;
  }

}
