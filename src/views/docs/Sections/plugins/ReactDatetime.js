/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
import Datetime from "react-datetime";
import {
  CardBody,
  CardTitle,
  Card,
  CardHeader,
  FormGroup,
  Row,
  Col
} from "reactstrap";

const codeExample = `<Row>
    <Col xs={12} md={4}>
        <Card>
            <CardHeader><CardTitle>Datetime Picker</CardTitle></CardHeader>
            <CardBody>
                <FormGroup>
                    <Datetime
                        inputProps={{placeholder:"Datetime Picker Here"}}
                    />
                </FormGroup>
            </CardBody>
        </Card>
    </Col>
    <Col xs={12} md={4}>
        <Card>
            <CardHeader><CardTitle>Date Picker</CardTitle></CardHeader>
            <CardBody>
                <FormGroup>
                    <Datetime
                        timeFormat={false}
                        inputProps={{placeholder:"Datetime Picker Here"}}
                    />
                </FormGroup>
            </CardBody>
        </Card>
    </Col>
    <Col xs={12} md={4}>
        <Card>
            <CardHeader><CardTitle>Time Picker</CardTitle></CardHeader>
            <CardBody>
                <FormGroup>
                    <Datetime
                        dateFormat={false}
                        inputProps={{placeholder:"Datetime Picker Here"}}
                    />
                </FormGroup>
            </CardBody>
        </Card>
    </Col>
</Row>`;

class DateTimePicker extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          React Datetime v2.16.3
        </h1>
        <p className="bd-lead">
          We've used{" "}
          <a
            href="https://github.com/YouCanBookMe/react-datetime"
            target="_blank"
          >
            react-datetime
          </a>{" "}
          for this component and we've restyled it to match our theme.
        </p>
        <h2>Example</h2>
        <div className="bd-example">
          <Row>
            <Col xs={12} md={4}>
              <Card>
                <CardHeader>
                  <CardTitle>Datetime Picker</CardTitle>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Datetime
                      inputProps={{ placeholder: "Datetime Picker Here" }}
                    />
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card>
                <CardHeader>
                  <CardTitle>Date Picker</CardTitle>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Datetime
                      timeFormat={false}
                      inputProps={{ placeholder: "Datetime Picker Here" }}
                    />
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card>
                <CardHeader>
                  <CardTitle>Time Picker</CardTitle>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Datetime
                      dateFormat={false}
                      inputProps={{ placeholder: "Datetime Picker Here" }}
                    />
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import Datetime from 'react-datetime';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <p>
          For props, please refer to{" "}
          <a
            href="https://github.com/YouCanBookMe/react-datetime"
            target="_blank"
          >
            react-datetime's documentation
          </a>
          .
        </p>
      </div>
    );
  }
}

export default DateTimePicker;
