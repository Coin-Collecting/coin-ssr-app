import React from 'react';
import { Link } from 'react-router';

class Issues extends React.Component {
  render() {
    return (
      <div className="issues-container">
        <nav>
          <ul>
            <li><Link to="/collection/1+2+3+4+5" activeClassName={'active'}>Half Cent</Link></li>

            <li><Link to="/collection/6+7+8+9+10+11+12" activeClassName={'active'}>Large Cent</Link></li>
            <li><Link to="/collection/13+14+15+16" activeClassName={'active'}>Indian Head Cent</Link></li>
            <li><Link to="/collection/17+18+19+20+21+22+23+24+25+26+27" activeClassName={'active'}>Lincoln Cent</Link></li>

            <li><Link to="/collection/28" activeClassName={'active'}>2 Piece Cent</Link></li>

            <li><Link to="/collection/29+30+31" activeClassName={'active'}>3 Piece Cent (Silver)</Link></li>
            <li><Link to="/collection/32" activeClassName={'active'}>3 Piece Cent (Copper)</Link></li>

            <li><Link to="/collection/33+34+35+36" activeClassName={'active'}>Older Nickels</Link></li>
            <li><Link to="/collection/37+38+39+40+41+42+43" activeClassName={'active'}>Seated Liberty Nickels</Link></li>
            <li><Link to="/collection/44+45" activeClassName={'active'}>Shield Nickels</Link></li>
            <li><Link to="/collection/46+47" activeClassName={'active'}>Libery (V) Nickels</Link></li>
            <li><Link to="/collection/48+49" activeClassName={'active'}>Buffalo Nickels</Link></li>
            <li><Link to="/collection/50+51+52+53+54+55+56+57" activeClassName={'active'}>Jefferson Nickels</Link></li>

            <li><Link to="/collection/58+59+60+61" activeClassName={'active'}>Older Dimes</Link></li>
            <li><Link to="/collection/62+63+64+65+66+67+68+69" activeClassName={'active'}>Seated Liberty Dimes</Link></li>
            <li><Link to="/collection/70" activeClassName={'active'}>Barber Dimes</Link></li>
            <li><Link to="/collection/71" activeClassName={'active'}>Mercury Dimes</Link></li>
            <li><Link to="/collection/72+73" activeClassName={'active'}>Roosevelt Dimes</Link></li>

            <li><Link to="/collection/74" activeClassName={'active'}>20 Cent Piece</Link></li>

            <li><Link to="/collection/75+76+77+78" activeClassName={'active'}>Older Quarters</Link></li>
            <li><Link to="/collection/79+80+81+82+83+84+85+86" activeClassName={'active'}>Seated Liberty Quarters</Link></li>
            <li><Link to="/collection/87" activeClassName={'active'}>Barber Quarters</Link></li>
            <li><Link to="/collection/88+89" activeClassName={'active'}>Standing Liberty Quarters</Link></li>
            <li><Link to="/collection/90+91+92+93" activeClassName={'active'}>Washington Quarters</Link></li>
            <li><Link to="/collection/94+95+96+97+98+99+100+101+102+103+104+105+106+107+108+109+110+111+112+113+114+115+116+117+118+119+120+121+122+123+124+125+126+127+128+129+130+131+132+133+134+135+136+137+138+139+140+141+142+143+144+145+146+147+148+149" activeClassName={'active'}>Statehood Quarters</Link></li>
            <li><Link to="/collection/150+151+152+153+154+155+156+157+158+159+160+161+162+163+164+165+166+167+168+169+170+171+172+173+174+175+176+177+178+179+180+181+182+183+184+185+186+187+188+189+190" activeClassName={'active'}>National Park Quarters</Link></li>

            <li><Link to="/collection/191+192+193+194+195" activeClassName={'active'}>Older Half Dollars</Link></li>
            <li><Link to="/collection/196+197+198+199+200+201+202+203" activeClassName={'active'}>Seated Liberty Half Dollar</Link></li>
            <li><Link to="/collection/204" activeClassName={'active'}>Barber Half Dollar</Link></li>
            <li><Link to="/collection/205+206" activeClassName={'active'}>Walking Liberty Half Dollar</Link></li>
            <li><Link to="/collection/207" activeClassName={'active'}>Franklin Half Dollar</Link></li>
            <li><Link to="/collection/208+209+210+211+212" activeClassName={'active'}>Kennedy Half Dollar</Link></li>

            <li><Link to="/collection/213+214+215+216+217" activeClassName={'active'}>Early Dollars</Link></li>
            <li><Link to="/collection/218+219" activeClassName={'active'}>Seated Liberty Dollar</Link></li>
            <li><Link to="/collection/220" activeClassName={'active'}>Trade Dollar</Link></li>
            <li><Link to="/collection/221" activeClassName={'active'}>Morgan Dollar</Link></li>
            <li><Link to="/collection/222" activeClassName={'active'}>Peace Dollar</Link></li>
            <li><Link to="/collection/223+224+225+226" activeClassName={'active'}>Eisenhower Dollar</Link></li>
            <li><Link to="/collection/227" activeClassName={'active'}>Susan B. Anthony Dollar</Link></li>
            <li><Link to="/collection/228+237+242+247+252+257+262+267+272+276" activeClassName={'active'}>Sacagawea Dollar</Link></li>
            <li><Link to="/collection/229+230+231+232+233+234+235+236+238+239+240+241+243+244+245+246+248+249+250+251+253+254+255+256+258+259+260+261+263+264+265+266+268+269+270+271+273+274+275" activeClassName={'active'}>Presidential Dollar</Link></li>

          </ul>
        </nav>
        { this.props.children }
      </div>
    );
  }
}

export default Issues;
