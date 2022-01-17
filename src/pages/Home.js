import getData from '../utils/getData';

/* Vamos a crear una funcion que nos va a retornar la vista que necesitamos */
const Home = async () => {
    const characters = await getData();
    const view = `
        <div class="Characters">
            ${characters.results.map(character => `
                <article class="Character-item">
                    <a href="#/${character.id}/">
                        <img src="${character.image}" alt="${character.name}">
                        <h2>${character.name}</h2>
                    </a>
                </article>
            `).join('')}
        </div>
    `;
    return view;
};

export default Home; // Nos va a permitir identificar si este archivo puede ser utiizado dentro de otros archivos de JS