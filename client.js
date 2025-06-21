TrelloPowerUp.initialize({
  'card-buttons': function(t, options){
    return [{
      icon: 'https://pottermm.github.io/one-card/task.256x224.png',
      text: 'Create Daily Card',
      callback: function (t) {
          return t.popup({
            title: "Estimation",
            url: "estimate.html",
          });
        },
      },
    ];
  },
});
