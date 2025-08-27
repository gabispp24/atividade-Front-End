alturas = []

total_alturahomens = 0
total_homens = 0
total_feminino = 0

for i in range(15):
    print(f"\npessoas {i+1}:")
    genero = input("digite seu genero:").upper()
    altura = float(input("digite sua altura:"))

    alturas.append(altura)

    if genero == "M":
        total_homens += 1
        total_alturahomens += 1
    elif genero == "F":
        total_feminino +=1

menor = min(alturas)
maior = max(alturas)

if total_homens > 0:
    media_masculina = total_alturahomens / total_homens
else:
    media_masculina = 0

print("menor altura:", menor, "m")
print("maior altura:", maior, "m")
print("media de altura dos meninos:", media_masculina, "m")
print("quantidade feminina", total_feminino)