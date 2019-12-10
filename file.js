let city,
    prof,
    price;

    




$('.ChoiceProf').hide();
$('.ChoicePrice').hide();
$('.End').hide();
$(".x-drop-down__value").click(function(event) {
    toggleMenu();
    event.stopPropagation();
  });
  
  $('.b-drop-down__list-item').click(function() {
    $('.x-drop-down__value').html($(this).text());
    toggleMenu();
  });
  
  function toggleMenu() {
    let menu = $(".x-drop-down__dropped");
    if (!menu.hasClass('active')) {
      window.addEventListener('click', closeMenu);
    } else {
      window.removeEventListener('click', closeMenu);
    }
    menu.toggleClass("active");
  }
  
  function closeMenu() {
    $(".x-drop-down__dropped").removeClass("active")
  }
  
  $('.x-drop-down__dropped').click(function(event) {
    event.stopPropagation();
  });
  
  
  $('.x-input__field').on('input', function() { 
    let search = $(this).val();
    searchData(search);
  });
  
  function searchData(search) {
    let towns = $('.b-drop-down__list-item');
    towns.each(function() {
      if ($(this).text().indexOf(search) === -1) {
        $(this).addClass('item_hide');
      } else {
        $(this).removeClass('item_hide');
      }
    });
  }
                        $('.DaugavpilsProf').hide();
                        $('.RigaProf').hide();
                        $('.JelgavaProf').hide();
                        $('.RezekneProf').hide();
                        $('.VentspilsProf').hide();
    $('.step1').click(function(){
    if(city == 'Choice City'){
        alert('Choice City');
    }else{
        city = $('#city').html();
        $('.ChoiceCity').hide();
        $('.ChoiceProf').show();
        console.log(city+', step1')
        $('#prof').text('Choice Prof Direction');
        if(city == 'Daugavpils'){
            $('.DaugavpilsProf').show()
            }else{
            if(city == 'Riga'){
                $('.RigaProf').show()
                }else{
                    if(city == 'Jelgava'){
                        $('.JelgavaProf').show()
                        }else{
                            if(city == 'Rezekne'){
                                $('.RezekneProf').show()
                                }else{
                                    if(city == 'Ventspils'){
                                        $('.VentspilsProf').show()
                                    }
                                    }
                                }
                        }
                }
    }
  });


  $('.step2').click(function(){
            
            
      prof = $('#prof').html();
      if(prof == 'Choice Prof Direction'){
        alert('Choice Prof Direction');
      }else{
            $('.ChoiceProf').hide();
            $('.ChoicePrice').show();
            console.log(city+', '+prof+', step2')

      }
      $("#polzunok").slider({
        animate: "slow",
        range: true, 
        max: 15000,   
        values: [ 0, 7500 ],
        slide : function(event, ui) {    
            $("#result-polzunok").text( "from " + ui.values[ 0 ] + " to " + ui.values[ 1 ] );        
        }
    });
    $( "#result-polzunok" ).text("from " + $("#polzunok").slider("values", 0) + " to " + $("#polzunok").slider("values", 1));
  });

  



  $('.step3').click(function(){

               
  
    var price = $( "#polzunok" ).slider( "values", 1 );

    if(price == ''){
        alert('enter price');
    }else{
        $('.ChoicePrice').hide();
        $('.End').show();
        console.log(city+', '+prof+', ' +price+', step3')
    }
    
        if(city == 'Riga'){
            if(prof == 'Žurnālisms un masu mēdiji'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('Biznesa augstskola “Turība”');
                                    $(spanUni3).text('Jomas: Žurnālisms un masu mēdiji');
                                    $(spanUni2).text('Mācību veids: Pilna laika');
                                    $(spanUni1).text('Studiju maksa: 3000 EUR');
                                    $(spanUni).text('ERASMUS: mobilitātes programma paredz studijas citu Eiropas Savienības valstu augstskolās laika posmā no 3 mēnešiem līdz vienam gadam. Izmantojot ERASMUS+ studentu mobilitātes programmu, studentiem ir iespēja paplašināt redzesloku un dažādot zināšanas savā nozarē. Pieteikties var studenti, kuri vai nu nav līdz šim piedalījušies ERASMUS programmā vai ir piedalījušies ERASMUS mobilitātes programmā, bet kopējais dalības periods nepārsniedz 12 mēnešus (ieskaitot to, kurā students plāno doties), un, kuri ir pabeiguši vismaz vienu studiju gadu Biznesa augstskolā Turība. Kandidātu atlasē primāri tiek vērtētas studentu sekmes un svešvalodu zināšanas, kā arī studentu motivācija. Dubultā grāda studiju programmas ļauj kādu laiku studēt Biznesa augstskolā "Turība" un kādā no partneru augstskolām ārzemēs, lai saņemt grādu abās.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
            }else{
                if(prof == 'Management'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('University of economics and culture (EKA)');
                                    $(spanUni3).text('Direction: Management');
                                    $(spanUni2).text('Form of study: Full-time, Distance');
                                    $(spanUni1).text('Tuition: 1950 EUR (on Russian language), 2150 EUR (on Englsih language)');
                                    $(spanUni).text('ERASMUS: The mobility program provides for the training of students in higher educational institutions of other countries lasting from 3 months to one year. The purpose of this program is to improve students education and develop experience in studying abroad.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                }else{
                    if(prof == 'Business administration'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('BA SCHOOL OF BUSINESS AND FINANCE');
                                    $(spanUni3).text('Direction: Business administration');
                                    $(spanUni2).text('Form of study: Full-time, Distance');
                                    $(spanUni1).text('Tuition: 3510 EUR');
                                    $(spanUni).text('ERASMUS: School of Business and Finance has the right to issue state diplomas. The BA school annually organizes preparatory courses for schoolchildren and future students. The student hotel is located on the upper floors of the School. To get to the lectures, it remains only to use the elevator.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                    }else{
                        if(prof == 'Interior design'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('University of economics and culture (EKA)');
                                    $(spanUni3).text('Direction: Management');
                                    $(spanUni2).text('Form of study: Full-time');                                    
                                    $(spanUni).text('ERASMUS: The mobility program provides for the training of students in higher educational institutions of other countries lasting from 3 months to one year. The purpose of this program is to improve students education and develop experience in studying abroad.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                        }else{
                            if(prof == 'Dentistry'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('LATVIAN UNIVERSITY');
                                    $(spanUni3).text('Direction: Dentistry');
                                    $(spanUni2).text('Form of study: Full-time');
                                    $(spanUni1).text('Tuition: 12500 EUR')                                    
                                    $(spanUni).text('ERASMUS: The University of Latvia has retained its main goal - to be at the center of Latvian intellectual life by formulating new tasks and goals. Currently, new faculties and training programs have been created with the aim of improving the quality of research in research activities. Over 90 years of its existence, the University of Latvia has become one of the leading higher education institutions, with about 22 thousand students and more than 1,400 teachers. The development of the University of Latvia is an ongoing process based on a rich and extensive historical heritage!');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                            }else{
                                if(prof == 'Medicine'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('LATVIAN UNIVERSITY');
                                    $(spanUni3).text('Direction: Medicine');
                                    $(spanUni2).text('Form of study: Full-time');
                                    $(spanUni1).text('Tuition: 7000 EUR')                                    
                                    $(spanUni).text('ERASMUS: The University of Latvia has retained its main goal - to be at the center of Latvian intellectual life by formulating new tasks and goals. Currently, new faculties and training programs have been created with the aim of improving the quality of research in research activities. Over 90 years of its existence, the University of Latvia has become one of the leading higher education institutions, with about 22 thousand students and more than 1,400 teachers. The development of the University of Latvia is an ongoing process based on a rich and extensive historical heritage!');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                }else{
                                    if(prof == 'Computer Science'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('LATVIAN UNIVERSITY');
                                    $(spanUni3).text('Direction: Computer Science');
                                    $(spanUni2).text('Form of study: Full-time');
                                    $(spanUni1).text('Tuition: 4553 EUR')                                    
                                    $(spanUni).text('ERASMUS: The University of Latvia has retained its main goal - to be at the center of Latvian intellectual life by formulating new tasks and goals. Currently, new faculties and training programs have been created with the aim of improving the quality of research in research activities. Over 90 years of its existence, the University of Latvia has become one of the leading higher education institutions, with about 22 thousand students and more than 1,400 teachers. The development of the University of Latvia is an ongoing process based on a rich and extensive historical heritage!');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    }else{
                                        if(prof == 'Chemistry'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('LATVIAN UNIVERSITY');
                                    $(spanUni3).text('Direction: Chemistry');
                                    $(spanUni2).text('Form of study: Full-time');
                                    $(spanUni1).text('Tuition: 4553 EUR')                                    
                                    $(spanUni).text('ERASMUS: The University of Latvia has retained its main goal - to be at the center of Latvian intellectual life by formulating new tasks and goals. Currently, new faculties and training programs have been created with the aim of improving the quality of research in research activities. Over 90 years of its existence, the University of Latvia has become one of the leading higher education institutions, with about 22 thousand students and more than 1,400 teachers. The development of the University of Latvia is an ongoing process based on a rich and extensive historical heritage!');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                        }else{
                                            if(prof == 'English Philology'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('LATVIAN UNIVERSITY');
                                    $(spanUni3).text('Direction: English Philology');
                                    $(spanUni2).text('Form of study: Full-time');
                                    $(spanUni1).text('Tuition: 2845 EUR')                                    
                                    $(spanUni).text('ERASMUS: The University of Latvia has retained its main goal - to be at the center of Latvian intellectual life by formulating new tasks and goals. Currently, new faculties and training programs have been created with the aim of improving the quality of research in research activities. Over 90 years of its existence, the University of Latvia has become one of the leading higher education institutions, with about 22 thousand students and more than 1,400 teachers. The development of the University of Latvia is an ongoing process based on a rich and extensive historical heritage!');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                            }else{
                                                if(prof == 'Modern Language and Business'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('LATVIAN UNIVERSITY');
                                    $(spanUni3).text('Direction: Modern Language and Business');
                                    $(spanUni2).text('Form of study: Full-time');
                                    $(spanUni1).text('Tuition: 3557 EUR')                                    
                                    $(spanUni).text('ERASMUS: The University of Latvia has retained its main goal - to be at the center of Latvian intellectual life by formulating new tasks and goals. Currently, new faculties and training programs have been created with the aim of improving the quality of research in research activities. Over 90 years of its existence, the University of Latvia has become one of the leading higher education institutions, with about 22 thousand students and more than 1,400 teachers. The development of the University of Latvia is an ongoing process based on a rich and extensive historical heritage!');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                                }else{
                                                    if(prof == 'International Economics and Commercial Diplomacy'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('LATVIAN UNIVERSITY');
                                    $(spanUni3).text('Direction: International Economics and Commercial Diplomacy');
                                    $(spanUni2).text('Form of study: Full-time');
                                    $(spanUni1).text('Tuition: 2800 EUR')                                    
                                    $(spanUni).text('ERASMUS: The University of Latvia has retained its main goal - to be at the center of Latvian intellectual life by formulating new tasks and goals. Currently, new faculties and training programs have been created with the aim of improving the quality of research in research activities. Over 90 years of its existence, the University of Latvia has become one of the leading higher education institutions, with about 22 thousand students and more than 1,400 teachers. The development of the University of Latvia is an ongoing process based on a rich and extensive historical heritage!');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                                    }else{
                                                        if(prof == 'Law and business'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('RIGA GRADUATE SCHOOL OF LAW');
                                    $(spanUni3).text('Direction: Law and business');
                                    $(spanUni2).text('Form of study: Full-time');
                                    $(spanUni1).text('Tuition: 3500 EUR')                                    
                                    $(spanUni).text('ERASMUS: Riga Graduate School of Law (RGSL) or Riga Graduate School of Law is a high-class educational institution that offers English-language programs in undergraduate, graduate and doctoral studies (with specialization in law, business, finance, international relations and diplomacy). RGSL offers high-quality English language programs for future lawyers from around the world. The School also runs courses for officials, representatives of civil and scientific communities from countries that are part of the European Neighborhood Policy.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                                        }else{
                                                            if(prof == 'Jurisprudence and diplomacy'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');                                    
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');                                  
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('RIGA GRADUATE SCHOOL OF LAW');
                                    $(spanUni3).text('Direction: Jurisprudence and diplomacy');
                                    $(spanUni2).text('Form of study: Full-time');                                                                       
                                    $(spanUni).text('ERASMUS: Riga Graduate School of Law (RGSL) or Riga Graduate School of Law is a high-class educational institution that offers English-language programs in undergraduate, graduate and doctoral studies (with specialization in law, business, finance, international relations and diplomacy). RGSL offers high-quality English language programs for future lawyers from around the world. The School also runs courses for officials, representatives of civil and scientific communities from countries that are part of the European Neighborhood Policy.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);                                    
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                                            }else{
                                                                if(prof == 'International and European law'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');                                    
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');                                  
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('RIGA GRADUATE SCHOOL OF LAW');
                                    $(spanUni3).text('Direction: International and European law');
                                    $(spanUni2).text('Form of study: Full-time');                                                                       
                                    $(spanUni).text('ERASMUS: Riga Graduate School of Law (RGSL) or Riga Graduate School of Law is a high-class educational institution that offers English-language programs in undergraduate, graduate and doctoral studies (with specialization in law, business, finance, international relations and diplomacy). RGSL offers high-quality English language programs for future lawyers from around the world. The School also runs courses for officials, representatives of civil and scientific communities from countries that are part of the European Neighborhood Policy.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);                                    
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                                                }else{
                                                                    if(prof == 'Jurisprudence and finance'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');                                    
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');                                  
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('RIGA GRADUATE SCHOOL OF LAW');
                                    $(spanUni3).text('Direction: Jurisprudence and finance');
                                    $(spanUni2).text('Form of study: Full-time');                                                                       
                                    $(spanUni).text('ERASMUS: Riga Graduate School of Law (RGSL) or Riga Graduate School of Law is a high-class educational institution that offers English-language programs in undergraduate, graduate and doctoral studies (with specialization in law, business, finance, international relations and diplomacy). RGSL offers high-quality English language programs for future lawyers from around the world. The School also runs courses for officials, representatives of civil and scientific communities from countries that are part of the European Neighborhood Policy.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);                                    
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                                                    }else{
                                                                        if(prof == 'Legal lingustics'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');                                    
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');                                  
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('RIGA GRADUATE SCHOOL OF LAW');
                                    $(spanUni3).text('Direction: Legal lingustics');
                                    $(spanUni2).text('Form of study: Full-time');                                                                       
                                    $(spanUni).text('ERASMUS: Riga Graduate School of Law (RGSL) or Riga Graduate School of Law is a high-class educational institution that offers English-language programs in undergraduate, graduate and doctoral studies (with specialization in law, business, finance, international relations and diplomacy). RGSL offers high-quality English language programs for future lawyers from around the world. The School also runs courses for officials, representatives of civil and scientific communities from countries that are part of the European Neighborhood Policy.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);                                    
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                                                        }else{
                                                                            if(prof == 'Architecture'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('HIGH SCHOOL OF BUSINESS, ARTS, AND TECHNOLOGY (RISEBA)');
                                    $(spanUni3).text('Direction: Architecture');
                                    $(spanUni2).text('Form of study: Full-time');
                                    $(spanUni1).text('Tuition: 6000 EUR')                                    
                                    $(spanUni).text('ERASMUS: Full-time students who complete at least one course of study can participate in the ERASMUS program. Students have the right to choose one of the partner educational institutions for exchange training. RISEBA has signed agreements with more than 60 organizations throughout Europe. Students can choose and indicate in the application three priority partner organizations. All students are allowed to open their own business with the support of the Creative Business Incubator. Students need to develop a business plan during the training period, and in the future, they create their enterprise and start the entrepreneurial activity.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                                                            }else{
                                                                                if(prof == 'Audiovisual Media Arts'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('HIGH SCHOOL OF BUSINESS, ARTS, AND TECHNOLOGY (RISEBA)');
                                    $(spanUni3).text('Direction: Audiovisual Media Arts');
                                    $(spanUni2).text('Form of study: Full-time');
                                    $(spanUni1).text('Tuition: 2900 EUR')                                    
                                    $(spanUni).text('ERASMUS: Full-time students who complete at least one course of study can participate in the ERASMUS program. Students have the right to choose one of the partner educational institutions for exchange training. RISEBA has signed agreements with more than 60 organizations throughout Europe. Students can choose and indicate in the application three priority partner organizations. All students are allowed to open their own business with the support of the Creative Business Incubator. Students need to develop a business plan during the training period, and in the future, they create their enterprise and start the entrepreneurial activity.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                                                                }else{
                                                                                    if(prof == 'Business Psychology'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('HIGH SCHOOL OF BUSINESS, ARTS, AND TECHNOLOGY (RISEBA)');
                                    $(spanUni3).text('Direction: Business Psychology');
                                    $(spanUni2).text('Form of study: Full-time');
                                    $(spanUni1).text('Tuition: 2300 EUR (1700 EUR  distance learning)')                                    
                                    $(spanUni).text('ERASMUS: Full-time students who complete at least one course of study can participate in the ERASMUS program. Students have the right to choose one of the partner educational institutions for exchange training. RISEBA has signed agreements with more than 60 organizations throughout Europe. Students can choose and indicate in the application three priority partner organizations. All students are allowed to open their own business with the support of the Creative Business Incubator. Students need to develop a business plan during the training period, and in the future, they create their enterprise and start the entrepreneurial activity.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                                                                    }else{
                                                                                        if(prof == 'European Business'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('HIGH SCHOOL OF BUSINESS, ARTS, AND TECHNOLOGY (RISEBA)');
                                    $(spanUni3).text('Direction: European Business');
                                    $(spanUni2).text('Form of study: Full-time');
                                    $(spanUni1).text('Tuition: 3950 EUR')                                    
                                    $(spanUni).text('ERASMUS: Full-time students who complete at least one course of study can participate in the ERASMUS program. Students have the right to choose one of the partner educational institutions for exchange training. RISEBA has signed agreements with more than 60 organizations throughout Europe. Students can choose and indicate in the application three priority partner organizations. All students are allowed to open their own business with the support of the Creative Business Incubator. Students need to develop a business plan during the training period, and in the future, they create their enterprise and start the entrepreneurial activity.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                                                                        }else{
                                                                                            if(prof == 'Entrepreneurship Managment'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('HIGH SCHOOL OF BUSINESS, ARTS, AND TECHNOLOGY (RISEBA)');
                                    $(spanUni3).text('Direction: Entrepreneurship Managment');
                                    $(spanUni2).text('Form of study: Full-time');                                 
                                    $(spanUni).text('ERASMUS: Full-time students who complete at least one course of study can participate in the ERASMUS program. Students have the right to choose one of the partner educational institutions for exchange training. RISEBA has signed agreements with more than 60 organizations throughout Europe. Students can choose and indicate in the application three priority partner organizations. All students are allowed to open their own business with the support of the Creative Business Incubator. Students need to develop a business plan during the training period, and in the future, they create their enterprise and start the entrepreneurial activity.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                                                                            }else{
                                                                                                if(prof == 'Pharmaceuticals'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('Riga Stradina University');
                                    $(spanUni3).text('Direction: Pharmaceuticals');
                                    $(spanUni2).text('Form of study: Full-time');
                                    $(spanUni1).text('Tuition: 8000 EUR')                                    
                                    $(spanUni).text('ERASMUS: The mobility program provides for the training of students in higher educational institutions of other countries lasting from 3 months to one year. The purpose of this program is to improve students education and develop an experience of studying abroad.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                                                                                }else{
                                                                                                    if(prof == 'Nursing'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('Riga Stradina University');
                                    $(spanUni3).text('Direction: Nursing');
                                    $(spanUni2).text('Form of study: Full-time');
                                    $(spanUni1).text('Tuition: 5000 EUR')                                    
                                    $(spanUni).text('ERASMUS: The mobility program provides for the training of students in higher educational institutions of other countries lasting from 3 months to one year. The purpose of this program is to improve students education and develop an experience of studying abroad.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                                                                                    }else{
                                                                                                        if(prof == 'Physiotherapy'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('Riga Stradina University');
                                    $(spanUni3).text('Direction: Physiotherapy');
                                    $(spanUni2).text('Form of study: Full-time');
                                    $(spanUni1).text('Tuition: 8000 EUR')                                    
                                    $(spanUni).text('ERASMUS: The mobility program provides for the training of students in higher educational institutions of other countries lasting from 3 months to one year. The purpose of this program is to improve students education and develop an experience of studying abroad.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                                                                                        }else{
                                                                                                            if(prof == 'Occupational Therapy'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('Riga Stradina University');
                                    $(spanUni3).text('Direction: Occupational Therapy');
                                    $(spanUni2).text('Form of study: Full-time');
                                    $(spanUni1).text('Tuition: 8000 EUR')                                    
                                    $(spanUni).text('ERASMUS: The mobility program provides for the training of students in higher educational institutions of other countries lasting from 3 months to one year. The purpose of this program is to improve students education and develop an experience of studying abroad.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                                                                                            }else{
                                                                                                                if(prof == 'Medical'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('Riga Stradina University');
                                    $(spanUni3).text('Direction: Medical');
                                    $(spanUni2).text('Form of study: Full-time');
                                    $(spanUni1).text('Tuition: 9000 EUR')                                    
                                    $(spanUni).text('ERASMUS: The mobility program provides for the training of students in higher educational institutions of other countries lasting from 3 months to one year. The purpose of this program is to improve students education and develop an experience of studying abroad.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                                                                                                }else{
                                                                                                                                    if(prof == 'Geometrics'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('RIGA TECHNICAL UNIVERSITY');
                                    $(spanUni3).text('Direction: Geometrics');
                                    $(spanUni2).text('Form of study: Full-time');                                  
                                    $(spanUni).text('ERASMUS: Training is conducted by local and foreign teachers. Great help in training is provided by the Scientific Library of the RTU, which contains a huge database with the necessary educational information, as well as a huge assortment of books. Also, under the Erasmus program, students have the opportunity to study at more than 200 partner universities, which provides a successful and rich experience');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                                                                                                                    }else{
                                                                                                                                        if(prof == 'Construction'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('RIGA TECHNICAL UNIVERSITY');
                                    $(spanUni3).text('Direction: Construction');
                                    $(spanUni2).text('Form of study: Full-time');                                  
                                    $(spanUni).text('ERASMUS: Training is conducted by local and foreign teachers. Great help in training is provided by the Scientific Library of the RTU, which contains a huge database with the necessary educational information, as well as a huge assortment of books. Also, under the Erasmus program, students have the opportunity to study at more than 200 partner universities, which provides a successful and rich experience');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                                                                                                                        }else{
                                                                                                                                            if(prof == 'Computer systems'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('RIGA TECHNICAL UNIVERSITY');
                                    $(spanUni3).text('Direction: Computer systems');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 2700 EUR');                                 
                                    $(spanUni).text('ERASMUS: Training is conducted by local and foreign teachers. Great help in training is provided by the Scientific Library of the RTU, which contains a huge database with the necessary educational information, as well as a huge assortment of books. Also, under the Erasmus program, students have the opportunity to study at more than 200 partner universities, which provides a successful and rich experience');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                                                                                                                            }else{
                                                                                                                                                if(prof == 'Telecommunications'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('RIGA TECHNICAL UNIVERSITY');
                                    $(spanUni3).text('Direction: Telecommunications');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 2450 EUR');                                 
                                    $(spanUni).text('ERASMUS: Training is conducted by local and foreign teachers. Great help in training is provided by the Scientific Library of the RTU, which contains a huge database with the necessary educational information, as well as a huge assortment of books. Also, under the Erasmus program, students have the opportunity to study at more than 200 partner universities, which provides a successful and rich experience');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                                                                                                                                }else{
                                                                                                                                                    if(prof == 'Managament and entrepreneurship'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('RIGA TECHNICAL UNIVERSITY');
                                    $(spanUni3).text('Direction: Managament and entrepreneurship');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 2700 EUR');                                 
                                    $(spanUni).text('ERASMUS: Training is conducted by local and foreign teachers. Great help in training is provided by the Scientific Library of the RTU, which contains a huge database with the necessary educational information, as well as a huge assortment of books. Also, under the Erasmus program, students have the opportunity to study at more than 200 partner universities, which provides a successful and rich experience');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                                                                                                                                    }else{
                                                                                                                                                        if(prof == 'Engineering technology'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('RIGA TECHNICAL UNIVERSITY');
                                    $(spanUni3).text('Direction: Engineering technology');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 2700 EUR');                                 
                                    $(spanUni).text('ERASMUS: Training is conducted by local and foreign teachers. Great help in training is provided by the Scientific Library of the RTU, which contains a huge database with the necessary educational information, as well as a huge assortment of books. Also, under the Erasmus program, students have the opportunity to study at more than 200 partner universities, which provides a successful and rich experience');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                                                                                                                                        }else{
                                                                                                                                                            if(prof == 'mechanics and mechanical engineering'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('RIGA TECHNICAL UNIVERSITY');
                                    $(spanUni3).text('Direction: Mechanics and mechanical engineering');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 2700 EUR');                                 
                                    $(spanUni).text('ERASMUS: Training is conducted by local and foreign teachers. Great help in training is provided by the Scientific Library of the RTU, which contains a huge database with the necessary educational information, as well as a huge assortment of books. Also, under the Erasmus program, students have the opportunity to study at more than 200 partner universities, which provides a successful and rich experience');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                                                                                                                                            }else{
                                                                                                                                                                if(prof == 'Tourism business management'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('RIGA TECHNICAL UNIVERSITY');
                                    $(spanUni3).text('Direction: Tourism business management');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 2450 EUR');                                 
                                    $(spanUni).text('ERASMUS: Training is conducted by local and foreign teachers. Great help in training is provided by the Scientific Library of the RTU, which contains a huge database with the necessary educational information, as well as a huge assortment of books. Also, under the Erasmus program, students have the opportunity to study at more than 200 partner universities, which provides a successful and rich experience');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                                                                                                                                                }else{
                                                                                                                                                                    if(prof == 'Public relations'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('Business highschool Turiba');
                                    $(spanUni3).text('Direction: Public relations');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 3000 EUR');                                 
                                    $(spanUni).text('ERASMUS: The mobility program provides for the training of students in higher educational institutions of other countries lasting from 3 months to one year. The purpose of this program is to improve students education and develop experience of studying abroad. Double degree programs provide students with the opportunity to study for some time at the University of Turība and at any of its partner universities in order to obtain a degree in both universities.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                                                                                                                                                    }else{
                                                                                                                                                                        if(prof == 'Journalism and mass media'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('Business highschool Turiba');
                                    $(spanUni3).text('Direction: Journalism and mass media');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 3000 EUR');                                 
                                    $(spanUni).text('ERASMUS: The mobility program provides for the training of students in higher educational institutions of other countries lasting from 3 months to one year. The purpose of this program is to improve students education and develop experience of studying abroad. Double degree programs provide students with the opportunity to study for some time at the University of Turība and at any of its partner universities in order to obtain a degree in both universities.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                                                                                                                                                        }else{
                        let newElement = document.createElement('li');
                        let element = document.getElementById('University');
                        $(newElement).text('Don`t found university');
                        element.appendChild(newElement);
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        
                    
                
            
        }else{
            if(city == 'Jelgava'){
                if(prof == 'Economics'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('LATVIAN AGRICULTURAL UNIVERSITY');
                                    $(spanUni3).text('Direction: Economics');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 2000 EUR');                                 
                                    $(spanUni).text('ERASMUS: Students are provided with modern opportunities for study - a fundamental library with a two-story reading room and wireless Internet connection, participation in international exchange programs, practical classes in laboratories with modern technological equipment, practice at major industry enterprises, as well as research work.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                }else if(prof == 'Housekeeping'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('LATVIAN AGRICULTURAL UNIVERSITY');
                                    $(spanUni3).text('Direction: Housekeeping');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 1700 EUR');                                 
                                    $(spanUni).text('ERASMUS: Students are provided with modern opportunities for study - a fundamental library with a two-story reading room and wireless Internet connection, participation in international exchange programs, practical classes in laboratories with modern technological equipment, practice at major industry enterprises, as well as research work.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                }else if(prof == 'Computer Science'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('LATVIAN AGRICULTURAL UNIVERSITY');
                                    $(spanUni3).text('Direction: Computer Science');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 2500 EUR');                                 
                                    $(spanUni).text('ERASMUS: Students are provided with modern opportunities for study - a fundamental library with a two-story reading room and wireless Internet connection, participation in international exchange programs, practical classes in laboratories with modern technological equipment, practice at major industry enterprises, as well as research work.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                }else if(prof == 'Veterinary Medicine'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('LATVIAN AGRICULTURAL UNIVERSITY');
                                    $(spanUni3).text('Direction: Veterinary Medicine');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 5500 EUR');                                 
                                    $(spanUni).text('ERASMUS: Students are provided with modern opportunities for study - a fundamental library with a two-story reading room and wireless Internet connection, participation in international exchange programs, practical classes in laboratories with modern technological equipment, practice at major industry enterprises, as well as research work.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                }else{
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('Don`t found university');
                                    element.appendChild(newElement);
                                }
                }
            else{
                if(city == 'Rezekne'){
                    if(prof == 'Management science'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('REZEKNE ACADEMY OF TECHNOLOGIES');
                                    $(spanUni3).text('Direction: Management science');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 2900 EUR');                                 
                                    $(spanUni).text('ERASMUS: The Rezekne Academy of Technology was created on the basis of the University of Latvia and the Riga Technical University. In 1992, the idea was to create an independent university. In the same year, on August 28, Congress adopted a resolution calling for priority areas, and all public order was raised in the management of the education system. In this regard, in 1993, the Republic of Armenia emerged as an independent educational institution. Since 1999, the RA has international accreditation and has become an important cultural, educational center of science.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                }else if(prof == 'Business administration in the field of tourism and hotel management'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('REZEKNE ACADEMY OF TECHNOLOGIES');
                                    $(spanUni3).text('Direction: Business administration in the field of tourism and hotel management');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 2900 EUR');                                 
                                    $(spanUni).text('ERASMUS: The Rezekne Academy of Technology was created on the basis of the University of Latvia and the Riga Technical University. In 1992, the idea was to create an independent university. In the same year, on August 28, Congress adopted a resolution calling for priority areas, and all public order was raised in the management of the education system. In this regard, in 1993, the Republic of Armenia emerged as an independent educational institution. Since 1999, the RA has international accreditation and has become an important cultural, educational center of science.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                }else if(prof == 'Mechatronics'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('REZEKNE ACADEMY OF TECHNOLOGIES');
                                    $(spanUni3).text('Direction: Mechatronics');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 2900 EUR (2900 EUR part-time)');                                 
                                    $(spanUni).text('ERASMUS: The Rezekne Academy of Technology was created on the basis of the University of Latvia and the Riga Technical University. In 1992, the idea was to create an independent university. In the same year, on August 28, Congress adopted a resolution calling for priority areas, and all public order was raised in the management of the education system. In this regard, in 1993, the Republic of Armenia emerged as an independent educational institution. Since 1999, the RA has international accreditation and has become an important cultural, educational center of science.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                }else if(prof = 'E-commerce'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('REZEKNE ACADEMY OF TECHNOLOGIES');
                                    $(spanUni3).text('Direction: E-commerce');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 2900 EUR (2900 EUR part-time)');                                 
                                    $(spanUni).text('ERASMUS: The Rezekne Academy of Technology was created on the basis of the University of Latvia and the Riga Technical University. In 1992, the idea was to create an independent university. In the same year, on August 28, Congress adopted a resolution calling for priority areas, and all public order was raised in the management of the education system. In this regard, in 1993, the Republic of Armenia emerged as an independent educational institution. Since 1999, the RA has international accreditation and has become an important cultural, educational center of science.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                }else if(prof = 'Programming engineer'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('REZEKNE ACADEMY OF TECHNOLOGIES');
                                    $(spanUni3).text('Direction: Programming engineer');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 2900 EUR (2900 EUR part-time)');                                 
                                    $(spanUni).text('ERASMUS: The Rezekne Academy of Technology was created on the basis of the University of Latvia and the Riga Technical University. In 1992, the idea was to create an independent university. In the same year, on August 28, Congress adopted a resolution calling for priority areas, and all public order was raised in the management of the education system. In this regard, in 1993, the Republic of Armenia emerged as an independent educational institution. Since 1999, the RA has international accreditation and has become an important cultural, educational center of science.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                }else if(prof = 'Translator assistant'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('REZEKNE ACADEMY OF TECHNOLOGIES');
                                    $(spanUni3).text('Direction: Translator assistant');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 2900 EUR');                                 
                                    $(spanUni).text('ERASMUS: The Rezekne Academy of Technology was created on the basis of the University of Latvia and the Riga Technical University. In 1992, the idea was to create an independent university. In the same year, on August 28, Congress adopted a resolution calling for priority areas, and all public order was raised in the management of the education system. In this regard, in 1993, the Republic of Armenia emerged as an independent educational institution. Since 1999, the RA has international accreditation and has become an important cultural, educational center of science.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                }else if(prof = 'Interior designer'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('REZEKNE ACADEMY OF TECHNOLOGIES');
                                    $(spanUni3).text('Direction: Interior designer');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 2900 EUR');                                 
                                    $(spanUni).text('ERASMUS: The Rezekne Academy of Technology was created on the basis of the University of Latvia and the Riga Technical University. In 1992, the idea was to create an independent university. In the same year, on August 28, Congress adopted a resolution calling for priority areas, and all public order was raised in the management of the education system. In this regard, in 1993, the Republic of Armenia emerged as an independent educational institution. Since 1999, the RA has international accreditation and has become an important cultural, educational center of science.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                }else{
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('Don`t found university');
                                    element.appendChild(newElement);
                                }
                
                }else{
                    if(city == 'Ventspils'){
                        if(prof == 'Languages and Intercultural Communication'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('VENTSPILS UNIVERSITY');
                                    $(spanUni3).text('Direction: Languages and Intercultural Communication');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 2100 EUR');                                 
                                    $(spanUni).text('ERASMUS: Here you will fully master the phonetics, stylistics and grammar of working languages, get practical and written translation, learn about international entrepreneurship, understand the theoretical and practical issues of comparative linguistics, translation studies and terminology, learn how to develop a research work. Elective courses also offer to deepen knowledge in cultural studies, history, ethics, computer technology, sociology, literature, science, etc.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                }else if(prof == 'Translation studies '){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('VENTSPILS UNIVERSITY');
                                    $(spanUni3).text('Direction: Translation studies ');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 2100 EUR');                                 
                                    $(spanUni).text('ERASMUS: Here you will fully master the phonetics, stylistics and grammar of working languages, get practical and written translation, learn about international entrepreneurship, understand the theoretical and practical issues of comparative linguistics, translation studies and terminology, learn how to develop a research work. Elective courses also offer to deepen knowledge in cultural studies, history, ethics, computer technology, sociology, literature, science, etc.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                }else if(prof == 'Business Administration'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('VENTSPILS UNIVERSITY');
                                    $(spanUni3).text('Direction: Business Administration');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 2100 EUR');                                 
                                    $(spanUni).text('ERASMUS: Here you will fully master the phonetics, stylistics and grammar of working languages, get practical and written translation, learn about international entrepreneurship, understand the theoretical and practical issues of comparative linguistics, translation studies and terminology, learn how to develop a research work. Elective courses also offer to deepen knowledge in cultural studies, history, ethics, computer technology, sociology, literature, science, etc.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                                }else{
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('Don`t found university');
                                    element.appendChild(newElement);
                                }
                    }else{
                        if(city == 'Daugavpils'){
                            if(prof == 'Biology'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('DAUGAVPILS UNIVERSITY');
                                    $(spanUni3).text('Direction: Biology');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 2400 EUR');                                 
                                    $(spanUni).text('ERASMUS: The mobility program provides for the training of students in higher educational institutions of other countries lasting from 3 months to one year. The purpose of this program is to improve students education and develop an experience of studying abroad.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                            }else if(prof == 'East European Culture and Business Relations'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('DAUGAVPILS UNIVERSITY');
                                    $(spanUni3).text('Direction: East European Culture and Business Relations');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 2400 EUR');                                 
                                    $(spanUni).text('ERASMUS: The mobility program provides for the training of students in higher educational institutions of other countries lasting from 3 months to one year. The purpose of this program is to improve students education and develop an experience of studying abroad.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                            }else if(prof == 'English philology'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('DAUGAVPILS UNIVERSITY');
                                    $(spanUni3).text('Direction: English philology');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 2400 EUR');                                 
                                    $(spanUni).text('ERASMUS: The mobility program provides for the training of students in higher educational institutions of other countries lasting from 3 months to one year. The purpose of this program is to improve students education and develop an experience of studying abroad.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                            }else if(prof == 'Environmental sciences'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('DAUGAVPILS UNIVERSITY');
                                    $(spanUni3).text('Direction: Environmental sciences');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 2400 EUR');                                 
                                    $(spanUni).text('ERASMUS: The mobility program provides for the training of students in higher educational institutions of other countries lasting from 3 months to one year. The purpose of this program is to improve students education and develop an experience of studying abroad.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                            }else if(prof == 'Physics'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('DAUGAVPILS UNIVERSITY');
                                    $(spanUni3).text('Direction: Physics');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 2400 EUR');                                 
                                    $(spanUni).text('ERASMUS: The mobility program provides for the training of students in higher educational institutions of other countries lasting from 3 months to one year. The purpose of this program is to improve students education and develop an experience of studying abroad.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                            }else if(prof == 'Russian philology'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('DAUGAVPILS UNIVERSITY');
                                    $(spanUni3).text('Direction: Russian philology');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 2400 EUR');                                 
                                    $(spanUni).text('ERASMUS: The mobility program provides for the training of students in higher educational institutions of other countries lasting from 3 months to one year. The purpose of this program is to improve students education and develop an experience of studying abroad.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                            }else if(prof == 'Story'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University'); 
                                    let spanInfo = document.createElement('span');
                                    let spanUni = document.createElement('span');
                                    let spanUni2 = document.createElement('span');
                                    let spanUni3 = document.createElement('span');
                                    let spanUni1 = document.createElement('span');
                                    $(spanInfo).css('display', 'block');
                                    $(spanInfo).css('margin-top','50px');
                                    $(spanUni2).css('display', 'block');
                                    $(spanUni2).css('margin-top','50px');
                                    $(spanUni1).css('display', 'block');
                                    $(spanUni1).css('margin-top','50px');
                                    $(spanUni).css('display', 'block');
                                    $(spanUni).css('margin-top','50px');
                                    $(spanUni3).css('display', 'block');
                                    $(spanUni3).css('margin-top','50px');
                                    $(spanInfo).text('DAUGAVPILS UNIVERSITY');
                                    $(spanUni3).text('Direction: Story');
                                    $(spanUni2).text('Form of study: Full-time'); 
                                    $(spanUni1).text('Tuition: 2400 EUR');                                 
                                    $(spanUni).text('ERASMUS: The mobility program provides for the training of students in higher educational institutions of other countries lasting from 3 months to one year. The purpose of this program is to improve students education and develop an experience of studying abroad.');
                                    newElement.appendChild(spanInfo);
                                    newElement.appendChild(spanUni3);
                                    newElement.appendChild(spanUni2);
                                    newElement.appendChild(spanUni1);
                                    newElement.appendChild(spanUni);
                                    element.appendChild(newElement);
                                    element.appendChild(newElement);
                            }else{
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('Don`t found university');
                                    element.appendChild(newElement);
                                }
                        }
                    }
                }
            }
        }
    }
);
  



//  Daugavpils university
//  University of economics and culture (EKA)
//  Latvian agricultural university
//  Latvian university
//  Riga graduate school of law
//  High school of business, arts and technology (riseba)
//  Riga stradina university
//  Rezekne academy of technologies
//  Riga technical university
//  Business highschool turiba
//  Ventspils university 