import numpy as np
import json
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout, Embedding, GlobalAveragePooling1D
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from sklearn.preprocessing import LabelEncoder

# Cargar los intents desde el archivo JSON
with open('intents.json') as file:
    data = json.load(file)
    intents = data['intents']

# Recopilar datos de entrenamiento
training_sentences = []
training_labels = []
labels = []
responses = []

for intent in intents:
    for pattern in intent['patterns']:
        training_sentences.append(pattern)
        training_labels.append(intent['tag'])
    responses.append(intent['responses'])

    if intent['tag'] not in labels:
        labels.append(intent['tag'])

# Codificar las etiquetas
label_encoder = LabelEncoder()
label_encoder.fit(training_labels)
training_labels = label_encoder.transform(training_labels)

vocab_size = 1000
embedding_dim = 16
max_length = 20
trunc_type = 'post'
padding_type = 'post'
oov_tok = "<OOV>"

# Tokenizar y secuenciar las oraciones de entrenamiento
tokenizer = Tokenizer(num_words=vocab_size, oov_token=oov_tok)
tokenizer.fit_on_texts(training_sentences)
word_index = tokenizer.word_index
sequences = tokenizer.texts_to_sequences(training_sentences)
padded = pad_sequences(sequences, maxlen=max_length, padding=padding_type, truncating=trunc_type)

# Crear el modelo
model = Sequential([
    Embedding(vocab_size, embedding_dim, input_length=max_length),
    GlobalAveragePooling1D(),
    Dense(16, activation='relu'),
    Dropout(0.5),
    Dense(len(labels), activation='softmax')
])

# Compilar el modelo
model.compile(loss='sparse_categorical_crossentropy',
              optimizer='adam',
              metrics=['accuracy'])

# Entrenar el modelo
num_epochs = 500
history = model.fit(padded, np.array(training_labels), epochs=num_epochs, verbose=1)

# Guardar el modelo
model.save('intent_model.h5')

print("Modelo entrenado y guardado exitosamente!")