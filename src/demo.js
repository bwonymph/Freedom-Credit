import moment from 'moment'

export const servers = [{
  name: 'www01',
  status: 'success',
  icon: 'globe',
  description: 'Web server that runs our sites'
}, {
  name: 'sql01',
  status: 'danger',
  icon: 'database',
  description: 'mySQL server used for reporting'
}, {
  name: 'mongoDB01',
  status: 'info',
  icon: 'file-code-o',
  description: 'Main DB server'
}, {
  name: 'ldap01',
  status: 'success',
  icon: 'key',
  description: 'Authentication server'
}, {
  name: 'mgmt01',
  status: 'success',
  icon: 'home',
  description: 'Management server with all tools'
}, {
  name: 'bkup01',
  status: 'warning',
  icon: 'backward',
  description: 'Backup server'
}]

export const stats = [{
  header: '8390',
  text: 'Visitors'
}, {
  header: '30%',
  text: 'Referrals'
}, {
  header: '70%',
  text: 'Organic'
}]

export const timeline = [{
  icon: 'fa-envelope',
  color: 'blue',
  title: 'Read financial advice: Passive Investments',
  time: moment().endOf('day').fromNow(),
  body: 'Passive management (also called passive investing) is an investing strategy that tracks a market-weighted index or portfolio.[1][2] The most popular method is to mimic the performance of an externally specified index by buying an index fund...',
  buttons: [{
    type: 'primary',
    message: 'Read more',
    href: 'https://en.wikipedia.org/wiki/Passive_management',
    target: '_blank'
  }]
},
{
  icon: 'fa-user',
  color: 'yellow',
  title: 'Next Minimum Payment is due soon: Freedom Credit',
  time: moment('20181018', 'YYYYMMDD').fromNow(),
  body: 'Minimum Payment is 20 Dollars',
  buttons: [{
    type: 'primary',
    message: 'Pay Now',
    href: 'https://en.wikipedia.org/wiki/Passive_management',
    target: '_blank'
  }]
},
{
  icon: 'fa-user',
  color: 'yellow',
  title: 'Next Minimum Payment is due soon: Bank of America',
  time: moment('20181024', 'YYYYMMDD').fromNow(),
  body: 'Bank of America Card: Minimum Payment is 15 Dollars',
  buttons: [{
    type: 'primary',
    message: 'Pay Now',
    href: 'https://en.wikipedia.org/wiki/Passive_management',
    target: '_blank'
  }]
},
{
  icon: 'fa-camera',
  color: 'purple',
  title: 'Watch this video',
  time: moment('20181019', 'YYYYMMDD').fromNow(),
  body: '<div class="embed-responsive embed-responsive-16by9"><iframe width="560" height="315" src="https://www.youtube.com/embed/5LowFH22_vI" frameborder="0" allowfullscreen></iframe></div>'
  // <iframe width="560" height="315" src="https://www.youtube.com/embed/5LowFH22_vI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
}]
