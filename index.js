// Bài 1: Tinh luong 
// input : nhập số ngày làm = a (kiểu dữ kiệu số)
// luong 1 ngày = 100.000
// xử lý: tiền lương lấy giá trị a * lương 1 ngày
// output: xuất tiền lương

function tinhLuong() {
    //lấy dữ liệu từ người dùng
    var soNgay = document.getElementById("soNgay").value * 1;
    const luongMotNgay = 100000;
    //xử lý
    var ketQua = 0;
    ketQua = soNgay * luongMotNgay;
    //xuất ra màn hình
    document.querySelector(".soNgay").innerHTML = "Tiền lương nhân viên: " + ketQua;
}

// B2: Tính giá trị trung bình, nhập sau khi nhập vào 5 số thực
// input : nhập 5 số thực a, b, c, d, e
// xử lý: ket qua = (a+b+c+d+e)/5
// output: xuất giá trình tb

function tinhGiaTriTrungBinh() {
    //lấy dữ liệu từ người dùng so 1, 2, 3, 4, 5
    var soMot = document.getElementById("soMot").value * 1;
    var soHai = document.getElementById("soHai").value * 1;
    var soBa = document.getElementById("soBa").value * 1;
    var soBon = document.getElementById("soBon").value * 1;
    var soNam = document.getElementById("soNam").value * 1;
    // xử lý
    var ketQua = 0;
    ketQua = (soMot + soHai + soBa + soBon + soNam) / 5
    //xuất ra màn hình
    document.querySelector(".giaTriTB").innerHTML = "Giá trị trung bình của 5 số là: " + ketQua;
}

// B3: Quy đổi tiền từ USD -> VND
// input : Nhập số tiền USD (kiểu dữ kiệu số)
// tỷ giá USD = 23.500VND
// xử lý: tiền VND = số tiền USD * tỷ giá USD 23.500VND
// output: xuất tiền VN

function quyDoiTien() {
    //lấy dữ liệu từ người dùng
    var soTienUSD = document.getElementById("soTienUSD").value * 1;
    const giaQuyDoi = 23500;
    //xử lý
    var ketQua = 0;
    ketQua = soTienUSD * giaQuyDoi;
    //xuất ra màn hình
    document.querySelector(".quyDoi").innerHTML = "Số tiền VND là: " + ketQua;
}
// B4: Tính chu vi, diện tích HCN
// input : Nhập chiều dai, rộng (kiểu dữ kiệu số)
// xử lý: chu vi = (chiều dài + chiều rộng)*2
// dien tích = chiều dài * chiều rộng
// output: xuất chu vi, diện tích

function chuViDienTich() {
    //lấy dữ liệu từ người dùng
    var chieuDai = document.getElementById("dai").value * 1;
    var chieuRong = document.getElementById("rong").value * 1;
    //xử lý
    var chuVi = 0;
    var dienTich = 0;
    chuVi = (chieuDai + chieuRong) * 2;
    dienTich = chieuDai * chieuRong;
    //xuất ra màn hình
    document.querySelector(".chuVi").innerHTML = "Chu vi là: " + chuVi;
    document.querySelector(".dienTich").innerHTML = "Diện Tích là: " + dienTich;
}
// B5: Nhập số có 2 chữ số => Tính tổng 2 chữ số đó
// input : Nhập số có hai chữ số (kiểu dữ kiệu số)
// xử lý: tong = chữ số hàng đơn vị + chữ số hàng chục
// output: xuất tổng

function tongHaiChuSo() {
    //lấy dữ liệu từ người dùng
    var soHaiChu = document.getElementById("soHaiChu").value * 1;
    //xử lý
    var ketQua = 0;
    var chuSoHangDonVi = Number(soHaiChu % 10);
    var chuSoHangChuc = Math.floor(soHaiChu / 10);
    // console.log(chuSoHangDonVi);
    // console.log(chuSoHangChuc);
    ketQua = chuSoHangDonVi + chuSoHangChuc;
    //xuất ra màn hình
    document.querySelector(".tinhTong").innerHTML = "Tổng hai chữ số này là: " + ketQua;
}