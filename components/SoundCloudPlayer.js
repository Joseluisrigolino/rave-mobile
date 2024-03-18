import React from 'react';
import { WebView } from 'react-native-webview';

const SoundCloudPlayer = ({ trackId }) => {
  // El 'src' tiene que ser la URL de la pista de SoundCloud que quieres incrustar.
  // Asegúrate de usar el formato correcto proporcionado por SoundCloud para la integración.
  const soundCloudUrl = `https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/${trackId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;

  return (
    <WebView
      style={{ height: 150 }} // Establece el alto según tus necesidades
      source={{ uri: soundCloudUrl }}
      allowsInlineMediaPlayback
      mediaPlaybackRequiresUserAction={false}
    />
  );
};

export default SoundCloudPlayer;