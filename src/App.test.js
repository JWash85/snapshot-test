import renderer from 'react-test-renderer'
import App from './App';

test('renders a snapshot', () => {
  //toJSON turns the component representation into JSON
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
})

