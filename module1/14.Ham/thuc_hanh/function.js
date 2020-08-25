function binhphuong (number) {
    let bieuthuc = number * number;
    return bieuthuc;
}
function tinhtoan () {
    let input = document.getElementById("input").value;
    let bieuthuc = binhphuong(input);
    document.getElementById("bieuthuc").innerHTML = bieuthuc
}