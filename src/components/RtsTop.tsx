import * as React from 'react'
import './RtsTop.less'

export default class RtsTop extends React.PureComponent {
  public render() {
    return (
      <div className='rts-top'>
        <article>
          <div className="left">客服热线：4008-380-888 （工作时间：9:00-12:00 , 13:30-18:00）</div>
          <div className="right">
            <a className="white" href="">新手入门</a>
            <a className="white" href="">帮助中心</a>
            <a href="">登录</a>
            <a href="">注册</a>
          </div>
        </article>
      </div>
    )
  }
}

