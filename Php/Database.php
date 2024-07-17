<?php
    $conn = mysqli_connect('localhost','root','','restaurent_it');

    if (isset($_POST["submit"])) {
        if ($_SERVER["REQUEST_METHOD"] == "POST") {

            $FullName = isset($_POST["fullname"]) ? htmlspecialchars($_POST["fullname"]) :"";
            $People = isset($_POST["number_of_people"]) ? $_POST["number_of_people"] :"";
            $Date = isset($_POST["date"]) ? $_POST["date"] :"";
            $Time = isset($_POST["time"]) ? $_POST["time"] :"";
            
            $stmt = $conn->prepare("INSERT INTO client (fullname) VALUES (?)");
            $stmt->bind_param("s", $FullName);
        
            if ($stmt->execute()) {
                $idclient = $conn->insert_id; 
                $sql2 ="INSERT INTO `table` (number_of_people,`date`,`time`,idclient) values ('$People','$Date','$Time','$idclient')";
            
                if ($conn->query($sql2) === TRUE) {
                    header("location: ../index.html");
                }
            }
        }
    }

    ?> 