import { mount } from 'vue-test-utils'
import HelloWorld from '@/components/HelloWorld'
import { screenshot } from 'karma-nightmare'

describe('HelloWorld.vue', () => {
  it('should render correct contents', (done) => {
    const wrapper = mount(HelloWorld, {
      attachToDocument: true
    })
    expect(wrapper.find('.hello h1').text())
    .to.equal('Welcome to Your Vue.js App')

    screenshot('./snapshot/HelloWorld.png').then(done)
  })
})
