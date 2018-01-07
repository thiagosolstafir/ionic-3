import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { MovieProvider } from "../../providers/movie/movie";

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-feed",
  templateUrl: "feed.html",
  providers: [MovieProvider]
})
export class FeedPage {
  public objeto_feed = {
    titulo: "Thiago Fernandes da Silva",
    data: "Novembro 5, 2017",
    descricao: "Estou criand o um app incrivel...",
    qntd_likes: 20,
    qntd_comments: 4,
    time_comment: "11h atrás"
  };

  public lista_filmes = new Array<any>();

  public nome_usuario: string = "Thiago Fernandes";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ) {}

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        const response = (data as any);
        this.lista_filmes = response.results;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
