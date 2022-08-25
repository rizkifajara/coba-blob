
var blobMe= URL['createObjectURL'](new Blob([''], {type: 'text/html'}));
var elIframe = document['createElement']('iframe');
elIframe['setAttribute']('frameborder', '0');
elIframe['setAttribute']('width', '100%');
elIframe['setAttribute']('height', '500px');
elIframe['setAttribute']('allowfullscreen', 'true');
elIframe['setAttribute']('webkitallowfullscreen', 'true');
elIframe['setAttribute']('mozallowfullscreen', 'true');
elIframe['setAttribute']('src', blobMe);
var idOne= 'gepa_'+ Date.now();
elIframe['setAttribute']('id', idOne);
document.getElementById('htmlTest').appendChild(elIframe);
const iframeHere= 'https://drive.google.com/file/d/1BlDDZk1ygICbVFJsiYADMi9GcUML9M88/preview?usp=sharing&amprel=0&ampmodestbranding=1&ampautohide=1&ampshowinfo=0&ampcontrols=0';

document['getElementById'](idOne)['contentWindow']['document'].write('<script type="text/javascript">location.href = "' + iframeHere + '";\x3c/script>');
