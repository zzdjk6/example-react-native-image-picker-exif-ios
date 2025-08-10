# Example: workaround on getting EXIF when taking photo on iOS device with react-native-image-picker

## Idea

`includeExtra: true` won't provide EXIF, we can use another library to read the EXIF from the temporary / saved photo file.

## How to run

For JS part:

```shell
npm install

npx pod-install ios

npm run start
```

Then open XCode for the workspace, run it on device.

## Example output from console logs

This is an example I run with iPad for landscape and portrait:

```
 LOG  Photo from image picker:  {"height": 2448, "timestamp": undefined, "uri": "file:///var/mobile/Containers/Data/Application/6D3D2338-E653-4D56-914A-DB72183AF8A2/tmp/462CE7C9-A59C-4EB0-945E-61AC279297B5.jpg", "width": 3264}
 LOG  Exif tags:  {"ColorModel": "RGB", "ColorSpace": 1, "Depth": 8, "Orientation": 1, "PixelHeight": 2448, "PixelWidth": 3264, "PixelXDimension": 3264, "PixelYDimension": 2448, "ProfileName": "sRGB IEC61966-2.1"}
 
 LOG  Photo from image picker:  {"height": 3264, "timestamp": undefined, "uri": "file:///var/mobile/Containers/Data/Application/6D3D2338-E653-4D56-914A-DB72183AF8A2/tmp/317C47FC-2115-4441-8CDF-66C170660E8F.jpg", "width": 2448}
 LOG  Exif tags:  {"ColorModel": "RGB", "ColorSpace": 1, "Depth": 8, "Orientation": 6, "PixelHeight": 2448, "PixelWidth": 3264, "PixelXDimension": 3264, "PixelYDimension": 2448, "ProfileName": "sRGB IEC61966-2.1"}
```