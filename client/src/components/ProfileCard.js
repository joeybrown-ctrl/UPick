import { Card, Button, ButtonGroup } from 'react-bootstrap';

const ProfileCard = () => {

    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://placekitten.com/350/300" />
        <Card.Body>
            <Card.Title>Nova</Card.Title>
            <Card.Text>
                Profile Bio Goes Here
            </Card.Text>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary"><h6>Eats</h6>
                    <i className="fas fa-utensils"></i></Button>
                <Button variant="secondary"><h6>Drinks</h6>
                    <i className="fas fa-glass-cheers"></i></Button>
                <Button variant="secondary"><h6>Flicks</h6>
                    <i className="fas fa-video"></i></Button>
            </ButtonGroup>
        </Card.Body>
    </Card>;
};

export default ProfileCard;

// <div className="profile-card-4 text-center"><img src="https://placekitten.com/350/300"
//     className="img img-responsive" />
//     <div className="profile-content">
//         <div className="profile-name">Nova
//             <h6>@novathebengalcat</h6>
//         </div>
//         <div className="profile-description">Profile Bio goes here</div>
//     </div>
// </div>