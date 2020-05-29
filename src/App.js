import React, {Component} from 'react'
import Header from './Header';
import Clock from './Clock';
import Chara00 from '../src/img/chara0.png';
import Chara01 from '../src/img/chara0-1.png';
import Chara10 from '../src/img/chara1.png';
import Chara11 from '../src/img/chara1-1.png';
import Voice00 from '../src/voice/sugoiyan.m4a';
import Voice01 from '../src/voice/omurice.m4a';
import Voice02 from '../src/voice/neteruyaro.m4a';
import Voice10 from '../src/voice/voice1-0.m4a';
import Voice11 from '../src/voice/voice1-1.m4a';
import Voice12 from '../src/voice/voice1-2.m4a';
import './App.css';
import './audioplayer.css'

import axios from 'axios';
import AudioPlayer from 'react-h5-audio-player';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "risae",
      userStatus: 0,
      zoom: false,
      chara0: false
    }
  }

  zoomUp = () => {
    this.setState({
      zoom: true
    })
  }
  zoomOut = () => {
    this.setState({
      zoom: false
    })
  }
  charaChange = () => {
    this.setState({
      chara0: !this.state.chara0
    })
  }

  /*
  async get_json() {
    const api = axios.create();
    try {
      var response = await api.get('http://18.191.152.221:5000/test_origin_output/27bda048-4eba-5327-8d92-97d6028a1643');
      console.log("状態："+response.data.data.status)
      this.setState({
        userName: response.data.data.name,
        userStatus: response.data.data.status
      });
      this.forceUpdate()
    } catch (error) {
      return;
    }
  };

  componentDidMount(){
    this.get_json()
  }
  */

  render() {
    return (
      <div className="home-container">
        <Header />
        <div className="button-div">
          <p>ステータス切り替え</p>
          <Button style={{margin: 5}} variant="contained" color="primary" onClick={() => { this.setState({userStatus: 0}) }}>
            作業中
          </Button>
          <Button style={{margin: 5}} variant="contained" color="primary" onClick={() => { this.setState({userStatus: 1}) }}>
            ベッドで寝る
          </Button>
          <Button style={{margin: 5}} variant="contained" color="primary" onClick={() => { this.setState({userStatus: 2}) }}>
            寝落ち
          </Button>
          <Button style={{margin: 5}} variant="contained" color="secondary" onClick={() => { this.setState({chara0: !this.state.chara0}) }}>
            キャラ切り替え
          </Button>
        </div>
        
        {/*甘え*/}
        {this.state.chara0 && !this.state.zoom && (
        <div className="home-wrapper">
          <div className="comment-div">
            <div className="comment-text balloon1">
            {this.state.userStatus==0 && (
              <div>
                <p>{this.state.userName}さん！ お仕事頑張っててすごいです〜！</p>
                <div className="voice-div">
                  <AudioPlayer
                    src={Voice00}
                    customVolumeControls={[]}
                    customAdditionalControls={[]}
                    customProgressBarSection={[]}
                    showJumpControls={false}
                    showFilledProgress={false}
                    // other props here
                  />
                </div>
              </div>
              )}
              {this.state.userStatus==1 && (
              <div>
                <p>{this.state.userName}さん、ゆっくり休んでくださいね。</p>
                <div className="voice-div">
                  <AudioPlayer
                    src={Voice01}
                    customVolumeControls={[]}
                    customAdditionalControls={[]}
                    customProgressBarSection={[]}
                    showJumpControls={false}
                    showFilledProgress={false}
                    // other props here
                  />
                </div>
              </div>
              )}
              {this.state.userStatus==2 && (
              <div>
                <p>もしかして、{this.state.userName}さん机の上で寝ちゃってますか…？</p>
                <div className="voice-div">
                  <AudioPlayer
                    src={Voice02}
                    customVolumeControls={[]}
                    customAdditionalControls={[]}
                    customProgressBarSection={[]}
                    showJumpControls={false}
                    showFilledProgress={false}
                    // other props here
                  />
                </div>
              </div>
              )}
              {this.state.userStatus==3 && (
              <div>
                <p>すみません、私の勘違いでした(汗)</p>
              </div>
              )}
            </div>
          </div>
          {this.state.userStatus==2
          ? <div className="chara-div">
              <img src={Chara01} height="900" onClick={this.zoomUp} />
            </div>
          : <div className="chara-div">
              <img src={Chara00} height="900" onClick={this.zoomUp} />
            </div>}
          <div className="date-div">
            <Clock />
          </div>
        </div>
        )}

        {/*ツンデレ*/}
        {!this.state.chara0 && !this.state.zoom && (
        <div className="home-wrapper">
          <div className="comment-div">
            <div className="comment-text balloon1">
            {this.state.userStatus==0 && (
              <div>
                <p>{this.state.userName}のくせに、頑張ってるじゃないの。</p>
                <div className="voice-div">
                  <AudioPlayer
                    src={Voice10}
                    customVolumeControls={[]}
                    customAdditionalControls={[]}
                    customProgressBarSection={[]}
                    showJumpControls={false}
                    showFilledProgress={false}
                    // other props here
                  />
                </div>
              </div>
              )}
              {this.state.userStatus==1 && (
              <div>
                <p>あんたが倒れたら苦労するのはこっちなんだから、<br/>ゆっくり休みなさいよ。</p>
                <div className="voice-div">
                  <AudioPlayer
                    src={Voice11}
                    customVolumeControls={[]}
                    customAdditionalControls={[]}
                    customProgressBarSection={[]}
                    showJumpControls={false}
                    showFilledProgress={false}
                    // other props here
                  />
                </div>
              </div>
              )}
              {this.state.userStatus==2 && (
              <div>
                <p>ちょっとぉ、そんなところで寝ちゃって大丈夫なの？<br/>し、心配してるわけじゃないけど。</p>
                <div className="voice-div">
                  <AudioPlayer
                    src={Voice12}
                    customVolumeControls={[]}
                    customAdditionalControls={[]}
                    customProgressBarSection={[]}
                    showJumpControls={false}
                    showFilledProgress={false}
                    // other props here
                  />
                </div>
              </div>
              )}
              {this.state.userStatus==3 && (
              <div>
                <p>起きてるなら良かったわ。<br/>…べっ、別に、寂しかったわけじゃないし</p>
              </div>
              )}
            </div>
          </div>
          {this.state.userStatus==2
          ? <div className="chara-div">
              <img src={Chara11} height="900" onClick={this.zoomUp} />
            </div>
          : <div className="chara-div">
              <img src={Chara10} height="900" onClick={this.zoomUp} />
            </div>}
          <div className="date-div">
            <Clock />
          </div>
        </div>
        )}

        {this.state.chara0 && this.state.zoom && (
        <div className="home-wrapper">
          <div className="zoom-chara-div">
            <img src={Chara00} height="1500" onClick={this.zoomOut} />
          </div>
          <div className="date-div">
            <Clock />
          </div>
        </div>
        )}
        {!this.state.chara0 && this.state.zoom && (
        <div className="home-wrapper">
          <div className="zoom-chara-div">
            <img src={Chara10} height="1500" onClick={this.zoomOut} />
          </div>
          <div className="date-div">
            <Clock />
          </div>
        </div>
        )}
      </div>
    );
  }
}

export default App;
