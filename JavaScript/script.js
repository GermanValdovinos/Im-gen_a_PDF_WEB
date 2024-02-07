document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const convertBtn = document.getElementById('convertBtn');

    convertBtn.addEventListener('click', () => {
        const images = fileInput.files;
        if (images.length === 0) {
            alert('Por favor, selecciona al menos una Imágen para la conversión a PDF.');
            return;
        }

        const pdf = new jsPDF();

        for (let i = 0; i < images.length; i++) {
            const imageFile = images[i];
            const reader = new FileReader();

            reader.onload = function(event) {
                const imageData = event.target.result;
                pdf.addImage(imageData, 'JPEG', 'JPG', 'PNG', 10, 10, 180, 120);
                if (i !== images.length - 1) {
                    pdf.addPage();
                } else {
                    pdf.save('Imágenes a PDF.pdf');
                }
            };

            reader.readAsDataURL(imageFile);
        }
    });
});