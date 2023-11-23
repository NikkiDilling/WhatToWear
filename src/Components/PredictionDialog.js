import React from 'react';
import { Text } from 'react-native';
import { Styles } from '../Styles/Stylesheet';
import { useState } from 'react';
import { Center, Button, Modal } from 'native-base';
import { useContext } from 'react';
import { Spinner, HStack, Heading} from "native-base";
import AppContext from '../AppContext';
import axios from 'axios';

const Loading = () => {
    return <HStack space={2} justifyContent="center">
        <Spinner accessibilityLabel="Loading posts" />
        <Heading color="primary.500" fontSize="md">
            Getting prediction
        </Heading>
    </HStack>;
};
const PredictionDialog = ({ prediction, showModal, setShowModal, resetForm }) => {
    console.log(prediction);
    const ctx = useContext(AppContext);
    var filteredWardrobe;
    if (prediction) {
        filteredWardrobe = Object.keys(prediction).map((key) => {
            const id = prediction[key];
            const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
            return ctx.wardrobe.find((item) => item.type === capitalizedKey && item.id === parseInt(id));
        }).filter(Boolean);

        console.log(filteredWardrobe);
    }

    const handleDiscardPrediction = () => {
        setShowModal(false);
        //resetting previous values
        filteredWardrobe == null;
        ctx.handleSetUserInput(null);
    }

    const handleAcceptPrediction = () => {

        const record = {
            ...prediction,
            min_temp: ctx.userInput.temp_min,
            max_temp: ctx.userInput.temp_max,
            mood: ctx.userInput.mood,
            activity: ctx.userInput.activity,
            precipitation: ctx.userInput.precipitation,
            average_temp: (ctx.userInput.temp_min + ctx.userInput.temp_max) / 2
        }


        axios.post('http://127.0.0.1:8000/savePrediction/', record)
            .then(response => {
                console.log(response);
               
            })
            .catch(e => console.log(e))
        setShowModal(false);
        //resetting previous values
        filteredWardrobe == null;
        ctx.handleSetUserInput(null);
    }

    return (
        <Center>
            <Modal isOpen={showModal} onClose={() => handleDiscardPrediction()}>
                {filteredWardrobe ? (
                    <Modal.Content maxWidth="400px">
                        <Modal.CloseButton />
                        <Modal.Header>Evaluate the prediction</Modal.Header>
                        <Modal.Body>
                            {filteredWardrobe.map((data, index) => (
                                <Text key={index}>{data.description}</Text>
                            ))}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button.Group space={2}>
                                <Button
                                    variant="ghost"
                                    colorScheme="blueGray"
                                    onPress={() => handleDiscardPrediction()}
                                >
                                    Discard
                                </Button>
                                <Button onPress={() => handleAcceptPrediction()}>
                                    Accept
                                </Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Content>
                ) : (
                    <Modal.Content maxWidth="400px">
                        <Modal.CloseButton />
                        <Modal.Header>Evaluate prediction</Modal.Header>
                        <Modal.Body>
                            <Loading />
                        </Modal.Body>

                    </Modal.Content>
                )}
            </Modal>
        </Center>
    );
};
export default PredictionDialog;