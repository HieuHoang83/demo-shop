let $=document.querySelector.bind(document)
let $$=document.querySelectorAll.bind(document)

var App={
    isLogin:false,
    isModal:false,
    isUser:false,
    isInput:false,
    HanderLogin:function()
    {
        
        const modal= $(".div--modal")
       
       let login=modal.querySelector(".log-in")
        let register=modal.querySelector(".register")
       let controllogin=$(".setting-user-item--separate")
       let modalOverlay=$(".modal__overlay")
       let bottonBacks=$$(".btn__control-back")
       controllogin.onclick=(e)=>
       {
            e.preventDefault();
            this.isModal=true;
            if(this.isModal){
                modal.classList.remove("div--disable")
              }
            if(this.isLogin==false)
            {
                login.classList.add("dis-block")
            }
            
       }
       
       let bottonLogins=document.querySelectorAll(".modal__header--content-login")
       Array.from(bottonLogins).forEach(function(bottonLogin,index)
        {
            bottonLogin.onclick=function()
            {
            if(this.isLogin==false)
            {
                this.isLogin=true;
                login.classList.toggle("dis-block")
                register.classList.toggle("dis-block")
            }
            else{
                this.isLogin=false;
                login.classList.toggle("dis-block")
                register.classList.toggle("dis-block");
                
            }
            }
        });

        Array.from(bottonBacks).forEach(function(bottonBack)
        {
            bottonBack.onclick=()=>
            {
                this.isLogin=false;
                this.isModal=false;
                login.classList.remove("dis-block")
                register.classList.remove("dis-block")

            }
        })
        
        modalOverlay.onclick=(e)=>
        {
                this.isLogin=false;
                this.isModal=false;
                login.classList.remove("dis-block")
                register.classList.remove("dis-block")
        }

            
        
      
       
    },
    HanderSearch:function()
    {
        let input_element=$(".header__search-input")
        let Search_history=$(".search-history")
        input_element.onfocus=function()
        {
            Search_history.classList.remove("div--disable")
            let isRemove=true;
            let SearchList=$(".search-history__list")
            SearchList.onclick=(e)=>{
                input_element.value=e.target.innerText;
                input_element.focus();
            }
           
            
            Array.from($$(".search-history__list-item")).forEach((SearchIteam)=>{
                SearchIteam.onclick=function(e)
                {
                    e.preventDefault();
                }
                
            })            
        }
        document.onclick=(e)=>
        {
            let itemTarget=e.target;
            while(itemTarget.parentElement)
            {
                if(itemTarget.matches(".search-history"))
                {
                    isRemove=false;
                    break;
                }
                else{
                    itemTarget=itemTarget.parentElement;
                    isRemove=true;
                }
            }
            if(e.target.matches(".header__search-input"))
            {
                isRemove=false;
                Search_history.classList.remove("div--disable")
            }
            console.log(`isRemove: ${isRemove}`)
            if(isRemove)
            {
                Search_history.classList.add("div--disable")
                isRemove=false;
            }
            // if(isRemove||isSearch)
            // {
            //     Search_history.classList.add("div--disable")
            //     isSearch=false;
            // }
            
        }
        
        

    },
    StartApp:function()
    {
        App.HanderLogin()
        App.HanderSearch()

    }
}
App.StartApp()
