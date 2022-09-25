jQuery(document).ready(function () { //docready
  //conversion functions
function MoextractEmails(text) {
    //return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    return text.match(/[a-z0-9_\-\+]+@[a-z0-9\-]+\.([a-z]{2,3})(?:\.[a-z]{2})?/i);
}

smartsupp('on', 'message_sent', function (message) {

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({'chat_user_message': message});

    var regex = /<(.*)>/g; // The actual regex
    var matches = MoextractEmails(message.content.text);
    if (matches !== null) {
        if (matches[0].includes(".com")) {
            matches[0] = matches[0].split('.com')[0];
            matches[0] = matches[0] + ".com";
        }
        console.log("mo conp");
        dataLayer.push({'chat_email': matches[0]});
        dataLayer.push({'event': 'chat_email_submitted'});
    }
});

smartsupp('on', 'message_received', function (message) {
    //console.log('received message:', message);
});

    jQuery("body").on("click", "#gform_submit_button_7", function (e) {
        $email = jQuery("#input_7_20").val();
        $phone = jQuery("#input_7_19").val();
        $name = jQuery("#input_7_21").val();

        window.dataLayer = window.dataLayer || [];
        if ($email) {
            dataLayer.push({'form_7_email': $email});
            dataLayer.push({'user_email': $email});
        }
        if ($phone) {
            dataLayer.push({'form_7_phone': $phone});
            dataLayer.push({'user_phone': $phone});
        }
        if ($name) {
            dataLayer.push({'form_7_name': $name});
            dataLayer.push({'user_name': $name});
        }
        dataLayer.push({'event': 'contact_7_submitted'});
    });

    jQuery("body").on("click", "#gform_submit_button_5", function (e) {
        $email = jQuery("#input_5_20").val();
        $phone = jQuery("#input_5_19").val();
        $name = jQuery("#input_5_21").val();

        window.dataLayer = window.dataLayer || [];
        if ($email) {
            dataLayer.push({'form_5_email': $email});
            dataLayer.push({'user_email': $email});
        }
        if ($phone) {
            dataLayer.push({'form_5_phone': $phone});
            dataLayer.push({'user_phone': $phone});
        }
        if ($name) {
            dataLayer.push({'form_5_name': $name});
            dataLayer.push({'user_name': $name});
        }
        dataLayer.push({'event': 'contact_5_submitted'});
    });
}); //docready