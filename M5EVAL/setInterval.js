function runSequentialTask(delay, arrayOfTasks) {
  return new Promise(async (resolve, reject) => {
    const results = [];

    for (let i = 0; i < arrayOfTasks.length; i++) {
      try {
        const result = await arrayOfTasks[i]();
        results.push(result);

        if (i < arrayOfTasks.length - 1) {
          await new Promise(res => setTimeout(res, delay));
        }
      } catch (error) {
        throw new Error(`Task failed at index ${i}: ${error}`);
      }
    }

    return results ;
  })();
}

const t1= async()=> "t1 done"
const t2= async()=> "t2 done"
const t3= async()=> "t3 done"
runSequentialTask(1000,[t1,t2,t3])
.then(res=> console.log(res)
)
.catch(err => console.log(err.message)
)