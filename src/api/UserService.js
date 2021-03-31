function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

export class UserService {
  async fetchByAudioAndVideoStreamId(audioId, videoId) {
    await sleep(500);
    return {
      id: 10000,
      name: "John Doe",
      audioId,
      videoId
    };
  }
}
