import Mock from 'mockjs';
var Random = Mock.Random;
let data = Mock.mock("http://www.weichuang.com/test",{
    "list|1-10":[
        {
            "id|+1":1,
            "name":'@cname',
            "date":'@date',
            "image":Random.dataImage('300x250',"haha")
        }
    ]
});
export default data;
