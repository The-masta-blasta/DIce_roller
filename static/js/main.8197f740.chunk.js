(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n(19)},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(8),r=n.n(i),l=(n(15),n(1)),c=n(2),s=n(4),u=n(3),h=n(5),m=n(6),d=(n(16),function(t){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props.diceNum,e="fas fa-dice-".concat(t," ").concat(this.props.rolling?"shake":null);return o.a.createElement("i",{className:e})}}]),e}(a.Component)),f=(n(17),function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={num1:"one",num2:"three",rolling:!1},n.rollDice=n.rollDice.bind(Object(m.a)(n)),n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"rollDice",value:function(){var t=this,e=["one","two","three","four","five","six"],n=Math.floor(6*Math.random()),a=Math.floor(6*Math.random());this.setState({num1:e[n],num2:e[a],rolling:!0}),setTimeout(function(){t.setState({rolling:!1})},500)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(d,{diceNum:this.state.num1,rolling:this.state.rolling}),o.a.createElement(d,{diceNum:this.state.num2,rolling:this.state.rolling})),o.a.createElement("button",{onClick:this.rollDice,className:"RollDice-button",disabled:this.state.rolling},this.state.rolling?"Rolling..":"Roll Dice!"))}}]),e}(a.Component)),b=(n(18),function(t){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,null))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.8197f740.chunk.js.map