import PostModel from "../../components/PostModel/PostModel";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "@assets/foto.jpg";
import fotoCapa from "@assets/sobre_mim_capa.png";

export default function SobreMim() {
    return (
        <>
            <PostModel fotoCapa={fotoCapa} titulo="Sobre mim">
                <h3 className={styles.subtitulo}>Olá, eu sou o Arthur!</h3>
                <img
                    src={fotoSobreMim}
                    alt="Foto do Arthur"
                    className={styles.fotoSobreMim}
                />
                <p className={styles.paragrafo}>
                    Olá! Meu nome é Arthur A. Silva, sou bacharel em Ciência da Computação pela Universidade Federal do Maranhão e possuo pós-graduações em Docência do Ensino Superior e Robótica Educacional. Minha carreira é marcada pela atuação como professor, desenvolvedor web e analista de dados, combinando habilidades técnicas e pedagógicas para impactar positivamente o aprendizado e a inovação.
                </p>
                <p className={styles.paragrafo}>
                    Atualmente, sou professor no Instituto Estadual de Educação, Ciência e Tecnologia do Maranhão (IEMA), onde leciono disciplinas como Banco de Dados, Introdução a Algoritmos, Desenvolvimento de Software e Robótica Educacional.
                </p>
                <p className={styles.paragrafo}>
                    Minhas competências técnicas incluem linguagens como Python,Golang, JavaScript (Node.js, React.js, Vue.js) e conhecimentos em banco de dados (SQL Server, MongoDB, Firebase). Atualmente tenho trabalhado mais com Golang e React, mas estou sempre pronto para novos aprendizados e disposto a novos desafios.
                </p>

                <p className={styles.paragrafo}>
                    Valorizo a comunicação eficaz, a resolução criativa de problemas e a adaptabilidade, qualidades que me ajudam a ensinar e aprender com diferentes públicos. No tempo livre, mantenho projetos no GitHub e compartilho ideias no meu blog (e no <a className={styles.link} href="https://medium.com/@arthurazevedods">medium</a>), sempre explorando formas de aliar tecnologia e educação.
                </p>
            </PostModel>
        </>
    );
}
