"use strict";function VScrollBar(config){this.$node=null,this.$body=null,this.viewSize=10,this.realSize=100,this.value=0,this.thumbRect=null,this.trackRect=null,config=config||{},this.$node=void 0!==config.$node?config.$node:document.createElement("div"),this.$body=void 0!==config.$body?config.$body:this.$node.appendChild(document.createElement("div")),this.$node.classList.add("scrollBar"),this.$body.classList.add("thumb"),this.init(config)}VScrollBar.prototype.init=function(config){if(config=config||{},DEBUG){if(1!==arguments.length)throw"wrong arguments number";if("object"!=typeof config)throw"wrong config type"}if(void 0!==config.realSize){if(DEBUG&&Number(config.realSize)!==config.realSize)throw"config.realSize value must be a number";this.realSize=config.realSize}if(void 0!==config.viewSize){if(DEBUG){if(Number(config.viewSize)!==config.viewSize)throw"config.viewSize value must be a number";if(config.viewSize<=0)throw"config.viewSize value must be greater than 0"}this.viewSize=config.viewSize}this.viewSize>=this.realSize?this.$body.classList.add("hidden"):this.$body.classList.remove("hidden"),void 0!==config.value&&this.scrollTo(config.value),this.$body.style.height=this.viewSize/this.realSize*100+"%",this.thumbRect=this.$body.getBoundingClientRect(),this.trackRect=this.$node.getBoundingClientRect()},VScrollBar.prototype.scrollTo=function(value){if(DEBUG){if(1!==arguments.length)throw"wrong arguments number";if(Number(value)!==value)throw"value must be a number";if(this.realSize>this.viewSize&&value>this.realSize-this.viewSize)throw"value is greater than this.realSize-this.viewSize";if(0>value)throw"value is less then 0"}return this.value!==value?((0===this.thumbRect.height||0===this.thumbRect.width)&&(this.trackRect=this.$node.getBoundingClientRect(),this.thumbRect=this.$body.getBoundingClientRect()),this.$body.style.marginTop=(this.trackRect.height-this.thumbRect.height)*value/(this.realSize-this.viewSize)+"px",value>=this.realSize&&(value=this.realSize),this.value=value,!0):!1};