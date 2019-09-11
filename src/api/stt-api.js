let getAudio = async (data) => {
    const speech = require('@google-cloud/speech');

    const client = new speech.SpeechClient();

    const audio = {
        content: data,
    };

    const config = {
        encoding: 'LINEAR16',
        // sampleRateHertz: 48000, // Averiguar esto
        languageCode: 'en-US',
    };

    const request = {
        audio: audio,
        config: config,
    };

    const [response] = await client.recognize(request);
    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');
    
    return transcription
}

module.exports = getAudio