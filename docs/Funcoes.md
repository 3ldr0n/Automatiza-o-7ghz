# Funcoes da biblioteca.

A ideia � relatar o funcionamento das principais fun��es da biblioteca.


## sky6ObjectInformation

### .Property(int num)

Argumentos: Um inteiro, que representa um certa informa��o do objeto. H� um total de 190 informa��es separadas nessa fun��o. A ideia � documentar cada uma aqui.

A fun��o em si n�o retorna nada, para pegar o valor desejado � necess�rio chamar o atributo ObjInfoPropOut;

54: Ra\
55: Declina��o

## sky6StarChart

### .Find(string nomeDoObjeto)

Argumentos: O nome do objeto a ser procurado.

Procura pelo objeto dado.

Exemplo:
```javascript
sky6.StarChart.Find("Sun");
```
Exemplo com o sky6ObjectInformation.Property():

```javascript
// Procura pelo sol.
sky6.StarChart.Find("Sun");
// Prepara a fun��o para retornar a declina��o.
sky6ObjectInformation.Property(55);

// Printa a declina��o.
Out += sky6ObjectInfomation.ObjInfoPropOut + "\n";
```

Procura 

## sky6RASCOMTele


### .GetRaDec()
