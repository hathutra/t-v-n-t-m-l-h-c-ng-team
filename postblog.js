var db = firebase.firestore()
var blog = document.querySelector('#nhap');

blog.addEventListener('submit',(e)=>{
    e.preventDefault();
    db.collection('blogPost').add({
        title: blog['myInput2'].value,
        time: blog['myInput1'].value,
        content: blog['myInput3'].value,
        img: blog['myInput4'].value,
        author: blog['myInput5'].value,
        danhmuc: blog['danhmuc'].value,
    }).then(()=>{
        blog.reset();
    })
})

