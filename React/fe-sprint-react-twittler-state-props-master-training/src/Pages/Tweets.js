import React, { useState } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';
import dummyTweets from '../static/dummyData';

const Tweets = () => {
  // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState를 적절히 활용하세요.
  const [username, setUsername] = useState('');
  const [msg, setMsg] = useState('');
  const [filterUser, setFilerUser] = useState('');
  const [data, setData] = useState(dummyTweets);
  
  const userArr = [...new Set(data.map(data=>data.username))];
  const optUserList = userArr.map((username, idx) => {
       return (
        <option key={idx} value={username}>{username}</option>
       )
    })

  const handleButtonClick = (event) => {
    const tweet = {
      id: data.length+1,
      username: username,
      picture: `https://randomuser.me/api/portraits/men/98.jpg`,
      content: msg,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const newData = [tweet, ...data];
    setData(newData);
    // TODO : Tweet button 엘리먼트 클릭시 작동하는 함수를 완성하세요.
    // 트윗 전송이 가능하게 작성해야 합니다.
  };

  const handleChangeUser = (event) => {
    return setUsername(event.target.value);
  };

  const handleChangeMsg = (event) => {
    return setMsg(event.target.value);
  };


  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  type="text"
                  placeholder="your username here.."
                  className="tweetForm__input--username"
                  onChange={handleChangeUser}
                ></input>
                <textarea
                  className="tweetForm__input--message"
                  onChange={handleChangeMsg}
                ></textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}
                  {'total: '}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              <button
                className="tweetForm__submitButton"
                onClick={handleButtonClick}
              >Tweet</button>
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser">
        <select>
          <option> --선택해주세용-- </option>
          {optUserList}
        </select>
      </div>
      <ul className="tweets">
        {data.map((data) => {
          return (
          <Tweet tweet={data} key={data.id}/>
          )
        })}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
