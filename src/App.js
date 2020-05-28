import React, {Component} from 'react'
import Header from './Header';
import Clock from './Clock';
import Character from '../src/img/chara0.png';
import Voice0 from '../src/voice/sugoiyan.m4a';
import Voice1 from '../src/voice/omurice.m4a';
import Voice2 from '../src/voice/neteruyaro.m4a';
import './App.css';
import './audioplayer.css'

import axios from 'axios';
import AudioPlayer from 'react-h5-audio-player';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "kimura",
      userStatus: 0,
      zoom: false
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

  render() {

    return (
      <div className="home-container">
        <Header />
        {!this.state.zoom && (
        <div className="home-wrapper">
          <div className="comment-div">
            <div className="comment-text balloon1">
            {this.state.userStatus==0 && (
              <div>
                <p>{this.state.userName}さん！ お仕事頑張っててすごいです〜！</p>
                <div className="voice-div">
                  <AudioPlayer
                    src={Voice0}
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
                    src={Voice1}
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
                    src={Voice2}
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
                <p>もしかして、{this.state.userName}さん机の上で寝ちゃってますか…？</p>
                <div className="voice-div">
                <AudioPlayer
                  src={Voice2}
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
            </div>
          </div>
          <div className="chara-div">
            <img src={Character} height="800" onClick={this.zoomUp} />
          </div>
          <div className="date-div">
            <Clock />
          </div>
        </div>
        )}
        {this.state.zoom && (
        <div className="home-wrapper">
          <div className="zoom-chara-div">
            <img src={Character} height="1500" onClick={this.zoomOut} />
          </div>
          <div className="zoom-comment-div">
            <div className="comment-text balloon1">
              {this.state.userStatus==0 && (
                <p>
                {this.state.userName}さん、お仕事がんばっていますね！
                <br/>
                そろそろ休憩しておやつでも食べませんか？
                </p>
              )}
              {this.state.userStatus==1 && (
                <p>
                {this.state.userName}さん、今日もお疲れさまでした！
                <br/>ゆっくり休んでくださいね</p>
              )}
              {this.state.userStatus==2 && (
                <p>もしかして、{this.state.userName}さん机の上で寝ちゃってますか…？</p>

              )}
            </div>
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
