import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'poetry-at-a-glance';
  data = {
    "cards": [
        {
            // "id": "1",
            "title": "Cheese",
            //"content": "\n    When you’re near, your vibe’s got me singing,\n    those strong disturbing emotions stop bubbling,\n    when we are afar, skyping n calling,\n    the vibe is gone and emotions are on,\n    around you I am like a feather falling,\n    slow n soft, swinging in my own grace,\n    knowing if I do fall apart, you’re here to save,\n    so I walk & talk the way I like, n\n    all I wanna do is love you n listen,\n    to the chatter box of a mouth I know you are!\n    "
            "content": "I love cheese, especially ricotta feta. Cheddar monterey jack stinking bishop fondue the big cheese smelly cheese cream cheese swiss. Hard cheese stilton cream cheese who moved my cheese cow cottage cheese danish fontina stinking bishop. Cheeseburger cheese on toast cow gouda emmental mascarpone st. agur blue cheese swiss. Mascarpone macaroni cheese."
        },
        {
            // "id": "2",      
            "title": "Paneer",
            // "content": "Eyes tearful n chest heavy\n        I keep singing to a tune\n        That you never see\n        Baby baby baby\n        please don’t leave\n        I need you here with me\n        "
            "content": "Paneer cheddar airedale. Swiss cut the cheese camembert de normandie brie boursin cottage cheese danish fontina swiss."
        },
        {
          "title": "Gouda",
          "content": "Cheese and wine gouda hard cheese. Feta parmesan cheese and biscuits edam feta stinking bishop airedale babybel. The big cheese blue castello danish fontina roquefort stinking bishop cheesecake croque monsieur ricotta. Boursin port-salut who moved my cheese blue castello port-salut jarlsberg squirty cheese."
        },
        {
          "title": "Queso",
          "content": "Cheese on toast queso cut the cheese. Edam emmental rubber cheese paneer lancashire boursin the big cheese cheeseburger. Chalk and cheese roquefort chalk and cheese st. agur blue cheese caerphilly rubber cheese danish fontina st. agur blue cheese. Bavarian bergkase when the cheese comes out everybody's happy stinking bishop mascarpone camembert de normandie edam. /\nSay cheese cow port-salut. Cheesecake bocconcini taleggio cheese on toast emmental queso cheesy grin camembert de normandie. Edam cow cow stilton who moved my cheese bocconcini the big cheese lancashire. Bocconcini macaroni cheese squirty cheese cheesy feet parmesan pecorino boursin chalk and cheese. Cheesy grin fondue say cheese."
        },
        {
          "title": "Wine and Fondue",
          "content": "Melted cheese fondue cheese on toast. Caerphilly cheese and wine camembert de normandie danish fontina smelly cheese cheese and wine pecorino cheddar. Smelly cheese cheese triangles mascarpone queso emmental port-salut port-salut cheese strings. Melted cheese cheese slices roquefort stilton cheeseburger stinking bishop the big cheese chalk and cheese. Goat ricotta port-salut croque monsieur."
        }
    ],
    "length": "5"
  };

  ngOnInit() {
    const app = firebase.app();
  }

  listOfCards = this.data.cards;
}
