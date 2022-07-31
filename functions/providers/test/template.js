function getTemplate(
    order_id,
    amount
){
    return `
        <html>
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>ชำระผ่านการโอน</title>
        </head>
        <body>
            <center>
                <h1>กรุณารอสักครู่...</h1>
            </center>
            <script type="text/javascript">
                setTimeout(function(){ window.open("test-process?order_id=${order_id}&amount=${amount}&transaction_id=${new Date().getTime()}", "_self"); }, 3000);
            </script>
        </body>
        </html>
    `;
}

module.exports.getTemplate = getTemplate;