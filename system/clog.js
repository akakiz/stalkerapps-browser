"use strict";var CLog=function(parent,options){var self=this;CBase.call(this,parent||null),this.newest=!1,CLog.parameters.forEach(function(option){void 0!==options[option]&&(self[option]=options[option])}),this.bind(options.events||{}),this.Init(element("div",{className:"clog"},this.$log=element("ul",{})))};CLog.parameters=["time","autofocus","parentNode","events","defaultType","newest","isVisible"],CLog.prototype=Object.create(CBase.prototype),CLog.prototype.constructor=CLog,CLog.prototype.onInit=function(){elchild(this.parentNode,this.handle)},CLog.prototype.onShow=function(){this.autofocus===!0&&0!==this.$log.childElementCount&&this.$log.lastElementChild.focus(),this.trigger("onShow")},CLog.prototype.onHide=function(){this.trigger("onHide")},CLog.prototype.Add=function(message,type){if(this.newest===!1||this.newest===!0&&this._lastMessage!==message){this._lastMessage=message;var currTime=new Date,$data=[element("span",{className:"message"},message)];this.time===!0&&$data.push(element("span",{className:"time"},("0"+currTime.getHours()).slice(-2)+":"+("0"+currTime.getMinutes()).slice(-2)+":"+("0"+currTime.getSeconds()).slice(-2))),elchild(this.$log,element("li",{className:type||this.defaultType,tabIndex:"1"},$data)),this.autofocus===!0&&this.$log.lastElementChild.focus(),this.trigger("onAdd")}},Events.inject(CLog);