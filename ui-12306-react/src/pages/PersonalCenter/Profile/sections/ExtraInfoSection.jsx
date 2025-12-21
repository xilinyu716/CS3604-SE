import { useState } from 'react'
import Section from '../components/Section'
import FormList from '../components/FormList'
import FormItem from '../components/FormItem'

export default function ExtraInfoSection({ initial, onSaving }) {
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
    <Section title="附加信息" actions={actions}>
      <FormList mode={mode}>
        <FormItem label="职业">
          {mode === 'view' ? <span>{form.job}</span> : <input value={form.job} onChange={e => setForm({ ...form, job: e.target.value })} />}
        </FormItem>
        <FormItem label="单位">
          {mode === 'view' ? <span>{form.company}</span> : <input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />}
        </FormItem>
        <FormItem label="备注">
          {mode === 'view' ? <span>{form.remark}</span> : <input value={form.remark} onChange={e => setForm({ ...form, remark: e.target.value })} />}
        </FormItem>
      </FormList>
    </Section>
  )
}
