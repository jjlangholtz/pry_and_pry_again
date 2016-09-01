// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  debugging: require("../assets/debugging.gif"),
  malkovich: require("../assets/malkovich.jpg"),
  dumpster: require("../assets/dumpster-diving.gif")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              If At First You Dont Succeed...
            </Heading>
            <Heading size={1} fit caps>
              Pry And Pry Again!
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="Sometimes code doesn't do what you expect, debugging is the process of figuring out why">
            <Image src={images.debugging.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Debugging?
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="Pry has a rich ecosystem of plug-ins, I won't cover them all but these are the most important">
            <Heading caps fit>Pry And Friends</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Pry
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Pry-Byebug
                </Heading>
              </Fill>
            </Layout>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Pry-Rails
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Pry-Doc
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>The most effective debugging tool is still careful thought, coupled with judiciously placed print statements.</Quote>
              <Cite>Brian W. Kernighan</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary" notes="Nothing against puts debugging, but I prefer more specialized tools">
            <Heading caps fit size={1} textColor="primary">
              Sharper Tools
            </Heading>
            <Markdown>
              {`
* Object **Introspection**
* Code and Documentation **Browsing**
* **Stepping** Through the Stack
* ~~puts #{object.inspect}~~
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Not Convinced?
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Pry Also Encourages Testing
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="Pry is phenomenal for learning new libraries">
            <Image src={images.dumpster.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              And Gem Diving
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Image src={images.malkovich.replace("/", "")} margin="0px auto 40px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              See What Your Objects See
            </Heading>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Demonstration!
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
