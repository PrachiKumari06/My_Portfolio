import React, { Component } from 'react'

export default class Hero extends Component {
  render() {
    return (
      <div>
         <section id="home" className="section">
        <div className="content">
            <h4>Hello World! My name is</h4>
            <h1><span className="name">Prachi Kumari</span></h1>
           {/* <h2 className="typing-text"></h2>  */}
             <h2>Crafting clean UI with scalable frontend solutions</h2>
<div className="para">
                <p>I'm an India based developer with a goal-driven creative mindset and passion for learning and innovating.</p>

</div>
<button
  onClick={() => window.location.href = "mailto:prachi.kumari0004@gmail.com"}
  className="hero__StyledEmailLink-sc-180ss6q-5 goPzWz"
>
  Hire Me!
</button>
        </div>
    </section>
      </div>
    )
  }
}
