import{r as s,g as t}from"./p-80b32608.js";class e{constructor(t){s(this,t),this.context={},this.renderer=()=>null}componentWillLoad(){this.unsubscribe=()=>{null!=this.subscribe&&this.subscribe(this.el,"context")}}componentDidUnload(){null!=this.unsubscribe&&this.unsubscribe()}render(){return this.renderer(Object.assign({},this.context))}get el(){return t(this)}}export{e as context_consumer};