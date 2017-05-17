angular.module('contrib').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/modules/arrecadacao/arrecadacao.html',
    "<section> \n" +
    "\n" +
    "<md-content layout=\"column\" layout-fill>\n" +
    "\n" +
    "<div>\n" +
    "    <md-button ui-sref=\"home.newPayment\" class=\"md-raised md-primary\">Registrar contribuição</md-button>\n" +
    "</div>\n" +
    "\n" +
    "<div>\n" +
    "    <md-toolbar class=\"md-table-toolbar md-default\">\n" +
    "      <div class=\"md-toolbar-tools\">\n" +
    "        <span>Contribuiçoes</span>\n" +
    "      </div>\n" +
    "    </md-toolbar>\n" +
    "  <md-table-container  md-progress=\"promise\">\n" +
    "    <table >\n" +
    "        <thead md-head md-order=\"query.order\" md-on-reorder=\"getDesserts\">\n" +
    "            <tr md-row class=\"even\">\n" +
    "                <td md-column md-order-by=\"nameToLower\">ID contribuição</td>\n" +
    "                <td md-column >ID do contribuinte</td>\n" +
    "                <td md-column >Nome do contribuinte</td>\n" +
    "                <td md-column >Data</td>\n" +
    "                <td md-column >Valor</td>\n" +
    "                <td  md-column ></td>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "\n" +
    "        <tbody md-body>\n" +
    "            <tr md-row md-select=\"payment\" md-select-id=\"name\" md-auto-select ng-repeat=\"payment in payments\"  class=\"even\">\n" +
    "                <td md-cell>{{$index+1}}</td>\n" +
    "                <td md-cell>{{payment.contribuinte.numero}}</td>\n" +
    "                <td md-cell>{{payment.contribuinte.nome}}</td>\n" +
    "                <td md-cell>{{payment.data |  date: 'dd/MM/yyyy'}}</td>\n" +
    "                <td md-cell>{{payment.valor | finance:true:2 }}</td>\n" +
    "                <td md-cell>\n" +
    "                    <md-button class=\"md-raised md-primary\" ui-sref=\"home.viewPayment({id:payment.id})\">View</md-button>\n" +
    "                    <md-button class=\"md-raised md-primary\"  ng-click=\"deletePayment(payment)\">Delete</md-button>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "  </md-table-container>\n" +
    "  <md-table-pagination md-limit=\"query.limit\" md-limit-options=\"[5, 10, 15]\" md-page=\"query.page\" md-total=\"{{payments.count}}\" md-on-paginate=\"getDesserts\" md-page-select></md-table-pagination>\n" +
    "</div>\n" +
    "\n" +
    "</md-content>\n" +
    "\n" +
    "</section>\n" +
    "\n"
  );


  $templateCache.put('app/modules/arrecadacao/payments-add.html',
    "<div  layout=\"column\"  class=\"md-inline-form\" flex>\n" +
    "\n" +
    "  <md-content md-theme=\"docs-dark\" layout-gt-sm=\"column\" layout-padding  layout-fill>\n" +
    "    <div>\n" +
    "      <md-input-container >\n" +
    "        <label>Valor da contribuição</label>\n" +
    "        <input ng-model=\"payments.valor\"  md-placeholder=\"Valor da contribuição\"  ui-money-mask=\"2\" >\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    \n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Data de contribuição</label>\n" +
    "        <input ng-model=\"payments.data\" type=\"date\" placeholder=\"Data de contribuição\" min=\"2017-05-01\" >\n" +
    "         <!-- <md-datepicker ng-model=\"payments.data\" ui-date-mask></md-datepicker> -->\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    \n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Descrição</label>\n" +
    "        <input ng-model=\"payments.desc\"  md-placeholder=\"Nome do conjuge do contribuinte\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Observações</label>\n" +
    "        <textarea ng-model=\"payments.obs\" md-maxlength=\"150\" rows=\"5\" md-select-on-focus></textarea>        \n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    \n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Contribuinte</label>\n" +
    "        <!-- <input ng-model=\"payments.nome_user_contrib\" placeholder=\"Contribuinte\"> -->\n" +
    "        <md-select ng-model=\"payments.contribuinte\">\n" +
    "            \n" +
    "            <md-option ng-repeat=\"contribuinte in contribs\" ng-value=\"contribuinte\">\n" +
    "              {{contribuinte.nome}}\n" +
    "            </md-option>\n" +
    "          </md-select>\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "          <md-button class=\"md-raised md-primary\" ng-click=\"addPayment()\">Salvar</md-button>        \n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  </md-content>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('app/modules/arrecadacao/payments-delete.html',
    ""
  );


  $templateCache.put('app/modules/arrecadacao/payments-edit.html',
    "<div  layout=\"column\"  class=\"md-inline-form\" flex>\n" +
    "\n" +
    "  <md-content md-theme=\"docs-dark\" layout-gt-sm=\"column\" layout-padding  layout-fill>\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Valor da contribuição</label>\n" +
    "        <input ng-model=\"payments.valor\" placeholder=\"Valor da contribuição\"  ui-money-mask=\"2\" >\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    \n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Data de contribuição</label>\n" +
    "        <input ng-model=\"payments.data\" placeholder=\"Data de contribuição\" ui-date-mask>\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    \n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Descrição</label>\n" +
    "        <input ng-model=\"payments.desc\" placeholder=\"Nome do conjuge do contribuinte\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Observações</label>\n" +
    "        <textarea ng-model=\"payments.obs\" md-maxlength=\"150\" rows=\"5\" md-select-on-focus></textarea>        \n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    \n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Contribuinte</label>\n" +
    "        <input ng-model=\"payments.nome_user_contrib\" placeholder=\"Contribuinte\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "          <md-button class=\"md-raised md-primary\" ng-click=\"addPayment()\">Atualizar</md-button>        \n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  </md-content>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('app/modules/arrecadacao/payments-view.html',
    "<div  layout=\"column\" ng-cloak class=\"md-inline-form\">\n" +
    "\n" +
    "  <md-content md-theme=\"docs-dark\" layout-gt-sm=\"column\" layout-padding  layout-fill>\n" +
    "\n" +
    "\n" +
    "<table class=\"table movietable\">\n" +
    "    <tr>\n" +
    "        <td><h3>Detalhes da contribuição {{payments.$index}}</h3></td>\n" +
    "        <td></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>ID</td>\n" +
    "        <td>{{payments.id}}</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Valor</td>\n" +
    "        <td>{{payments.valor |  finance:true:2 }}</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Data</td>\n" +
    "        <td>{{payments.data |  date: 'dd/MM/yyyy' }}</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>ID do contribuinte</td>\n" +
    "        <td>{{payments.id_user_contrib}}</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Nome do contribuinte</td>\n" +
    "        <td>{{payments.nome_user_contrib}}</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Data do registro</td>\n" +
    "        <td>{{payments.createdAt |  date: 'dd/MM/yyyy' }}</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Data da ultima alteração</td>\n" +
    "        <td>{{payments.updatedAt |  date: 'dd/MM/yyyy' }}</td>\n" +
    "    </tr>\n" +
    "\n" +
    "</table>\n" +
    "<div>\n" +
    "    <md-button class=\"md-raised md-primary\" ui-sref=\"home.editPayment({id:payments.id})\">Edit</md-button>\n" +
    "    \n" +
    "</div>\n" +
    "\n" +
    "</md-content>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/auth/auth.html',
    "\n" +
    "<md-content layout=\"column\" flex layout-fill layout-align=\"center center\" class=\"md-inline-form main\">\n" +
    " \n" +
    " <div class=\"login\">\n" +
    "         <div layout=\"row\" layout-align=\"center\" >ENTRAR</div>\n" +
    "        <md-divider></md-divider>\n" +
    "\n" +
    "\n" +
    "    <div ng-show=\"error\" class=\"alertlogin\">{{error}}</div>\n" +
    "    <br><br>\n" +
    "\n" +
    "    <form name=\"form\" ng-submit=\"login()\" role=\"form\">\n" +
    "\n" +
    "        <div  layout-gt-xs=\"row\">\n" +
    "        <md-input-container  class=\"md-block\">\n" +
    "            <label>E-Mail</label>\n" +
    "            \n" +
    "            <input type=\"text\" ng-model=\"username\" required />\n" +
    "            <span ng-show=\"form.username.$dirty && form.username.$error.required\" class=\"help-block\">E-Mail é obrigatório</span>\n" +
    "        </md-input-container>\n" +
    "        </div>\n" +
    "        <div>\n" +
    "        <md-input-container   class=\"md-block\">\n" +
    "            <label for=\"password\">Password</label>\n" +
    "            <input type=\"password\" ng-model=\"password\" required />\n" +
    "            <span ng-show=\"form.password.$dirty && form.password.$error.required\" class=\"help-block\">Senha é obrigatório</span>\n" +
    "        </div>\n" +
    "        </md-input-container>\n" +
    "        <div >\n" +
    "            <md-button class=\"md-raised md-primary\" type=\"submit\" ng-disabled=\"form.$invalid || dataLoading\" >Login</md-button>\n" +
    "            <img ng-if=\"dataLoading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "\n" +
    "</md-content>\n"
  );


  $templateCache.put('app/modules/contribs/_form.html',
    "<div  layout=\"column\" ng-cloak class=\"md-inline-form\">\n" +
    "\n" +
    "  <md-content md-theme=\"docs-dark\" layout-gt-sm=\"column\" layout-padding  layout-fill>\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Nome</label>\n" +
    "        <input ng-model=\"user.name\" placeholder=\"Nome do Usuário\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>E-Mail</label>\n" +
    "        <input ng-model=\"user.email\" placeholder=\"E-Mail (login) do Usuário\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Senha</label>\n" +
    "        <input ng-model=\"user.password\" type=\"password\" placeholder=\"Senha do Usuário\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "          <md-button class=\"md-raised md-primary\">Criar Usuário</md-button>        \n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  </md-content>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('app/modules/contribs/contribs-add.html',
    "<div  layout=\"column\"  class=\"md-inline-form\" flex>\n" +
    "\n" +
    "  <md-content md-theme=\"docs-dark\" layout-gt-sm=\"column\" layout-padding  layout-fill>\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Nome</label>\n" +
    "        <input ng-model=\"contribs.nome\" placeholder=\"Nome do Contribuinte\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Numero</label>\n" +
    "        <input ng-model=\"contribs.numero\" placeholder=\"Numero/Codigo do Contribuinte\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>E-Mail</label>\n" +
    "        <input ng-model=\"contribs.email\" placeholder=\"E-Mail do Contribuinte\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Data de Nascimento</label>\n" +
    "        <input ng-model=\"contribs.dtnasc\" placeholder=\"Data de Nascimento do Contribuinte\" ui-date-mask>\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Data de Batismo</label>\n" +
    "        <input ng-model=\"contribs.dtbatismo\" placeholder=\"Data de Batismo do Contribuinte\" ui-date-mask>\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Data de Crisma</label>\n" +
    "        <input ng-model=\"contribs.dtcrisma\" placeholder=\"Data de Crisma do Contribuinte\" ui-date-mask>\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Data de Aniverssário de Casamento</label>\n" +
    "        <input ng-model=\"contribs.dtanivercasamento\" placeholder=\"Data de Aniverssário de Casamento do Contribuinte\" ui-date-mask>\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Nome do conjuge</label>\n" +
    "        <input ng-model=\"contribs.nomeconjuge\" placeholder=\"Nome do conjuge do Contribuinte\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Data do Aniverssário do Conjuge</label>\n" +
    "        <input ng-model=\"contribs.dtaniverconjuge\" placeholder=\"Data do Aniverssário do Contribuinte\" ui-date-mask>\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Dependentes</label>\n" +
    "        <input ng-model=\"contribs.dependentes\" placeholder=\"Dependentes do Contribuinte\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Endereço</label>\n" +
    "        <input ng-model=\"contribs.endereco\" placeholder=\"Endereço do Contribuinte\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Bairro</label>\n" +
    "        <input ng-model=\"contribs.bairro\" placeholder=\"Bairro do Contribuinte\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "	<div>\n" +
    "      <md-input-container>\n" +
    "        <label>Estado</label>\n" +
    "        <!-- <input ng-model=\"contribs.estado\" placeholder=\"Estado do Contribuinte\" > -->\n" +
    "        <md-select ng-model=\"contribs.estado\" md-on-close=\"buscarCidadesPorSigla(contribs.estado)\">\n" +
    "            <md-option><em>Escolha um Estado</em></md-option>\n" +
    "            <md-option ng-repeat=\"estado in estados\" ng-value=\"estado.sigla\" ng-disabled=\"$index === 1\">\n" +
    "              {{estado.sigla}} - {{estado.nome}}\n" +
    "            </md-option>\n" +
    "          </md-select>\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Cidade</label>\n" +
    "        <!-- <input ng-model=\"contribs.cidade\" placeholder=\"Cidade do Contribuinte\"> -->\n" +
    "        <md-select ng-model=\"contribs.cidade\">\n" +
    "            <md-option><em>Escolha uma ciadade</em></md-option>\n" +
    "            <md-option ng-repeat=\"cidade in cidades\" ng-value=\"cidade\" ng-disabled=\"$index === 1\">\n" +
    "              {{cidade}}\n" +
    "            </md-option>\n" +
    "          </md-select>\n" +
    "        \n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Cep</label>\n" +
    "        <input ng-model=\"contribs.cep\" placeholder=\"CEP do Contribuinte\"  ui-br-cep-mask>\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Telefone</label>\n" +
    "        <input ng-model=\"contribs.telefone\" placeholder=\"Telefone do Contribuinte\"  ui-br-phone-number>\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Celular</label>\n" +
    "        <input ng-model=\"contribs.celular\" placeholder=\"Celular do Contribuinte\"  ui-br-phone-number>\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "          <md-button class=\"md-raised md-primary\" ng-click=\"addContrib()\">Criar Contribuinte</md-button>        \n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  </md-content>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('app/modules/contribs/contribs-edit.html',
    "\n" +
    "\n" +
    "<div  layout=\"column\" ng-cloak class=\"md-inline-form\">\n" +
    "\n" +
    "  <md-content md-theme=\"docs-dark\" layout-gt-sm=\"column\" layout-padding  layout-fill>\n" +
    "	<div>\n" +
    "	  <md-toolbar class=\"md-table-toolbar md-default\">\n" +
    "	      <div class=\"md-toolbar-tools\">\n" +
    "	        <span>Alteração de contribuinte</span>\n" +
    "	      </div>\n" +
    "	    </md-toolbar>\n" +
    "	</div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Nome</label>\n" +
    "        <input ng-model=\"contribs.nome\" placeholder=\"Nome do Contribuinte\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Numero</label>\n" +
    "        <input ng-model=\"contribs.numero\" placeholder=\"Numero/Codigo do Contribuinte\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>E-Mail</label>\n" +
    "        <input ng-model=\"contribs.email\" placeholder=\"E-Mail do Contribuinte\" >\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Data de Nascimento</label>\n" +
    "        <input ng-model=\"contribs.dtnasc\" placeholder=\"Data de Nascimento do Contribuinte\" ui-date-mask >\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Data de Batismo</label>\n" +
    "        <input ng-model=\"contribs.dtbatismo\" placeholder=\"Data de Batismo do Contribuinte\" ui-date-mask>\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Data de Crisma</label>\n" +
    "        <input ng-model=\"contribs.dtcrisma\" placeholder=\"Data de Crisma do Contribuinte\" ui-date-mask>\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Data de Aniverssário de Casamento</label>\n" +
    "        <input ng-model=\"contribs.dtanivercasamento\" placeholder=\"Data de Aniverssário de Casamento do Contribuinte\" ui-date-mask>\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Nome do conjuge</label>\n" +
    "        <input ng-model=\"contribs.nomeconjuge\" placeholder=\"Nome do conjuge do Contribuinte\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Data do Aniverssário do Conjuge</label>\n" +
    "        <input ng-model=\"contribs.dtaniverconjuge\" placeholder=\"Data do Aniverssário do Contribuinte\" ui-date-mask>\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Dependentes</label>\n" +
    "        <input ng-model=\"contribs.dependentes\" placeholder=\"Dependentes do Contribuinte\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Endereço</label>\n" +
    "        <input ng-model=\"contribs.endereco\" placeholder=\"Endereço do Contribuinte\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Bairro</label>\n" +
    "        <input ng-model=\"contribs.bairro\" placeholder=\"Bairro do Contribuinte\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "	<div>\n" +
    "      <md-input-container>\n" +
    "        <label>Estado</label>\n" +
    "        <!-- <input ng-model=\"contribs.estado\" placeholder=\"Estado do Contribuinte\" > -->\n" +
    "        <md-select ng-model=\"contribs.estado\" md-on-close=\"buscarCidadesPorSigla(contribs.estado)\">\n" +
    "            <md-option><em>Escolha um Estado</em></md-option>\n" +
    "            <md-option ng-repeat=\"estado in estados\" ng-value=\"estado.sigla\" ng-disabled=\"$index === 1\">\n" +
    "              {{estado.sigla}} - {{estado.nome}}\n" +
    "            </md-option>\n" +
    "          </md-select>\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Cidade</label>\n" +
    "        <!-- <input ng-model=\"contribs.cidade\" placeholder=\"Cidade do Contribuinte\"> -->\n" +
    "        <md-select ng-model=\"contribs.cidade\" placeholder=\"{{contribs.cidade}}\" >\n" +
    "            <md-option><em>Escolha uma cidade</em></md-option>\n" +
    "            <md-option ng-repeat=\"cidade in cidades\" ng-value=\"cidade\" ng-disabled=\"$index === 1\">\n" +
    "              {{cidade}}\n" +
    "            </md-option>\n" +
    "          </md-select>\n" +
    "        \n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Cep</label>\n" +
    "        <input ng-model=\"contribs.cep\" placeholder=\"CEP do Contribuinte\"  ui-br-cep-mask>\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Telefone</label>\n" +
    "        <input ng-model=\"contribs.telefone\" placeholder=\"Telefone do Contribuinte\" ui-br-phone-number>\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Celular</label>\n" +
    "        <input ng-model=\"contribs.celular\" placeholder=\"Celular do Contribuinte\" ui-br-phone-number>\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "          <md-button class=\"md-raised md-primary\" ng-click=\"updateContrib()\">Salvar</md-button>        \n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  </md-content>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('app/modules/contribs/contribs-view.html',
    "<div  layout=\"column\" ng-cloak class=\"md-inline-form\">\n" +
    "\n" +
    "  <md-content md-theme=\"docs-dark\" layout-gt-sm=\"column\" layout-padding  layout-fill>\n" +
    "\n" +
    "\n" +
    "<table class=\"table movietable\">\n" +
    "    <tr>\n" +
    "        <td><h3>Detalhes do contribuinte {{contribs.nome}}</h3></td>\n" +
    "        <td></td>\n" +
    "    </tr>\n" +
    "\n" +
    "    <tr>\n" +
    "        <td>Numero</td>\n" +
    "        <td>{{contribs.numero}}</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>E-Mail</td>\n" +
    "        <td>{{contribs.email}}</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Data de Nascimento</td>\n" +
    "        <td>{{contribs.dtnasc |  date: 'dd/MM/yyyy' }}</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Data de Batismo</td>\n" +
    "        <td>{{contribs.dtbatismo |  date : 'dd/MM/yyyy' }}</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Data de Crisma</td>\n" +
    "        <td>{{contribs.dtcrisma |  date : 'dd/MM/yyyy' }}</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Data de Aniverssário de Casamento</td>\n" +
    "        <td>{{contribs.dtanivercasamento |  date :'dd/MM/yyyy' }}</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Nome do conjuge</td>\n" +
    "        <td>{{contribs.nomeconjuge}}</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Data de Aniverssário do Conjuge</td>\n" +
    "        <td>{{contribs.dtaniverconjuge |  date : 'dd/MM/yyyy' }}</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Dependentes</td>\n" +
    "        <td>{{contribs.dependentes}}</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Endereço</td>\n" +
    "        <td>{{contribs.endereco}}</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Bairro</td>\n" +
    "        <td>{{contribs.bairro}}</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Estado</td>\n" +
    "        <td>{{contribs.estado}}</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Cidade</td>\n" +
    "        <td>{{contribs.cidade}}</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>CEP</td>\n" +
    "        <td>{{contribs.cep | brCep }}</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Telefone</td>\n" +
    "        <td>{{contribs.telefone | brPhoneNumber }}</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Celular</td>\n" +
    "        <td>{{contribs.celular | brPhoneNumber }}</td>\n" +
    "    </tr>\n" +
    "\n" +
    "</table>\n" +
    "<div>\n" +
    "    <md-button class=\"md-raised md-primary\" ui-sref=\"home.editContrib({id:contribs.id})\">Edit</md-button>\n" +
    "    \n" +
    "</div>\n" +
    "\n" +
    "</md-content>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/contribs/contribs.html',
    "<section> \n" +
    "\n" +
    "<md-content layout=\"column\" layout-fill>\n" +
    "\n" +
    "<div>\n" +
    "    <md-button ui-sref=\"home.newContrib\" class=\"md-raised md-primary\">Novo Contribuinte</md-button>\n" +
    "</div>\n" +
    "\n" +
    "<div>\n" +
    "    <md-toolbar class=\"md-table-toolbar md-default\">\n" +
    "      <div class=\"md-toolbar-tools\">\n" +
    "        <span>Contribuintes</span>\n" +
    "      </div>\n" +
    "    </md-toolbar>\n" +
    "  <md-table-container  md-progress=\"promise\">\n" +
    "    <table >\n" +
    "        <thead md-head md-order=\"query.order\" md-on-reorder=\"getDesserts\">\n" +
    "            <tr md-row class=\"even\">\n" +
    "                <td md-column md-order>Numero</td>\n" +
    "                <td md-column md-order-by=\"nameToLower\">Nome</td>\n" +
    "                <td md-column >Email</td>\n" +
    "                <td md-column >Telefone</td>\n" +
    "                <td  md-column ></td>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "\n" +
    "        <tbody md-body>\n" +
    "            <tr md-row md-select=\"contrib\" md-select-id=\"name\" md-auto-select ng-repeat=\"contrib in contribs\"  class=\"even\">\n" +
    "                <td md-cell>{{contrib.numero}}</td>\n" +
    "                <td md-cell>{{contrib.nome}}</td>\n" +
    "                <td md-cell>{{contrib.email}}</td>\n" +
    "                <td md-cell>{{contrib.telefone | brPhoneNumber }}</td>\n" +
    "                <td md-cell>\n" +
    "                    <md-button class=\"md-raised md-primary\" ui-sref=\"home.viewContrib({id:contrib.id})\">View</md-button>\n" +
    "                    <md-button class=\"md-raised md-primary\"  ng-click=\"deleteContrib(contrib)\">Delete</md-button>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "  </md-table-container>\n" +
    "  <md-table-pagination md-limit=\"query.limit\" md-limit-options=\"[5, 10, 15]\" md-page=\"query.page\" md-total=\"{{contribs.count}}\" md-on-paginate=\"getDesserts\" md-page-select></md-table-pagination>\n" +
    "</div>\n" +
    "\n" +
    "</md-content>\n" +
    "\n" +
    "</section>\n" +
    "\n"
  );


  $templateCache.put('app/modules/home/dashboard.html',
    "<div class=\"md-padding\" flex layout=\"column\" layout-fill >\n" +
    "    <md-card class=\"text-center\">\n" +
    "        <md-card-content>\n" +
    "            <p>\n" +
    "            <h3>Sistema de controle de contribuição/doação</h3>\n" +
    "            </p>\n" +
    "            <P></P>\n" +
    "            <P></P>\n" +
    "            <P></P>\n" +
    "            <P></P>\n" +
    "        </md-card-content>\n" +
    "    </md-card>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/home/home.html',
    "<md-sidenav layout=\"column\" class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"left\" md-is-locked-open=\"$mdMedia('gt-md')\" ng-show='telaLogin'>\n" +
    "    <div ng-controller=\"SidenavCtrl as vm\" ng-cloak>\n" +
    "        <md-toolbar class=\"md-tall md-hue-2\">\n" +
    "            <div layout=\"column\" class=\"md-toolbar-tools-bottom inset\">\n" +
    "                <div layout=\"row\">\n" +
    "                    <div flex=\"80\" style=\"margin-top: 10px;\">\n" +
    "                        <div>Contrib</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </md-toolbar>\n" +
    "        <md-list>\n" +
    "            <md-list-item ui-sref=\"home.dashboard\">\n" +
    "                <div class=\"inset\">\n" +
    "\n" +
    "                    <ng-md-icon icon=\"apps\"></ng-md-icon>\n" +
    "                </div>\n" +
    "                <p> Graficos </p>\n" +
    "            </md-list-item>\n" +
    "            <md-list-item ng-repeat=\"item in vm.menu\" ng-click=\"vm.navigateTo('home.' + item.link)\">\n" +
    "                <div class=\"inset\" ng-show=\"item.icon\">\n" +
    "                    <ng-md-icon icon=\"{{item.icon}}\"></ng-md-icon>\n" +
    "                </div>\n" +
    "                <p > {{ item.name }}</p>\n" +
    "            </md-list-item>\n" +
    "            <md-divider></md-divider>\n" +
    "            <md-subheader>Admin</md-subheader>\n" +
    "            <md-list-item ng-repeat=\"item in vm.admin\" ng-click=\"vm.showSettingsBottom($event)\" >\n" +
    "                <div class=\"inset\">\n" +
    "                    <ng-md-icon icon=\"{{item.icon}}\"></ng-md-icon>\n" +
    "                </div>\n" +
    "                <p> {{ item.title }}</p>\n" +
    "            </md-list-item>\n" +
    "        </md-list>\n" +
    "    </div>\n" +
    "</md-sidenav>\n" +
    "\n" +
    "<div layout=\"column\" class=\"relative  background\" layout-fill role=\"main\" ng-controller=\"LayoutCtrl as layout\" ng-cloak >\n" +
    "<!--ng-show=\"!showSearch\"-->\n" +
    "    <md-toolbar ng-show='telaLogin'>\n" +
    "        <div class=\"md-toolbar-tools\">\n" +
    "            <md-button ng-click=\"layout.toggleSidenav('left')\" hide-gt-md aria-label=\"Menu\">\n" +
    "                <ng-md-icon icon=\"menu\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <h3>{{vm.title}}</h3>\n" +
    "            <span flex></span>\n" +
    "            <md-button aria-label=\"Search\" ng-click=\"showSearch = !showSearch\">\n" +
    "                <ng-md-icon icon=\"search\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <md-menu>\n" +
    "                <md-button aria-label=\"Open Settings\" ng-click=\"layout.openMenu($mdOpenMenu, $event)\">\n" +
    "                    <md-icon> more_vert </md-icon>\n" +
    "                </md-button>\n" +
    "                <md-menu-content width=\"4\">\n" +
    "                    <md-menu-item>\n" +
    "                        <md-button ng-click=\"layout.changeProfile($event)\">\n" +
    "                            <md-icon>face</md-icon>\n" +
    "                            Profile\n" +
    "                        </md-button>\n" +
    "                    </md-menu-item>\n" +
    "                    <md-menu-item>\n" +
    "                        <md-button ng-click=\"layout.changePassword()\">\n" +
    "                            <md-icon>lock</md-icon>\n" +
    "                            Password\n" +
    "                        </md-button>\n" +
    "                    </md-menu-item>\n" +
    "                    <md-menu-divider></md-menu-divider>\n" +
    "                    <md-menu-item>\n" +
    "                        <md-button ng-click=\"layout.logOut()\">\n" +
    "                            <md-icon>power_settings_new</md-icon>\n" +
    "                            Logout\n" +
    "                        </md-button>\n" +
    "                    </md-menu-item>\n" +
    "                </md-menu-content>\n" +
    "            </md-menu>\n" +
    "        </div>\n" +
    "    </md-toolbar>\n" +
    "    <md-toolbar class=\"md-hue-1\" ng-show=\"showSearch\">\n" +
    "        <div class=\"md-toolbar-tools\">\n" +
    "            <md-button ng-click=\"showSearch = !showSearch\" aria-label=\"Back\">\n" +
    "                <ng-md-icon icon=\"arrow_back\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <h3 flex=\"10\">\n" +
    "                Back\n" +
    "            </h3>\n" +
    "            <md-input-container md-theme=\"input\" flex>\n" +
    "                <label>&nbsp;</label>\n" +
    "                <input ng-model=\"search.who\" placeholder=\"Search ...\">\n" +
    "            </md-input-container>\n" +
    "        </div>\n" +
    "    </md-toolbar>\n" +
    "    <md-content layout=\"column\" class=\"margen\" flex md-scroll-y >\n" +
    "        <div ui-view></div>\n" +
    "    </md-content>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/layouts/main-page/main-page.html',
    "    <md-toolbar ng-show=\"!showSearch\">\n" +
    "        <div class=\"md-toolbar-tools\">\n" +
    "            <md-button ng-click=\"layout.toggleSidenav('left')\" hide-gt-md aria-label=\"Menu\">\n" +
    "                <ng-md-icon icon=\"menu\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <h3>\n" +
    "                <a href=\"/\">contrib</a>\n" +
    "            </h3>\n" +
    "            <span flex></span>\n" +
    "            <md-button aria-label=\"Search\" ng-click=\"showSearch = !showSearch\">\n" +
    "                <ng-md-icon icon=\"search\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <md-menu>\n" +
    "                <md-button aria-label=\"Open Settings\" ng-click=\"layout.openMenu($mdOpenMenu, $event)\">\n" +
    "                            <md-icon> more_vert </md-icon>\n" +
    "                </md-button>\n" +
    "                <md-menu-content width=\"4\">\n" +
    "                    <md-menu-item>\n" +
    "                        <md-button ng-click=\"layout.changeProfile($event)\">\n" +
    "                            <md-icon>face</md-icon>\n" +
    "                            Profile\n" +
    "                        </md-button>\n" +
    "                    </md-menu-item>\n" +
    "                    <md-menu-item>\n" +
    "                        <md-button ng-click=\"layout.changePassword()\">\n" +
    "                            <md-icon>lock</md-icon>\n" +
    "                            Password\n" +
    "                        </md-button>\n" +
    "                    </md-menu-item>\n" +
    "                    <md-menu-divider></md-menu-divider>\n" +
    "                    <md-menu-item>\n" +
    "                        <md-button ng-click=\"layout.logOut()\">\n" +
    "                            <md-icon>power_settings_new</md-icon>\n" +
    "                            Logout\n" +
    "                        </md-button>\n" +
    "                    </md-menu-item>\n" +
    "                </md-menu-content>\n" +
    "            </md-menu>\n" +
    "        </div>\n" +
    "    </md-toolbar>\n" +
    "    <md-toolbar class=\"md-hue-1\" ng-show=\"showSearch\">\n" +
    "        <div class=\"md-toolbar-tools\">\n" +
    "            <md-button ng-click=\"showSearch = !showSearch\" aria-label=\"Back\">\n" +
    "                <ng-md-icon icon=\"arrow_back\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <h3 flex=\"10\">\n" +
    "                Back\n" +
    "            </h3>\n" +
    "            <md-input-container md-theme=\"input\" flex>\n" +
    "                <label>&nbsp;</label>\n" +
    "                <input ng-model=\"search.who\" placeholder=\"Search ...\">\n" +
    "            </md-input-container>\n" +
    "\n" +
    "        </div>\n" +
    "    </md-toolbar>\n" +
    "    <md-content class=\"md-blue-grey-theme\" flex md-scroll-y>\n" +
    "        <ui-view  layout=\"column\" layout-fill layout-padding>\n" +
    "\n" +
    "\n" +
    "        </ui-view>\n" +
    "    </md-content>\n"
  );


  $templateCache.put('app/modules/layouts/side-nav/sidenav.html',
    "        <md-toolbar class=\"md-tall md-hue-2\">\n" +
    "            <div layout=\"column\" class=\"md-toolbar-tools-bottom inset\">\n" +
    "                <div layout=\"row\">\n" +
    "                    <div flex=\"20\">\n" +
    "                        <img style=\"width: 36px; height: 36px; border-radius: 50%\"\n" +
    "                             actual-src=\"data:image/jpeg;base64,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\"\n" +
    "                             showloader=\"\" loader-class=\"preload\" loader-src=\"app/assets/images/loader.gif\"\n" +
    "                             src=\"data:image/jpeg;base64,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\">\n" +
    "                    </div>\n" +
    "                    <div flex=\"80\" style=\"margin-top: 10px;font-size: 1em;\">\n" +
    "                        <div>Autor</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </md-toolbar>\n" +
    "        <md-list>\n" +
    "            <md-list-item ng-repeat=\"item in vm.menu\" ng-click=\"vm.navigateTo(item.link)\" >\n" +
    "                <div class=\"inset\" ng-show=\"item.icon\">\n" +
    "                    <ng-md-icon icon=\"{{item.icon}}\"></ng-md-icon>\n" +
    "                </div>\n" +
    "                <p> {{ item.name }}</p>\n" +
    "            </md-list-item>\n" +
    "            <md-divider></md-divider>\n" +
    "            <md-subheader>Admin</md-subheader>\n" +
    "            <md-list-item ng-repeat=\"item in vm.admin\" ng-click=\"vm.navigateTo(item.link)\" >\n" +
    "                <div class=\"inset\" ng-show=\"item.icon\">\n" +
    "                    <ng-md-icon icon=\"{{item.icon}}\"></ng-md-icon>\n" +
    "                </div>\n" +
    "                <p> {{ item.name }}</p>\n" +
    "            </md-list-item>\n" +
    "            <!-- <md-subheader>Admin</md-subheader>\n" +
    "            <md-list-item ng-repeat=\"item in vm.admin\" ng-click=\"vm.showSettingsBottom($event)\" >\n" +
    "                <div class=\"inset\">\n" +
    "                    <ng-md-icon icon=\"{{item.icon}}\"></ng-md-icon>\n" +
    "                </div>\n" +
    "                <p> {{ item.title }}</p>\n" +
    "            </md-list-item> -->\n" +
    "        </md-list>\n"
  );


  $templateCache.put('app/modules/users/_form.html',
    "<div  layout=\"column\" ng-cloak class=\"md-inline-form\">\n" +
    "\n" +
    "  <md-content md-theme=\"docs-dark\" layout-gt-sm=\"column\" layout-padding  layout-fill>\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Nome</label>\n" +
    "        <input ng-model=\"user.name\" placeholder=\"Nome do Usuário\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>E-Mail</label>\n" +
    "        <input ng-model=\"user.email\" placeholder=\"E-Mail (login) do Usuário\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Senha</label>\n" +
    "        <input ng-model=\"user.password\" type=\"password\" placeholder=\"Senha do Usuário\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "          <md-button class=\"md-raised md-primary\">Criar Usuário</md-button>        \n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  </md-content>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('app/modules/users/users-add.html',
    "<div  layout=\"column\" ng-cloak class=\"md-inline-form\">\n" +
    "\n" +
    "  <md-content md-theme=\"docs-dark\" layout-gt-sm=\"column\" layout-padding  layout-fill>\n" +
    "	<div class=\"error\" ng-if=\"addmessage\">\n" +
    "	 <md-whiteframe class=\"md-whiteframe-10dp\" layout>\n" +
    "		    <span>{{addmessage}}</span>\n" +
    "	  </md-whiteframe>\n" +
    "		\n" +
    "	</div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Nome</label>\n" +
    "        <input ng-model=\"users.name\" placeholder=\"Nome do Usuário\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "	\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>E-Mail</label>\n" +
    "        <input ng-model=\"users.email\" placeholder=\"E-Mail (login) do Usuário\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Senha</label>\n" +
    "        <input ng-model=\"users.password\" type=\"password\" placeholder=\"Senha do Usuário\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "          <md-button class=\"md-raised md-primary\" ng-click=\"addUser()\">Criar Usuário</md-button>        \n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  </md-content>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('app/modules/users/users-edit.html',
    "\n" +
    "\n" +
    "<div  layout=\"column\" ng-cloak class=\"md-inline-form\">\n" +
    "\n" +
    "  <md-content md-theme=\"docs-dark\" layout-gt-sm=\"column\" layout-padding  layout-fill>\n" +
    "	<div>\n" +
    "	  <md-toolbar class=\"md-table-toolbar md-default\">\n" +
    "	      <div class=\"md-toolbar-tools\">\n" +
    "	        <span>Alteração de usuário</span>\n" +
    "	      </div>\n" +
    "	    </md-toolbar>\n" +
    "	</div>\n" +
    "\n" +
    "  <div class=\"error\" ng-if=\"editmessage\">\n" +
    "   <md-whiteframe class=\"md-whiteframe-10dp\" layout>\n" +
    "        <span>{{editmessage}}</span>\n" +
    "    </md-whiteframe>\n" +
    "    \n" +
    "  </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Nome</label>\n" +
    "        <input ng-model=\"users.name\" placeholder=\"Nome do Usuário\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>E-Mail</label>\n" +
    "        <input ng-model=\"users.email\" placeholder=\"E-Mail (login) do Usuário\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "        <label>Senha</label>\n" +
    "        <input ng-model=\"users.password\" type=\"password\" placeholder=\"Senha do Usuário\">\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "      Permissões:\n" +
    "        \n" +
    "        <fieldset class=\"demo-fieldset\" >\n" +
    "          <!-- <legend class=\"demo-legend\"></legend> -->\n" +
    "          <div layout=\"row\" layout-wrap flex>\n" +
    "          <div flex-xs flex=\"50\">\n" +
    "            <md-checkbox aria-label=\"Select All\"\n" +
    "                         ng-checked=\"isChecked()\"\n" +
    "                         md-indeterminate=\"isIndeterminate()\"\n" +
    "                         ng-click=\"toggleAll()\">\n" +
    "              <span ng-if=\"isChecked()\">De-</span>Seleciona todos\n" +
    "            </md-checkbox>\n" +
    "          </div>\n" +
    "            <div class=\"demo-select-all-checkboxes\" flex=\"100\" ng-repeat=\"item in items\">\n" +
    "              <md-checkbox value=\"item.value\" ng-checked=\"exists(item.value, selected)\" ng-click=\"toggle(item.value, selected)\">\n" +
    "               {{ item.name }}\n" +
    "              </md-checkbox>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </fieldset>\n" +
    "\n" +
    "    </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <md-input-container>\n" +
    "          <md-button class=\"md-raised md-primary\" ng-click=\"updateUser()\">Salvar</md-button>        \n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  </md-content>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('app/modules/users/users-view.html',
    "<div  layout=\"column\" ng-cloak class=\"md-inline-form\">\n" +
    "\n" +
    "  <md-content md-theme=\"docs-dark\" layout-gt-sm=\"column\" layout-padding  layout-fill>\n" +
    "\n" +
    "\n" +
    "<table class=\"table movietable\">\n" +
    "    <tr>\n" +
    "        <td><h3>Detalhes do {{users.name}}</h3></td>\n" +
    "        <td></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>ID</td>\n" +
    "        <td>{{users.id}}</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>E-Mail</td>\n" +
    "        <td>{{users.email}}</td>\n" +
    "    </tr>\n" +
    "    \n" +
    "    <tr>\n" +
    "        <td>Permissões</td>\n" +
    "        <td>\n" +
    "        <fieldset class=\"demo-fieldset\" >\n" +
    "          <!-- <legend class=\"demo-legend\"></legend> -->\n" +
    "          <div layout=\"row\" layout-wrap flex>\n" +
    "          \n" +
    "            <div class=\"demo-select-all-checkboxes\" flex=\"100\" ng-repeat=\"item in items\">\n" +
    "              <md-checkbox  ng-disabled=\"true\" ng-checked=\"exists(item.value, selected)\" >\n" +
    "               {{ item.name }}\n" +
    "              </md-checkbox>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </fieldset>\n" +
    "\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "    \n" +
    "    \n" +
    "</table>\n" +
    "<div>\n" +
    "    <md-button class=\"md-raised md-primary\" ui-sref=\"home.editUser({id:users.id})\">Edit</md-button>\n" +
    "    \n" +
    "</div>\n" +
    "\n" +
    "</md-content>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/users/users.html',
    "<section> \n" +
    "\n" +
    "<md-content layout=\"column\" layout-fill>\n" +
    "\n" +
    "<div>\n" +
    "    <md-button ui-sref=\"home.newUser\" class=\"md-raised md-primary\">Novo Usuário</md-button>\n" +
    "</div>\n" +
    "\n" +
    "<div>\n" +
    "    <md-toolbar class=\"md-table-toolbar md-default\">\n" +
    "      <div class=\"md-toolbar-tools\">\n" +
    "        <span>Usuários</span>\n" +
    "      </div>\n" +
    "    </md-toolbar>\n" +
    "  <md-table-container  md-progress=\"promise\">\n" +
    "    <table >\n" +
    "        <thead md-head md-order=\"query.order\" md-on-reorder=\"getDesserts\">\n" +
    "            <tr md-row class=\"even\">\n" +
    "                <td md-column md-order-by=\"nameToLower\">Nome</td>\n" +
    "                <td md-column >Email</td>\n" +
    "                <td  md-column ></td>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "\n" +
    "        <tbody md-body>\n" +
    "            <tr md-row md-select=\"user\" md-select-id=\"name\" md-auto-select ng-repeat=\"user in users\"  class=\"even\">\n" +
    "                <td md-cell>{{user.name}}</td>\n" +
    "                <td md-cell>{{user.email}}</td>\n" +
    "                <td md-cell>\n" +
    "                    <md-button class=\"md-raised md-primary\" ui-sref=\"home.viewUser({id:user.id})\">View</md-button>\n" +
    "                    <md-button class=\"md-raised md-primary\"  ng-click=\"deleteUser(user)\">Delete</md-button>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "  </md-table-container>\n" +
    "  <md-table-pagination md-limit=\"query.limit\" md-limit-options=\"[5, 10, 15]\" md-page=\"query.page\" md-total=\"{{users.count}}\" md-on-paginate=\"getDesserts\" md-page-select></md-table-pagination>\n" +
    "</div>\n" +
    "\n" +
    "</md-content>\n" +
    "\n" +
    "</section>\n" +
    "\n"
  );

}]);
