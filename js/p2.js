 /**
  * En primer lugar, he definido sobre el div una función que se encargará de mostrar un
  * fondo verde en la sección de botones.
  **/
 $( ".switcher" )
 .hover(
  function ( ) {
    $( this )
    .addClass( 'hover' );
  }
  , function ( ) {
    $( this )
    .removeClass( "hover" );
  }
 );

 /**
  * En segundo lugar, he aplicado sobre los botones una clase para que los muestre escondidos
  * al cargar la página.
  **/
 $( ':button' )
 .addClass( "hidden" );

 /**
  * En tercer lugar, he aplicado sobre el div de los botones una función que esconderá los botones
  * al ser clicada.
  **/
 $( '.switcher' )
 .click(
  function ( ) {
    if ( $( ':button' )
      .hasClass( "hidden" ) ) {
      $( ':button' )
      .removeClass( "hidden" );
    } else {
      $( ':button' )
      .addClass( "hidden" );
    }
  }
 );

 /**
  * En cuarto lugar, he aplicado sobre los botones una función para que los muestre y no los 
  * esconda al ser clicado.
  **/
 $( ':button' )
 .click(
  function ( ) {
    $( this )
    .addClass( "hidden" )
  }
 );


 /**
  * En la siguiente sección, tratamos con el botón encargado de establecer el texto  
  * predeterminado.
  **/
 $( 'button:eq(0)' )
 .click(
  function ( ) {
    $( "main" )
    .removeClass( "narrow" );
    $( "main" )
    .removeClass( "large" )
    $( this )
    .addClass( "selected" );
    $( 'button:eq(1)' )
    .removeClass( "selected" );
    $( 'button:eq(2)' )
    .removeClass( "selected" );
  }
 );

 /**
  * En esta sección, tratamos con el botón encargado de establecer estrecho.  
  **/
 $( 'button:eq(1)' )
 .click(
  function ( ) {
    $( "main" )
    .removeClass( "large" );
    $( "main" )
    .addClass( "narrow" );
    $( this )
    .addClass( "selected" );
    $( 'button:eq(0)' )
    .removeClass( "selected" );
    $( 'button:eq(2)' )
    .removeClass( "selected" );
  }
 );

 /**
  * Y en esta sección, tratamos con el botón encargado de establecer la letra negra.
  **/
 $( 'button:eq(2)' )
 .click(
  function ( ) {
    $( "main" )
    .removeClass( "narrow" );
    $( "main" )
    .addClass( "large" );
    $( this )
    .addClass( "selected" );
    $( 'button:eq(0)' )
    .removeClass( "selected" );
    $( 'button:eq(1)' )
    .removeClass( "selected" );
  }
 );
