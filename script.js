function generatepdf()
{
    const ele = document.getElementById("invoice");
    html2pdf()
    .from(element)
    .save();
}