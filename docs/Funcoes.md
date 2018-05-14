# Funcoes da biblioteca.

A ideia � relatar o funcionamento das principais fun��es da biblioteca.


## sky6ObjectInformation

### .Property(int num)

**Argumentos**: Um inteiro, que representa um certa informa��o do objeto. H� um total de 190 informa��es separadas nessa fun��o. A ideia � documentar cada uma aqui.

A fun��o em si n�o retorna nada, para pegar o valor desejado � necess�rio chamar o atributo ObjInfoPropOut;

54: Ascens�o direita\
55: Declina��o

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

### .SlewToRaDec(float TargetRa, float TargetDec, string "TODO")

**Argumentos**: A Ascens�o direita, a declina��o e o string(TODO) da localiza��o.

Faz o slew para a coordenada dada.

Exemplo:
```javscript
sky6RASCOMTele.Connect();
```

### .GetRaDec()

**Argumentos**: Nenhum.

Pega a declina��o e a ascens�o direita, e prepara os valores nos atributos dRa e dDec.

Exemplo:
```javascript
sky6RASCOMTele.Connect();
sky6RASCOMTele.getRaDec();

// Printa "ascens�o direita | declina��o"
Out = String(sky6RASCOMTele.dRa) + " | " + String(sky6RASCOMTele.dDec);
```

### .dRa

A ascens�o direita atual.

### .dDec

A declina��o atual.
