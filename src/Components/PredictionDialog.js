import { View, Text, TouchableOpacity } from 'react-native';
import { Styles } from '../Styles/Stylesheet';
import { useState } from 'react';
import { Center, Button, Modal } from 'native-base';

const PredictionDialog = ({ prediction, showModal, setShowModal }) => {
    console.log(prediction);
    return (
        <Center>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>

                {prediction ? (
                    <Modal.Content maxWidth="400px">
                        <Modal.CloseButton />
                        <Modal.Header>Contact Us</Modal.Header>
                        <Modal.Body>
                        {Object.values(prediction).map(data=>{
                                return <span>{data}</span>
                            })}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button.Group space={2}>
                                <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                    setShowModal(false);
                                }}>
                                    Discard
                                </Button>
                                <Button onPress={() => {
                                    setShowModal(false);
                                }}>
                                    Accept
                                </Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Content>

                )
                    : (
                        <Modal.Content maxWidth="400px">
                            <Modal.CloseButton />
                            No prediction
                        </Modal.Content>
                    )}

            </Modal>
        </Center>

    );
};
export default PredictionDialog;

