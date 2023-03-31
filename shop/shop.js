c = 299
d = 1
function addshirt()
{       
        document.getElementById("sh1").value = d;
        document.getElementById("sh2").value = c;
        d=d+1;
        c=c+299;
}
function removeshirt()
{       c = document.getElementById("sh2").value
        d = document.getElementById("sh1").value
        d=d-1;
        c=c-299;
        if(d<=0)
        {
          document.getElementById("sh1").value = 0;
          d=1;
        }
        else
        {
          document.getElementById("sh1").value = d;
        }
        
        if(c<=0)
        {
          document.getElementById("sh2").value = 0;
          c=299;
        }
        else
        {
          document.getElementById("sh2").value = c;
        }

}
e = 499
f = 1
function addpant()
{       
        document.getElementById("pant1").value = f;
        document.getElementById("pant2").value = e;
        f=f+1;
        e=e+499;
}
function removepant()
{       e = document.getElementById("pant2").value
        f = document.getElementById("pant1").value
        f=f-1;
        e=e-499;
        if(f<=0)
        {
          document.getElementById("pant1").value = 0;
          f=1;
        }
        else
        {
          document.getElementById("pant1").value = f;
        }
        
        if(e<=0)
        {
          document.getElementById("pant2").value = 0;
          e=499;
        }
        else
        {
          document.getElementById("pant2").value = e;
        }
}
g = 399
h = 1
function addshoes()
{       
        document.getElementById("shoes1").value = h;
        document.getElementById("shoes2").value = g;
        h=h+1;
        g=g+399;
}
function removeshoes()
{       g = document.getElementById("shoes2").value
        h = document.getElementById("shoes1").value
        h=h-1;
        g=g-399;
        if(h<=0)
        {
          document.getElementById("shoes1").value = 0;
          h=1;
        }
        else
        {
          document.getElementById("shoes1").value = h;
        }
        
        if(g<=0)
        {
          document.getElementById("shoes2").value = 0;
          g=399;
        }
        else
        {
          document.getElementById("shoes2").value = g;
        }
}

function total()
{
         p = parseInt(document.getElementById("sh2").value)
         q = parseInt(document.getElementById("pant2").value)
         r = parseInt(document.getElementById("shoes2").value)
         s=p+q+r;
         document.getElementById("tot").value = s;
}
function display()
{       
        document.getElementById("amo").value = s;
        document.getElementById('jad').style.display = "block";
}
function cash()
{       
        document.getElementById('ka').style.display = "block";
}
function pay()
{
  z = document.getElementById("ca").value
  y=s-z;
  document.getElementById("ne").value = y;
  document.getElementById('ne').style.display = "block";
  document.getElementById('n').style.display = "block";

}