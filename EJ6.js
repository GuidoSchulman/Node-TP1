let url = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
console.log(url)

try {
    function parsearUrl(url){
        let urrl = new URL (url)
        const objeto ={
            host:urrl.host,
            pathname:urrl.pathname,
            parametros: urrl.searchParams,
        }
        return objeto;
    }
    
  } catch (error) {
    console.log(error);
   
  }
  
