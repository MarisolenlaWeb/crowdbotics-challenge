$('#change').click(function() {

  if ( $(this).hasClass( "active" ) ) {
    $(this).text( "Neighborhood guides by local creatives" );
  } else {
    $(this).text( "The one place for neighborhood material" );
  }
});