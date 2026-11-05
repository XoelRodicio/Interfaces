import Button from './Button.jsx'

export default function Toolbar({ onPelicula, onImaxe }) {
    return(
        <div>
            <Button onClick={onPelicula}>
                Reproducir película
            </Button>
            <Button onClick={onImaxe}>
                Ask teach
            </Button>
        </div>
    )
}
