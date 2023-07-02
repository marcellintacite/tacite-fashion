import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <main>
      <div className="w-[98%] md:w-4/5 m-auto ">
        <section>
          <div className="flex md:h-[80vh] md:justify-center md:items-center">
            <div className="w-[400px] rounded-md min-h-[400px] border shadow shadow-slate-100 p-3 mt-5 md:mt-0">
              <div></div>
              <h2 className="text-center font-bold text-3xl">Connexion</h2>
              <p className="text-center pt-2">
                Veuillez nous fournir vos identifiants pour accéder à votre
                compte.
              </p>
              <form className="w-[90%] m-auto">
                <div className="w-full flex flex-col mt-2 mb-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Votre email"
                    className="border border-slate-300 rounded-md p-2 focus:
                    outline-none focus:ring-2 focus:ring-slate-600 mt-2"
                  />
                </div>
                <div className="w-full flex flex-col mt-2">
                  <label htmlFor="email">Mot de passe</label>
                  <input
                    type="password"
                    name="email"
                    id="email"
                    placeholder="Votre mot de passe"
                    className="border border-slate-300 rounded-md p-2 focus:
                    outline-none focus:ring-2 focus:ring-slate-600 mt-2"
                  />
                </div>
                <button
                  type="submit"
                  className="
                bg-slate-600 text-white rounded-md p-2 mt-5 w-full
                "
                >
                  {"Login"}
                </button>
                <p className="pt-4 pb-2">
                  {"  Vous n'avez pas de compte ?"}
                  <a href="/register" className="text-slate-600">
                    {"Inscrivez-vous"}
                  </a>
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
