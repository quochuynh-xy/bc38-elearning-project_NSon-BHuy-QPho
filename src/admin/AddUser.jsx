import {
  Button,
  Form,
  Input,
  Radio,
  Select,
} from "antd";
import { useState } from "react";
import {object} from 'yup'
const AddUser = () => {
  const userSchema = object({
    
  })
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <div className="p-2">
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Họ tên">
          <Input />
        </Form.Item>
        <Form.Item label="Tài khoản">
          <Input />
        </Form.Item>
        <Form.Item label="Mật khẩu">
          <Input />
        </Form.Item>
        <Form.Item label="Số ĐT">
          <Input />
        </Form.Item>
        <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Form.Item label="Mã nhóm">
          <Input />
        </Form.Item>
        <Form.Item label="Loại user">
          <Select>
            <Select.Option value="GV">GV</Select.Option>
            <Select.Option value="HV">HV</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AddUser;
