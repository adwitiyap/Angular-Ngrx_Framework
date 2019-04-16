export interface Weather {
    city: string,
    province: string,
    timestamp: string,
    temp: string,
    feelsLike: string,
    weatherDesc: string,
    days: { 
        day: string, 
        type: string, 
        currentTemp: string, 
        feelsLikeTemp: string, 
        picUrl: string 
    }[]
}