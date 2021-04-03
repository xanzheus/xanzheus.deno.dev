import Layout from '../components/Layout.jsx'
import SuperCenter from '../components/SuperCenter.jsx'

const GreetingsPage = ({ name }) => {
  return (
    <Layout>
      <SuperCenter>
        <p>Hello, {name}. Thanks for visiting us!</p>
      </SuperCenter>
    </Layout>
  )
}

export default GreetingsPage
