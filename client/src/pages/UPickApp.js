import HomeNav from '../components/HomeNav';
import JumboImage from '../components/JumboImage';

function UPickApp() {

    const styles= {
        root: {
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center'
        }
    };

    return(
        
        <div style={styles.root}>
            <div>
                <HomeNav/>
                <JumboImage/>
            </div>
        </div>    
    );
}

export default UPickApp;