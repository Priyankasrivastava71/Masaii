const requests= new Map();
export const rateLimiter=(req,res,next)=>{
    const ip=req.ip;
    const now=Date.now()
    if(!requests.has(ip)){
        requests.set(ip,[])
    }
    const timestamps=requests.get(ip).filter(t=>now-t<60000)
    timestamps.push(now)
    requests.set(ip,timestamps)
    if(timestamps.length>3){
        return res.status(429).json({
            message:"Rate limit exceeded. max 3 requests per minute"
        })
    }
    next()
}