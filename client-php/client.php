<?php

$albums = file_get_contents('http://localhost:3000/albums');
echo $albums;

$labels = file_get_contents('http://localhost:3000/labels');
echo $labels;


$members = file_get_contents('http://localhost:3000/members');
echo $members;


$concertTours = file_get_contents('http://localhost:3000/concertTours');
echo $concertTours;
