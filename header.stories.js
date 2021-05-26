
  import header from './header'
  export default {
      title: 'header',
      component: header
  }
    
  const Template = args => <header {...args} />
    
  export const Default = Template.bind({})
  Default.args = {}
        