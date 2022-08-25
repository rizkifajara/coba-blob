
var blobMe2= URL['createObjectURL'](new Blob([''], {type: 'text/html'}));

var elIframe2 = document['createElement']('iframe');


var idTwo= 'gepp_'+ Date.now();


elIframe2['setAttribute']('id', idTwo);


document.getElementById('htmlPdf').appendChild(elIframe2);

const iframePdf= 'https://drive.google.com/file/d/0B8BsckNaLc7rRWlYb280azNXMTA/preview?usp=sharing&resourcekey=0-0pPuhQ0sfRmQUDAYA-w2Hg'
document['getElementById'](idTwo)['contentWindow']['document'].write('<script type="text/javascript">location.href = "' + iframePdf + '";\x3c/script>');
