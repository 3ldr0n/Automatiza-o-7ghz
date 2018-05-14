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

sky6RASCOMTele.SlewToRaDec(targetRa, TargetDec, targetObject);
```
