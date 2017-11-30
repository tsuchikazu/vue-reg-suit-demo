import { mount } from 'vue-test-utils'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const wrapper = mount(HelloWorld, {
      attachToDocument: true
    })
    expect(wrapper.find('.hello h1').text())
    .to.equal('Welcome to Your Vue.js App')
  })
})
