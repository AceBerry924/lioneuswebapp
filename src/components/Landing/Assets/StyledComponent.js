import styled from "styled-components";

export const MainStyle = styled.div`
    .search-icon{
		height: 1rem;
		height: 0.75rem;
		margin: 4px;
		outline: none;
		border: none;
    }
    
    .lioneus-tag{
        text-align: center;
        font-size: 0.85rem;
        display: block;
        font-size: 1rem;
        }
    .lioneus-tag a{
        color: #0F9D58;
        }
    #explore-text{
		font-size: 1rem;
		color: rgba(0,0,0,.54)
        }
    .lioneus-tag:hover{
        text-decoration: underline;
        }
    .location-svg{
        height: 1.7rem;
    }
     .explore-svg{
        height: 2.5rem;
        margin: 0.2rem 3rem;
    }
    .search-svg{
        height: 1.4rem; 
    }

    .block-footer{
        font-size: 2rem;
    }
    .kjZkcE .form-control:focus {
        box-shadow: 0 1px 6px 0 rgba(32,33,36,0.2)
    }
    .lioneus_input_section {
        height: 100px;
    }
	.textalignleft
	{
		text-align:left;
		padding:0 20px;
	}
	.has-search .form-control {
        padding-left: 13px;
        padding-left: 50px;
        border-radius: 50px ;
        height: 50px;
        transition: none;
	}
	.has-search .form-control-feedback {
		position: absolute;
		z-index: 2;
		display: block;
		width: 2.375rem;
		height: 2.375rem;
		line-height: 2.375rem;
		text-align: center;
		pointer-events: none;
		color: #aaa;
	}
	.lioneus_content {
        width: 630px;
		display: block;
		margin: auto;
		// transform: translateY(-65px);
		position: relative;
		z-index: 99;
	}
	.lioneus_search {
		height: 30vh;
	}

	.button {
		height: 36px;
		line-height: 27px;
		background-image: -webkit-gradient(linear,left top,left bottom,from(#f5f5f5),to(#f1f1f1));
		background-image: -webkit-linear-gradient(top,#f5f5f5,#f1f1f1);
		-webkit-border-radius: 2px;
		-webkit-user-select: none;
		background-color: #f2f2f2;
		border: 1px solid #f2f2f2;
		border-radius: 4px;
		color: #5F6368;
		outline: none;
		cursor: pointer;
		font-size: 17px;
		margin: 11px 4px;
		min-width: 54px;
		padding: 0 16px;
		text-align: center;
	}
	.focus{
		border: none;
		box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
		border-color: rgba(223,225,229,0);
		 border-bottom-left-radius: 0;
		 border-bottom-right-radius: 0;
		 border-bottom: none; 
	}
	.form-control:focus {
       border: none;
       box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
       border-color: rgba(223,225,229,0);
       border-bottom: none; 
	}
	#form-control{
		border: none;
		box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
		border-color: rgba(223,225,229,0);
		border-bottom: none; 
	}
    .form-control:hover {
        box-shadow: 0 1px 6px 0 rgba(32,33,36,0.2);
        border: none;
    }
    .form-control:active{}
    .search-outline{
    border-top: 1px solid #e8eaed;
    margin: 0 20px 0 14px;
    padding-bottom: 4px;
    }
	.search_main {
		position: relative;
	}
	#btns_search button {

	}
	.input_dropdown_h::-webkit-scrollbar {
		width: 0.5em !important;
		scroll-behavior: smooth !important;
	  }
	  @-moz-document url-prefix() {
		.input_dropdown_h {
			overflow: auto;
			scroll-behavior: smooth !important;
			border-radius: 10px !important;
		}
	  }
    
	.input_dropdown {
		background: white;
		position: absolute;
		width: 100%;
		display: none;
        border: 0;
        border-radius: 0 0 24px 24px;
        box-shadow: 0 4px 6px 0 rgba(32,33,36,0.28);
        padding-bottom: 4px;
        overflow: hidden;
		border-bottom-left-radius: 15px;
		border-bottom-right-radius: 15px;
		border-top: 0;
		z-index: 9999999 !important;
    }


	.input_dropdown_h {
		height : inherit;
		max-height : 210px;
		overflow-y: scroll;
		background-color : white ;
	}
	@media screen and (max-width: 383px) {
		.input_dropdown_h {
			height: 1000px;
		}
	}
	@media screen and (max-width: 576px) {
		.input_dropdown_h {
			height: auto;
			overflow-y: none;
		}
		.input_dropdown_h::-webkit-scrollbar-track {
		
			-webkit-box-shadow: none !important;
		  }
	}

	.Search_Count_History {
		padding: 20px 13px 0px 20px;
		line-height: 20px;
		background-color: white;
        display: flex;
        justify-content: flex-start;
		position: relative;
		cursor: pointer;
	}
	.Search_Count_History:hover{
		background-color : #f5f5f5;
	} 
    .Search_Count_History p {
        padding-left: 10px;
        padding-bottom: -10px;
	}
	.input_activated {
		border-radius: 15px !important;
		border-bottom-left-radius: 0 !important;
		border-bottom-right-radius: 0 !important;

	}


	.search_div_activated {
		/*box-shadow: 0 0 6px black;*/
        border-radius: 80px;
          border-color: rgba(223,225,229,0);
        box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
		outline: 0;
        box-shadow: unset !important;
            border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
	}
	.ul_justify {
		display: flex;
		justify-content: space-between;
	}
	.ul_justify ul {
		margin: 0;
		padding: 0;
	}
	.ul_justify ul li {
		display: inline-block;
		font-size: 14px;
	}
	.ul_justify ul li a {
		padding-right: 10px;
		display: inline-block;
		color: rgba(0,0,0,.54);
	}
	.location {
		color: rgba(0,0,0,.54);
	}

	.has-search button {
		display: none;
	}
	.btn-warning {
		background: #C5B358;
		border-color: #C5B358;
		color: #fff;
	}
	.form-control-feedback1 {
		display: none;
    }
    .has-search .location-icon {
		position: absolute;
		left: 0;
		z-index: 99;
        display: block;
        height: 50px;
        top: 0;
        padding: .375rem .75rem;
        background-color: transparent;
        color: black;
        border: none;
        
	}
	.has-search button {
		position: absolute;
		right: 0;
		z-index: 99;
        display: block;
        height: 0px;
        top: 0;
        color: black;
        border: none;
        
    }
    .has-search  #search-button{
        background-color: white;
        height: 40px;
        margin: 5px 10px;
    }
    .btn.btn-warning{
        position: absolute;
        right: 0;
        margin: 10px;
        padding: 0px;
        z-index: 99;
        display: block;
        /* height: 50px; */
        top: 0;
        background-color: white;
    }
    .location-icon{
        display: block;
    }
    .blockquote-footer {
        font-size: 1rem;
	}
	@media only screen and (max-device-width: 480px) {
		// background-color : blue;
	}
	@media screen and (max-width: 576px) {
            .search_div_activated .has-search .location-icon {
            display: none;
        }
        .has-search  #search-button{
            background-color: white;
            height: 30px;
            margin: 5px 10px;
        }
        .explore-svg p{
            font-size: 1rem;
        }
         .has-search .form-control{
			height: 40px;
			border-radius: 50px !important;
        }
        .search-svg{
            height: 1.4rem;
        }
        .location-svg{
            height: 1.4rem;
        }
        .explore-svg{
            height: 2rem
        }
        .has-search .location-icon{
            height: 40px;
        }
        .has-search button {
            // background: #C5B358;
            // border-color: #C5B358;
            color: white;
            border-radius: 0;
            border-top-right-radius: 50px;
            border-bottom-right-radius: 50px;
        }
        .lioneus_content {
            width: 100%;
            display: block;
            margin: 0px;
        }
		div#btns_search {
			display: none;
		}

		.ul_justify {
			display: block;
			text-align: center;
		}
		.search_div_activated {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			background: white;
			z-index: 9;
			height: 100%;
		}
		.footer {
			position: unset;
		}
		.lioneus_content {
			transform: unset;
		}
		.input_activated {
			border-radius: 0 !important;
		}
		.input_dropdown {
			position: unset;
			box-shadow: none;
		}

		.has-search .form-control {
			padding-left: 3rem;
		}
		.has-search .form-control-feedback {
			display: none;
		}
		.search_div_activated .form-control-feedback1 {
			display: inline-block;
			position: absolute;
            top: 12px;
			left: 11px;
			z-index: 9999;
        }
        .search_div_activated .has-search .location-icon{
            padding-left : 40px;
        }
        .fas.fa-arrow-left{
            font-size: 20px;
        }
		.search_div_activated .has-search .form-control {
			padding-left: 4rem;
		}
		.search_div_activated .has-search .form-control {
			border-radius: 0px !important;
		}
		.search_div_activated .has-search button {
			border-radius: 0px !important;
        }
`;

export const NavBarSearch = styled.div`
    .search-icon{
		height: 1rem;
		height: 0.75rem;
    	margin: 4px;
    }
	.input_dropdown_h::-webkit-scrollbar {
		width: 0.5em !important;
		scroll-behavior: smooth !important;
	  }
	  @-moz-document url-prefix() {
		.input_dropdown_h {
			overflow: auto;
			scroll-behavior: smooth !important;
			border-radius: 10px !important;
		}
	  }

	.input_dropdown_h {
		height : inherit !important;
		max-height : 210px !important;
		overflow-y: scroll !important;
		background-color: white;
		border-radius: 0 0 20px 20px !important;
	}
	.Search_Count_History {
		padding: 10px !important;
		line-height: 20px;
		background-color: white;
        display: flex;
        justify-content: flex-start !important;
		position: relative; 
		cursor: pointer;
		height: 50px;
		align-items: center;
	}
	.Search_Count_History:hover{
		background-color : #f5f5f5;
	} 
    .Search_Count_History p {
		padding: 0;
		margin: 0;
		padding-left: 20px;
		text-align: left !important;
	}

	.ul_justify ul li {
		display: inline-block;
		font-size: 14px;
	}
`;

export default { MainStyle, NavBarSearch };
