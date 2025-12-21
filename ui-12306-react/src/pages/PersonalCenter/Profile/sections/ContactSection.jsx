import { useState } from 'react'
import Section from '../components/Section'
import FormList from '../components/FormList'
import FormItem from '../components/FormItem'

export default function ContactSection({ initial, onSaving }) {
  const [mode, setMode] = useState('view')
  const [form, setForm] = useState(initial)
  const actions =
    mode === 'view'
      ? <button className="btn" onClick={() => setMode('edit')}>编辑</button>
      : (
        <>
          <button className="btn btn-primary" onClick={() => { onSaving && onSaving(); setMode('view') }}>保存</button>
          <button className="btn" onClick={() => { setForm(initial); setMode('view') }}>取消</button>
        </>
      )
  return (
    <Section title="联系方式" actions={actions}>
      <FormList mode={mode}>
        <FormItem label="手机" required tips={form.mobileVerifyTips}>
          {mode === 'view' ? <span>{form.mobileMasked}</span> : <input value={form.mobile} onChange={e => setForm({ ...form, mobile: e.target.value })} />}
        </FormItem>
        <FormItem label="邮箱" required tips={form.emailVerifyTips}>
          {mode === 'view' ? <span>{form.email}</span> : <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />}
        </FormItem>
        <FormItem label="地址">
          {mode === 'view' ? <span>{form.address}</span> : <input value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />}
        </FormItem>
      </FormList>
    </Section>
  )
}
