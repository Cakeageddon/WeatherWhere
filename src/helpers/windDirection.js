function windDirection(windDeg){
    switch (true) {
        case 360:
            return "N";
        case 90 :
            return "O";
        case 180 :
            return "Z";
        case 270 :
            return "W";
        case (windDeg>0 && windDeg<90) :
            return "NO";
        case (windDeg>90 && windDeg<180) :
            return  "ZO";
        case (windDeg>180 && windDeg<270) :
            return "ZW";
        case (windDeg>270 && windDeg<360) :
            return "NW";
        case 0 :
        default:
            return  "-";
    }
}

export default windDirection