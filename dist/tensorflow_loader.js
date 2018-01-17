"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TensorflowTools = require("tensorflow-tools");
var TensorflowLoader = (function () {
    function TensorflowLoader(NDArrayWrapper) {
        this.checkpointReader = TensorflowTools.readers.getCheckpointReader();
        this.values = {};
        this.NDARRAY = NDArrayWrapper;
    }
    TensorflowLoader.prototype.loadLocalFiles = function (path) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.checkpointReader.decodeLocalFiles(path).then(function () {
                _this.parseValues();
                resolve(_this.values);
            });
        });
    };
    TensorflowLoader.prototype.loadRemoteFiles = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.checkpointReader.decodeRemoteFiles(url).then(function () {
                _this.parseValues();
                resolve(_this.values);
            });
        });
    };
    TensorflowLoader.prototype.parseValues = function () {
        this.values = {};
        var data = this.checkpointReader.getValues();
        for (var key in data) {
            var values = data[key].values;
            var shape = data[key].shape;
            this.values[key] = this.NDARRAY.make(shape, { values: values });
            this.values[key].data();
        }
    };
    TensorflowLoader.prototype.getValues = function () {
        return this.values;
    };
    return TensorflowLoader;
}());
exports.TensorflowLoader = TensorflowLoader;
//# sourceMappingURL=tensorflow_loader.js.map