function myFunction() {
    x.classList.toggle("openNav");
}

/*burger*/
.burger {
    display: inline-block;
    cursor: pointer;
}

span {
    width: 35px;
    height: 5px;
    background-color: #E7DFDD;
    margin: 6px 0;
    transition: 0.4s;
}

.change span: {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px) ;
    transform: rotate(-45deg) translate(-9px, 6px) ;
}

.change span: {opacity: 0;}

.change span: {
    -webkit-transform: rotate(45deg) translate(-8px, -8px) ;
    transform: rotate(45deg) translate(-8px, -8px) ;
}
