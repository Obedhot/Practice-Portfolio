import { useState } from 'react'

function PropsDemo() {
  return (
    <div className="card">
      <h3>Props Example</h3>
      <p>Name: Obed Nasir</p>
      <p>Learning goal: React practice and UI building</p>
    </div>
  )
}

function StateDemo() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <h3>State Example</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function HookDemo() {
  const [text, setText] = useState('React hooks are useful')

  return (
    <div className="card">
      <h3>Hook Example</h3>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </div>
  )
}

function FormDemo() {
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted:', name)
  }

  return (
    <div className="card">
      <h3>Form Example</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default function App() {
  return (
    <main className="app-shell">
      <h1>React Practice Portfolio</h1>
      <p>This app brings together the React topics practiced earlier: props, state, hooks, and forms.</p>

      <div className="grid">
        <PropsDemo />
        <StateDemo />
        <HookDemo />
        <FormDemo />
      </div>
    </main>
  )
}
