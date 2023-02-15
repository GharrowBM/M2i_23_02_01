import { FormEvent } from "react"

const OldFormComponent = () => {
  const submitFormHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("Form submitted!")
  }

  const logInputValue = (event: FormEvent<HTMLInputElement>) => {
    console.log((event.target as HTMLInputElement).value)
  }

  return (
    <form onSubmit={submitFormHandler}>
      <input type="text" onInput={logInputValue} />
      <button>Send Form</button>
    </form>
  )
}

export default OldFormComponent