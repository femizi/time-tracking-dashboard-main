var obj = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

let work = obj[0]
let play = obj[1]
let study = obj[2]
let excercise = obj[3]
let social = obj[4]
let self = obj[5]

console.log(work.timeframes.daily)

// buttons
const dailyBtn = document.getElementById('daily')
const weeklyBtn = document.getElementById('weekly')
const monthlyBtn = document.getElementById('monthly')

const workDaily = document.getElementById('work-daily')
const workPrevious = document.getElementById('work-previous')

const playDaily = document.getElementById('play-daily')
const playPrevious = document.getElementById('play-previous')

const studyDaily = document.getElementById('study-daily')
const studyPrevious = document.getElementById('study-previous')

const excerciseDaily = document.getElementById('excercise-daily')
const excercisePrevious = document.getElementById('excercise-previous')

const socialDaily = document.getElementById('social-daily')
const socialPrevious = document.getElementById('social-previous')

const selfDaily = document.getElementById('self-daily')
const selfPrevious = document.getElementById('self-previous')


dailyBtn.addEventListener("click", function(){
  workDaily.innerHTML = `${work.timeframes.daily.current}hrs`;
  playDaily.innerHTML = `${play.timeframes.daily.current}hrs`;
  studyDaily.innerHTML = `${study.timeframes.daily.current}hrs`;
  excerciseDaily.innerHTML = `${excercise.timeframes.daily.current}hrs`;
  socialDaily.innerHTML = `${social.timeframes.daily.current}hrs`;
  selfDaily.innerHTML = `${self.timeframes.daily.current}hrs`;
  workPrevious.innerHTML = `${work.timeframes.daily.previous}hrs`
  playPrevious.innerHTML = `${play.timeframes.daily.previous}hrs`
  studyPrevious.innerHTML = `${study.timeframes.daily.previous}hrs`
  excercisePrevious.innerHTML = `${excercise.timeframes.daily.previous}hrs`
  socialPrevious.innerHTML = `${social.timeframes.daily.previous}hrs`
  selfPrevious.innerHTML = `${self.timeframes.daily.previous}hrs`
});
weeklyBtn.addEventListener("click", function(){
  workDaily.innerHTML = `${work.timeframes.weekly.current}hrs`;
  playDaily.innerHTML = `${play.timeframes.weekly.current}hrs`;
  studyDaily.innerHTML = `${study.timeframes.weekly.current}hrs`;
  excerciseDaily.innerHTML = `${excercise.timeframes.weekly.current}hrs`;
  socialDaily.innerHTML = `${social.timeframes.weekly.current}hrs`;
  selfDaily.innerHTML = `${self.timeframes.weekly.current}hrs`;
  workPrevious.innerHTML = `${work.timeframes.weekly.previous}hrs`
  playPrevious.innerHTML = `${play.timeframes.weekly.previous}hrs`
  studyPrevious.innerHTML = `${study.timeframes.weekly.previous}hrs`
  excercisePrevious.innerHTML = `${excercise.timeframes.weekly.previous}hrs`
  socialPrevious.innerHTML = `${social.timeframes.weekly.previous}hrs`
  selfPrevious.innerHTML = `${self.timeframes.weekly.previous}hrs`
});
monthlyBtn.addEventListener("click", function(){
  workDaily.innerHTML = `${work.timeframes.monthly.current}hrs`;
  playDaily.innerHTML = `${play.timeframes.monthly.current}hrs`;
  studyDaily.innerHTML = `${study.timeframes.monthly.current}hrs`;
  excerciseDaily.innerHTML = `${excercise.timeframes.monthly.current}hrs`;
  socialDaily.innerHTML = `${social.timeframes.monthly.current}hrs`;
  selfDaily.innerHTML = `${self.timeframes.monthly.current}hrs`;
  workPrevious.innerHTML = `${work.timeframes.monthly.previous}hrs`
  playPrevious.innerHTML = `${play.timeframes.monthly.previous}hrs`
  studyPrevious.innerHTML = `${study.timeframes.monthly.previous}hrs`
  excercisePrevious.innerHTML = `${excercise.timeframes.monthly.previous}hrs`
  socialPrevious.innerHTML = `${social.timeframes.monthly.previous}hrs`
  selfPrevious.innerHTML = `${self.timeframes.monthly.previous}hrs`
});


console.log(selfPrevious)