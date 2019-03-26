export function checkregister(){
      function checkpassword(str) {
          const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\w]{3,20}$/
          if (re.test(str)) {
            return true;
          } else {
            return false;
          }
        }
      $('#registerform input:eq(1)').click(function(){
         const name = $('#registerform input:eq(0)').val()
         if(!name){
           alert('账号不能为空');
         }
      })
      $('#registerform input:eq(2)').click(function(){
         const password = $('#registerform input:eq(1)').val()
         if(!password){
           alert('密码不能为空');
         }
         if(!checkpassword(password)){
            alert('密码必须包括字母数字大写字母，长度大于3个字符');
         }
      })
      $('#registerform').submit(function(){
        const name = $('#registerform input:eq(0)').val();
        const password = $('#registerform input:eq(1)').val();
        const confirm = $('#registerform input:eq(2)').val();
         if (!password) {
          alert('密码不能为空');
        }
         if (!name) {
          alert('账号名不能为空');
        }
        if (!checkpassword(password)) {
          alert('密码必须包括字母数字大写字母，长度大于3个字符');
        }
        if(!(password === confirm)){
          alert('确认密码不一致')
        }
      
      })
}
export function checklogin(){
  $('#loginform').submit(function () {
    const name = $('#loginform input:eq(0)').val();
    const password = $('#loginform input:eq(1)').val();
    if (!name) {
      alert('账号不能为空');
    }
    if (!password) {
      alert('密码不能为空');
    }
  })
} 