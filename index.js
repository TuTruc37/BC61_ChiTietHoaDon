// console.log("Hello");

//Phân tích các xử lí có trong bài tập tính tiền GRAB

/**
 * 1. Thực hiện tạo một sự kiện onclick cho nút tính tiền
 * 2. Thực hiện lấy dữ liệu từ trên layout khi người dùng đã nhập xong
 * 3. Thực hiện xử lí kiểm tra xem người dùng đã đi phương tiện gì
 * để lấy ra được giá tiền hợp lí
 * //uber_red, uber_grab, uber_suv
 * 4. Thực hiện kiểm tra với số km đi để tính toán ra giá tiền hợp lí
 * 5. Thực hiện xử lí đưa dữ liệu lên giao diện cho người dùng
 */
const UBER_CAR = "uberCar";
const UBER_SUV = "uberSUV";
const UBER_BLACK = "uberBlack";
//Phạm vi sử dụng của biến: Global Scope và function Scope

var tinhTien = document.getElementById("btnTinhTien");
tinhTien.onclick = function () {
  // console.log('hello');
  var soKM = document.getElementById("txt-km").value * 1;
  var soThoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
  //   console.log(soKM);
  //   console.log(soThoiGianCho);

  //gọi tới input có thuộc tính name =  selector và được người dùng chọn bằng thuộc tính checked
  var loaiXe = document.querySelector("input[name = 'selector']:checked").value;
  // console.log(loaiXe);

  var giaTienKmDauTien = TienKmDauTien(loaiXe);
  var giaTienKmTu1Den19 = TienKmTu1Den19(loaiXe);
  var giaTienKmTu19TroLen = TienKmTu19TroLen(loaiXe);
  //Kiểm tra xem người dùng đi loại xe nào thì sẽ có giá tiền được chỉnh sửa cho loại xe đó
  //   if (loaiXe == UBER_CAR) {
  //     giaTienKmDauTien = 8000;
  //     giaTienKmTu1Den19 = 7500;
  //     giaTienKmTu19TroLen = 7000;
  //   } else if (loaiXe == UBER_SUV) {
  //     giaTienKmDauTien = 9000;
  //     giaTienKmTu1Den19 = 8500;
  //     giaTienKmTu19TroLen = 8000;
  //   } else {
  //     giaTienKmDauTien = 10000;
  //     giaTienKmTu1Den19 = 9500;
  //     giaTienKmTu19TroLen = 9000;
  //   }

  // cấu trúc điều kiện switch case
  //phần tử được so sánh sẽ nằm trong dấu ngoặc tròn của switch case
  //break: giúp thoát khỏi cấu trúc switch case khi đã có một trường hợp thoả mãn yêu cầu
  //default luôn luôn để ở dưới cùng
  //   switch (loaiXe) {
  //     //case : những trường hợp mà phần tử được so sánh có thể xảy ra
  //     case UBER_CAR:
  //       {
  //         //Nơi xử lí các hành động khi giá trị của loaiXe là uberCar
  //         giaTienKmDauTien = 8000;
  //         giaTienKmTu1Den19 = 7500;
  //         giaTienKmTu19TroLen = 7000;
  //       }
  //       break;
  //     case UBER_SUV:
  //       {
  //         giaTienKmDauTien = 9000;
  //         giaTienKmTu1Den19 = 8500;
  //         giaTienKmTu19TroLen = 8000;
  //       }
  //       break;
  //       default:{
  //         giaTienKmDauTien = 10000;
  //         giaTienKmTu1Den19 = 9500;
  //         giaTienKmTu19TroLen = 9000;
  //       }
  //   }

  //xếp loại sinh viên : điểm trong khoảng từ 7 đến 9 sử dụng if else
  //   khi so sánh trong khoảng thì nên sử dụng if else, khi so sánh điều kiện chắc chắn, cứng sử dụng switch case
  console.log("Giá km đầu tiên: ", giaTienKmDauTien);
  console.log("Giá km từ 1 đến 19: ", giaTienKmTu1Den19);
  console.log("Giá km từ 19 trở lên: ", giaTienKmTu19TroLen);

  //đi 1km, đi từ 1 đến 19km, đi từ 19km trở lên
  var tongTien = 0;
  if (soKM <= 1) {
    tongTien = soKM * giaTienKmDauTien;
  } else if (soKM > 1 && soKM < 19) {
    tongTien = giaTienKmDauTien * 1 + (soKM - 1) * giaTienKmTu1Den19;
  } else {
    tongTien =
      giaTienKmDauTien * 1 +
      18 * giaTienKmTu1Den19 +
      (soKM - 19) * giaTienKmTu19TroLen;
  }
  console.log("Tổng tiền", tongTien);

  //số lần thời gian chờ
  function soLanTime(soThoiGianCho) {
    var soLan = 0;
    if (soThoiGianCho % 3 !== 0) {
      soLan = Math.floor(soThoiGianCho / 3) + 1;
    } else {
      soLan = Math.floor(soThoiGianCho / 3);
    }

    return soLan;
  }

  //Số thời gian chờ
  var waitingTime = 0;
  var soLanThoiGian = soLanTime(soThoiGianCho);
  console.log("Số lần:", soLanThoiGian);
  var thoiGianChoDoi = ThoiGianCho(loaiXe);
  console.log("thời gian chờ", thoiGianChoDoi);
  if (soThoiGianCho >= 3) {
    waitingTime = tongTien + thoiGianChoDoi * soLanThoiGian;
  } else {
    waitingTime = tongTien;
  }
  console.log("Tính thời gian đã chờ", waitingTime);

  //đưa kết quả lên giao diện
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML =
    waitingTime.toLocaleString({
      style: "currency",
      currency: "VND",
    }) + "VND";

  //thành tiền thời gian chờ
  var ttcho = thoiGianChoDoi * soLanThoiGian;
  if (soThoiGianCho >= 3) {
    document.getElementById("tg_3").innerHTML =
      ttcho.toLocaleString({
        style: "currency",
        currency: "VND",
      }) + "VND";
  } else {
    document.getElementById("tg_3").innerHTML = "0 VND";
  }
  //thành tiền km
  var ttkm = tongTien;
  //in hoá đơn
  var hoaDon = document.getElementById("inHoaDon");
  console.log(hoaDon);
  hoaDon.onclick = function () {
    var myModal = document.getElementById("exampleModal");
    var closeButton = document.querySelector(".modal-footer .btn-secondary");
    var closeButtonX = document.querySelector(".close");

    var anInput = document.querySelector(".typeZindex1");
    anInput.style.zIndex = "0";
    var anInput2 = document.querySelector(".typeZindex2");
    anInput2.style.zIndex = "0";
    var anInput3 = document.querySelector(".typeZindex3");
    anInput3.style.zIndex = "0";
    closeButtonX.onclick = function () {
      myModal.style.display = "none";
    };
    closeButton.onclick = function () {
      myModal.style.display = "none";
    };

    myModal.style.display = "block";
    myModal.style.opacity = 1;
    myModal.style.paddingTop = "200px";
    myModal.style.overflow = "visible";
    myModal.style.background = "white";
    console.log(myModal);
    var saveButton = document.querySelector(".modal-footer .btn-primary");
    saveButton.onclick = function () {
      window.print();
    };
    if (soKM <= 1) {
      document.getElementById("sd_1").innerHTML =
        soKM.toLocaleString({
          style: "currency",
          currency: "KM",
        }) + "KM";
      document.getElementById("dg_1").innerHTML =
        giaTienKmDauTien.toLocaleString({
          style: "currency",
          currency: "VND",
        }) + "VND";
      document.getElementById("tt_1").innerHTML =
        ttkm.toLocaleString({
          style: "currency",
          currency: "VND",
        }) + "VND";
      document.getElementById("tg_4").innerHTML =
        soThoiGianCho.toLocaleString({
          style: "currency",
          currency: "phut",
        }) + "phut";
      document.getElementById("tg_2").innerHTML =
        thoiGianChoDoi.toLocaleString({
          style: "currency",
          currency: "VND",
        }) + "VND";
    } else if (soKM > 1 && soKM < 19) {
      document.getElementById("sd_2").innerHTML =
        soKM.toLocaleString({
          style: "currency",
          currency: "KM",
        }) + "KM";
      document.getElementById("dg_2").innerHTML =
        giaTienKmTu1Den19.toLocaleString({
          style: "currency",
          currency: "VND",
        }) + "VND";
      document.getElementById("tt_2").innerHTML =
        ttkm.toLocaleString({
          style: "currency",
          currency: "VND",
        }) + "VND";
      document.getElementById("tg_4").innerHTML =
        soThoiGianCho.toLocaleString({
          style: "currency",
          currency: "phut",
        }) + "phut";
      document.getElementById("tg_2").innerHTML =
        thoiGianChoDoi.toLocaleString({
          style: "currency",
          currency: "VND",
        }) + "VND";
    } else if (soKM >= 19) {
      document.getElementById("sd_3").innerHTML =
        soKM.toLocaleString({
          style: "currency",
          currency: "KM",
        }) + "KM";
      document.getElementById("dg_3").innerHTML =
        giaTienKmTu19TroLen.toLocaleString({
          style: "currency",
          currency: "VND",
        }) + "VND";
      document.getElementById("tt_3").innerHTML =
        ttkm.toLocaleString({
          style: "currency",
          currency: "VND",
        }) + "VND";
      document.getElementById("tg_4").innerHTML =
        soThoiGianCho.toLocaleString({
          style: "currency",
          currency: "phut",
        }) + "phut";
      document.getElementById("tg_2").innerHTML =
        thoiGianChoDoi.toLocaleString({
          style: "currency",
          currency: "VND",
        }) + "VND";
    }

    var formatTongTienXe = waitingTime.toLocaleString({
      style: "currency",
      currency: "VND",
    });
    document.getElementById(
      "Tongtienxe"
    ).innerHTML = `TỔNG TIỀN:  ${formatTongTienXe} VND`;
  };
};

// Tạo ra một hàm giúp kiểm tra và trả về giá tiền của km đầu tiên

function TienKmDauTien(loaiXe) {
  switch (loaiXe) {
    case UBER_CAR: {
      return 8000;
    }
    case UBER_SUV: {
      return 9000;
    }
    default: {
      return 10000;
    }
  }
}

function TienKmTu1Den19(loaiXe) {
  switch (loaiXe) {
    case UBER_CAR: {
      return 7500;
    }
    case UBER_SUV: {
      return 8500;
    }
    default: {
      return 9500;
    }
  }
}

function TienKmTu19TroLen(loaiXe) {
  switch (loaiXe) {
    case UBER_CAR: {
      return 7000;
    }
    case UBER_SUV: {
      return 8000;
    }
    default: {
      return 9000;
    }
  }
}
// về nhà làm thời gian chờ và in hoá đơn modal ở bootstrap

function ThoiGianCho(loaiXe) {
  switch (loaiXe) {
    case UBER_CAR: {
      return 2000;
    }
    case UBER_SUV: {
      return 3000;
    }
    default: {
      return 3500;
    }
  }
}
