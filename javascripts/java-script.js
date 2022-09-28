$(document).ready(function () {
  let increased = [false, false, false, false, false]
  let whs = []
  let positions = []
  let clouds = $('.cloud')
  let faces = $('.face')
  let cloud_txts = $('.cloud_text')
  let doc_h = $(document).height()
  let doc_w = $(document).width()
  const scale_ratio = 3.5
  const top_left_fix = [-doc_h / 5, -doc_w / 5]

  clouds.each(function (i) {
    whs.push([$(this).width(), $(this).height()]) // store initial size
    positions.push([$(this).position().top, $(this).position().left]) // store initial position

    $(this).on('click', function () {
      // onclick listener
      clouds.each(function (i) {
        //all another decrease
        $(this)
          .css('width', whs[i][0])
          .css('height', whs[i][1])
          .css('z-index', 0)
          .css('top', positions[i][0])
          .css('left', positions[i][1])
          .css('animation-play-state', 'running')
        $(cloud_txts[i]).css('display', 'none')
        $(faces[i]).css('opacity', 0)
      })
      if (increased[i]) {
        //decrease (mb no need)
        $(this)
          .css('width', whs[i][0])
          .css('height', whs[i][1])
          .css('z-index', 0)
          .css('top', positions[i][0])
          .css('left', positions[i][1])
          .css('animation-play-state', 'running')
        $(cloud_txts[i]).css('display', 'none')
      } else {
        //increase
        $(this)
          .css('width', whs[i][0] * scale_ratio)
          .css('height', whs[i][1] * scale_ratio)
          .css('z-index', 1)
          .css('top', top_left_fix[0])
          .css('left', top_left_fix[1])
          .css('animation-play-state', 'paused')
        $(cloud_txts[i]).css('display', 'block')
      }
      increased[i] = !increased[i]
    })
  })

  //TODO : fix faces
  clouds.each(function (i) {
    $(this).on('mouseenter', function () {
      $(faces[i]).css('opacity', 1)
    })
    $(this).on('mouseleave', function () {
      $(faces[i]).css('opacity', 0)
    })
  })
})
