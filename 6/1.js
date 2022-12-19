let timeToEat = timeString => {
    let change = timeString => {
        let [time, midday] = timeString.split(" ")
        let [hour, minute] = time.split(":")
        if (midday == "p.m.") {
            hour = Number(hour,10) + 12
        }
        if (hour == "12") {
            hour = "00"
        }
        return [Number(hour),Number(minute)]
    }   
    let result = change(timeString)
    let h = result [0]
    let min = result [1]
    if(h >= 0 && h <= 7){
        h = 7 - h
    }else if(h > 7 && h <= 12){
        h = 12 - h
    }else if(h > 12 && h <= 19){
        h = 19 - h
    }else if(h > 19 && h <= 23){
        h -= 12
        h = 19 - h
    }
    if(min == 00){
        min == 0
    }else{
        min = 60 - min
        h--
    }
    return [h,min]
}
console.log(timeToEat("2:00 p.m.")) // [5, 0]
console.log(timeToEat("5:50 a.m.")) // [1, 10]

