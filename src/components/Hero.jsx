import React from "react";
import gsap from "gsap";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const [sidebar, setSidebar] = useState(false);
  useGSAP(() => {
    // GSAP animation to tween the width to 600px over 1 second
    gsap.fromTo(
      ".animate",
      { width: 0 },
      {
        width: 800,
        duration: 1,
        ease: "power2.inOut",
        delay: 0.5,
      }
    );
    gsap.to(".text", {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      delay: 1,
    });
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className="relative">
      <img
        src="https://centrefow.com/wp-content/uploads/2022/11/annie-spratt-QckxruozjRg-unsplash-1170x570.jpg"
        alt="UCan"
        className="h-screen object-cover overflow-hidden w-screen"
      />
      <div className="flex absolute inset-0 items-center justify-center">
        <div className="flex-col justify-center h-[500px] sm:w-[300px] w-[500px] bg-black opacity-80 rounded-lg shadow-2xl transform translate-z-10  skew-y-2  animate sm:px-15  ">
          <div className="opacity-0 text">
            <Navbar setSidebar={setSidebar} />
          </div>
          <div className="mt-36 ml-8">
            <h1 className="text-7xl text-white font-bold opacity-0 text">
              UCan
            </h1>
            <p className="text-white text-4xl opacity-0 text">
              Learn, Grow & Share
            </p>
            <Link to="/general">
              <button className="mt-4 px-4 py-2 bg-purple-600 text-white opacity-0 rounded-md text">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        {sidebar ? (
          <div className="absolute top-[250px] right-[50px] w-[70px] rounded-full shadow-2xl flex flex-col items-center justify-center z-10 opacity-100 transition-opacity duration-500 ">
            <a href="https://github.com/Stev3-Joseph">
              <img
                src="https://banner2.cleanpng.com/20180824/jtl/kisspng-computer-icons-logo-portable-network-graphics-clip-icons-for-free-iconza-circle-social-5b7fe46b0bac53.1999041115351082030478.jpg"
                alt="git"
                className="rounded-full mb-4 h-10 hover:scale-110 transition-transform duration-200"
              />
            </a>
            <a href="https://x.com/SteveJosep65438">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFRgWFhYZGBgaHBocGhgaGholHBgcHxwaHhwZHB4cIS4lHB4rIRoaJjgnKy8xNTU1GiQ7QDszPy40NTEBDAwMBgYGEAYGEDEdFh0xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEBAQACAwEAAAAAAAAAAAAAAQIFBwMGCAT/xABBEAABAgQEBAUCAggEBQUAAAABAAIDERIxBCFBYSIyUYEFBkJxoQcTYpEUI1JywdHh8EOCorEWJFST8RUzY5Ky/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO3A0g1G381X8VtOqgeSaTa2+SruC2vVALsqdbIzhvr0Qtyq1vsjeO+nRBCwk1aXVe6rIfKheQadLbqubTmPbNBWvDRI3WWMLTM2WmsDszfZZa8uyPwgPbVmPbNaLwRTrZZc6nIe+apYAKtb7IDOG+vRRzCTULXVbx306KF5Bp0tugrzVkPfNVrg0SN1HNpzHtmjW1Zn4QRrC0zNkeKsxp1Rry4yNtkcachr1QarEqdZS7qMFN9eiUCVWt9pow1X06II5hcahZac6rIe6y55aaRb5Vc2nMe2aCsNOR98llrC0zNlWtqzPtko15caTb5yQV4qtp1VDxKnW3dZdwW16rQYJVa32QZYKcz8I5hcZiyNNWR06I55aZC26DTnBwkFGGnI++SFlOY+Ua2rM+2SDVYUT7YRAcRLLm+d1IeXN2mlEuKe8vdOfaSAJzn6fhImfL3klXp7T/onJvNBQRL8XzNSHlzW3SifF3klVeVpZoI8EnhnLZaeQRw32Urp4ZTSininNBWEDmvusCc5mdPxJaprztLJK58MtpoETPl7yVaRLPm+Zqcm8/4f+Uonxd5eyCQ5g8Vt+qPBJ4bbK1V5W1SunK6CvIlw32upDy5vlKKc5z2SVedpIM5znnKfaS1Ez5e8kr9Mtp/CSo3mgrCJZ8299lGAg8Vt+qUVcVtvZKqsraoI+ZPDbZaeRLLm2vupVTlfVKKeKc9vdAh5c3aaznOecp9pLUq9pJX6ZbTQImfL3kqwgDivvdSVGd5pRVnOWyCMBB4py3SJMnhtt1VrqyslVGV9UCR3RWtEGQSTI8qROHl7yWqwRTrbbJRvBfXogECU/V8/kkPPm7TUpzq0vuq7jtp1QQuM5emfwrEAHLfZWsAU622WWtpzOuWSDTGgibr7rLHEmTrbo5hdmLbrTnh2Q+UGYhly22Wi0SmOb5mo11OR98lAwg1aX3QWHnOrtNQuIMhy/wAFXcdtOv8AeyoeAKdbIEQADhvsjGgibr7rLGluZ9slmLImcw394yQaa4kydZWIZcvws/fa/haQT7jT2WmmnI69EFpEp+qU95+yzD4ubtNWgzq0vujjVbTqgj3EGQstPAAm2+yNeGik3/moxlOZ9skFhgETdfdZa4kyNlXsqzHtmq54cKRf+SDMTh5e8loNEp+qU95qNNN9eiUGdWl90EhmrmtujnEGTbKuNWQ06qteGiRvsgPaAJtvspDAPNfdRjC3M/CObVmPbNBukKKUIgrmgCoX/mozivp0Ua0g1GysTitpdBKs6dLKv4ba9UJyp9X96pD4b62QUNBFWt1lhqyPwhYZ1aTn2ViGrJqCPeWmQstOYGiYujHBok66yxpaZusgrBVmfbJQPJNOll4PEcYyGx0V72tY0Tc9xkG/mulPO31Vix5wcGXQYVjEtEiC2X7Dfbi3GYQdneZfO+CwE2viVxNYTJOeOgdmA2/qIXV/jn1gxUQkYeGyANHO437HiAYPak+66zc4kzOZPysoOc8Q8246OSYmKjOn6Q9zW/8A1bJvwuFc4kzJmTmSdVlEBctgvMeMgkfbxUZsrARHU92kyPcLiUQdjeDfV7HQpNjBmIbrUKXy6BzBId2ldleXPqRgcVJoeYMU5URZAOPRr+V2ZyEwT0XzeiD7EawOFRusscXZH3yXzx5N+o+IwZayKXR8OJCgnihjqxx6D0nLLKV1314V4xAxkJsWA8PYemRadWkGzhMZFB+17qTIe+a05gaKhf8AmkNwaJG6yxhBmbIKwVX06KVmdOllYnFy6K1CVOspd0EeKcxr1VawOFRupDFPMo9hcZiyAx5dkbbI91OQ981p7g4SbdIbg3I3QStFqoKIMh8+HtP2VPBbOarpSylVtfdSH+LtP+qBT6u8kHHfKSZ1fh+Eifh7y/oglcuHtNUtozGc8lRKWlXzNZh/itv/AFQUMq4rL8+NxzGQ3viuDGMaXOcbNA1/ovO+c+GctrLoz6webvvxTg4J/VQj+sLZSiRBpldrLS/an0BQev8AnzzpE8QiFrSWYZh/Vw+ulb5XeelmjIak+oIiAiIgIiICIiAiIgL2Dyj5pj+HRhFhGbTIRIRPDEb0PRw0dcbgkH19EH1l4B4tCx0FmIhOm12UvU0i7HDRwP8AMZELkQ+rh/vJfOH0283HAYgNe4/o8UhsQaNNmxBu3XqJ6gL6PLmls2yJMpEa+0kAmi2c0o9XeSQ/xdpqZz1pn2l/JBQa8jlJQvp4bqvl6e8lWSlxSnvdBKKc7oG1ZnLRRk58U5b2ViTnw226oLQime6IFEuLvL3Q8e0lGuJMjZWJw8ut0Cr09poODeaEZVer+9Eh8XNpZBKJ8XeSpdXlaWahcZ06Tl2ViCnNqD1rz/5h/wDT8FEe0yiO4IR/G8HiH7oDndh1XzG5xJmcyuzPrd4yYmKh4cHKCypw/G/PMbMDJfvFdYoC5vyp5hi4DEMjw85ZPbPKIw8zT+UwdCAVwiIPrzwbxSFioLI8F1THiYOo6tcNHAzBHULjvE/OGBw8Qwo8dsOI2U2uDpyImCOHMbhdJfS3zocBG+1FP/LRXCqf+G/ICINrB20j6ZHtT6leTW+IwK4QH6RDBMMiX6xtzCJtI3aTY9ASg/R578rQ/FMKDDLfutFcCIJSdMA0kj0uEs9DI6SPzXiIDob3Me0tewlrmm7XAyIO4K7b+kPnMw3f+n4hxAJIgF2RY+ecF07TPLOxmNQByP1i8lfdacdAbxsH69oHOwD/ANwfiaBn1aPw5h0avPg8K+K9sOG0ue8hrWtu4mwC8cNhJAAJJyAFydJL6B+l/kIYJgxMds8Q9uTT/gNPpH4yOY6WGsw5X6eeSmeHQZuk7ERAPuP0aNIbPwjU+o59AOC+qvn0YVrsJh3fr3CUR4OcFpFgdHkHsDO5C5b6k+eG+HQvtwyHYmIOBt/ttt9xw/OQNyOgK+co8Vz3Oe5xc5xJc4mZcSZkkm5JzQeJERAX0F9HvMH6RhPtvdOJhpM3dDM6D2kW+zB1Xz6vc/pT4t+j+IwgTJkacF29cqP9YZ8oPpAivaSV+ntNInDyqholVrKfdBAKM7zULKuKysM1cyj3Fpk2yC11ZWQGjK+qr2hom26QwHZm6BWitIUQC8EUi9vyUZw316K0ACrW+2ajeO+nRBKc6tL7qv4radVKs6dLbqu4LZz6oKHgCnWyyxtOZ1yyVomKtb7LJiTBJ9IJ/JB8tec8cY+OxMQmdUV4H7rXFrf9LQuDWnEkzOZKygIiIC7s+jvnasNwEd3E0f8ALvJ5mj/CO4HLsCNBPpNeWFFc1wc0lrmkEOBILSDMEEZgg6oO4frD5LIJ8QwzSCCDHa3TpGbK2lXZ37RXtH0v85jxCB9qKR+kwhJ8/wDEZYRAOtg7fPKoBfo+nfm5niWHLYlP32ANisIEngiQeBq12YI0MxaU+sPOXgUbwTGsxOFJEJzi6GSCWtPrgP6gicp5lus2koOyfBfprhsPjn4sZtnODClwwXHmd+KR5f2Z6kAjlPPHm6F4bArdJ0V8xChzzc7qejBMTPsLlfu8rePwsfh2R4Rvk5s82PEqmO3E+4IOq+fvqhBxbfEIhxRqJzhuE6PtTNIaDYDMEftVXnMh614n4hExEV8aK4ue8zc46noOgAkANAAF+NEQEREBeXDxnMc17TJzSHNPQgzB/MLxIg+vsFiA5jX6Pa1wl0IBH+68lBnVpdcL5INfh+Enph4Qy2Y0fwXNVmdOlt0Feashp1Va8NFJuoRTmNeqNZVmUEYwtzPwj21Zj2zRry7I/CrnU5D3zQKEVrRBloM5nl+NlYmfL3klc+HtP2Tk3mgTEper5/NIeXN2mlPq7y/qnPtJBDOc86fiSmJbU0htyCMtwtVy4ZbTSmjO88kHx4i5bzRg/s4zEw5SoixABtUafiRXEoCIiAiLk/APBY2NjMgQW1Pcbnla3Vzjo0f0EyQEHsH0uwWLfj4bsKaaCDFeZ0CGTxNcPVUMgLzkcpTH0N474RCxkB8CKJteL6tPpcCbOBzC/L5T8uQfD4DYMITN3vI4ojtXH+A0C9N8e+q0LD45kBgD8O0lseKJkhxy4JXDdbzzAtmHo/gfiEfy/wCIugxpmC4gRJAyewzojMHUZ5fvNvmO2PO3lqF4rhAWFpeG14eKDlxAGUx6HCU+x0Xj8/eVIfimFFBH3WiuBEyk6YBpJHpcJZ6GR2Pon0l83uw8Q+HYoloqLYRfkYcSoh0J07AunLo6Y9WQdUYvCvhPdDe0tewlrmm7SDIgrwLvb6v+SfvsONw7f1rB+uaLxGAc+7mgd2/ugHolAREQERbhsLiABMkgADUnIBB9R+SmEeH4MD/p4ZMt2NP8VzwIlL1S7zX5vDsOMPChwgMmMYwbBjQ0f7L9FHqnvJAZlzW3UeCTwzltZWdeVpJXTw33QV5BHDfZRhA5r7pRTndKa87aINTGyifb3RAcBKY5vlSHnzdpqBhBq0v+aruO2UuqACZy9PwkTLl7ySrKnW2yN4L69EFAEp+r5mswzPmtuhYSatL7qudVkPfNB0F9a/Cfs44RmjgjsDp6Vskxw/IMP+Zdcr6Q+qXgH6VgXhonFgn7rJXcADW0ambZmWpa1fN6AiLyQoZeQ1oLnOIAABJJOQAAuSg8/h+BiR4jIUJpc95DWtFyT/sNSTkAJr6U8g+T2eHQKcnR3gGLEGp/YbP0t0632HF/TLyKMBD+9GaDiYgzsftNPoaf2v2iPYZCZfU7z0MBD+zBcDiogy1+y0+sj9o+kH3OQkQ4n6s+ffsh2Cwz/wBa4SjRGnOG0+hp0eRc6Dc5dFLyRIhcS5xJJJJJMySbkk3JXjQdwfR3zvQW4GO7hcf+Xc70uP8AhE9CeXeY1AHJfWDyX91px0Bv6xo/XNF3sAyiCXqaBn1aPw59IMcQQQSCMwRcHqF9FfS/zoMfB+1FI/SYQ4//AJGWEQDrmA7fPKoBBj6WedP06D9iMf8AmYTRMm8VmQET94ZB28jrIddfVbyT+hRf0iA2WGiHlFoTzmWS0abt6ZjKQn2vgfp3gYGIGIgsfDiNcXNpe4NE5zaG2pkSJWkZL2PxXw+HiIT4MVocyI0tc09Oo6EGRB0IBQfICL2Dzj5aieH4l0F8y3mhxNIjNDsRYjQjpIr19AXtX028KOJ8QgNlNrHfdfs2HxCexdS3/MvVV3t9FPLxgYd2MeJOjcLAbiG0nO3qdn7NaUHZrM+btNSZnL0/ElXiq2nVWsSp1tsgkTLlvsqwAibr7qNFOZ16KOYXZi26AwknitukQkHhtt1VL6sh8o11OR98kCZ/sIrWiDLXEmk2/krE4baqucCKRdSHw31QCMqtUh8V9EA4qtEicVtEELyDTpZV7acwqHACnWUu6zDFObkGmMDhM3Xzr9UPKpwWIMVglAjEuZIZQ33dD26t2y9JX0Q9hcZiy/F454ZBxkB8CIKmvHdpFnNJs4HMIPkpfoweLfBe18NzmPbm1zTJwMiJgi2RXL+bvLEbw6OYUUTaZmHEA4Yjeo6OGU26HqCCeAQc9/xn4j/1uI/7r/5riMXinxXuiRHOe9xmXOJLnHqSbrwIgIiIC/VgcdEgPESE90N4nJzHEOExIyI6gyX5UQc9/wAZ+I/9biP+6/8Amn/GfiP/AFuI/wC6/wDmuBRByXifjmJxIaI8eJFDSS2t5dSTeU7TkPyXGouS8D8HjYyK2DBZU935Nbq5x0aOvbMkBBynkXyw/wARxTYUiIbZOivHpYNJ/tOsPzsCvpfCw2sa2ExoaxoDWtaJBrWiTQOgAAXDeUfK8PAYcQoXE45xIhEi9+plo0WA0HUzJ9gc4EUi6CRDRbVUMEqtZT7qQ+G+qlJnVpOfZBWGrI6KPeWmQsrENWQVY4NEjdAe0NExdRgqzPsoxpaZusj21GYsg3QFFKCiBRLi7y90HHfKSjZzznTvbZIn4e8v6IFWdOlpqngtnNUyl+L5Uh/i7TQKJirvJA6rI5SzUM560/ElYkvTfZBC+nhGapZTmM1WSlxSnvdZZOfFOW9kHH+N+CQMfCdCxDKmG0uZrtHtddrhP+BmCQugPOnkDEYBzngGLh55RGjNo6RAOQ72PWeS+kIk/TbZCARLIkiRHXqg+PEX0D5j+lOExFT4ROGiHPhE4bjuzKn/ACkDOxXWPjX008Rw8yIP3mD1wTVP/Lk//Sg9MReWPAcxxa9rmuF2uBBHuDmvEgIi2xhcQACScgAJk+wQYRe1eDeQPEMSRTh3MafXF4AN5O4nf5QV2X5Z+keHgkPxjzGcJEQxNsMe/qfn+6OoQdX+UfJuJ8RfKE2mGDxxnA0N6y/ad+EdROQzXf8A5S8rQMDD+3BbxOkXxTzRCOvRonk0ZD3JJ5qDAawBkNoYxoAa1oAa0DQAZALzPlLhvsghdTkM9ULKeL+80ZKXFffoo2c850722QUcd8pKV+nS01Yn4e8lQRLSqXef80EIpzGc0DKsypD/ABW3/qjpz4Zy2sgrX1ZHJRzqchnqtPlLhlPa6kOXqvv0QWtFZjZRBK58Pafsg4N5quaAJi6kPi5uyBT6u8kPHtJQHOn0/wB6qxOHl7oFcuHtNA2jO88lQ0Sn6r9/ZZhmq9kCirisqX1cNlHuIMm2WntDRNt0EBpyvqlEuLvJVgDhxXWQ4zkeX+CCnj2l/H/wlcuHtP3SJw8vfVVrQRM3QeDE4NjhKI1kRpype0Ef6priX+TcA/P9Dww2EJg//IC5uGS7J1ke4tMm2QcHD8oeHWGCw4PUw2H/AHC5TB4KFhxTDhQ2DpDY1oG0mhfqe0ATbdSGKuZBKPVPeSvPtJQOM5emcuysTh5e+qBXTw/PugbTnfRVrQRM3WWOLjI2QUsqztohfVw/Pso8lpk2y05oAmLoJybzSj1d5JD4ubtos1GcvTOXZBomvK0kD6eG+6RBTyqtaCJuuggh053QtrztooxxcZOskQlpkLINfb3RSZRBGsINRsq/itooHkmk2tvkq7gtr1QJ5U6ozhvqlOVWt9kbx306IIWEmrS6r3VZBSsg06W3Vc2nMe2aCteGiRussYWmZstNYHcRvssteXZH4QV7aswqXAinWyjnU5D3zVLABVrfZBGcN9VCwk1aXVbx306f3shfI06W3QV5qyHujHBokbqObTmPbNGtqzPwgy1haajZaeKsxoo15cZG2yrjTkNeqC1iVOspd1IYpvqrQJVa32UYar6dEEcwuNQstPdUJD3WXPLTSLfzVc2nMe2aCscG5G91lrC01GyrW1Zn2yUDyTSbfOSCxBVbRUPEqdZSUeaba9VaBKrW+yCMFOZ1WXMLjULKtNWR06I55bkLboNPcHCQujDTkfdCwNzHyo1tWZ9skGqworQFEBxBEhzfO6kPLm7TSiXF3l7pz7SQADOfp+PySJny95JV6e0/6JybzQUESl6vmakMEc1t0onxd5JVXlaWaCPaSZttstPIIk2+yldPDdKKeK6BDkOa+6gBnM8vxJWmvO0skrnwy2mgRM+XvJVpEpHm+Zqcm8/4f+UonxT3l7IEMEc1t+qjwSZttsrVXlbVK6croK8giTb7KQ8ub5Qsp4r7JKvO0kEAM5+mfaSsTPl7ySv0y2n8JKjeaCtIAkbrMMEHiturRVxTlt7JVVlbVBHgk8NtlpxBEhdSqnK+qUU8Xx7oEPLm7TUkZz9M+0lZV7SSv0y2mgRM+X4VYQBJ191JUZ3mlFWc5bIIwEHituq8Enhtt1SurKyVUZX1QJFFa0QaicvYLGF17KogyOfuf9lcVp3VRBocvYrx4a59lEQSPzLzYjl/JEQTDWPuvEzn7lEQbxWnf+C2zl7FEQePDX7fyUxHN2REHmj8v5LGGsURB4xz9/4reK0VRBuFy/mvDhubsoiC4nm7fzXli8v5fwREGcNqvGefuiIPJibBbgcv5oiDwYfmWsTfsiIIiIg//9k="
                alt="x"
                className="rounded-full mb-4 h-10 hover:scale-110 transition-transform duration-200"
              />
            </a>
            <a href="https://www.instagram.com/steve.joseph21/?next=%2F">
              <img
                src="https://static.vecteezy.com/system/resources/previews/042/387/654/non_2x/instagram-button-icon-set-instagram-screen-social-media-and-social-network-interface-template-stories-user-button-symbol-sign-logo-stories-liked-editorial-free-png.png"
                alt="insta"
                className="rounded-full mb-4 hover:scale-110 transition-transform duration-200"
              />
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Hero;
