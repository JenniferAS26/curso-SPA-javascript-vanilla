/* Vamos a crear una funcion que nos va a retornar la vista que necesitamos */
const Home = () => {
    const view = `
        <div class="Characters">
            <article class="Character-item">
                <a href="#/1/">
                    <img src="image" alt="name">
                    <h2>Name</h2>
                </a>
            </article>
        </div>
    `;
    return view;
};

export default Home; // Nos va a permitir identificar si este archivo puede ser utiizado dentro de otros archivos de JS