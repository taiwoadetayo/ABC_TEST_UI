/*
 * Main and demo navigation arrays
 */

export default {
  'main': [
    {
      name: 'Dashboard',
      to: '/backend/dashboard',
      icon: 'si si-speedometer'
    },

    {
      name: 'Sales Management',
      icon: 'si si-layers',
      subActivePaths: '/backend/blocks',
      sub: [
        {
          name: 'Pending Orders',
          to: '/backend/pendingorder',
          icon: 'fas fa-trailer',
        },
        {
          name: 'Modified Orders',
          to: '/backend/modifiedorder',
          icon: 'fas fa-edit',
        },
        {
          name: 'Rejected Orders',
          to: '/backend/rejectedorder',
          icon: 'fas fa-trash',
        },
        {
          name: 'Completed Orders',
          to: '/backend/completedorder',
          icon: 'fas fa-ship',
        }
      ]
    },

    {
        name: 'Products',
        to: '/backend/product',
        icon: 'si si-magnet'
    },

    {
      name: 'Delivery Management',
      icon: 'si si-pointer',
      subActivePaths: '/backend/blocks',
      sub: [
        // {
        //   name: 'Drivers',
        //   to: '/backend/driver',
        //   icon: 'fas fa-id-card-alt',
        // },
        {
          name: 'Delivery Task',
          to: '/backend/deliverytask',
          icon: 'fa fa-road'
        }
      ]
    },

    {
      name: 'Customer Management',
      icon: 'fa fa-users',
      subActivePaths: '/backend/blocks',
      sub: [
        {
          name: 'Customer Search',
          to: '/backend/customer-search',
          icon: 'far fa-address-card',
        },
        // {
        //   name: 'Account Statement',
        //   to: '/backend/customer-search',
        //   icon: 'fa fa-newspaper'
        // },
        {
          name: 'Customers',
          to: '/backend/customer',
          icon: 'fa fa-users'
        }
      ]
    },

    {
      name: 'Configure Roles',
      icon: 'fa fa-cogs',
      subActivePaths: '/backend/blocks',
      sub: [
        {
          name: 'Manage Permission',
          to: '/backend/createroles',
          icon: 'fas fa-id-card-alt',
        },
        {
          name: 'Manage User',
          to: '/backend/manageroles',
          icon: 'fa fa-user-friends'
        }
      ]
    },

    {
        name: 'Security Audit Log',
        to: '/backend/auditlog',
        icon: 'fa fa-user-secret'
    },

    // {
    //   name: 'Report',
    //   to: '/backend/report',
    //   icon: 'fa fa-database'
    // },


    // {
    //     name: 'Scheduling',
    //     to: '/backend/schedule',
    //     icon: 'far fa-calendar'
    // },


    // {
    //   name: 'Scheduling',
    //   icon: 'far fa-calendar',
    //   subActivePaths: '/backend/blocks',
    //   sub: [
    //     {
    //       name: 'Schedule',
    //       to: '!#',
    //       icon: '',
    //     },
    //     {
    //       name: 'Schedules',
    //       to: '#!',
    //       icon: ''
    //     }
    //   ]
    // },
  ]
}
