import React from "react";
import { Tag } from "antd";
import { tagsColor } from "redux/constant";

const TagCustom = ({ type, choice }) => {
  switch (type) {
    case 'action': {
      const selectedTag = tagsColor.action[choice];
      return <Tag color={selectedTag.color}>{selectedTag.name}</Tag>
    }
    case 'status':{
      const selectedTag = tagsColor.status[choice];
      return <Tag color={selectedTag.color}>{selectedTag.name}</Tag>
    }
    default:
      return <></>;
  }
}

export default TagCustom;
