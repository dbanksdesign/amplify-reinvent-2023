function base64ToArrayBuffer(base64: string) {
  var binaryString = atob(base64);
  var bytes = new Uint8Array(binaryString.length);
  for (var i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

export const processFile = async (base64: string) => {
  const buff = base64ToArrayBuffer(base64);
  const hashBuffer = await window.crypto.subtle.digest('SHA-1', buff);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((a) => a.toString(16).padStart(2, '0'))
    .join('');
  return { file: buff, key: `${hashHex}.jpg` };
};
