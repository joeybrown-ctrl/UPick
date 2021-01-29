// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Row, Col, Button, Image } from 'react-bootstrap';

// function FriendList() {

//     const [friends, setFriends] = useState([]);

//     useEffect(() => {

//         axios
//             .get('/api/users/')
//             .then(response => {
//                 show(response);
//             })
//             .catch(error => {
//                 show(error);
//             });

//     }, []);

//     function show(response) {
//         setFriends(
//             response.data
//         );
//     }

//     const styles = {

//         icon: {
//             width: '40px',
//             height: '40px'
//         },

//         iconCol: {
//             paddingRight: '40px'
//         },

//         friendBtn: {
//             textAlign: 'left',
//             backgroundColor: '#212f35',
//             color: '#f9f9f9c9',
//             border: '0 solid #FFD217'
//         },

//     };

//     return (
//         <div>
//             <Row>
//                 {friends.map(({ id, email }) => (
//                 <Col xs={1} style={styles.iconCol}>
//                     <Image style={styles.icon}src="./assets/friendicon.png" rounded></Image>
//                 </Col>
//                 <br></br>
//                 <Col >
//                         <Button key={id} block style={styles.friendBtn}>{email}</Button>    
//                 </Col>
//                 ))
//                 }
//             </Row>
//             <br></br>
//         </div>

//     );

// }

// export default FriendList;
