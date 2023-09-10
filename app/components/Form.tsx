// this component is not rendered in client, but rendered in server 
// and hydrates on the client.
 'use client'

import { actionPost } from "../action"
import { useRef} from 'react'
import { experimental_useFormStatus as useFormStatus } from "react-dom"
 
 export default function Form() {
  const formRef = useRef<HTMLFormElement>(null)
  const { pending } = useFormStatus();

   return (
     <form 
          action={async(formData)=> {
              await actionPost(formData);
              formRef.current?.reset();
            }}
          ref={formRef}
          className="relative flex items-center text-sm mb-5"
          style={{opacity:pending ? 0.7 : 1 }}
        >

        <input type="text" name="entry"
          placeholder="Your message ..."
          required
          disabled={pending}
          className="pl-4 py-2 mt-1 focus:ring-blue-500 block w-full border-neutral-300 
            rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"/>
        <button type="submit"
            disabled={pending}
            className="flex items-center justify-center absolute right-2 mt-1 font-medium h-7
                   bg-blue-500/30 text-neutral-900 dark:text-neutral-100 rounded w-16">
          보내기
        </button>
     </form>
   )
 }
 