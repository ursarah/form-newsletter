import { FormEvent, useState } from "react";
import { User } from "../../types/User";
import { validate } from "../../utils/validate";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const [error, setError] = useState<User | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data: User = {
      name,
      email,
      agree,
    };

    setError(null);

    const validateErros = validate(data);

    if (Object.keys(validateErros).length > 0) {
      setError(validateErros);
      return;
    }

    setName("");
    setEmail("");
    setAgree(false);

    alert("obrigado por se inscrever");
  };

  return (
    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
      <div className='flex flex-col'>
        <label className='text-sm' htmlFor='name'>
          Nome
        </label>
        <input
          type='text'
          placeholder='Digite o seu nome'
          className='rounded-lg py-2 px-2 text-sm placeholder:text-stone-400'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error?.name && (
          <small className='text-xs text-red-500 mt-1'>{error?.name}</small>
        )}
      </div>
      <div className='flex flex-col'>
        <label className='text-sm' htmlFor='email'>
          E-mail
        </label>
        <input
          type='email'
          placeholder='Digite o seu Email'
          className='rounded-lg py-2 px-2 text-sm placeholder:text-stone-400'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error?.email && (
          <small className='text-xs text-red-500 mt-1'>{error?.email}</small>
        )}
      </div>
      <div className='flex flex-col'>
        <a href='#' className='text-xs underline mb-2'>
          Leia os termos
        </a>
        <div className='flex gap-2 items-center'>
          <input
            type='checkbox'
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label className='text-sm' htmlFor='agree'>
            Concordo com os termos
          </label>
        </div>
        {error?.agree && (
          <small className='text-xs text-red-500 mt-1'>{error?.agree}</small>
        )}
      </div>
      <button className='bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white'>
        Cadastrar
      </button>
    </form>
  );
};

export default Form;
