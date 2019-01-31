import Foo from './Foo.js'
export default Vue.component('App', {
  template: `<div>
  {{initialState}}
  	<br/>
  	<Foo/>
  </div>`,
  components:{
  	Foo
  },
  data() {
    return {
      initialState:'Hello World'
    }
  },
})