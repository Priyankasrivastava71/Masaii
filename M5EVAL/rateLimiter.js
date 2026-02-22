function createRateLimiter(limit, interval){
    let callCount =0
    let lastReset= Date.now()
    return function(){
        const now= Date.now()
        if(now - lastReset >= interval){
            callCount =0
            lastReset = now 
        }
        if(callCount < limit){
            callCount++
            return "Allowed"
        }else{
            return "Rate limit exceeded"
        }
    }
}