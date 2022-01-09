import React, { useRef, useState } from 'react';
import styles from './styles.module.scss';

export const AudioPlayground = (): React.ReactElement => {
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [audioType, setAudioType] = useState<string | undefined>();
  const [recordingStatus, setRecordingStatus] = useState<'recording' | 'paused' | 'stopped'>('stopped');
  const [audioContext, setAudioContext] = useState<AudioContext>();
  const [recorder, setRecorder] = useState<MediaRecorder>();
  const [audioData, setAudioData] = useState<Array<number>>();
  const [samples] = useState(100); // Number of samples we want to have in our final data set

  const audioEl = useRef<HTMLAudioElement | null>(null);
  const canvasEl = useRef<HTMLCanvasElement>(null);

  const initRecorder = async () => {
    const device = navigator.mediaDevices.getUserMedia({
      audio: true
    });

    const stream = await device;
    setRecorder(new MediaRecorder(stream));
    setAudioContext(new AudioContext());
  };

  //region RECORDINGS
  const startRecording = async () => {
    setAudioSrc(null);
    setAudioData(undefined);
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
        setAudioSrc(URL.createObjectURL(blob));
        setAudioType(e.data.type);

        if(!audioContext) {
          console.log('No AudioContext');
          return;
        }
        // Create AudioBuffer from Blob
        blob.arrayBuffer()
          .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
          .then(audioBuffer => {
            console.log({ audioBuffer });
            initAudioBuffer(audioBuffer);
          });
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
  //endregion

  //region AUDIO MANIPULATION
  const initAudioBuffer = (buffer: AudioBuffer) => {
    if(!buffer) {
      console.error('No AudioBuffer');
      return;
    }
    const rawData = buffer.getChannelData(0); // We only need to work with one channel of data
    const blockSize = Math.floor(rawData.length / samples); // the number of samples in each subdivision
    const filteredData: Array<number> = [];
    for(let i = 0; i < samples; i++) {
      let blockStart = blockSize * i; // the location of the first sample in the block
      let sum = 0;
      for(let j = 0; j < blockSize; j++) {
        sum = sum + Math.abs(rawData[blockStart + j]); // find the sum of all the samples in the block
      }
      filteredData.push(sum / blockSize); // divide the sum by the block size to get the average
    }
    console.log({ filteredData });
    setAudioData(filteredData);
    setTimeout(() => draw(filteredData), 0);
  };

  const normalizeData = (filteredData: Array<number>) => {
    const multiplier = Math.pow(Math.max(...filteredData), -1);
    return filteredData.map(n => n * multiplier);
  };

  const draw = (data: Array<number> | undefined) => {

    if(!canvasEl?.current) {
      console.error('No canvas HTML element');
      return;
    }

    if(!data) {
      console.error('No audio data');
      return;
    }

    // Set up the canvas
    const canvas: HTMLCanvasElement = canvasEl.current;
    const dpr = 1; // OR window.devicePixelRatio
    const padding = 20;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = (canvas.offsetHeight + padding * 2) * dpr;
    const ctx = canvas.getContext('2d');
    if(!ctx) {
      console.error('No canvas context');
      return;
    }
    ctx.scale(dpr, dpr);
    ctx.translate(0, canvas.offsetHeight / 2 + padding); // Set Y = 0 to be in the middle of the canvas

    // Normalize data if needed
    data = normalizeData(data);

    // draw the line segments
    const width = canvas.offsetWidth / data.length;
    for(let i = 0; i < data.length; i++) {
      const x = width * i;
      let height = data[i] * canvas.offsetHeight - padding;
      if(height < 0) {
        height = 0;
      } else if(height > canvas.offsetHeight / 2) {
        // height = height > canvas.offsetHeight / 2;
        height = canvas.offsetHeight / 2;
      }
      drawLineSegment(ctx, x, height, width, !!((i + 1) % 2));
    }
  };

  const drawLineSegment = (ctx: CanvasRenderingContext2D, x: number, y: number, width: number, isEven: boolean) => {
    ctx.lineWidth = 1; // how thick the line is
    ctx.strokeStyle = '#fff'; // what color our line is
    ctx.beginPath();
    y = isEven ? y : -y;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, y);
    ctx.arc(x + width / 2, y, width / 2, Math.PI, 0, isEven);
    ctx.lineTo(x + width, 0);
    ctx.stroke();
  };
  //region

  return (
    <div>
      <h1>Welcome to Audio Browser API Playground</h1>

      { !recorder && <button onClick={ initRecorder }>Activate recorder</button> }

      { recorder &&
        <div>

          { recordingStatus === 'stopped' && <button onClick={ startRecording }>Rec</button> }

          { recordingStatus === 'recording' && <button onClick={ pauseRecording }>Pause</button> }

          { recordingStatus === 'paused' && <button onClick={ resumeRecording }>Resume</button> }

          { (recordingStatus === 'recording' || recordingStatus === 'paused') &&
            <button onClick={ stopRecording }>Stop</button> }
          &nbsp;
          <span> Status: { recordingStatus }</span>

        </div>

      }

      {
        audioSrc &&
        <div>
          <audio ref={ audioEl } controls>
            <source src={ audioSrc } type={ audioType }/>
          </audio>
        </div>
      }

      { audioData && <canvas ref={ canvasEl } className={ styles.canvas }/> }

    </div>
  );
};
