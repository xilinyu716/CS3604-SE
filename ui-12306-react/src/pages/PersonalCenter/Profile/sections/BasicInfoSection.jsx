import { useState } from 'react'
import Section from '../components/Section'
import FormList from '../components/FormList'
import FormItem from '../components/FormItem'
import Select from '../components/Select'

export default function BasicInfoSection({ initial, onSaving }) {
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
    <Section title="基本信息" actions={actions}>
      <FormList mode={mode}>
        <FormItem label="用户名" required>
          {mode === 'view' ? <span>{form.username}</span> : <input value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} />}
        </FormItem>
        <FormItem label="国家或地区" required>
          {mode === 'view' ? <span>{form.countryLabel}</span> : (
            <Select
              options={form.countryOptions}
              value={form.country}
              onChange={v => setForm({ ...form, country: v })}
              placeholder="请选择"
            />
          )}
        </FormItem>
        <FormItem label="证件类型" required>
          {mode === 'view' ? <span>{form.idTypeLabel}</span> : (
            <Select
              options={form.idTypeOptions}
              value={form.idType}
              onChange={v => setForm({ ...form, idType: v })}
              placeholder="请选择"
            />
          )}
        </FormItem>
        <FormItem label="证件号码" required tips="证件号码格式须符合最新规则">
          {mode === 'view' ? <span>{form.idMasked}</span> : <input value={form.idNo} onChange={e => setForm({ ...form, idNo: e.target.value })} />}
        </FormItem>
        <FormItem label="核验状态">
          <span>{form.verifyStatusLabel}</span>
        </FormItem>
      </FormList>
    </Section>
  )
}
