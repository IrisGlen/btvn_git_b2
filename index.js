// Vòng lặp 
// Có 3 loại vòng lặp while, do .. while, for
// Đề bài: cho 1 số tự nhiên bất kỳ, tính xem từ 0 đến số tự nhiên đó có tổng cộng bao nhiêu số chia hết cho 2

// input : n bất kỳ
// xử lý: lấy tất cả số từ 0 đến n, chia % 2 = 0 : chia hết cho 2
// output: tổng có bn số chia hết cho 2

// function tinhTongCacSoChiaHetCho2() {
//     //lấy dữ liệu từ người dùng
//     var soTuNhien = document.getElementById("soN").value * 1;
//     console.log(soTuNhien);
//     var tongSoTNChiaCho2 = 0;
//     while (soTuNhien >= 0)
//     {
//         // kiểm tra có chia hết cho 2 khong
//         if (soTuNhien % 2 == 0) {
//             tongSoTNChiaCho2++;  
//         }
//         // xử lý tăng giảm bước nhảy
//         soTuNhien--;
//     }
//     document.querySelector(".bg-success").innerHTML = tongSoTNChiaCho2;
// }

// cách 2
function tinhTongCacSoChiaHetCho2() {
    //lấy dữ liệu từ người dùng
    var soTuNhien = document.getElementById("soN").value * 1;
    console.log(soTuNhien);
    var tongSoTNChiaCho2 = 0;
    var soBatDau = 0;
    var inRaKQ = "";
    while (soBatDau <= soTuNhien)
    {
        // kiểm tra có chia hết cho 2 khong
        if (soBatDau % 2 == 0) {
            tongSoTNChiaCho2++; 
            inRaKQ += " Count " + (soBatDau+1) + " : Số " +  soBatDau + " <br>"; 
        }
        // xử lý tăng giảm bước nhảy
        soBatDau++;
    }
    document.querySelector(".bg-success").innerHTML = inRaKQ;
}

// Vòng lặp do while
// đề bài: người dùng nhập số K
// tính tổng ký số có được từ 0 đến K
// (ví dụ K là 5, => tính tổng từ 0, 1, 2, 3, 4, 5)
function tinhTongCacKySo() {
    //lấy dữ liệu từ người dùng
    var soK = document.getElementById("soK").value * 1;
    console.log(soK);
    var tongKySo = 0;
    //xử lý
    // cách 2, chay từ K về 0
    // do {
    //     // tongKySo = tongKySo + soK;
    //     tongKySo +=  soK;
    //     soK --;
    // } while (soK >= 0 );
    // //xuất dữ liệu 
    // document.querySelector(".bg-danger").innerHTML = "Tổng các ký số: " + tongKySo;
    
    // cách 1: (chay tu 0 toi K)
    var soBatDau = 0;
    do {
        // tongKySo = tongKySo + soK;
        tongKySo +=  soBatDau;
        soBatDau ++;
    } while (soBatDau <= soK);
    //xuất dữ liệu 
    document.querySelector(".bg-danger").innerHTML = "Tổng các ký số: " + tongKySo;
}