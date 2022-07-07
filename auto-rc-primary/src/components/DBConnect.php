<?php
class DBConnect {
    private $server ="localhost";
    private $dbname = "PIMARY SCHOOL DB";
    private $user ="root";
    private $password = "";

    public function connect(){
        try{
            $conn = new PDO("mysql:host=" .$this->server .";dbname=" . $this->dname, $this->user, $this-pass);
            $conn->setAttribute(PDO::ATTER_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        }
        catch (\Exception $e) {
            echo "Database Error: " . $e->getMessage();
        }
    } 

}
?>