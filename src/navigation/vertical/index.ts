export default computed(() => {
  const user = JSON.parse(localStorage.getItem('fit-user') ?? '{}')

  if (user.info_type === 'trainer') {
    return [
      // {
      //   title: 'trainees',
      //   to: { name: 'trainer-trainees' },
      //   icon: { icon: 'tabler-barbell' },
      // },
      {
        title: 'requests',
        to: { name: 'trainer-requests' },
        icon: { icon: 'tabler-user-question' },
      },
      {
        title: 'chat',
        to: { name: 'chat' },
        icon: { icon: 'tabler-message' },
      },
    ]
  }

  return [
    {
      title: 'my-plans',
      to: { name: 'trainee-my-plans' },
      icon: { icon: 'tabler-calendar-event' },
    },
    {
      title: 'trainers',
      to: { name: 'trainee-trainers' },
      icon: { icon: 'tabler-stretching' },
    },
    {
      title: 'history',
      to: { name: 'trainee-history' },
      icon: { icon: 'tabler-checklist' },
    },
    {
      title: 'chat',
      to: { name: 'chat' },
      icon: { icon: 'tabler-message' },
    },
  ]
})
