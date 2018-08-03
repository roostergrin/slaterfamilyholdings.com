<?php

// wp api custom endpoints
add_action('rest_api_init', 'rg_register_routes');

function rg_register_routes () {
  register_rest_route('rg-mail/v1', 'foo', array(
    'methods' => WP_REST_Server::CREATABLE,
    'callback' => 'rg_serve_route'
  ));
}

// function for handling post request to new api route
function rg_serve_route () {
  require('wp-load.php');

  $data = json_decode(file_get_contents("php://input"), true);
  $from = 'info@wordpress.com';
  $to = 'michael.cheng@roostergrin.com';
  $subject = $data['subject'];
  $message = 'Form Submission by: ' . $data['name'] . "\r\n";
  $message .= 'Email: ' . $data['email'] . "\r\n";
  $message .= 'Message: ' . $data['message'] . "\r\n";
  $headers = '';

  $sent_message = wp_mail($to, $subject, $message, $headers);

  if ($sent_message) {
    echo 'Email has been received!';
  } else {
    echo 'Could not send email.';
  }
}
