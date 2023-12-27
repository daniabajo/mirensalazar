import './ServiciosPanel.css'

const ServiciosPanel = () => {
    return (
        <div className="ServiciosFila">
            {/* Columna 1 */}
            <div className="ServiciosColumna">
                <div className="ServiciosItem">
                    <strong className="ServiciosTitulo"> NUTRICIÓ EN EL CONTROL DE PES</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem"> sobrepès i obesitat</li>
                        <li className="ServiciosListaItem">baix pes</li>
                    </ul>
                </div>
                <div className="ServiciosItem">
                    <strong className="ServiciosTitulo"> NUTRICIÓ EN LA VIDA ADULTA</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem">educació alimentària</li>
                        <li className="ServiciosListaItem">canvi d'hàbits</li>
                    </ul>
                </div>
                <div className="ServiciosItem">
                    <strong className="ServiciosTitulo"> NUTRICIÓ PER AL RENDIMENT ESPORTIU</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem">greix corporal</li>
                        <li className="ServiciosListaItem">massa muscular</li>
                    </ul>
                </div>
                <div className="ServiciosItem">
                    <strong className="ServiciosTitulo"> NUTRICIÓ EN TRASTORNS GASTROINTESTINALS</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem">reflux gastroesofàgic</li>
                        <li className="ServiciosListaItem">gastritis</li>
                        <li className="ServiciosListaItem">úlcera pèptica</li>
                        <li className="ServiciosListaItem">gasos intestinals</li>
                        <li className="ServiciosListaItem">restrenyiment</li>
                        <li className="ServiciosListaItem">diarrea</li>
                        <li className="ServiciosListaItem">celiaquia</li>
                        <li className="ServiciosListaItem">diverticulosi</li>
                    </ul>
                </div>
            </div>
            {/* Columna 2 */}
            <div className="ServiciosColumna">
                <div className="ServiciosItem">
                    <strong className="ServiciosTitulo"> NUTRICIÓ EN REACCIONS ADVERSES A ALIMENTS</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem">al·lèrgies alimentàries</li>
                        <li className="ServiciosListaItem">intoleràncies alimentàries</li>
                    </ul>
                </div>
                <div className="ServiciosItem">
                    <strong className="ServiciosTitulo"> NUTRICIÓ EN TRANSTORNS ENDOCRINS</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem">prediabetis</li>
                        <li className="ServiciosListaItem">diabetis mellitus tipus II</li>
                        <li className="ServiciosListaItem">hipotiroïdisme</li>
                        <li className="ServiciosListaItem">síndrome de l'ovari poliquístic</li>
                    </ul>
                </div>
                <div className="ServiciosItem">
                    <strong className="ServiciosTitulo"> NUTRICIÓ EN MALALTIES CARDIOVASCULARS</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem">hipercolesterolèmia</li>
                        <li className="ServiciosListaItem">hipertrigliceridèmia</li>
                        <li className="ServiciosListaItem">hipertensió arterial</li>
                        <li className="ServiciosListaItem">aterosclerosi</li>
                    </ul>
                </div>
                <div className="ServiciosItem">
                    <strong className="ServiciosTitulo"> NUTRICIÓ EN ANÈMIES</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem">anèmia ferropènica</li>
                        <li className="ServiciosListaItem">anèmia meghaloblàstica</li>
                        <li className="ServiciosListaItem">anèmia perniciosa</li>
                    </ul>
                </div>
            </div>
            {/* Columna 3 */}
            <div className="ServiciosColumna">
                <div className="ServiciosItem">
                    <strong className="ServiciosTitulo"> NUTRICIÓ I SALUT ÒSSIA</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem">osteoporosi</li>
                    </ul>
                </div>
                <div className="ServiciosItem">
                    <strong className="ServiciosTitulo"> NUTRICIÓ EN NEOPLÀSIES</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem">càncer</li>
                    </ul>
                </div>
                <div className="ServiciosItem">
                    <strong className="ServiciosTitulo"> DIETES ESPECIALS</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem">dieta vegetariana i vegana</li>
                        <li className="ServiciosListaItem">dejuni intermitent</li>
                        <li className="ServiciosListaItem">dieta antiinflamatòria</li>
                    </ul>
                </div>
                <div className="ServiciosItem">
                    <strong className="ServiciosTitulo"> HÀBIT TABÀQUIC</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem">cessació tabàquica</li>
                    </ul>
                </div>
                <div className="ServiciosItem">
                    <strong className="ServiciosTitulo"> NUTRICIÓ I FÀRMACS</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem">implicacions nutricionals</li>
                    </ul>
                </div>
                <div className="ServiciosItem">
                    <strong className="ServiciosTitulo"> ATENCIÓ PSICOLÒGICA</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem">control d'impulsos</li>
                        <li className="ServiciosListaItem">motivació al canvi</li>
                        <li className="ServiciosListaItem">maneig de l'estrès</li>
                        <li className="ServiciosListaItem">trastorns d'ansietat</li>
                        <li className="ServiciosListaItem">autoestima i autoconcepte</li>
                        <li className="ServiciosListaItem">intel·ligència emocional</li>
                        <li className="ServiciosListaItem">higiene del son</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default ServiciosPanel;