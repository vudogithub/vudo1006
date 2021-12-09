$(document).ready(function() {

    // kiểm tra họ
    var txtHo= $("#txtHo");
    var tbHo = $("#tbHo");

    function kiemtraho(){
        var regexho = /^[A-Z]+[A-Za-z]*/;
        if((txtHo.val().trim()==="")){
            tbHo.html("Họ không được để trống.");
            return false;
        }else{
            if((regexho.test(txtHo.val()))){
                tbHo.html("")
                return true;
            }else{
                tbHo.html("Tên phải viết hoa chữ cái đầu.");
                return false;
            }
        }
    }
    txtHo.blur(kiemtraho);

    //kiểm tra tên

    var txtTen= $("#txtTen");
    var tbten = $("#tbTen");

    function kiemtraten(){
        var regexho = /^[A-Z]+[A-Za-z]*/;
        if((txtTen.val().trim()==="")){
            tbten.html("Tên không được để trống.");
            return false;
        }else{
            if((regexho.test(txtTen.val()))){
                tbten.html("")
                return true;
            }else{
                tbten.html("Tên phải viết hoa chữ cái đầu.");
                return false;
            }
        }
    }
    txtTen.blur(kiemtraten);

    //kiểm tra Email

    var txtemail= $("#txtemail");
    var tbemail = $("#tbemail");

    function kiemtraemail(){
        var regexemail =/^[a-z0-9](\.?[a-z0-9]){5,}@gmail\.com$/;
        if((txtemail.val().trim()==="")){
            tbemail.html("Email không được để trống.");
            return false;
        }else{
            if((regexemail.test(txtemail.val()))){
                tbemail.html("")
                return true;
            }else{
                tbemail.html("Email theo định dạng:^[a-z0-9](\.?[a-z0-9]){5,}@gmail\.com$ .");
                return false;
            }
        }
    }
    txtemail.blur(kiemtraemail);

    //kiểm tra mật khẩu

    var txtpass= $("#txtpass");
    var tbpass = $("#tbpass");

    function kiemtramatkhau(){
        var regexpass =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if((txtpass.val().trim()==="")){
            tbpass.html("Mật khẩu không được để trống.");
            return false;
        }else{
            if((regexpass.test(txtpass.val()))){
                tbpass.html("")
                return true;
            }else{
                tbpass.html("Mật khẩu gồm từ 6 kí tự, ít nhất 1 kí tự chữ, 1 kí tự số.");
                return false;
            }
        }
    }
    txtpass.blur(kiemtramatkhau);

    //kiểm tra nhập mật khẩu lần 2

    var txtpass2= $("#txtpass2");
    var tbpass2 = $("#tbpass2");

    function kiemtramatkhau2(){
        if((txtpass2.val().trim()==="")){
            tbpass2.html("Mật khẩu không được để trống.");
            return false;
        }else{
            if(txtpass.val() === txtpass2.val()){
                tbpass2.html("")
                return true;
            }else{
                tbpass2.html("Mật khẩu không trùng nhau!");
                return false;
            }
        }
    }
    txtpass2.blur(kiemtramatkhau2);

    //kiểm trá số điện thoại

    var txtsdt= $("#txtphone");
    var tbsdt = $("#tbphone");

    function kiemtrasdt(){
        var regexsdt =/^[0][0-9]{9}$/;
        if((txtsdt.val().trim()==="")){
            tbsdt.html("Số điện thoại không được để trống.");
            return false;
        }else{
            if((regexsdt.test(txtsdt.val()))){
                tbsdt.html("")
                return true;
            }else{
                tbsdt.html("Số điện thoại có 10 số");
                return false;
            }
        }
    }
    txtsdt.blur(kiemtrasdt);

    // add sự kiện
    $("#btnDangki").click(function() {
        if (!kiemtraten() || !kiemtraho() || !kiemtramatkhau() || !kiemtraemail() || !kiemtramatkhau2 || !kiemtrasdt) {
            $("#thongbao").html("Mời bạn nhập đúng và đẩy đủ thông tin");
            return false;
        }

        alert("Đăng kí thành công!");
        window.window.location.href = 'index.html';
        return true;
        
    });

});