import { StyleSheet } from 'aphrodite';

const StateStyles = StyleSheet.create({
    hot: {
        backgroundColor: 'rgb(255,0,0)',
        backgroundColor: 'rgba(255,0,0,0.6)'
    },
    veryWarm: {
        backgroundColor: 'rgb(204,0,51)',
        backgroundColor: 'rgba(204,0,51,0.6)'
    },
    warm: {
        backgroundColor: 'rgb(153,0,102)',
        backgroundColor: 'rgba(153,0,102,0.6)'
    },
    cool: {
        backgroundColor: 'rgb(102,0,153)',
        backgroundColor: 'rgba(102,0,153,0.6)'
    },
    cold: {
        backgroundColor: 'rgb(50,0,204)',
        backgroundColor: 'rgba(50,0,204,0.6)'
    },
    veryCold: {
        backgroundColor: 'rgb(0,0,255)',
        backgroundColor: 'rgba(0,0,255,0.6)'
    }
});

export { StateStyles };

// ### toDo maybe?
// .m-weather-widget {
//   display:block;
//   position:relative;
//   padding:20px 30px;
//   text-align:left;
//   margin:10px 0;
//   box-shadow: 0px 1px 7px #444;

//   &_container {
//     overflow:hidden;
//     width:33.3333%;
//     padding:0 10px;
//     float:left;
//     transition:all 250ms ease-in;
//     animation: fade-in 1s ease-in;
//   }

//   &_weather-desc {float:right;}
//   &_meta-container {display:block;overflow:hidden;margin-top:10px;}
//   &_meta {
//     width:50%;
//     float:left;
//     font-size:0.9em;
//     font-style:italic;
//     line-height:1.2em;
    
//     &-current-temp {font-style:normal;font-weight:bold;}
//   }
//   &_weather-desc {
//     line-height:25px;
//     text-transform:lowercase;
//     font-size:0.75em;

//     &-img {
//       position:relative;top:8px;
//       display:inline-block;
//       height:25px;width:auto;
//       padding-left:4px;
//     }

//     span+span {padding-left:10px;}
//   }

//   h2 {
//     display:inline-block;
//     font-size:1.2em;
//     font-weight:bold;
//     padding-bottom: 6px;
//     border-bottom: 1px solid #fff;
//   }
// }