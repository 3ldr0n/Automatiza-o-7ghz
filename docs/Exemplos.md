# Exemplos

## Funcionamento da rotina principal.

O c�digo est� dentro de um while que confirma se o telesc�pio est� conectado com o TheSkyX. A cada vez que ele � rodado a hora, o minuto e o segundo s�o salvos em tr�s vari�veis para checar o hor�rio.\
Antes de come�ar o loop s�o declaradas tr�s vari�veis to tipo booleano com o valor false para a confirma��o do processo de inicializa��o, de flip e de desligamento. No in�cio de cada processo o valor da vari�vel em quest�o � mudado para true. Desse modo n�o h� a possibilidade do processo ser inicializado novamente.

## Pegando a ascens�o direita e a declina��o do objeto para fazer o slew.

```javascript
// Declara o objeto para ser encontrado e observado.
var targetObject = "Sun";

sky6RASCOMTele.Connect();
sky6StarChart.Find(targetObject);

// A propriedade 54 � a ascens�o direita.
sky6ObjectInformation.Property(54);
var targetRA = sky6ObjectInformation.ObjInfoPropOut;

// A propriedade 55 � a declina��o.
sky6ObjectInformation.Property(55);
var targetDec = sky6ObjectInformation.ObjInfoPropOut;

// Faz o Slew at� o objeto.
sky6RASCOMTele.SlewToRaDec(targetRa, TargetDec, targetObject);
```

Para pegar a ascens�o direta e a declina��o j� h� uma fun��o implementada no script principal, chamada getRADec:

```javascript
function getRADec(object) {
  sky6StarChart.Find(object);

  sky6ObjectInformation.Property(54);
  var targetRA = sky6ObjectInformation.ObjInfoPropOut;
  sky6ObjectInformation.Property(55);
  var targetDec = sky6ObjectInformation.ObjInfoPropOut;
  return {"ra": targetRA, "dec": targetDec};
}
```
Essa fun��o retorna um objeto com a ascens�o direita e a declina��o.

## Encontrando um objeto e pegando informa��es sobre ele.

No script principal h� uma fun��o j� declarada chamada Find, que j� faz isso.

```javascript
function Find(objectName)
{
  // N�mero de propriedades que um objeto tem.
  var propriedades = 189;
  var Out = "";
  // Acha o objeto dado.
  sky6StarChart.Find(objectName);

  for (var propriedade = 0;propriedade < propriedades;++propriedade)
  {
    if (sky6ObjectInformation.PropertyApplies(propriedade) != 0)
    {
      sky6ObjectInformation.Property(propriedade);

      Out += sky6ObjectInformation.ObjInfoPropOut + "|";
      // Prints out object info.
      print(Out);
    }
  }
}
```

Essa fun��o acha o objeto dado e pega todas as informa��es relacionadas a ele. Cada propriedade (informa��o) � representada por um n�mero, por exemplo o n�mero 54 representa a ascens�o direita. Ao chamar o m�todo .Property(), ele prepara o resultado na vari�vel ObjInfoPropOut, e pode ser "printado".
