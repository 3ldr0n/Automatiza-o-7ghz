# Funcoes da biblioteca.

A ideia � relatar o funcionamento das principais fun��es da biblioteca.


## sky6ObjectInformation

### .Property(int num)

**Argumentos**: Um inteiro, que representa um certa informa��o do objeto. H� um total de 190 informa��es separadas nessa fun��o. A ideia � documentar cada uma aqui.

A fun��o em si n�o retorna nada, para pegar o valor desejado � necess�rio chamar o atributo ObjInfoPropOut;

54: Ascens�o direita\
55: Declina��o

Exemplo:
```javascript
// Printa a declina��o.
sky6ObjectInformation.Property(55);
print(sky6ObjectInformation.ObjInfoPropOut);
```

## sky6StarChart

### .Find(string nomeDoObjeto)

**Argumentos**: O nome do objeto a ser procurado.

Procura pelo objeto dado.

Exemplo:
```javascript
sky6StarChart.Find("Sun");
```
Exemplo com o sky6ObjectInformation.Property():

```javascript
// Procura pelo sol.
sky6StarChart.Find("Sun");
// Prepara a fun��o para retornar a declina��o.
sky6ObjectInformation.Property(55);

// Printa a declina��o.
Out = sky6ObjectInfomation.ObjInfoPropOut + "\n";
```

## sky6RASCOMTele

### .Connect()

**Argumentos**: Nenhum.

Faz a conex�o entre esse objeto do telesc�pio (RASCOMTele) e o TheSky6.

### .Disconnect()

**Argumentos**: Nenhum.

Termina a conex�o entre esse objeto do telesc�pio (RASCOMTele) e o TheSky6.

### .Abort()

**Argumentos**: Nenhum.

Para qualquer a��o do telesc�pio durante a opera��o em progresso.

### .SlewToRaDec(float TargetRa, float TargetDec, string targetObject)

**Argumentos**: A Ascens�o direita, a declina��o e o nome do objeto.

Faz o slew para a coordenada dada.

Exemplo:
```javscript
sky6RASCOMTele.Connect();

var targetObject = "Sun";
sky6StarChart.Find(targetObject);

sky6ObjectInformation.Property(54);
var targetRA = sky6ObjectInformation.ObjInfoPropOut;

sky6ObjectInformation.Property(55);
var targetDec = sky6ObjectInformation.ObjInfoPropOut;
sky6RASCOMTele.SlewToRaDec(targetRa, TargetDec, targetObject);
```

### .GetRaDec()

**Argumentos**: Nenhum.

Pega a declina��o e a ascens�o direita atual, e prepara os valores nas vari�veis dRa e dDec.

Exemplo:
```javascript
sky6RASCOMTele.Connect();
sky6RASCOMTele.getRaDec();

// Printa: "ascens�o direita | declina��o"
Out = String(sky6RASCOMTele.dRa) + " | " + String(sky6RASCOMTele.dDec);
```

### .Park()

**Argumentos**: Nenhum.

Faz o slew para a posi��o de parking, e finaliza a conex�o com o TheSky6.

### .ParkAndDoNotDisconnect()

**Argumentos**: Nenhum.

Essa fun��o tem quase o mesmo funcionamento que a fun��o de parking. A diferen�a � que essa fun��o n�o finaliza a conex�o entre o telesc�pio e o TheSky6. 
Para fazer outro Slew depois de usar � necess�rio chamar a fun��o '.Unpark'.

### .Unpark()

**Argumentos**: Nenhum.

Tira o telesc�pio da posi��o de parking.

### .dRa

A ascens�o direita atual.

### .dDec

A declina��o atual.

### .isParked

� zero se o telesc�pio estiver na posi��o de parking.
