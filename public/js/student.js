// 获取selector中option的方式
let nameEle = document.getElementsByClassName('name')[0]
let genderEle = document.getElementsByClassName('gender')[0]
let ageEle = document.getElementsByClassName('age')[0]
let majorEle = document.getElementsByClassName('major')[0]
let sendBtn = document.getElementsByClassName('send')[0]
let select = document.getElementsByClassName('student-select')[0]

function getGender(){

  const index = genderEle.selectedIndex

  const gender = genderEle.options[index]

  return  gender.value
}

function getMajor(){

  const index = majorEle.selectedIndex

  const major = majorEle.options[index]

  return  major.value
}


sendBtn.onclick = function (){

  $.ajax({

    type:'post',
    url:'http://localhost:3000/student',
    data:{
      name:nameEle.value,
      gender:getGender(),
      age:ageEle.value,
      major:getMajor()
    },
    success:(result)=>{

      // result ==> { status : success , students:[]}
      if(result.status === 'success'){

        $('.student-list').html('')

        let html = ''

        result.students.forEach((item)=>{

          html+= `<div><span>${item.name} ${item.gender} ${item.age}岁 学习${item.major}</span></div>`
        })
        console.log(html)

        $('.student-list').html(html)
        // alert('存入成功')
      }else{

        alert(result.message)
      }
      
    }
  })
}

select.onchange = function (){

  const index = select.selectedIndex

  const gender = select.options[index]

  const value = gender.value

  $.ajax({
    type:'get',
    url:'http://localhost:3000/student/getStudents',
    data:{
      gender:value
    },
    success:(result)=>{

      console.log(result)

      $('.student-list').html('')

      let html = ''

      result.students.forEach((item)=>{

        html += `<div>
                  <span>${item.name} ${item.gender} ${item.age}岁 学习${item.major}</span>
                </div>`
      })

      console.log(html)

      $('.student-list').html(html)
    }
  })
}





