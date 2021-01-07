import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <footer class="page-footer card-panel cyan darken-3">
      <div class="container">
        <div class="row">
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Contacto:</h5>
            <ul>
              <li><a class="grey-text text-lighten-3" href="https://github.com/luish2260"><AiFillGithub className="grey-text text-darken-3 icon" />GitHub:luish2260</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};