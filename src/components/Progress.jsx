import React from 'react'

function Progress() {

    const progress = document.querySelector('progressTop');

    window.addEventListener('scroll', progressBar);

    function progressBar(e) {
        let windowScroll = document.body.scrollTop || document.documentElement.scrollTop
        let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
        let per = windowScroll / windowHeight * 100

        progress.style.width = per + '%'

        console.log(windowHeight)
        console.log(windowScroll)
        console.log(per)
    }

  return (
    <div className='progressTop'></div>
  )
}

export default Progress