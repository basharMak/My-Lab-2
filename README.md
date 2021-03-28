# My-Lab-2
This lab is like Udacity lab-2 but with another idea and more complicated


ul {
    list-style: none;
    display:block;
    margin: 0;
    padding: 0;
}

ul li {
  display: block;
  margin: 10px 0px;
  background-color: #ccc;
  color: #fff;
  line-height: 19px;
  border-radius: 0 10px 10px 0;
  width: 90px;
  padding: 5px 10px;
  text-align: center;
  transition: 0.3s;
  height: 20px;
  cursor: pointer;
}

ul li:hover {
  width: 100px;
  transform: translateX(5%);
  background-color: #aaa;
  color: white;
}

ul li.active {
    background-color: var(--main-color);
    color: white;
}

ul li a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 0px 0px;
    text-decoration: none;
    font-size: 17px;
}