// Copyright 2020 Hyperspaces. All rights reserved. MIT license.

/** Returns a human-readable size of the specified bytes. */
export function bytesToUnit (bytes = 0) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

  if (bytes === 0) {
    return bytes;
  }

  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));

  if (i === 0) {
    return `${bytes} ${sizes[i]}`;
  }

  return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`;
}
