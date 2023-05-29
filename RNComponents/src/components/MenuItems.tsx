import { MenuItem } from "../interface/interfaces";

export const menuItems: MenuItem[] = [
    {
      id: '1',
      name: 'Animation 1',
      icon: 'cube',
      components: 'AnimationScreen01',
    },
    {
      id: '2',
      name: 'Animation 2',
      icon: 'trash',
      components: 'AnimationScreen02',
    },
    {
      id: '3',
      name: 'SwitchScreen',
      icon: 'alert-circle',
      components: 'SwitchScreen',
    },
    {
      id: '4',
      name: 'Alerts',
      icon: 'toggle',
      components: 'AlertScreen',
    },
    {
      id: '5',
      name: 'TextInputScreen',
      icon: 'document-text',
      components: 'TextInputScreen',
    }, 
    {
      id: '6',
      name: 'Pull To Refresh',
      icon: 'refresh',
      components: 'PullToRefreshScreen',
    }, 
    {
      id: '7',
      name: 'MyTopModal',
      icon: 'copy',
      components: 'MyTopModalScreen',
    },
     {
      id: '8',
      name: 'SectionList',
      icon: 'list',
      components: 'CustomSectionListScreen',
    },
    
  ];