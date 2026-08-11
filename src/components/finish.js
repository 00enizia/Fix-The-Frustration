export function finishDesign(){


const editor =
document.getElementById(
"editor"
);


const preview =
document.getElementById(
"final-preview"
);



editor.style.display="none";


preview.style.display="block";



preview.innerHTML=

`

<h1>
🎓 Student Portal
</h1>


<div class="final-site">

${document
.getElementById(
"website-canvas"
)
.innerHTML}


</div>


<p>
Take a screenshot and submit!
</p>

`;

}