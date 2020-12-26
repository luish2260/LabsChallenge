import { AiFillGithub,AiFillMail,AiOutlinePhone } from "react-icons/ai";

export default function Footer() {
return (
<footer class="page-footer card-panel grey darken-3">
<div class="container">
<div class="row">
<div class="col l6 s12">
<h5 class="white-text">Api</h5>
<p class="grey-text text-lighten-4">Tyc Max</p>
</div>
<div class="col l4 offset-l2 s12">
<h5 class="white-text">Contacto:</h5>
<ul>
<li><a class="grey-text text-lighten-3" href="https://github.com"><AiFillGithub className="grey-text text-darken-3 icon" />GitHub:</a></li>
<li><a class="grey-text text-lighten-3" href="https://wa.me"><AiOutlinePhone className="grey-text text-darken-3 icon" />WhatsApp:</a></li>
</ul>
</div>
</div>
</div>
<div class="footer-copyright">
<div class="container">
© 2020 Copyright 
<h5 class="grey-text text-lighten-4 right" style={{paddingRight: "95px"}}><AiFillMail className="grey-text text-darken-3 icon" />Email:</h5>
</div>
</div>
</footer>
)
} 