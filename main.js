const dropArea = document.querySelector('.drag-area');
const dragText = dropArea.querySelector('header');
const button = dropArea.querySelector('button');
const input = dropArea.querySelector('input');

button.addEventListener('click', () => {
    input.click();
})

input.addEventListener('change', function () {
    const file = this.files[0];
    showFIle(file);
})

dropArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    dragText.textContent = 'Thả để Tải ảnh lên!'
})

dropArea.addEventListener("dragleave", (event) => {
    event.preventDefault();
    dragText.textContent = "Kéo và thả để Tải ảnh lên!"
})
dropArea.addEventListener('drop', (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    showFIle(file);
})

function showFIle(file) {
    const fileType = file.type;
    //Kiểm tra file ảnh
    const validExtensions = ['image/jpeg', 'image/jpg', 'image/png'];
    if (validExtensions.includes(fileType)) {
        //tạo file ảnh tạm thời
        const fileReader = new FileReader();
        fileReader.onload = () => {
            const fileUrl = fileReader.result;
            const imgTag = `<img src="${fileUrl}"/>`;
            dropArea.innerHTML = imgTag
        }
        //ảnh hiển thị luôn khi load xong
        fileReader.readAsDataURL(file);
    } else {
        alert("Đây không phải là một file ảnh!");
        dragText.textContent = "Kéo và thả để Tải ảnh lên!"
    }

}
