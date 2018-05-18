/**
 * Author: Edison Neto (ednetoali@gmail.com)
 *
 * MIT License

 * Copyright (c) 2018 Edison Aguiar de Souza Neto

 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

sky6RASCOMTele.Connect();

/**
 * Confirma se o script tem conex�o com o telesc�pio.
 *
 * @return boolean false se n�o estiver conectado.
 *                  true se estiver conectado.
 */
function Sky6IsConnected()
{
  if (sky6RASCOMTele.isConnected == 0)
  {
    print("Not connected");
    sky6RASCOMTele.Abort();
    return false;
  }
  return true;
}

/**
 * Faz o Find no objeto dado, e printa todas as propriedades (informa��es)
 * daquele objeto.
 *
 * @param objectName Nome do objeto a ser encontrado.
 */
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

/**
 * 'Liga' o tracking para um lugar espec�fico, ou desliga o tracking.
 *
 * @param IOn bin�rio(0 ou 1) O n�mero que desliga ou liga o tracking.
 *             0 - desliga
 *             1 - liga
 *
 * @param IIgnoreRates bin�rio(0 ou 1) O n�mero que especif�ca se � para o 
 *                                      telesc�pio usar a taxa de tracking atual.
 *             0 - Ignora os valores de dRaRate e dDecRate
 *             1 - Usa os valores de dRaRate e dDecRate
 *
 * @param dRaRate double Especif�ca a ascens�o direita a ser usada. S� � utilizada se 
 *                 IIgnoreRates for igual � 1.
 *
 * @param dDecRate double Especif�ca a declina��o a ser usada. S� � utilizada se
 *                 IIgnoreRates for igual � 1.
 */
function SetTelescopeTracking(IOn, IIgnoreRates,
                              dRaRate="undefined", dDecRate="undefined")
{
  sky6RASCOMTele.Connect();

  if (Sky6IsConnected())
  {
    if (IIgnoreRates == 1)
    {
      sky6RASCOMTele.SetTracking(IOn, IIgnoreRates);
    }
    else
    {
      sky6RASCOMTele.SetTracking(IOn, IIgnoreRates, dRaRate, dDecRate);
    }
    var Out = "TheSkyX Build " + Application.build;
    Out += "RA Rate = " + sky6RASCOMTele.dRaTrackingRate;
    Out += "Dec Rate = " + sky6RASCOMTele.dDecTrackingRate;
    print(Out);
  }
}

/**
 * Confirma se o slew est� ocorrendo ou n�o.
 *
 * @return boolean true se estiver fazendo o slew, e false se n�o estiver
 *         fazendo o slew.
 */
function MountIsSlewing()
{
  sky6RASCOMTele.Connect();

  if (Sky6IsConnected())
  {
    // IsSlewComplete retorna zero se o telesc�pio estiver fazendo o slew.
    if (sky6RASCOMTele.IsSlewComplete != 0)
    {
      print("Not Slewing");
      return false;
    }
    else
    {
      print("Slewing");
      return true;
    }
  }
  else
  {
    print("Telescope not connected.");
  }
}

/**
 * Faz o slew para um determinado objeto dados sua ascens�o direita e declina��o.
 *
 * @param dRa ascens�o direita.
 * @param dDec declina��o.
 * @param targetObjecto Objeto para fazer o slew.
 *
 * @return boolean true se tudo tiver ocorrido normalmente.
 */
function SlewTelescopeTo(dRa, dDec, targetObject)
{
  if (Sky6IsConnected())
  {
     sky6RASCOMTele.SlewToRaDec(dRa, dDec, targetObject);
     return true;
  }
  else
  {
    print("Telescope not connected.");
  }
}

/**
 * Leva o telesc�pio para a posi��o de parking.
 *
 * @return boolean true se tudo tiver ocorrido normalmente.
 */
function ParkTelescope()
{
  sky6RASCOMTele.Connect();

  if (Sky6IsConnected())
  {
    if (sky6RASCOMTele.isParked != 0) {
      sky6RASCOMTele.Park();
      print(parked);
      return true;
    }
  }
}

/**
 * Desconecta o SkyX do telesc�pio.
 */
function DisconnectTelescope()
{
  sky6RASCOMTele.Disconnect();
  sky6RASCOMTheSky.DisconnectTelescope();
} 

/**
 * Encontra o objeto dado e retorna um objeto com a ascens�o direita e
 * a declina��o.
 *
 * @param object Nome do objeto a ser encontrado.
 * @return Um objeto com a ascens�o (ra) e a declina��o (dec).
 */
function getRADec(object)
{
  sky6StarChart.Find(object);

  sky6ObjectInformation.Property(54);
  var targetRA = sky6ObjectInformation.ObjInfoPropOut;
  sky6ObjectInformation.Property(55);
  var targetDec = sky6ObjectInformation.ObjInfoPropOut;

  return {"ra": targetRA, "dec": targetDec};
}

// Vari�veis usadas para checar se os processos j� come�aram.
var started = false;
var flipped = false;
var turnedOff = false;

var start_time = 9;
var flip_time = 12;
var turn_off_time = 17;

while (true) {
  var time = new Date();
  var hour = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();

  if (sky6IsConnected())
  {
    var horario = String(hour) + ":" + String(minutes) + ":" + String(seconds);
    print(horario);
  
    if (hour == start_time && started == false)
    {
      started = true;
      // Slew somewhere.
      var propriedade = getRADec("Sun");
      SlewTelescopeTo(propriedade.ra, propriedade.dec, "Sun");
      print("Ligou �s " + horario);
    }
    else if (hour == flip_time && flipped == false)
    {
      flipped = true;
      // Flip.
      var propriedade = getRADec("Sun");
      SlewTelescopeTo(propriedade.ra, propriedade.dec, "Sun");
      print("Fez o flip �s " + horario);
    }
    else if (hour == turn_off_time && turnedOff == false)
    {
      turnedOff = true;
      SetTelescopeTracking(0, 1);
      ParkTelescope();
      DisconnectTelescope();
      print("Desligado �s " + horario);
    }
  }
  else if (hour == start_time)
  {
    sky6RASCOMTele.Connect();
  }
}
