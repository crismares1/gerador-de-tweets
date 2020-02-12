<template>
  <section class="home">
    <div class="container">
      <div class="row">
        <div class="select mx-auto">
          <form>
            <div class="form-group">
              <select class="form-control" id="selectUser">
                <option>Selecione o usuário</option>
              </select>
            </div>
          </form>
        </div>
        <div class="col-md-12">
          <div class="tweet mx-auto">
            <ul class="list-unstyled">
                <li class="media">
                  <img class="mr-3 photo" src="https://pbs.twimg.com/profile_images/1160988013599571969/wMUqo4_r_400x400.jpg" alt="nome" />
                  <div class="media-body">
                    <img src="@/assets/img/bottom-icon.svg" class="icon float-right" alt="ícon bottom" />
                    <h5 class="mt-0 mb-0">Felipe Neto <img src="@/assets/img/verified-account.png" class="verified-account" /></h5>
                    <h6 class="mt-0 mb-0">@felipeneto</h6>
                  </div>
                </li>
                <li class="mt-2">
                    <textarea class="form-control" spellcheck="false" maxlength="280" placeholder="Digite aqui...">Se inscrevam no meu canal</textarea>
                </li>
                <li class="details-tweet mt-4">
                  <p class="details-tweet">7:55 PM · 11 de fev de 2020 <a href="https://help.twitter.com/using-twitter/how-to-tweet#source-labels" rel="noopener noreferrer" target="_blank">Twitter Web App</a></p>
                </li>
                <li class="details-tweet ma">
                  <hr />
                  <p>
                    <strong>47 mil</strong> Retweets 
                    <span class="mr-2"></span> 
                    <strong>72,5 mil</strong> Curtidas
                  </p>
                  <hr />
                </li>
                <li>
                  <img src="@/assets/img/icons-details.png" class="icons-details d-block" alt="ícons details" />
                  <hr />
                </li>
              </ul>
          </div>
        </div>
        <div class="select mx-auto mt-3">
          <form>
            <div class="form-group">
              <button class="btn btn-primary mx-auto d-block">exportar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  props: {
  }
}
</script>

<style lang="scss">
.home {
  color: #000;
  margin-top: 10rem;
  .select {
    max-width: 600px;
    width: 600px;
  }
  .tweet {
    max-width: 600px;
    width: 600px;
    min-height: 200px;
    height: auto;
    border: 1px solid #eee;
    padding: 15px;
    background-color: #fff;
    border-radius: 8px;
    .photo {
      width: 48px;
      height: 48px;
      object-fit: cover;
      margin-right: 10px;
      border-radius: 50%;
      cursor: pointer;
    }
    h5 {
      line-height: 1.3125;
      font-weight: 700;
      font-size: 16px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
      .verified-account {
        max-width: 15px;
        width: 15px;
        position: relative;
        top: -5px;
      }
    }
    h6 {
      color: rgb(101, 119, 134);
      font-size: 12px;
      cursor: pointer;
    }
    .icon {
      cursor: pointer;
      width: 12px;
      max-width: 12px;
      position: relative;
      top: 9px;
      font-weight: 700;
    }
    textarea {
      border: 0;
      border-radius: 0;
      box-shadow: none;
      resize: none;
      height: 33px;
      max-height: 400px;
      outline: none;
      padding: 0px;
      overflow: hidden;
      font-size: 23px;
      color: #000;
      display:block;
      &:active {
        box-shadow: none;
        border: none;
      }
    }
    .details-tweet {
      p {
        font-size: 14px;
        color: rgb(101, 119, 134);
        a {
          color: rgb(27, 149, 224);
        }
      }
      strong {
        color: #000;
      }
    }
    .icons-details {
      margin: 0 auto;
      float: none;
      margin-bottom: -5px;
      margin-top: -5px;
    }
    .ma {
      margin-bottom: -5px;
      margin-top: -5px;
    }
  }
  .btn-primary {
    background: transparent;
    color: #000;
    border: 1px solid #000;
    border-radius: 20px;
    padding-left: 5rem;
    padding-right: 5rem;
  }
}

@media (max-width: 768px) {
  .select {
    width: 450px !important;
    overflow: scroll;
  }
   .tweet {
    width: 450px !important;
    overflow: scroll;
  }
}

@media (max-width: 414px) {
  .select {
    width: 350px !important;
    overflow: scroll;
  }
   .tweet {
    width: 350px !important;
    overflow: scroll;
  }
}

@media (max-width: 320px) {
  .select {
    width: 280px !important;
    overflow: scroll;
  }
   .tweet {
    width: 280px !important;
    overflow: scroll;
  }
}
</style>
