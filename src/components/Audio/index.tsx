import React, { useEffect, useRef, useState } from 'react';
// import styles from './styles.module.scss';

export const Audio = (): React.ReactElement => {

  const audioEl = useRef<HTMLAudioElement | null>(null);
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [audioType, setAudioType] = useState<string | undefined>();
  const [recordingStatus, setRecordingStatus] = useState<'recording' | 'paused' | 'stopped'>('stopped');
  const [recorder, setRecorder] = useState<MediaRecorder>();

  const initRecorder = async () => {
    const device = navigator.mediaDevices.getUserMedia({
      audio: true
    });

    const stream = await device;
    setRecorder(new MediaRecorder(stream));
  };

  const startRecording = async () => {
    setAudioSrc(null);
    if(!recorder) {
      console.error('Recorder not init');
      await initRecorder();
      if(!recorder) {
        return;
      }
    }

    recorder.ondataavailable = e => {
      if(recorder.state === 'inactive') {
        const items: BlobPart[] = [];
        items.push(e.data);
        const blob = new Blob(items, { type: e.data.type });
        blob.arrayBuffer().then(console.log);
        setAudioSrc(URL.createObjectURL(blob));
        setAudioType(e.data.type);
        // setTimeout(() => (audioEl.current as HTMLAudioElement).currentTime = 0, 0);
      }
    };
    console.log('START recording...');
    recorder.start();
    setRecordingStatus('recording');
  };

  const stopRecording = () => {
    console.log('STOP recording...');
    if(!recorder) {
      return;
    }
    recorder.stop();
    setRecordingStatus('stopped');
  };

  const pauseRecording = () => {
    if(!recorder) {
      return;
    }
    recorder.pause();
    setRecordingStatus('paused');
  };

  const resumeRecording = () => {
    if(!recorder) {
      return;
    }
    recorder.resume();
    setRecordingStatus('recording');
  };

  useEffect(() => {
    initRecorder().then(() => console.log('Recorder initialized'));
  }, []);

  return (
    <div>
      <h1>Welcome to Audio Browser API Playground</h1>

      <div>
        { recordingStatus === 'stopped' && <button onClick={ startRecording }>Rec</button> }

        { recordingStatus === 'recording' && <button onClick={ pauseRecording }>Pause</button> }

        { recordingStatus === 'paused' && <button onClick={ resumeRecording }>Resume</button> }

        { (recordingStatus === 'recording' || recordingStatus === 'paused') &&
          <button onClick={ stopRecording }>Stop</button> }
        &nbsp;
        <span> Status: { recordingStatus }</span>
      </div>

      {
        audioSrc &&
        <audio ref={ audioEl } controls>
          <source src={ audioSrc } type={ audioType }/>
        </audio>
      }
    </div>
  );
};
