import React, { Component } from 'react'
import {Form, Icon, Input, Button, Checkbox, Col, Row} from 'antd';

class SignInForm extends Component { 
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            const data = {
              userName: values.userName,
              password: values.password
            }
            // just for example
            fetch("https://reqres.in/api/users",
            {
                method: "POST",
                body: JSON.stringify(data)
            })
            .then(res => res.json() )
            .then(data => {( console.log( data ))})
            .catch(err => console.log(err))
          }
        });
      }


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="row sign-in-form">
        <div className="col-xs-10 offset-xs-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <h2 className="login-form__title"> sign in now</h2>
            <p className="login-form__description">Unlock awesome features!</p>
            <Form.Item>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Required field!' }],
              })(
                <Input  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" className="login-form__input" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Required field!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" className="login-form__input" />
              )}
            </Form.Item>
            <Form.Item>
            <Row>
              <Col sm={{ span: 12}} xs={{span:24}} className="align-left">
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Remember me</Checkbox>
                )}
              </Col>
              <Col sm={{ span: 12}} xs={{span:24}} className="align-right">
                <a className="login-form__forgot">Forgot password</a>
              </Col>
              </Row>
              <Row>
              <Col xs={{ span: 24}}>
                <Button type="primary" htmlType="submit" className="login-form__submit">
                  sign in
                </Button>
              </Col>
              </Row>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default Form.create({ name: 'normal_login' })(SignInForm);
