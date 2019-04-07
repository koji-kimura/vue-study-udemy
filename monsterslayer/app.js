35 +
  new Vue({
    el: '#app',
    data: {
      playerHealth: 100,
      monsterHealth: 100,
      gameIsRunning: false
    },
    methods: {
      startGame: function() {
        this.gameIsRunning = true;
        this.playerHealth = 100;
        this.monsterHealth = 100;
      },
      attack: function() {
        let damage = this.calculateDamage(3, 10);
        this.monsterHealth -= damage;
        // こういうコードの実行をしているのは2回目の処理用の対策
        // trueならもうやめてしまう
        if (this.checkWin()) {
          return;
        }
        // メソッド名の前にthisを忘れがちなので注意
        this.monsterAttacks();
      },
      specialAttack: function() {
        let damage = this.calculateDamage(10, 20);
        this.monsterHealth -= damage;
        if (this.checkWin()) {
          return;
        }
        this.monsterAttacks();
      },
      heal: function() {
        if (this.playerHealth <= 90) {
          this.playerHealth += 10;
        } else {
          this.playerHealth = 100;
        }
      },
      giveUp: function() {
        this.gameIsRunning = false;
      },
      // specialアタックと普通のアタックの処理は同じ記載なので１つにまとめる
      monsterAttacks: function() {
        damage = this.calculateDamage(5, 12);
        this.playerHealth -= damage;
        this.checkWin();
      },
      // ダメージ計算の共通化
      calculateDamage: function(min, max) {
        return Math.max(Math.floor(Math.random() * max) + 1, min);
      },
      checkWin: function() {
        if (this.monsterHealth <= 0) {
          if (confirm('You won! New Game?')) {
            this.startGame();
          } else {
            this.gameIsRunning = false;
          }
          return true;
        } else if (this.playerHealth <= 0) {
          if (confirm('You lost! New Game?')) {
            this.startGame();
          } else {
            this.gameIsRunning = false;
          }
          return true;
        }
        return false;
      }
    }
  });
