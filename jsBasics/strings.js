let sentence = "The quick brown fox jump over the lazy dog"
sentence.length

sentence.startsWith("The")
sentence.startsWith("the")
sentence.toLocaleLowerCase().startsWith("the")

sentence.endsWith("dog")
sentence.endsWith("lazy")
sentence.includes("fox")
sentence.indexOf("fox")

sentence[0]
sentence[16]
sentence += ". If the dog barket was it really lazy?"

sentence.indexOf("dog")
sentence.indexOf("dog", 41)
sentence.indexOf("dog", 42)
sentence.substring(53)

sentence.slice(53, 56)
sentence.slice(-5, -1)
sentence.substring(-5, -1)

sentence.substring(0, 0)
