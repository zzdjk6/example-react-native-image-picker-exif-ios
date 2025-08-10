import {Button, View} from "react-native";
import {launchCamera} from "react-native-image-picker";
import React from "react";
import {readAsync} from "@lodev09/react-native-exify";

const Index: React.FC = () => {
  const handlePressTakePhoto = async () => {
    try {
      const imagePickerResponse = await launchCamera({
        mediaType: "photo",
        includeExtra: true, // Note: this option does not include EXIF data, might be a bug
        saveToPhotos: false,
        quality: 1,
      });

      if (imagePickerResponse.didCancel || imagePickerResponse.errorCode) {
        return;
      }

      const photo = imagePickerResponse.assets?.[0];
      if (!photo) {
        return;
      }

      console.log("Photo from image picker: ",{
        uri: photo.uri,
        width: photo.width,
        height: photo.height,
        timestamp: photo.timestamp
      });

      if (!photo.uri){
        return;
      }

      const exifTags = await readAsync(photo.uri);
      console.log("Exif tags: ", exifTags);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title={"Take photo"} onPress={handlePressTakePhoto}/>
    </View>
  );
}

export default Index;
