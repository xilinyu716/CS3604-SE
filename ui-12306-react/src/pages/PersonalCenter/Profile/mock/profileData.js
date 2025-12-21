const data = {
  basic: {
    username: '张三',
    country: 'cn',
    countryLabel: '中国',
    countryOptions: [
      { value: 'cn', label: '中国' },
      { value: 'hk', label: '中国香港' },
      { value: 'mo', label: '中国澳门' },
      { value: 'tw', label: '中国台湾' }
    ],
    idType: 'id',
    idTypeLabel: '中国居民身份证',
    idTypeOptions: [
      { value: 'id', label: '中国居民身份证' },
      { value: 'passport', label: '护照' }
    ],
    idNo: '110101199003071234',
    idMasked: '110101****1234',
    verifyStatusLabel: '核验通过'
  },
  contact: {
    mobile: '13800138000',
    mobileMasked: '138****8000',
    mobileVerifyTips: '已完成手机核验',
    email: 'user@example.com',
    emailVerifyTips: '邮箱未验证',
    address: '北京市海淀区中关村大街1号'
  },
  extra: {
    job: '工程师',
    company: '某某科技有限公司',
    remark: ''
  },
  student: {
    visible: false,
    tips: '学生资质查询暂未开放'
  }
}

export default data

