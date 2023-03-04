// const counters = document.querySelectorAll('.progress__procent')
//         line = document.querySelectorAll('.progress__inactive span')


// counters.forEach( (item, i) => {
//     lines[i].style.add.width = item.innerHTML;
// });

const counters = document.querySelectorAll('.progress__procent'),
      lines = document.querySelectorAll('.progress__inactive span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});
