

class Demo{

   sum(req){
      try{
         var a = req.body.a;
         var b = req.body.b;
         var a = parseInt(a ,10);
         var b = parseInt(b ,10);
         var ans = a+b;
         console.log(ans);
        return (ans);
        }
     catch(error){
        var msg = {
        msg : `sum fail in logic [ERROR]${error}`
     }}
   }

   minus(req){
      try{
         var a = req.body.a;
         var b = req.body.b;
         var a = parseInt(a ,10);
         var b = parseInt(b ,10);
         var ans = a-b;
         console.log(ans);
        return (ans);
        }
     catch(error){
        var msg = {
        msg : `minus fail in logic [ERROR]${error}`
     }}
   }

   multiplied(req){
      try{
          var a = req.body.a;
          var b = req.body.b;
          var a = parseInt(a ,10);
         var b = parseInt(b ,10);
          var ans = a*b;
         return (ans);
         }
      catch(error){
         var msg = {
         msg : `mutiplied fail in logic [ERROR]${error}`
      }}
   }

   divide(req){
      try{
         var a = req.body.a;
         var b = req.body.b;
         var a = parseInt(a ,10);
         var b = parseInt(b ,10);
         var ans = a/b;
        return (ans);
        }
     catch(error){
        var msg = {
        msg : `divide fail in logic [ERROR]${error}`
     }}
   }
}

module.exports = Demo