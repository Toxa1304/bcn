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
  
    $('.step1').click(function(){
    city = $('#city').html();
    if(city == 'Choice City'){
        alert('Choice City');
    }else{
        city = $('#city').html();
        $('.ChoiceCity').hide();
        $('.ChoiceProf').show();
        console.log(city+', step1')
        $('#prof').text('Choice Prof Direction');
    }
  });

  let left,
      right;

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
        max: 100000,   
        values: [ 0, 65000 ],
        slide : function(event, ui) {    
            $("#result-polzunok").text( "от " + ui.values[ 0 ] + " до " + ui.values[ 1 ] );        
        }
    });
    $( "#result-polzunok" ).text("от " + $("#polzunok").slider("values", 0) + " до " + $("#polzunok").slider("values", 1));
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
    if(city == 'Daugavpils'){
        if(prof == 'Biology'){
            let newElement = document.createElement('li');
            let element = document.getElementById('University');
            $(newElement).text('Daugavpils university');
            element.appendChild(newElement);
        }else{
            if(prof == 'English and Russian philology'){
                let newElement = document.createElement('li');
                let element = document.getElementById('University');
                $(newElement).text('Daugavpils university');
                element.appendChild(newElement);
            }else{
                if(prof == 'Physics'){
                    let newElement = document.createElement('li');
                    let element = document.getElementById('University');
                    $(newElement).text('Daugavpils university');
                    element.appendChild(newElement);
                }else{
                    if(prof == 'Enviromental Sciences'){
                        let newElement = document.createElement('li');
                        let element = document.getElementById('University');
                        $(newElement).text('Daugavpils university');
                        element.appendChild(newElement);
                    }else{
                        if(prof == 'Economics'){
                            let newElement = document.createElement('li');
                            let element = document.getElementById('University');
                            $(newElement).text('Daugavpils university');
                            element.appendChild(newElement);
                        }else{
                            if(prof == 'Methematics'){
                                let newElement = document.createElement('li');
                                let element = document.getElementById('University');
                                $(newElement).text('Daugavpils university');
                                element.appendChild(newElement);
                            }else{
                                if(prof == 'History'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('Daugavpils university');
                                    element.appendChild(newElement);
                                }else{
                                    let newElement = document.createElement('li');
                        let element = document.getElementById('University');
                        $(newElement).text('Dont found university');
                        element.appendChild(newElement);
                                }
                            }
                        }
                    }
                }
            }
        }
    }else{
        if(city == 'Riga'){
            if(prof == 'Innovative economy and business'){
                let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('University of economics and culture (EKA)');
                                    element.appendChild(newElement);
            }else{
                if(prof == 'Management'){
                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('University of economics and culture (EKA)');
                                    element.appendChild(newElement);
                }else{
                    if(prof == 'Business administration'){
                        let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('University of economics and culture (EKA)');
                                    element.appendChild(newElement);
                    }else{
                        if(prof == 'Interior design'){
                            let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('University of economics and culture (EKA)');
                                    element.appendChild(newElement);
                        }else{
                            if(prof == 'Dentistry'){
                                let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('Latvian university');
                                    element.appendChild(newElement);
                            }else{
                                if(prof == 'Medicine'){
                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('Latvian university');
                                    element.appendChild(newElement);
                                }else{
                                    if(prof == 'Computer Science'){
                                        let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('Latvian university');
                                    element.appendChild(newElement);
                                    }else{
                                        if(prof == 'Chemistry'){
                                            let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('Latvian university');
                                    element.appendChild(newElement);
                                        }else{
                                            if(prof == 'English Philology'){
                                                let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('Latvian university');
                                    element.appendChild(newElement);
                                            }else{
                                                if(prof == 'Modern Language and Business'){
                                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('Latvian university');
                                    element.appendChild(newElement);
                                                }else{
                                                    if(prof == 'International Economics and Commercial Diplomacy'){
                                                        let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('Latvian university');
                                    element.appendChild(newElement);
                                                    }else{
                                                        if(prof == 'Law and business'){
                                                            let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('Riga graduate school of law');
                                    element.appendChild(newElement);
                                                        }else{
                                                            if(prof == 'Jurisprudence and diplomacy'){
                                                                let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('Riga graduate school of law');
                                    element.appendChild(newElement);
                                                            }else{
                                                                if(prof == 'International and European law'){
                                                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('Riga graduate school of law');
                                    element.appendChild(newElement);
                                                                }else{
                                                                    if(prof == 'Jurisprudence and finance'){
                                                                        let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('Riga graduate school of law');
                                    element.appendChild(newElement);
                                                                    }else{
                                                                        if(prof == 'Legal lingustics'){
                                                                            let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('Riga graduate school of law');
                                    element.appendChild(newElement);
                                                                        }else{
                                                                            if(prof == 'Architecture'){
                                                                                let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('High school of business, arts and technology (riseba)');
                                    element.appendChild(newElement);
                                                                            }else{
                                                                                if(prof == 'Audiovisual Media Arts'){
                                                                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('High school of business, arts and technology (riseba)');
                                    element.appendChild(newElement);
                                                                                }else{
                                                                                    if(prof == 'Business Psychology'){
                                                                                        let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('High school of business, arts and technology (riseba)');
                                    element.appendChild(newElement);
                                                                                    }else{
                                                                                        if(prof == 'European Business'){
                                                                                            let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('High school of business, arts and technology (riseba)');
                                    element.appendChild(newElement);
                                                                                        }else{
                                                                                            if(prof == 'Entrepreneurship Managment'){
                                                                                                let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('High school of business, arts and technology (riseba)');
                                    element.appendChild(newElement);
                                                                                            }else{
                                                                                                if(prof == 'Pharmaceuticals'){
                                            
                                                                                                }else{
                                                                                                    if(prof == 'Nursing'){
                                                                                                        let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('Riga stradina university');
                                    element.appendChild(newElement);
                                                                                                    }else{
                                                                                                        if(prof == 'Physiotherapy'){
                                                                                                            let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('Riga stradina university');
                                    element.appendChild(newElement);
                                                                                                        }else{
                                                                                                            if(prof == 'Occupational Therapy'){
                                                                                                                let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('Riga stradina university');
                                    element.appendChild(newElement);
                                                                                                            }else{
                                                                                                                if(prof == 'Mechatronics'){
                                                                                                                    let newElement = document.createElement('li');
                                    let element = document.getElementById('University');
                                    $(newElement).text('Riga stradina university');
                                    element.appendChild(newElement);
                                                                                                                }else{
                                                                                                                                    if(prof == 'Geometrics'){
                                                                                                                                        let newElement = document.createElement('li');
                                                                                                                                        let element = document.getElementById('University');
                                                                                                                                        $(newElement).text('Riga technical university');
                                                                                                                                        element.appendChild(newElement);
                                                                                                                                    }else{
                                                                                                                                        if(prof == 'Construction'){
                                                                                                                                            let newElement = document.createElement('li');
                                                                                                                                        let element = document.getElementById('University');
                                                                                                                                        $(newElement).text('Riga technical university');
                                                                                                                                        element.appendChild(newElement);
                                                                                                                                        }else{
                                                                                                                                            if(prof == 'Computer systems'){
                                                                                                                                                let newElement = document.createElement('li');
                                                                                                                                        let element = document.getElementById('University');
                                                                                                                                        $(newElement).text('Riga technical university');
                                                                                                                                        element.appendChild(newElement);
                                                                                                                                            }else{
                                                                                                                                                if(prof == 'Telecommunications'){
                                                                                                                                                    let newElement = document.createElement('li');
                                                                                                                                        let element = document.getElementById('University');
                                                                                                                                        $(newElement).text('Riga technical university');
                                                                                                                                        element.appendChild(newElement);
                                                                                                                                                }else{
                                                                                                                                                    if(prof == 'Managament and entrepreneurship'){
                                                                                                                                                        let newElement = document.createElement('li');
                                                                                                                                        let element = document.getElementById('University');
                                                                                                                                        $(newElement).text('Riga technical university');
                                                                                                                                        element.appendChild(newElement);
                                                                                                                                                    }else{
                                                                                                                                                        if(prof == 'Engineering technology'){
                                                                                                                                                            let newElement = document.createElement('li');
                                                                                                                                        let element = document.getElementById('University');
                                                                                                                                        $(newElement).text('Riga technical university');
                                                                                                                                        element.appendChild(newElement);
                                                                                                                                                        }else{
                                                                                                                                                            if(prof == 'mechanics and mechanical engineering'){
                                                                                                                                                                let newElement = document.createElement('li');
                                                                                                                                        let element = document.getElementById('University');
                                                                                                                                        $(newElement).text('Riga technical university');
                                                                                                                                        element.appendChild(newElement);
                                                                                                                                                            }else{
                                                                                                                                                                if(prof == 'Tourism business management'){
                                                                                                                                                                    let newElement = document.createElement('li');
                                                                                                                                        let element = document.getElementById('University');
                                                                                                                                        $(newElement).text('Riga technical university');
                                                                                                                                        element.appendChild(newElement);
                                                                                                                                                                }else{
                                                                                                                                                                    if(prof == 'Public relations'){
                                                                                                                                                                        let newElement = document.createElement('li');
                                                                                                                                        let element = document.getElementById('University');
                                                                                                                                        $(newElement).text('Business highschool turiba');
                                                                                                                                        element.appendChild(newElement);
                                                                                                                                                                    }else{
                                                                                                                                                                        if(prof == 'Journalism and mass media'){
                                                                                                                                                                            let newElement = document.createElement('li');
                                                                                                                                        let element = document.getElementById('University');
                                                                                                                                        $(newElement).text('Business highschool turiba');
                                                                                                                                        element.appendChild(newElement);
                                                                                                                                                                        }else{
                                                                                                                                                                            let newElement = document.createElement('li');
                        let element = document.getElementById('University');
                        $(newElement).text('Dont found university');
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
                    $(newElement).text('Latvian agricultural university');
                    element.appendChild(newElement);
                }else{
                    if(prof == 'Informatics'){
                        let newElement = document.createElement('li');
                    let element = document.getElementById('University');
                    $(newElement).text('Latvian agricultural university');
                    element.appendChild(newElement);
                    }else{
                        if(prof == 'Veterinary Medicine'){
                            let newElement = document.createElement('li');
                    let element = document.getElementById('University');
                    $(newElement).text('Latvian agricultural university');
                    element.appendChild(newElement);
                        }else{
                            if(prof == 'Landscape architecture'){
                                let newElement = document.createElement('li');
                    let element = document.getElementById('University');
                    $(newElement).text('Latvian agricultural university');
                    element.appendChild(newElement);
                            }else{
                                if(prof == 'Forestry'){
                                    let newElement = document.createElement('li');
                    let element = document.getElementById('University');
                    $(newElement).text('Latvian agricultural university');
                    element.appendChild(newElement);
                                }else{
                                    if(prof == 'Business Management'){
                                        let newElement = document.createElement('li');
                    let element = document.getElementById('University');
                    $(newElement).text('Latvian agricultural university');
                    element.appendChild(newElement);
                                    }else{
                                        if(prof == 'Pedagogy'){
                                            let newElement = document.createElement('li');
                    let element = document.getElementById('University');
                    $(newElement).text('Latvian agricultural university');
                    element.appendChild(newElement);
                                        }else{
                                            let newElement = document.createElement('li');
                        let element = document.getElementById('University');
                        $(newElement).text('Dont found university');
                        element.appendChild(newElement);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }else{
                if(city == 'Rezekne'){
                    if(prof == 'Mechatronics'){
                        let newElement = document.createElement('li');
                        let element = document.getElementById('University');
                        $(newElement).text('Rezekne academy of technologies');
                        element.appendChild(newElement);
                    }else{
                        if(prof == 'E-commerce'){
                            let newElement = document.createElement('li');
                        let element = document.getElementById('University');
                        $(newElement).text('Rezekne academy of technologies');
                        element.appendChild(newElement);
                        }else{
                            if(prof == 'Programming'){
                                let newElement = document.createElement('li');
                        let element = document.getElementById('University');
                        $(newElement).text('Rezekne academy of technologies');
                        element.appendChild(newElement);
                            }else{
                                if(prof == 'Interior design'){
                                    let newElement = document.createElement('li');
                        let element = document.getElementById('University');
                        $(newElement).text('Rezekne academy of technologies');
                        element.appendChild(newElement);
                                }else{
                                    if(prof == 'financial management'){
                                        let newElement = document.createElement('li');
                        let element = document.getElementById('University');
                        $(newElement).text('Rezekne academy of technologies');
                        element.appendChild(newElement);
                                    }else{
                                        if(prof == 'Philology'){
                                            let newElement = document.createElement('li');
                        let element = document.getElementById('University');
                        $(newElement).text('Rezekne academy of technologies');
                        element.appendChild(newElement);
                                        }else{
                                            let newElement = document.createElement('li');
                        let element = document.getElementById('University');
                        $(newElement).text('Dont found university');
                        element.appendChild(newElement);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }else{
                    if(city == 'Ventspils'){
                        if(prof == 'Language and intercultural communcation'){
                            let newElement = document.createElement('li');
                        let element = document.getElementById('University');
                        $(newElement).text('Ventspils university');
                        element.appendChild(newElement);
                        }else{
                            if(prof == 'Translation studies'){
                                let newElement = document.createElement('li');
                        let element = document.getElementById('University');
                        $(newElement).text('Ventspils university');
                        element.appendChild(newElement);    
                            }else{
                                if(prof == 'Business administration'){
                                    let newElement = document.createElement('li');
                        let element = document.getElementById('University');
                        $(newElement).text('Ventspils university');
                        element.appendChild(newElement);
                                }else{
                                    if(prof == 'Information technology'){
                                        let newElement = document.createElement('li');
                        let element = document.getElementById('University');
                        $(newElement).text('Ventspils university');
                        element.appendChild(newElement);
                                    }else{
                                        if(prof == 'Electronics'){
                                            let newElement = document.createElement('li');
                        let element = document.getElementById('University');
                        $(newElement).text('Ventspils university');
                        element.appendChild(newElement);
                                        }else{
                                            if(prof == 'International business and export management'){
                                                let newElement = document.createElement('li');
                        let element = document.getElementById('University');
                        $(newElement).text('Ventspils university');
                        element.appendChild(newElement);
                                            }else{
                                                let newElement = document.createElement('li');
                        let element = document.getElementById('University');
                        $(newElement).text('Dont found university');
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
});
  



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