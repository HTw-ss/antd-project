import React from 'react';
import { Icon, Dropdown, Menu } from 'antd';
import PropTypes from 'prop-types';
import $ from 'jquery';
// 操作按钮,功能:超出多少个就显示更多按钮
class MoreItem extends React.Component {
  render() {
    const { maxLength = 3, children } = this.props;
    let showMoreFlag = false;
    let newChildren = children;
    let options;
    if (Array.isArray(children)) {
      const tempChildren = children.filter(child => !!child);
      newChildren = tempChildren;
      if (tempChildren.length > maxLength) {
        showMoreFlag = true;
        newChildren = tempChildren.slice(0, maxLength - 1);
        options = (
          <Menu>
            {tempChildren.slice(maxLength - 1).map((item, index) => (
              <Menu.Item key={index}>{item}</Menu.Item>
            ))}
          </Menu>
        );
      }
    }
    return (
      <span>
        {Array.isArray(newChildren)
          ? newChildren.length > 0 &&
            newChildren.map((item, index) => (
              <span key={index} className="margin-right-10">
                {item}
              </span>
            ))
          : newChildren}
        {showMoreFlag && (
          <Dropdown
            overlay={options}
            trigger={['hover']}
            getPopupContainer={item => {
              // 如果在modal,放在modal的滚动条，否则放在main里跟页面一起滚动
              if ($(item).parents('.ant-modal').length > 0) {
                return $(item).parents('.ant-modal-wrap')[0];
              } else {
                return document.getElementById('main');
              }
            }}
            {...this.props}
          >
            <a>
              更多 <Icon type="down" style={{ transform: 'none' }} />
            </a>
          </Dropdown>
        )}
      </span>
    );
  }
}
export default MoreItem;
MoreItem.propTypes = {
  maxLength: PropTypes.number // 最大长度
};
