import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';


@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.page.html',
  styleUrls: ['./ficha.page.scss'],
})
export class FichaPage {

  @ViewChild(IonModal) modal!: IonModal;

  message = '';
  name: string = '';

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }

  }

  produto_src = '';
  produto_title = '';
  quantity = 0;
  checked: boolean[] = [];

  games = [
    {
      title : "Assassin's Creed Black Flag IV",
      src: "../../assets/img/black_flag.jpg",
      signal: "+"
    },

    {
      title : "Battlefield 4",
      src: "../../assets/img/battlefield_iv.jpg",
      signal: "+"
    }, 

    {
      title : "God of War: Ascension",
      src: "../../assets/img/god_of_war.jpg",
      signal: "+"
    },

    {
      title : "Grand Theft Auto V",
      src: "../../assets/img/gta_5.png",
      signal: "+"
    }, 

    {
      title : "Pokemon XY",
      src: "../../assets/img/pokemon.jpg",
      signal: "+"
    },

    {
      title : "Rayman Legends",
      src: "../../assets/img/rayman.jpg",
      signal: "+"
    }, 

    {
      title : "The Last of Us",
      src: "../../assets/img/tlou.png",
      signal: "+"
    },

    {
      title : "The Legend of Zelda: Wind Walker HD",
      src: "../../assets/img/zelda.jpg" ,
      signal: "+"
    }
  ]

  addToCart() {
    let btns = document.querySelectorAll('.btnCart');
    for(let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", (e) => {
        if(this.checked[i] != null && this.checked[i] != true) {
          this.checked[i] = true;
          this.games[i].signal = "✓";
        }
        else if ( this.checked[i] != null && this.checked[i] != false){
          this.checked[i] = false;
          this.games[i].signal = "+";
        }
        else {
          this.checked[i] = true;
          this.games[i].signal = "✓";
        }
        console.log(this.checked);
      })
    }
  }

  //(retira produtos do carrinho
  remove() {
    if(this.quantity != 0) {
      this.quantity -= 1;
    }
  }

  // adiciona produtos no carrinho
  add() {
    this.quantity += 1;
  }

}
