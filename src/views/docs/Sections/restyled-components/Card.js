import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardImgOverlay,
  CardLink,
  CardTitle,
  CardSubtitle,
  CardText,
  ListGroupItem,
  ListGroup,
  NavItem,
  NavLink,
  Nav
} from "reactstrap";

class CardDocs extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Cards
        </h1>
        <p className="bd-lead">
          Bootstrap's cards provide a flexible and extensible content container
          with multiple variants and options.
        </p>
        <h2 id="example">Example</h2>
        <p>
          Below is an example of a basic card with mixed content and a fixed
          width. Cards have no fixed width to start, so they’ll naturally fill
          the full width of its parent element. This is easily customized with
          our various{" "}
          <a href="#pablo" onClick={e => e.preventDefault()}>
            sizing options
          </a>
          .
        </p>
        <div className="bd-example" data-example-id="">
          <Card style={{ width: "20rem" }}>
            <CardImg alt="..." data-src="holder.js/100px180/" top />
            <CardBody>
              <CardTitle tag="h4">Card title</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button
                color="primary"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Go somewhere
              </Button>
            </CardBody>
          </Card>
        </div>
        <h2 id="content-types">Content types</h2>
        <p>
          Cards support a wide variety of content, including images, text, list
          groups, links, and more. Below are examples of what’s supported.
        </p>
        <h3 id="body">Body</h3>
        <p>
          The building block of a card is the{" "}
          <code className="highlighter-rouge">.card-body</code>. Use it whenever
          you need a padded section within a card.
        </p>
        <div className="bd-example" data-example-id="">
          <Card>
            <CardBody>This is some text within a card body.</CardBody>
          </Card>
        </div>
        <h3 id="titles-text-and-links">Titles, text, and links</h3>
        <p>
          Card titles are used by adding{" "}
          <code className="highlighter-rouge">.card-title</code>
          to a <code className="highlighter-rouge">{`<h*>`}</code>
          tag. In the same way, links are added and placed next to each other by
          adding <code className="highlighter-rouge">.card-link</code>
          to an <code className="highlighter-rouge">{`<a>`}</code>
          tag.
        </p>
        <p>
          Subtitles are used by adding a{" "}
          <code className="highlighter-rouge">.card-subtitle</code>
          to a <code className="highlighter-rouge">{`<h*>`}</code>
          tag. If the <code className="highlighter-rouge">.card-title</code>
          and the <code className="highlighter-rouge">.card-subtitle</code>
          items are placed in a{" "}
          <code className="highlighter-rouge">.card-body</code>
          item, the card title and subtitle are aligned nicely.
        </p>
        <div className="bd-example" data-example-id="">
          <Card style={{ width: "20rem" }}>
            <CardBody>
              <CardTitle tag="h4">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <CardLink href="#pablo" onClick={e => e.preventDefault()}>
                Card link
              </CardLink>
              <CardLink href="#pablo" onClick={e => e.preventDefault()}>
                Another link
              </CardLink>
            </CardBody>
          </Card>
        </div>
        <h3 id="images">Images</h3>
        <p>
          <code className="highlighter-rouge">.card-img-top</code>
          places an image to the top of the card. With{" "}
          <code className="highlighter-rouge">.card-text</code>, text can be
          added to the card. Text within{" "}
          <code className="highlighter-rouge">.card-text</code>
          can also be styled with the standard HTML tags.
        </p>
        <div className="bd-example" data-example-id="">
          <Card style={{ width: "20rem" }}>
            <CardImg
              alt="..."
              data-src="holder.js/100px180/?text=Image cap"
              top
            />
            <CardBody>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </div>
        <h3 id="list-groups">List groups</h3>
        <p>Create lists of content in a card with a flush list group.</p>
        <div className="bd-example" data-example-id="">
          <Card style={{ width: "20rem" }}>
            <ListGroup flush>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
          </Card>
        </div>
        <div className="bd-example" data-example-id="">
          <Card className="card-nav-tabs" style={{ width: "20rem" }}>
            <CardHeader className="card-header-danger">Featured</CardHeader>
            <ListGroup flush>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
          </Card>
        </div>
        <h3 id="header-and-footer">Header and footer</h3>
        <p>Add an optional header and/or footer within a card.</p>
        <div className="bd-example" data-example-id="">
          <Card className="card-nav-tabs">
            <CardHeader className="card-header-warning">Featured</CardHeader>
            <CardBody>
              <CardTitle tag="h4">Special title treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button
                color="primary"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Go somewhere
              </Button>
            </CardBody>
          </Card>
        </div>
        <p>
          Card headers can be styled by adding{" "}
          <code className="highlighter-rouge">.card-header</code>
          to <code className="highlighter-rouge">{`<h*>`}</code>
          elements.
        </p>
        <div className="bd-example" data-example-id="">
          <Card className="card-nav-tabs">
            <CardHeader className="card-header-info">Featured</CardHeader>
            <CardBody>
              <CardTitle tag="h4">Special title treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button
                color="primary"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Go somewhere
              </Button>
            </CardBody>
          </Card>
        </div>
        <div className="bd-example" data-example-id="">
          <Card className="card-nav-tabs">
            <CardHeader className="card-header-success">Quote</CardHeader>
            <CardBody>
              <blockquote className="blockquote mb-0">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
        <div className="bd-example" data-example-id="">
          <Card className="card-nav-tabs text-center">
            <CardHeader className="card-header-primary">Featured</CardHeader>
            <CardBody>
              <CardTitle tag="h4">Special title treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button
                color="primary"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Go somewhere
              </Button>
            </CardBody>
            <CardFooter className="text-muted">2 days ago</CardFooter>
          </Card>
        </div>
        <h2 id="text-alignment">Text alignment</h2>
        <p>
          You can quickly change the text alignment of any card—in its entirety
          or specific parts—with our{" "}
          <a href="#pablo" onClick={e => e.preventDefault()}>
            text align classes
          </a>
          .
        </p>
        <div className="bd-example" data-example-id="">
          <Card style={{ width: "20rem" }}>
            <CardBody>
              <CardTitle tag="h4">Special title treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button
                color="primary"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Go somewhere
              </Button>
            </CardBody>
          </Card>
          <Card className="text-center" style={{ width: "20rem" }}>
            <CardBody>
              <CardTitle tag="h4">Special title treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button
                color="primary"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Go somewhere
              </Button>
            </CardBody>
          </Card>
          <Card className="text-right" style={{ width: "20rem" }}>
            <CardBody>
              <CardTitle tag="h4">Special title treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button
                color="primary"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Go somewhere
              </Button>
            </CardBody>
          </Card>
        </div>
        <h2 id="navigation">Navigation</h2>
        <p>
          Add some navigation to a card’s header (or block) with Bootstrap’s{" "}
          <a href="/docs/1.0/components/navs/">nav components</a>.
        </p>
        <div className="bd-example" data-example-id="">
          <Card className="text-center">
            <CardHeader className="card-header-rose">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className="active"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Active
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Link
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="disabled"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Disabled
                  </NavLink>
                </NavItem>
              </Nav>
            </CardHeader>
            <CardBody>
              <CardTitle tag="h4">Special title treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button
                color="primary"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Go somewhere
              </Button>
            </CardBody>
          </Card>
        </div>
        <div className="bd-example" data-example-id="">
          <Card className="text-center">
            <CardHeader>
              <Nav className="card-header-pills" pills>
                <NavItem>
                  <NavLink
                    className="active"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Active
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    Link
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="disabled"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Disabled
                  </NavLink>
                </NavItem>
              </Nav>
            </CardHeader>
            <CardBody>
              <CardTitle tag="h4">Special title treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button
                color="primary"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Go somewhere
              </Button>
            </CardBody>
          </Card>
        </div>
        <h2 id="images-1">Images</h2>
        <p>
          Cards include a few options for working with images. Choose from
          appending “image caps” at either end of a card, overlaying images with
          card content, or simply embedding the image in a card.
        </p>
        <h3 id="image-caps">Image caps</h3>
        <p>
          Similar to headers and footers, cards can include top and bottom
          “image caps”—images at the top or bottom of a card.
        </p>
        <div className="bd-example" data-example-id="">
          <Card className="mb-3">
            <CardImg alt="..." data-src="holder.js/100px180/" top />
            <CardBody>
              <CardTitle tag="h4">Card title</CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag="h4">Card title</CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardBody>
            <CardImg alt="..." bottom data-src="holder.js/100px180/" />
          </Card>
        </div>
        <h3 id="image-overlays">Image overlays</h3>
        <p>
          Turn an image into a card background and overlay your card’s text.
          Depending on the image, you may or may not need additional styles or
          utilities.
        </p>
        <div className="bd-example" data-example-id="">
          <Card className="bg-dark text-white">
            <CardImg
              alt="..."
              data-src="holder.js/100px270/#55595c:#373a3c/text:Card image"
            />
            <CardImgOverlay>
              <CardTitle className="text-white" tag="h4">
                Card title
              </CardTitle>
              <CardText className="text-white">
                Last updated 3 mins ago
              </CardText>
            </CardImgOverlay>
          </Card>
        </div>
      </>
    );
  }
}

export default CardDocs;
