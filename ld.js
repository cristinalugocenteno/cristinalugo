import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { withLDConsumer, LDOptions, LDProvider, useLDClient, useFlags } from 'launchdarkly-react-client-sdk';
import LaunchDarkly from 'launchdarkly-js-client-sdk';

const Root = styled.div`
  color: #001b44;
`;
const Heading = styled.h1`
  color: #00449e;
`;
const ListItem = styled.li`
  margin-top: 10px;
`;
const FlagDisplay = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const FlagOn = styled.span`
  color: #96bf01;
`;
const FlagOnRoy = styled.span`
  color: blue;
`;
const Home = ({ flags, ldClient, LDOptions }) => {

  const [coffeeType, setCoffeeType] = useState( "")
 
console.log("flag",flags)
const { json, coffee, soup, intro } = useFlags();

const history = useHistory();
let user = {
 // name: 'test',
  key: 'key23',
  country: "US",
  email: "Cristina@example.com"
}

console.log(user)
ldClient.identify(user)
 console.log(katz)
  console.log(color)
  ldClient.variation('katz', false)
  
  

 
const clicked = (e) =>{
e.preventDefault()
  

  history.push("/hooks")

  //ldClient.flush(user)
  

}




  return (
  <Root>
    <Heading>Welcome to launchdarkly-react-client-sdk Example App</Heading>
    <div>
      To run this example:
      <ul>
        <ListItem>
          {/* User Key is: <b>{user.key}</b> */}
        </ListItem>
        <ListItem>
          Create a flag called <b>Coffee</b> in your project. Make sure you make it available for the client side js
          sdk.
        </ListItem>
        </ul>
    </div>
   {/* {user.email != 'roykent@example.com'&& <button className="btn-test" onClick={(e)=>clicked(e)}>Cliiiiiickkkkkk!</button>} */}
    <FlagDisplay>{intro === true ? <FlagOn> On </FlagOn> : intro === false && <FlagOnRoy> Off </FlagOnRoy> }</FlagDisplay>
  </Root>
);
}

Home.propTypes = {
  flags: PropTypes.object.isRequired,
};

export default withLDConsumer()(Home);

