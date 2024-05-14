import sys
import json
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences
import os

# Cargar el modelo entrenado
model = load_model('intent_model.h5')

# Cargar intents desde el archivo JSON
with open('intents.json') as file:
    intents = json.load(file)['intents']

# Definir parámetros
max_len = 20
oov_tok = "<OOV>"

# Función para procesar el mensaje del usuario y generar una respuesta
def get_response(message):
    # Tokenizar el mensaje del usuario
    sequence = [word for word in message.lower().split()]
    # Mapear palabras a números enteros utilizando los datos de intents.json
    word_index = {word: idx for idx, word in enumerate(sequence)}
    # Asegurar que la secuencia tenga la misma longitud máxima
    sequence = [word_index.get(word, 0) for word in sequence]
    sequence = pad_sequences([sequence], maxlen=max_len, padding='post')
    # Predecir la etiqueta del intent
    prediction = model.predict(sequence)[0]
    # Obtener el índice de la etiqueta con la probabilidad más alta
    tag_index = np.argmax(prediction)
    # Obtener la etiqueta correspondiente
    tag = intents[tag_index]['tag']
    # Obtener una respuesta aleatoria asociada con la etiqueta
    responses = intents[tag_index]['responses']
    response = np.random.choice(responses)
    return response

# Función para enviar el mensaje del usuario y obtener la respuesta del chatbot
def send_message(message):
    print("You:", message)
    response = get_response(message)
    print("Bot:", response)

# Bucle principal para interactuar con el chatbot
def main():
    print("Bienvenido al Chatbot. Ingresa 'salir' para terminar la conversación.")
    while True:
        message = input("Tú: ")
        if message.lower() == 'salir':
            print("¡Hasta luego!")
            break
        send_message(message)

if __name__ == "__main__":
    main()