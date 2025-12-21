import Section from '../components/Section'

export default function StudentQualification({ initial }) {
  if (!initial || !initial.visible) return null
  return (
    <Section title="学生资质查询">
      <div>{initial.tips}</div>
    </Section>
  )
}

