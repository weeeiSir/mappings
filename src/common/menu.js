const menuData = [{
    name: 'JOB管理',
    path: 'job'
  },{
    name: '作业管理',
    path: 'task'
  },{
    name: '模型管理',
    path: 'model'
  },{
    name: '配置管理',
    path: 'deploy'
  },
  /*
  {
    name: '表单页',
    icon: 'form',
    path: 'form',
    children: [{
      name: '基础表单',
      path: 'basic-form',
    }, {
      name: '分步表单',
      path: 'step-form',
    }, {
      name: '高级表单',
      authority: 'admin',
      path: 'advanced-form',
    }],
  }*/
    ];
  
  function formatter(data, parentPath = '', parentAuthority) {
    return data.map((item) => {
      const result = {
        ...item,
        path: `${parentPath}${item.path}`,
        authority: item.authority || parentAuthority,
      };
      if (item.children) {
        result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
      }
      return result;
    });
  }
  
  export const getMenuData = () => formatter(menuData);
  