# Exemplos

## Pegando a ascens�o direita e a declina��o do objeto para fazer o slew.

```javascript
var targetObject = "Sun";

sky6RASCOMTele.Connect();
sky6StarChart.Find(targetObject);

sky6RASCOMTele.SlewToRaDec(targetRa, TargetDec, targetObject);
```
