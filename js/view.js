class View {
 constructor(game, $elem) {
   this.game = game;
   this.$elem = $elem;
   this.setUpTowers();
 }

 setUpTowers() {
   const $ul = $('<ul>');

   for(let i = 0; i < 3; i++) {
     for(let j = 0; j < 3; j++) {
       let $li = $('<li>');
       if (i === 0 && j === 0) {
         $li.addClass("small");
         $li.addClass("disk");
       }
       if (i === 1 && j === 0) {
         $li.addClass("medium");
         $li.addClass("disk");
       }
       if (i === 2 && j === 0) {
         $li.addClass("large");
         $li.addClass("disk");
       }
       $li.data("pos", [i,j]);
       $ul.append($li);
     }
   }
   this.$elem.append($ul);

 }

}


module.exports = View;
