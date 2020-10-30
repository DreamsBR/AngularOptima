function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<div class=\"container-main container-fluid h-100\">\r\n    <router-outlet></router-outlet>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes-nuevo-editar/clientes-nuevo-editar.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes-nuevo-editar/clientes-nuevo-editar.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppClientesNuevoEditarClientesNuevoEditarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex\" id=\"wrapper\" [ngClass]=\"status ? 'toggled' : ''\">\n\n    <app-sidebar></app-sidebar>\n    <div id=\"page-content-wrapper\">\n        <div class=\"container-fluid\">\n\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"button-toggle\"><a (click)=\"menuToggle()\"><i class=\"fas fa-bars\"></i></a></div>\n                    <h3>Nuevo / Editar cliente</h3>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-12\">\n\n                    <br>\n\n                    <form>\n\n                        <div class=\"row\">\n\n                            <div class=\"col-sm-12 col-md-3\">\n                                <div class=\"nav flex-column nav-pills\" id=\"v-pills-tab\" role=\"tablist\">\n                                    <a class=\"nav-link active\" id=\"v-pills-home-tab\" data-toggle=\"pill\" href=\"#v-pills-home\" role=\"tab\" aria-controls=\"v-pills-home\" aria-selected=\"true\"><span class=\"nav-number\">1</span> Datos personales</a>\n                                    <span class=\"separator\"></span>\n                                    <a class=\"nav-link\" id=\"v-pills-profile-tab\" data-toggle=\"pill\" href=\"#v-pills-profile\" role=\"tab\" aria-controls=\"v-pills-profile\" aria-selected=\"false\"><span class=\"nav-number\">2</span> Co propietarios Conyugue</a>\n                                    <span class=\"separator\"></span>\n                                    <a class=\"nav-link\" id=\"v-pills-messages-tab\" data-toggle=\"pill\" href=\"#v-pills-messages\" role=\"tab\" aria-controls=\"v-pills-messages\" aria-selected=\"false\"><span class=\"nav-number\">3</span> Datos laborales</a>\n                                </div>\n                            </div>\n\n                            <div class=\"col-sm-12 col-md-6\">\n                                <div class=\"tab-content\" id=\"v-pills-tabContent\">\n                                    <div class=\"tab-pane fade show active\" id=\"v-pills-home\" role=\"tabpanel\" aria-labelledby=\"v-pills-home-tab\">\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"nombres\">Nombres</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"nombres\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"apellidos\">Apellidos</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"apellidos\">\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"nombres\">Tipo de documento</label>\n                                                    <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                                    </select>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"apellidos\">Nro. doc.</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"apellidos\">\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"nombres\">Estado civil</label>\n                                                    <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                                    </select>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"apellidos\">Ocupación</label>\n                                                    <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                                    </select>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"nombres\">Fecha de nacimiento</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"nombres\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"apellidos\">Edad</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"apellidos\">\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"nombres\">Correo</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"nombres\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"apellidos\">Teléfono</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"apellidos\">\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"nombres\">Distrito</label>\n                                                    <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                                    </select>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"apellidos\">Provincia</label>\n                                                    <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                                    </select>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-12\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"nombres\">Dirección</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"apellidos\">\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-12\">\n                                                <button type=\"submit\" class=\"btn btn-optima btn-float-right\">Siguiente</button>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"tab-pane fade\" id=\"v-pills-profile\" role=\"tabpanel\" aria-labelledby=\"v-pills-profile-tab\">\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"nombres\">Nombres</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"nombres\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"apellidos\">Apellidos</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"apellidos\">\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"nombres\">Tipo de documento</label>\n                                                    <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                                    </select>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"apellidos\">Nro. doc.</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"apellidos\">\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"nombres\">Estado civil</label>\n                                                    <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                                    </select>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"apellidos\">Ocupación</label>\n                                                    <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                                    </select>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-12\">\n                                                <button type=\"submit\" class=\"btn btn-optima btn-float-right\">Siguiente</button>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"tab-pane fade\" id=\"v-pills-messages\" role=\"tabpanel\" aria-labelledby=\"v-pills-messages-tab\">\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"nombres\">Lugar de trabajo</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"nombres\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"apellidos\">Ingresos</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"apellidos\">\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"nombres\">Motivo de compra</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"nombres\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"apellidos\">Canal de captación</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"apellidos\">\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"nombres\">Categoria</label>\n                                                    <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                                    </select>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"apellidos\">Asesor de ventas</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"apellidos\">\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-12\">\n                                                <button type=\"submit\" class=\"btn btn-optima btn-float-right\">Guardar</button>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n\n                    </form>\n\n                </div>\n            </div>\n        \n        </div>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/clientes.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/clientes.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppClientesClientesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex\" id=\"wrapper\" [ngClass]=\"status ? 'toggled' : ''\">\n\n    <app-sidebar></app-sidebar>\n    <div id=\"page-content-wrapper\">\n        <div class=\"container-fluid\">\n\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-5\">\n                    <div class=\"button-toggle\"><a (click)=\"menuToggle()\"><i class=\"fas fa-bars\"></i></a></div>\n                    <h3>Clientes</h3>\n                </div>\n                <div class=\"col-sm-12 col-md-7 text-right\">\n                    <!-- <button type=\"button\" class=\"btn btn-outline-optima btn-margin\"><i class=\"far fa-file-excel\"></i> Plantilla</button>\n                    <button type=\"button\" class=\"btn btn-outline-optima btn-margin margin-right\"><i class=\"far fa-file-excel\"></i> Importar excel</button> -->\n                    <a href=\"/cliente-nuevo-editar/0\"><span class=\"font-add\">Agregar <i class=\"fas fa-plus-circle\"></i></span></a>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-12 overflow-auto\">\n\n                    <br>\n\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th class=\"text-center\">Editar</th>\n                                <th nowrap>Nombres</th>\n                                <th nowrap>Apellidos</th>\n                                <th nowrap>Tip. doc.</th>\n                                <th nowrap>Nro. doc.</th>\n                                <th nowrap>Estado civil</th>\n                                <th nowrap>Ocupación</th>\n                                <th nowrap>Fecha de nacimiento</th>\n                                <th nowrap>Edad</th>\n                                <th nowrap>Correo</th>\n                                <th nowrap>Telefono</th>\n                                <th nowrap>Distrito</th>\n                                <th nowrap>Provincia</th>\n                                <th nowrap>Dirección</th>\n                                <th nowrap>Conyugue</th>\n                                <th nowrap>Tip. doc.</th>\n                                <th nowrap>Nro. doc.</th>\n                                <th nowrap>Estado civil</th>\n                                <th nowrap>Ocupación</th>\n                                <th nowrap>Ingresos</th>\n                                <th nowrap>Motivo compra</th>\n                                <th nowrap>Canal captación</th>\n                                <th nowrap>Categoria</th>\n                                <th nowrap>Asesor ventas</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let cliente of clienteLista\">\n                                <td class=\"text-center font-color-1\">\n                                    <a href=\"#\" data-toggle=\"dropdown\"><i class=\"fas fa-ellipsis-v\"></i></a>\n                                    <div class=\"dropdown-menu dropdown-menu-left\">\n                                        <button class=\"dropdown-item\" type=\"button\" [routerLink]=\"['/cliente-nuevo-editar', cliente.codigo]\"><i class=\"far fa-edit\"></i> Editar</button>\n                                        <button class=\"dropdown-item\" type=\"button\" data-toggle=\"modal\" data-target=\"#modal-eliminar-cliente\"><i class=\"far fa-trash-alt\"></i> Eliminar</button>\n                                    </div>\n                                </td>\n                                <td nowrap>{{cliente.nombre}}</td>\n                                <td nowrap>{{cliente.apepaterno}} {{cliente.apematerno}}</td>\n                                <td nowrap>{{cliente.tipodoc}}</td>\n                                <td nowrap>{{cliente.nrodoc}}</td>\n                                <td nowrap>{{cliente.estadocivil}}</td>\n                                <td nowrap>{{cliente.ocupacion}}</td>\n                                <td nowrap>{{cliente.nacimiento}}</td>\n                                <td nowrap>{{cliente.edad}}</td>\n                                <td nowrap>{{cliente.correo}}</td>\n                                <td nowrap>{{cliente.telefono}}</td>\n                                <td nowrap>{{cliente.distrito}}</td>\n                                <td nowrap>{{cliente.provincia}}</td>\n                                <td nowrap>{{cliente.direccion}}</td>\n                                <td nowrap>{{cliente.nombreconyugue}}</td>\n                                <td nowrap>{{cliente.c_tipodoc}}</td>\n                                <td nowrap>{{cliente.c_nrodoc}}</td>\n                                <td nowrap>{{cliente.c_estadocivil}}</td>\n                                <td nowrap>{{cliente.c_ocupacion}}</td>\n                                <td nowrap>{{cliente.ingresos}}</td>\n                                <td nowrap>{{cliente.motivocompra}}</td>\n                                <td nowrap>{{cliente.canalcaptacion}}</td>\n                                <td nowrap>{{cliente.categoria}}</td>\n                                <td nowrap>{{cliente.asesorventas}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n\n                </div>\n            </div>\n\n            <br>\n\n            <nav aria-label=\"...\">\n                <ul class=\"pagination\">\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n                    <li class=\"page-item active\">\n                    <a class=\"page-link\" href=\"#\">2 <span class=\"sr-only\">(current)</span></a>\n                    </li>\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                </ul>\n            </nav>\n\n        </div>\n    </div>\n\n</div>\n\n\n<div id=\"modal-eliminar-cliente\" class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <h5 class=\"modal-title\">Eliminar cliente</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <p>¿Seguro que deseas eliminar el registro?</p>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-optima\">Confirmar</button>\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n        </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/colaboradores-nuevo-editar/colaboradores-nuevo-editar.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/colaboradores-nuevo-editar/colaboradores-nuevo-editar.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppColaboradoresNuevoEditarColaboradoresNuevoEditarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex\" id=\"wrapper\" [ngClass]=\"status ? 'toggled' : ''\">\n\n    <app-sidebar></app-sidebar>\n    <div id=\"page-content-wrapper\">\n        <div class=\"container-fluid\">\n\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"button-toggle\"><a (click)=\"menuToggle()\"><i class=\"fas fa-bars\"></i></a></div>\n                    <h3>Nuevo / Editar cliente</h3>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-8\">\n\n                    <br>\n\n                    <form>\n\n                        <div class=\"row\">\n                            <div class=\"col-sm-12 col-md-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"nombres\">Nombres</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"nombres\">\n                                </div>\n                            </div>\n                            <div class=\"col-sm-12 col-md-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"apellidos\">Apellidos</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"apellidos\">\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-sm-12 col-md-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"nombres\">Tipo de documento</label>\n                                    <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                        <option>DNI</option>\n                                        <option>Carnet extranjeria</option>\n                                    </select>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-12 col-md-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"apellidos\">Nro. doc.</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"apellidos\">\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-sm-12 col-md-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"nombres\">Teléfono</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"nombres\">\n                                </div>\n                            </div>\n                            <div class=\"col-sm-12 col-md-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"apellidos\">Dirección</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"apellidos\">\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-sm-12 col-md-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"nombres\">Usuario</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"nombres\">\n                                </div>\n                            </div>\n                            <div class=\"col-sm-12 col-md-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"apellidos\">Contraseña</label>\n                                    <input type=\"password\" class=\"form-control\" id=\"apellidos\">\n                                </div>\n                            </div>\n                        </div>                        \n\n                        <button type=\"submit\" class=\"btn btn-optima btn-float-right\">Registrar</button>\n\n                    </form>\n\n                </div>\n            </div>\n\n\n        </div>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/colaboradores/colaboradores.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/colaboradores/colaboradores.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppColaboradoresColaboradoresComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex\" id=\"wrapper\" [ngClass]=\"status ? 'toggled' : ''\">\n\n    <app-sidebar></app-sidebar>\n    <div id=\"page-content-wrapper\">\n        <div class=\"container-fluid\">\n\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-5\">\n                    <div class=\"button-toggle\"><a (click)=\"menuToggle()\"><i class=\"fas fa-bars\"></i></a></div>\n                    <h3>Colaboradores</h3>\n                </div>\n                <div class=\"col-sm-12 col-md-7 text-right\">\n                    <button type=\"button\" class=\"btn btn-outline-optima btn-margin\"><i class=\"far fa-file-excel\"></i> Plantilla</button>\n                    <button type=\"button\" class=\"btn btn-outline-optima btn-margin margin-right\"><i class=\"far fa-file-excel\"></i> Importar excel</button>\n                    <a href=\"/colaboradores-nuevo-editar/0\"><span class=\"font-add\">Agregar <i class=\"fas fa-plus-circle\"></i></span></a>\n                </div>\n            </div>\n\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th class=\"text-center\">Editar</th>\n                        <th>Nombres</th>\n                        <th>Apellidos</th>\n                        <th>Tip. doc.</th>\n                        <th>Nro. documento</th>\n                        <th>Teléfono</th>\n                        <th>Dirección</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let colaborador of colaboradoresLista\">\n                        <td class=\"text-center font-color-1\">\n                            <a href=\"#\" data-toggle=\"dropdown\"><i class=\"fas fa-ellipsis-v\"></i></a>\n                            <div class=\"dropdown-menu dropdown-menu-left\">\n                                <button class=\"dropdown-item\" type=\"button\" [routerLink]=\"['/colaboradores-nuevo-editar', colaborador.codigo]\"><i class=\"far fa-edit\"></i> Editar</button>\n                                <button class=\"dropdown-item\" type=\"button\" data-toggle=\"modal\" data-target=\"#modal-eliminar-colaborador\"><i class=\"far fa-trash-alt\"></i> Eliminar</button>\n                            </div>\n                        </td>\n                        <td>{{colaborador.nombre}}</td>\n                        <td>{{colaborador.apepaterno}} {{colaborador.apematerno}}</td>\n                        <td>{{colaborador.tipodoc}}</td>\n                        <td>{{colaborador.nrodoc}}</td>\n                        <td>{{colaborador.telefono}}</td>\n                        <td>{{colaborador.direccion}}</td>\n                    </tr>\n                </tbody>\n            </table>\n\n            <nav aria-label=\"...\">\n                <ul class=\"pagination\">\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n                    <li class=\"page-item active\">\n                    <a class=\"page-link\" href=\"#\">2 <span class=\"sr-only\">(current)</span></a>\n                    </li>\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                </ul>\n            </nav>\n\n        </div>\n    </div>\n\n</div>\n\n\n<div id=\"modal-eliminar-colaborador\" class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <h5 class=\"modal-title\">Eliminar colaborador</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <p>¿Seguro que deseas eliminar el registro?</p>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-optima\">Confirmar</button>\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n        </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar-main navbar navbar-expand\" *ngIf=\"authService.isAuthenticated()\">\r\n\r\n    <a class=\"navbar-brand my-2\" href=\"#\"><img src=\"assets/img/logo_optima.png\" alt=\"\"></a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\"></ul>\r\n        <ul class=\"navbar-nav navbar-right d-flex\">\r\n            <li class=\"login-data\">\r\n                <h5>{{authService.usuario.userName}}</h5>\r\n                <h6>{{authService.usuario.userName}}</h6>\r\n            </li>\r\n            <li>\r\n                <div class=\"logo-user\">{{authService.usuario.userName.substring(0,1).toUpperCase()}}</div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginator/paginator.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginator/paginator.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginatorPaginatorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul *ngIf=\"paginas?.length > 0\" class=\"pagination\">\r\n\r\n    <li class=\"page-item\" *ngIf=\"paginador.number > 0\">\r\n        <a class=\"page-link\" ngif [routerLink]=\"['/clientes/page', paginador.number-1]\"> &laquo;</a> \r\n    </li>\r\n\r\n    <li [ngClass]=\"paginador.first?'disabled page-item':''\">\r\n        <a class=\"page-link\" [routerLink]=\"['/clientes/page', 0]\">Primera</a>\r\n    </li>\r\n\r\n    <li *ngFor=\"let numeroPagina of paginas\" class=\"page-item\" [ngClass]=\"numeroPagina -1 === paginador.number?'active':''\">\r\n        <span  class=\"page-link\" *ngIf=\"numeroPagina -1 === paginador.number\">{{numeroPagina}}</span>\r\n        <a *ngIf=\"numeroPagina -1 !== paginador.number\" class=\"page-link\" [routerLink]=\"['/clientes/page',  numeroPagina-1]\">{{numeroPagina}}</a>\r\n    </li>\r\n\r\n    <li [ngClass]=\"paginador.last?'disabled page-item':''\">\r\n        <a class=\"page-link\" [routerLink]=\"['/clientes/page', paginador.totalPages-1]\">Ultima</a>\r\n    </li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"paginador.number < paginador.totalPages-1\">\r\n        <a  class=\"page-link\" ngif [routerLink]=\"['/clientes/page', paginador.number+1]\"> &raquo;</a> \r\n    </li>\r\n</ul>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recordar-contrasenia-aviso/recordar-contrasenia-aviso.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recordar-contrasenia-aviso/recordar-contrasenia-aviso.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecordarContraseniaAvisoRecordarContraseniaAvisoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"logo\"><a href=\"login\"><img src=\"assets/img/logo_optima.jpg\" alt=\"\"></a></div>\n<div class=\"login-button-back\"><a href=\"login\"><i class=\"fas fa-chevron-circle-left icon-faw\"></i></a></div>\n\n<div class=\"row h-100 row1_no_margin_right\">\n\n    <div class=\"col-md-8\">\n\n        <div class=\"row h-100\">\n\n            <div class=\"col-md-4 offset-md-4 align-self-center\">\n\n                <div class=\"login-title\"><h3>{{titulo}}</h3></div>\n\n                <div><p class=\"login-subtitle\">{{subtitulo}}</p></div>\n\n                <form method=\"POST\">\n                    <div class=\"form-group login-div-center col-sm-12\">\n                        <input type=\"submit\" class=\"btn btn-default login-button\" value=\"Regresar\" (click)=\"logIn()\">\n                    </div>\n                </form>\n\n            </div>\n        </div>\n\n    </div>\n    <div class=\"col-md-4 row1 h-100\"></div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recordar-contrasenia-cambio/recordar-contrasenia-cambio.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recordar-contrasenia-cambio/recordar-contrasenia-cambio.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecordarContraseniaCambioRecordarContraseniaCambioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>recordar-contrasenia-cambio works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recordar-contrasenia/recordar-contrasenia.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recordar-contrasenia/recordar-contrasenia.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecordarContraseniaRecordarContraseniaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"logo\"><a href=\"login\"><img src=\"assets/img/logo_optima.jpg\" alt=\"\"></a></div>\n<div class=\"login-button-back\"><a href=\"login\"><i class=\"fas fa-chevron-circle-left icon-faw\"></i></a></div>\n\n<div class=\"row h-100 row1_no_margin_right\">\n\n    <div class=\"col-md-8\">\n\n        <div class=\"row h-100\">\n\n            <div class=\"col-md-4 offset-md-4 align-self-center\">\n\n                <div class=\"login-title\"><h3>{{titulo}}</h3></div>\n\n                <div><p class=\"login-subtitle\">{{subtitulo}}</p></div>\n\n                <form method=\"POST\">\n                    <div class=\"form-group col-sm-12\">\n                        <input [(ngModel)]=\"usuario.email\" type=\"text\" class=\"form-control login-input\" name=\"userName\"\n                            id=\"email\" placeholder=\"Correo\" autofocus required>\n                    </div>\n                    <div class=\"form-group login-div-center col-sm-12\">\n                        <input type=\"submit\" class=\"btn btn-default login-button\" value=\"Enviar\" (click)=\"logIn()\">\n                    </div>\n                </form>\n\n            </div>\n        </div>\n\n    </div>\n    <div class=\"col-md-4 row1 h-100\"></div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"sidebar-wrapper\">\n    <div class=\"list-group\">\n        <a href=\"clientes\" class=\"list-group-item\">Clientes</a>\n        <a href=\"ventas\" class=\"list-group-item\">Ventas</a>\n        <a href=\"#\" class=\"list-group-item\">Consultas ventas</a>\n        <a href=\"colaboradores\" class=\"list-group-item\" [ngClass]=\"{'list-item-active': router.url === '/colaboradores' }\">Colaboradores</a>\n        <a href=\"#\" class=\"list-group-item\">Proyectos</a>\n        <a href=\"#\" class=\"list-group-item\">Gerencias</a>\n        <a href=\"#\" class=\"list-group-item\" data-toggle=\"collapse\" href=\"#collapseExample\">Reportes</a>\n        <div class=\"collapse\" id=\"collapseExample\">\n            <a href=\"#\" class=\"list-group-item sub-item\">Consolidado de ventas</a>\n        </div>\n        <br>\n        <br>\n        <a (click)=\"logOut()\" href=\"#\" class=\"list-group-item\">Cerrar sesión</a>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/login.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/login.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsuariosLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"logo\"><a href=\"login\"><img src=\"assets/img/logo_optima.png\" alt=\"\"></a></div>\r\n\r\n<div class=\"row h-100 div-usuario row1_no_margin_right\">\r\n    <div class=\"col-md-8\">\r\n\r\n        <div class=\"row h-100\">\r\n\r\n            <div class=\"col-md-4 offset-md-4 align-self-center\">\r\n\r\n                <div class=\"login-title\"><h3>{{titulo}}</h3></div>\r\n\r\n                <form method=\"POST\">\r\n                    <div class=\"form-group col-sm-12\">\r\n                        <input [(ngModel)]=\"usuario.userName\" type=\"text\" class=\"form-control login-input\" name=\"userName \"\r\n                            id=\"userName\" placeholder=\"Usuario\" autofocus required>\r\n                    </div>\r\n                    <div class=\"form-group col-sm-12\">\r\n                        <input [(ngModel)]=\"usuario.password\" type=\"password\" class=\"form-control login-input\" name=\"password\"\r\n                            id=\"password\" placeholder=\"Contraseña\" required>\r\n                    </div>\r\n                    <p class=\"login-div-center\"><a href=\"recordar-contrasenia\">¿Olvidaste tu contraseña?</a></p>\r\n\r\n                    <div class=\"form-group login-div-center col-sm-12\">\r\n                        <input type=\"submit\" class=\"btn btn-default login-button\" value=\"Ingresar\" (click)=\"logIn()\">\r\n                    </div>\r\n                </form>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"col-md-4 row1 h-100\"></div>\r\n</div>\r\n\r\n<!-- <div class=\"container d-flex justify-content-center\" *ngIf=\"usuario\">\r\n    <div class=\"card p-3 mb-5\">\r\n        <div class=\"card-header text-center h5\">{{titulo}}</div>\r\n        <div class=\"card-body d-flex justify-content-center\">\r\n\r\n            <form method=\"POST\">\r\n                <div class=\"form-group col-sm-12\">\r\n                    <input [(ngModel)]=\"usuario.userName\" type=\"text\" class=\"form-control\" name=\"userName \"\r\n                        id=\"userName\" placeholder=\"Nombre de usuario\" autofocus required>\r\n                </div>\r\n                <div class=\"form-group col-sm-12\">\r\n                    <input [(ngModel)]=\"usuario.password\" type=\"password\" class=\"form-control\" name=\"password\"\r\n                        id=\"password\" placeholder=\"Password\" required>\r\n                </div>\r\n                <div class=\"form-group col-sm-12\">\r\n                    <input type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" value=\"Login\" (click)=\"logIn()\">\r\n                </div>\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ventas-proyecto-nuevo-editar/ventas-proyecto-nuevo-editar.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ventas-proyecto-nuevo-editar/ventas-proyecto-nuevo-editar.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVentasProyectoNuevoEditarVentasProyectoNuevoEditarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex\" id=\"wrapper\" [ngClass]=\"status ? 'toggled' : ''\">\n\n    <app-sidebar></app-sidebar>\n    <div id=\"page-content-wrapper\">\n        <div class=\"container-fluid\">\n\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"button-toggle\"><a (click)=\"menuToggle()\"><i class=\"fas fa-bars\"></i></a></div>\n                    <h3><a href=\"login\"><i class=\"fas fa-chevron-circle-left icon-faw\"></i></a></h3>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-12\">\n\n                    <br>\n\n                    <form>\n\n                        <div class=\"row\">\n\n                            <div class=\"col-sm-12 col-md-3\">\n                                <div class=\"nav flex-column nav-pills\" id=\"v-pills-tab\" role=\"tablist\">\n                                    <a class=\"nav-link active\" id=\"v-pills-home-tab\" data-toggle=\"pill\" href=\"#v-pills-home\" role=\"tab\" aria-controls=\"v-pills-home\" aria-selected=\"true\"><span class=\"nav-number\">1</span> Cliente</a>\n                                    <span class=\"separator\"></span>\n                                    <a class=\"nav-link\" id=\"v-pills-profile-tab\" data-toggle=\"pill\" href=\"#v-pills-profile\" role=\"tab\" aria-controls=\"v-pills-profile\" aria-selected=\"false\"><span class=\"nav-number\">2</span> Modo de pago</a>\n                                </div>\n                            </div>\n\n                            <div class=\"col-sm-12 col-md-6\">\n                                <div class=\"tab-content\" id=\"v-pills-tabContent\">\n\n\n                                    \n                                    <div class=\"tab-pane fade show active\" id=\"v-pills-home\" role=\"tabpanel\" aria-labelledby=\"v-pills-home-tab\">\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"nombres\">Nombres</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"nombres\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"apellidos\">Apellidos</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"apellidos\">\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"nombres\">Tipo de documento</label>\n                                                    <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                                    </select>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"apellidos\">Nro. doc.</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"apellidos\">\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"nombres\">Estado civil</label>\n                                                    <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                                    </select>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"apellidos\">Ocupación</label>\n                                                    <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                                    </select>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"nombres\">Fecha de nacimiento</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"nombres\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"apellidos\">Edad</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"apellidos\">\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"nombres\">Correo</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"nombres\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"apellidos\">Teléfono</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"apellidos\">\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"nombres\">Distrito</label>\n                                                    <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                                    </select>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"apellidos\">Provincia</label>\n                                                    <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                                    </select>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-12\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"nombres\">Dirección</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"apellidos\">\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-12\">\n                                                <button type=\"submit\" class=\"btn btn-optima btn-float-right\">Siguiente</button>\n                                            </div>\n                                        </div>\n\n                                    </div>\n\n\n\n                                    <div class=\"tab-pane fade\" id=\"v-pills-profile\" role=\"tabpanel\" aria-labelledby=\"v-pills-profile-tab\">\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"nombres\">Nombres</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"nombres\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"apellidos\">Apellidos</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"apellidos\">\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"nombres\">Tipo de documento</label>\n                                                    <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                                    </select>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"apellidos\">Nro. doc.</label>\n                                                    <input type=\"text\" class=\"form-control\" id=\"apellidos\">\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"nombres\">Estado civil</label>\n                                                    <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                                    </select>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-12 col-md-6\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"apellidos\">Ocupación</label>\n                                                    <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                                    </select>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-12\">\n                                                <button type=\"submit\" class=\"btn btn-optima btn-float-right\">Siguiente</button>\n                                            </div>\n                                        </div>\n\n                                    </div>\n\n\n\n                                </div>\n                            </div>\n\n                        </div>\n\n                    </form>\n\n                </div>\n            </div>\n        \n        </div>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ventas-proyecto/ventas-proyecto.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ventas-proyecto/ventas-proyecto.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVentasProyectoVentasProyectoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex\" id=\"wrapper\" [ngClass]=\"status ? 'toggled' : ''\">\n\n    <app-sidebar></app-sidebar>\n    <div id=\"page-content-wrapper\">\n        <div class=\"container-fluid\">\n\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-5\">\n                    <div class=\"button-toggle\"><a (click)=\"menuToggle()\"><i class=\"fas fa-bars\"></i></a></div>\n                    <h3>Ventas</h3>\n                </div>\n                <div class=\"col-sm-12 col-md-7 text-right\">\n                    <!-- <button type=\"button\" class=\"btn btn-outline-optima btn-margin\"><i class=\"far fa-file-excel\"></i> Plantilla</button>\n                    <button type=\"button\" class=\"btn btn-outline-optima btn-margin margin-right\"><i class=\"far fa-file-excel\"></i> Importar excel</button> -->\n                    <a href=\"/ventas-proyecto-nuevo-editar/0\"><span class=\"font-add\">Agregar <i class=\"fas fa-plus-circle\"></i></span></a>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-12 overflow-auto\">\n\n                    <br>\n\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th nowrap class=\"text-center\">Editar</th>\n                                <th nowrap>Nombres</th>\n                                <th nowrap>Apellidos</th>\n                                <th nowrap>Nº doc.</th>\n                                <th nowrap>Total de venta</th>\n                                <th nowrap>Estado</th>\n                                <th nowrap>Nº dpto</th>\n                                <th nowrap>Nº estacionamiento</th>\n                                <th nowrap>Nº cochera</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let ventasProyecto of ventasProyectoLista\">\n                                <td nowrap class=\"text-center font-color-1\">\n                                    <a href=\"#\" data-toggle=\"dropdown\"><i class=\"fas fa-ellipsis-v\"></i></a>\n                                    <div class=\"dropdown-menu dropdown-menu-left\">\n                                        <button class=\"dropdown-item\" type=\"button\" [routerLink]=\"['/ventas-proyecto-nuevo-editar', ventasProyecto.codigo]\"><i class=\"far fa-edit\"></i> Editar</button>\n                                        <!-- <button class=\"dropdown-item\" type=\"button\" data-toggle=\"modal\" data-target=\"#modal-eliminar-colaborador\"><i class=\"far fa-trash-alt\"></i> Eliminar</button> -->\n                                    </div>\n                                </td>\n                                <td nowrap>{{ventasProyecto.nombre}}</td>\n                                <td nowrap>{{ventasProyecto.apepaterno}} {{ventasProyecto.apematerno}}</td>\n                                <td nowrap>{{ventasProyecto.nrodoc}}</td>\n                                <td nowrap>{{ventasProyecto.totalventa}}</td>\n                                <td nowrap>{{ventasProyecto.estado}}</td>\n                                <td nowrap>{{ventasProyecto.nro_dpto}}</td>\n                                <td nowrap>{{ventasProyecto.nro_estacionamiento}}</td>\n                                <td nowrap>{{ventasProyecto.nro_cochera}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n\n                </div>\n            </div>\n\n            <br>\n\n            <nav aria-label=\"...\">\n                <ul class=\"pagination\">\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n                    <li class=\"page-item active\">\n                    <a class=\"page-link\" href=\"#\">2 <span class=\"sr-only\">(current)</span></a>\n                    </li>\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                </ul>\n            </nav>\n\n        </div>\n    </div>\n\n</div>\n\n\n<div id=\"modal-eliminar-colaborador\" class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <h5 class=\"modal-title\">Eliminar colaborador</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <p>¿Seguro que deseas eliminar el registro?</p>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-optima\">Confirmar</button>\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n        </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ventas/ventas.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ventas/ventas.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVentasVentasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex\" id=\"wrapper\" [ngClass]=\"status ? 'toggled' : ''\">\n\n    <app-sidebar></app-sidebar>\n    <div id=\"page-content-wrapper\">\n        <div class=\"container-fluid div-ventas\">\n\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-5\">\n                    <div class=\"button-toggle\"><a (click)=\"menuToggle()\"><i class=\"fas fa-bars\"></i></a></div>\n                    <h3>Proyectos</h3>\n                </div>\n                <div class=\"col-sm-12 col-md-7 text-right\">\n                    <!-- <button type=\"button\" class=\"btn btn-outline-optima btn-margin\"><i class=\"far fa-file-excel\"></i> Plantilla</button>\n                    <button type=\"button\" class=\"btn btn-outline-optima btn-margin margin-right\"><i class=\"far fa-file-excel\"></i> Importar excel</button> -->\n                    <!-- <a href=\"/cliente-nuevo-editar/0\"><span class=\"font-add\">Agregar <i class=\"fas fa-plus-circle\"></i></span></a> -->\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-6\">\n\n                    <div class=\"card\" *ngFor=\"let proyecto of proyectoLista\">\n                        <div class=\"card-body\">\n                            <a href=\"ventas-proyecto/{{proyecto.codigo}}\">{{proyecto.nombre}}</a>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n            <br>\n\n            <nav aria-label=\"...\">\n                <ul class=\"pagination\">\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n                    <li class=\"page-item active\">\n                    <a class=\"page-link\" href=\"#\">2 <span class=\"sr-only\">(current)</span></a>\n                    </li>\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                </ul>\n            </nav>\n\n        </div>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'clientes-facturacion';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./paginator/paginator.component */
    "./src/app/paginator/paginator.component.ts");
    /* harmony import */


    var _usuarios_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./usuarios/interceptors/token.interceptor */
    "./src/app/usuarios/interceptors/token.interceptor.ts");
    /* harmony import */


    var _usuarios_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./usuarios/interceptors/auth.interceptor */
    "./src/app/usuarios/interceptors/auth.interceptor.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _colaboradores_colaborador_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./colaboradores/colaborador.service */
    "./src/app/colaboradores/colaborador.service.ts");
    /* harmony import */


    var _clientes_clientes_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./clientes/clientes.service */
    "./src/app/clientes/clientes.service.ts");
    /* harmony import */


    var _ventas_proyectos_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./ventas/proyectos.service */
    "./src/app/ventas/proyectos.service.ts");
    /* harmony import */


    var _ventas_proyecto_ventasproyecto_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./ventas-proyecto/ventasproyecto.service */
    "./src/app/ventas-proyecto/ventasproyecto.service.ts");
    /* harmony import */


    var _usuarios_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./usuarios/login.component */
    "./src/app/usuarios/login.component.ts");
    /* harmony import */


    var _recordar_contrasenia_recordar_contrasenia_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./recordar-contrasenia/recordar-contrasenia.component */
    "./src/app/recordar-contrasenia/recordar-contrasenia.component.ts");
    /* harmony import */


    var _recordar_contrasenia_aviso_recordar_contrasenia_aviso_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./recordar-contrasenia-aviso/recordar-contrasenia-aviso.component */
    "./src/app/recordar-contrasenia-aviso/recordar-contrasenia-aviso.component.ts");
    /* harmony import */


    var _recordar_contrasenia_cambio_recordar_contrasenia_cambio_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./recordar-contrasenia-cambio/recordar-contrasenia-cambio.component */
    "./src/app/recordar-contrasenia-cambio/recordar-contrasenia-cambio.component.ts");
    /* harmony import */


    var _colaboradores_colaboradores_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./colaboradores/colaboradores.component */
    "./src/app/colaboradores/colaboradores.component.ts");
    /* harmony import */


    var _colaboradores_nuevo_editar_colaboradores_nuevo_editar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./colaboradores-nuevo-editar/colaboradores-nuevo-editar.component */
    "./src/app/colaboradores-nuevo-editar/colaboradores-nuevo-editar.component.ts");
    /* harmony import */


    var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./clientes/clientes.component */
    "./src/app/clientes/clientes.component.ts");
    /* harmony import */


    var _clientes_nuevo_editar_clientes_nuevo_editar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./clientes-nuevo-editar/clientes-nuevo-editar.component */
    "./src/app/clientes-nuevo-editar/clientes-nuevo-editar.component.ts");
    /* harmony import */


    var _ventas_ventas_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./ventas/ventas.component */
    "./src/app/ventas/ventas.component.ts");
    /* harmony import */


    var _ventas_proyecto_ventas_proyecto_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./ventas-proyecto/ventas-proyecto.component */
    "./src/app/ventas-proyecto/ventas-proyecto.component.ts");
    /* harmony import */


    var _ventas_proyecto_nuevo_editar_ventas_proyecto_nuevo_editar_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./ventas-proyecto-nuevo-editar/ventas-proyecto-nuevo-editar.component */
    "./src/app/ventas-proyecto-nuevo-editar/ventas-proyecto-nuevo-editar.component.ts"); // import { ClienteService } from './clientes/cliente.service';
    // import { FormularioClientesComponent } from './clientes/formulario-clientes.component';
    // import { DetalleFacturaComponent } from './facturas/detalle-factura.component';
    // import { FacturasComponent } from './facturas/facturas.component';


    var ROUTES = [{
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }, // {path: 'clientes', component: ClientesComponent},
    // {path: 'clientes/form', component: FormularioClientesComponent, canActivate:[AuthGuard, RolGuard], data: {role:'ROLE_ADMIN'}},
    // {path: 'clientes/form/:id',component: FormularioClientesComponent, canActivate:[AuthGuard, RolGuard], data: {role:'ROLE_ADMIN'}},
    // {path: 'clientes/page/:page', component: ClientesComponent},
    // {path: 'clientes/page', component: ClientesComponent},
    {
      path: 'login',
      component: _usuarios_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"]
    }, {
      path: 'recordar-contrasenia',
      component: _recordar_contrasenia_recordar_contrasenia_component__WEBPACK_IMPORTED_MODULE_21__["RecordarContraseniaComponent"]
    }, {
      path: 'recordar-contrasenia-aviso',
      component: _recordar_contrasenia_aviso_recordar_contrasenia_aviso_component__WEBPACK_IMPORTED_MODULE_22__["RecordarContraseniaAvisoComponent"]
    }, {
      path: 'recordar-contrasenia-cambio',
      component: _recordar_contrasenia_cambio_recordar_contrasenia_cambio_component__WEBPACK_IMPORTED_MODULE_23__["RecordarContraseniaCambioComponent"]
    }, // {path: 'facturas/:id',component: DetalleFacturaComponent, canActivate:[AuthGuard, RolGuard], data: {role:'ROLE_USER'}},
    // {path: 'facturas/form/:clienteId',component: FacturasComponent, canActivate:[AuthGuard, RolGuard], data: {role:'ROLE_ADMIN'}},
    {
      path: 'colaboradores',
      component: _colaboradores_colaboradores_component__WEBPACK_IMPORTED_MODULE_24__["ColaboradoresComponent"]
    }, {
      path: 'colaboradores-nuevo-editar/:id',
      component: _colaboradores_nuevo_editar_colaboradores_nuevo_editar_component__WEBPACK_IMPORTED_MODULE_25__["ColaboradoresNuevoEditarComponent"]
    }, {
      path: 'clientes',
      component: _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_26__["ClientesComponent"]
    }, {
      path: 'cliente-nuevo-editar/:id',
      component: _clientes_nuevo_editar_clientes_nuevo_editar_component__WEBPACK_IMPORTED_MODULE_27__["ClientesNuevoEditarComponent"]
    }, {
      path: 'ventas',
      component: _ventas_ventas_component__WEBPACK_IMPORTED_MODULE_28__["VentasComponent"]
    }, {
      path: 'ventas-proyecto/:id',
      component: _ventas_proyecto_ventas_proyecto_component__WEBPACK_IMPORTED_MODULE_29__["VentasProyectoComponent"]
    }, {
      path: 'ventas-proyecto-nuevo-editar/:id',
      component: _ventas_proyecto_nuevo_editar_ventas_proyecto_nuevo_editar_component__WEBPACK_IMPORTED_MODULE_30__["VentasProyectoNuevoEditarComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_26__["ClientesComponent"], // FormularioClientesComponent,
      _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_9__["PaginatorComponent"], // DetallesComponent,
      _usuarios_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"], // DetalleFacturaComponent,
      // FacturasComponent,
      _recordar_contrasenia_recordar_contrasenia_component__WEBPACK_IMPORTED_MODULE_21__["RecordarContraseniaComponent"], _recordar_contrasenia_aviso_recordar_contrasenia_aviso_component__WEBPACK_IMPORTED_MODULE_22__["RecordarContraseniaAvisoComponent"], _recordar_contrasenia_cambio_recordar_contrasenia_cambio_component__WEBPACK_IMPORTED_MODULE_23__["RecordarContraseniaCambioComponent"], _colaboradores_colaboradores_component__WEBPACK_IMPORTED_MODULE_24__["ColaboradoresComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _colaboradores_nuevo_editar_colaboradores_nuevo_editar_component__WEBPACK_IMPORTED_MODULE_25__["ColaboradoresNuevoEditarComponent"], _clientes_nuevo_editar_clientes_nuevo_editar_component__WEBPACK_IMPORTED_MODULE_27__["ClientesNuevoEditarComponent"], _ventas_ventas_component__WEBPACK_IMPORTED_MODULE_28__["VentasComponent"], _ventas_proyecto_ventas_proyecto_component__WEBPACK_IMPORTED_MODULE_29__["VentasProyectoComponent"], _ventas_proyecto_nuevo_editar_ventas_proyecto_nuevo_editar_component__WEBPACK_IMPORTED_MODULE_30__["VentasProyectoNuevoEditarComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(ROUTES), _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"]],
      providers: [_clientes_clientes_service__WEBPACK_IMPORTED_MODULE_17__["ClienteService"], _colaboradores_colaborador_service__WEBPACK_IMPORTED_MODULE_16__["ColaboradorService"], _ventas_proyectos_service__WEBPACK_IMPORTED_MODULE_18__["ProyectoService"], _ventas_proyecto_ventasproyecto_service__WEBPACK_IMPORTED_MODULE_19__["VentasproyectoService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
        useClass: _usuarios_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
        useClass: _usuarios_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/clientes-nuevo-editar/clientes-nuevo-editar.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/clientes-nuevo-editar/clientes-nuevo-editar.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ClientesNuevoEditarComponent */

  /***/
  function srcAppClientesNuevoEditarClientesNuevoEditarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientesNuevoEditarComponent", function () {
      return ClientesNuevoEditarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ClientesNuevoEditarComponent =
    /*#__PURE__*/
    function () {
      function ClientesNuevoEditarComponent() {
        _classCallCheck(this, ClientesNuevoEditarComponent);

        this.status = false;
      }

      _createClass(ClientesNuevoEditarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "menuToggle",
        value: function menuToggle() {
          this.status = !this.status;
        }
      }]);

      return ClientesNuevoEditarComponent;
    }();

    ClientesNuevoEditarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-clientes-nuevo-editar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./clientes-nuevo-editar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes-nuevo-editar/clientes-nuevo-editar.component.html")).default
    })], ClientesNuevoEditarComponent);
    /***/
  },

  /***/
  "./src/app/clientes/clientes.component.ts":
  /*!************************************************!*\
    !*** ./src/app/clientes/clientes.component.ts ***!
    \************************************************/

  /*! exports provided: ClientesComponent */

  /***/
  function srcAppClientesClientesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientesComponent", function () {
      return ClientesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _clientes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./clientes.service */
    "./src/app/clientes/clientes.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _usuarios_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../usuarios/auth.service */
    "./src/app/usuarios/auth.service.ts");

    var ClientesComponent =
    /*#__PURE__*/
    function () {
      function ClientesComponent(clienteService, activatedRoute, authService, router) {
        _classCallCheck(this, ClientesComponent);

        this.clienteService = clienteService;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.router = router;
        this.status = false;
      }

      _createClass(ClientesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.paramMap.subscribe(function () {
            _this.clienteService.getClientes().subscribe(function (clientesJsonResponse) {
              _this.clienteLista = clientesJsonResponse;
            });
          });
        }
      }, {
        key: "menuToggle",
        value: function menuToggle() {
          this.status = !this.status;
        }
      }]);

      return ClientesComponent;
    }();

    ClientesComponent.ctorParameters = function () {
      return [{
        type: _clientes_service__WEBPACK_IMPORTED_MODULE_2__["ClienteService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _usuarios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ClientesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-clientes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./clientes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/clientes.component.html")).default
    })], ClientesComponent);
    /***/
  },

  /***/
  "./src/app/clientes/clientes.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/clientes/clientes.service.ts ***!
    \**********************************************/

  /*! exports provided: ClienteService */

  /***/
  function srcAppClientesClientesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClienteService", function () {
      return ClienteService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../config/config */
    "./src/app/config/config.ts");

    var ClienteService =
    /*#__PURE__*/
    function () {
      function ClienteService(http, router) {
        _classCallCheck(this, ClienteService);

        this.http = http;
        this.router = router;
      }

      _createClass(ClienteService, [{
        key: "getClientes",
        value: function getClientes() {
          // return this.http.get(URL_BACKEND + 'vendedor/').pipe(
          //     map((jsonColaboradorResponse: any) => {
          //         (jsonColaboradorResponse as Colaborador[]).map(colaborador => {
          //             colaborador.nombre = colaborador.nombre.toUpperCase();
          //             return colaborador;
          //         });
          //         return jsonColaboradorResponse;
          //     })
          // );
          return this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_5__["URL_BACKEND_DEMO"] + 'clientes.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (jsonClienteResponse) {
            jsonClienteResponse.map(function (cliente) {
              cliente.nombre = cliente.nombre.toUpperCase();
              cliente.apepaterno = cliente.apepaterno.toUpperCase();
              cliente.apematerno = cliente.apematerno.toUpperCase();
              return cliente;
            });
            return jsonClienteResponse;
          }));
        }
      }]);

      return ClienteService;
    }();

    ClienteService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ClienteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ClienteService);
    /***/
  },

  /***/
  "./src/app/colaboradores-nuevo-editar/colaboradores-nuevo-editar.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/colaboradores-nuevo-editar/colaboradores-nuevo-editar.component.ts ***!
    \************************************************************************************/

  /*! exports provided: ColaboradoresNuevoEditarComponent */

  /***/
  function srcAppColaboradoresNuevoEditarColaboradoresNuevoEditarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColaboradoresNuevoEditarComponent", function () {
      return ColaboradoresNuevoEditarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ColaboradoresNuevoEditarComponent =
    /*#__PURE__*/
    function () {
      function ColaboradoresNuevoEditarComponent() {
        _classCallCheck(this, ColaboradoresNuevoEditarComponent);

        this.status = false;
      }

      _createClass(ColaboradoresNuevoEditarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "menuToggle",
        value: function menuToggle() {
          this.status = !this.status;
        }
      }]);

      return ColaboradoresNuevoEditarComponent;
    }();

    ColaboradoresNuevoEditarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-colaboradores-nuevo-editar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./colaboradores-nuevo-editar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/colaboradores-nuevo-editar/colaboradores-nuevo-editar.component.html")).default
    })], ColaboradoresNuevoEditarComponent);
    /***/
  },

  /***/
  "./src/app/colaboradores/colaborador.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/colaboradores/colaborador.service.ts ***!
    \******************************************************/

  /*! exports provided: ColaboradorService */

  /***/
  function srcAppColaboradoresColaboradorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColaboradorService", function () {
      return ColaboradorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../config/config */
    "./src/app/config/config.ts");

    var ColaboradorService =
    /*#__PURE__*/
    function () {
      function ColaboradorService(http, router) {
        _classCallCheck(this, ColaboradorService);

        this.http = http;
        this.router = router;
      }

      _createClass(ColaboradorService, [{
        key: "getColaboradores",
        value: function getColaboradores() {
          // return this.http.get(URL_BACKEND + 'vendedor/').pipe(
          //     map((jsonColaboradorResponse: any) => {
          //         (jsonColaboradorResponse as Colaborador[]).map(colaborador => {
          //             colaborador.nombre = colaborador.nombre.toUpperCase();
          //             return colaborador;
          //         });
          //         return jsonColaboradorResponse;
          //     })
          // );
          return this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_5__["URL_BACKEND_DEMO"] + 'colaboradores.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (jsonColaboradorResponse) {
            jsonColaboradorResponse.map(function (colaborador) {
              colaborador.nombre = colaborador.nombre.toUpperCase();
              colaborador.apepaterno = colaborador.apepaterno.toUpperCase();
              colaborador.apematerno = colaborador.apematerno.toUpperCase();
              return colaborador;
            });
            return jsonColaboradorResponse;
          }));
        }
      }]);

      return ColaboradorService;
    }();

    ColaboradorService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ColaboradorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ColaboradorService);
    /***/
  },

  /***/
  "./src/app/colaboradores/colaboradores.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/colaboradores/colaboradores.component.ts ***!
    \**********************************************************/

  /*! exports provided: ColaboradoresComponent */

  /***/
  function srcAppColaboradoresColaboradoresComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColaboradoresComponent", function () {
      return ColaboradoresComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _colaborador_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./colaborador.service */
    "./src/app/colaboradores/colaborador.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _usuarios_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../usuarios/auth.service */
    "./src/app/usuarios/auth.service.ts");

    var ColaboradoresComponent =
    /*#__PURE__*/
    function () {
      function ColaboradoresComponent(colaboradorService, activatedRoute, authService, router) {
        _classCallCheck(this, ColaboradoresComponent);

        this.colaboradorService = colaboradorService;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.router = router;
        this.status = false;
      }

      _createClass(ColaboradoresComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.activatedRoute.paramMap.subscribe(function () {
            _this2.colaboradorService.getColaboradores().subscribe(function (clientesJsonResponse) {
              _this2.colaboradoresLista = clientesJsonResponse;
            });
          });
        }
      }, {
        key: "menuToggle",
        value: function menuToggle() {
          this.status = !this.status;
        }
      }]);

      return ColaboradoresComponent;
    }();

    ColaboradoresComponent.ctorParameters = function () {
      return [{
        type: _colaborador_service__WEBPACK_IMPORTED_MODULE_2__["ColaboradorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _usuarios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ColaboradoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-colaboradores',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./colaboradores.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/colaboradores/colaboradores.component.html")).default
    })], ColaboradoresComponent);
    /***/
  },

  /***/
  "./src/app/config/config.ts":
  /*!**********************************!*\
    !*** ./src/app/config/config.ts ***!
    \**********************************/

  /*! exports provided: URL_BACKEND, URL_BACKEND_DEMO */

  /***/
  function srcAppConfigConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "URL_BACKEND", function () {
      return URL_BACKEND;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "URL_BACKEND_DEMO", function () {
      return URL_BACKEND_DEMO;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var URL_BACKEND = 'http://104.248.230.75:8080/services/v1/';
    var URL_BACKEND_DEMO = 'http://localhost:4200/assets/json/'; //url backend  deploy 'https://ab-facturacion.herokuapp.com' 

    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _usuarios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../usuarios/auth.service */
    "./src/app/usuarios/auth.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(authService, router) {
        _classCallCheck(this, HeaderComponent);

        this.authService = authService;
        this.router = router;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logOut",
        value: function logOut() {
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Logout', 'Ha cerrado sesión correctamente', 'success');
          this.authService.logOut();
          this.router.navigate(['/login']);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _usuarios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/paginator/paginator.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/paginator/paginator.component.ts ***!
    \**************************************************/

  /*! exports provided: PaginatorComponent */

  /***/
  function srcAppPaginatorPaginatorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function () {
      return PaginatorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PaginatorComponent =
    /*#__PURE__*/
    function () {
      function PaginatorComponent() {
        _classCallCheck(this, PaginatorComponent);
      }

      _createClass(PaginatorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.desde = Math.min(Math.max(1, this.paginador.number - 4), this.paginador.totalPages - 5);
          this.hasta = Math.max(Math.min(this.paginador.totalPages, this.paginador.number + 4), 6);

          if (this.paginador.totalPages > 5) {
            this.paginas = new Array(this.hasta - this.desde + 1).fill(0).map(function (valor, indice) {
              return indice + _this3.desde;
            });
          } else {
            this.paginas = new Array(this.paginador.totalPages).fill(0).map(function (valor, indice) {
              return indice + 1;
            });
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this4 = this;

          this.desde = Math.min(Math.max(1, this.paginador.number - 4), this.paginador.totalPages - 5);
          this.hasta = Math.max(Math.min(this.paginador.totalPages, this.paginador.number + 4), 6);

          if (this.paginador.totalPages > 5) {
            this.paginas = new Array(this.hasta - this.desde + 1).fill(0).map(function (valor, indice) {
              return indice + _this4.desde;
            });
          } else {
            this.paginas = new Array(this.paginador.totalPages).fill(0).map(function (valor, indice) {
              return indice + 1;
            });
          }
        }
      }]);

      return PaginatorComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PaginatorComponent.prototype, "paginador", void 0);
    PaginatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'paginator',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./paginator.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginator/paginator.component.html")).default
    })], PaginatorComponent);
    /***/
  },

  /***/
  "./src/app/recordar-contrasenia-aviso/recordar-contrasenia-aviso.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/recordar-contrasenia-aviso/recordar-contrasenia-aviso.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecordarContraseniaAvisoRecordarContraseniaAvisoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY29yZGFyLWNvbnRyYXNlbmlhLWF2aXNvL3JlY29yZGFyLWNvbnRyYXNlbmlhLWF2aXNvLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/recordar-contrasenia-aviso/recordar-contrasenia-aviso.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/recordar-contrasenia-aviso/recordar-contrasenia-aviso.component.ts ***!
    \************************************************************************************/

  /*! exports provided: RecordarContraseniaAvisoComponent */

  /***/
  function srcAppRecordarContraseniaAvisoRecordarContraseniaAvisoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecordarContraseniaAvisoComponent", function () {
      return RecordarContraseniaAvisoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _usuarios_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../usuarios/usuario */
    "./src/app/usuarios/usuario.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _usuarios_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../usuarios/auth.service */
    "./src/app/usuarios/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RecordarContraseniaAvisoComponent =
    /*#__PURE__*/
    function () {
      function RecordarContraseniaAvisoComponent(authService, router) {
        _classCallCheck(this, RecordarContraseniaAvisoComponent);

        this.authService = authService;
        this.router = router;
        this.titulo = "Restableces contraseña";
        this.subtitulo = "Te hemos enviado un correo electronico a la cuenta de registro.";
        this.usuario = new _usuarios_usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
      }

      _createClass(RecordarContraseniaAvisoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.authService.isAuthenticated()) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Login', "El usuario ".concat(this.authService.usuario.userName, " ya se encuentra logeado "), 'info');
            this.router.navigate(['/clientes']);
          }
        }
      }, {
        key: "logIn",
        value: function logIn() {
          this.router.navigate(['/login']);
        }
      }]);

      return RecordarContraseniaAvisoComponent;
    }();

    RecordarContraseniaAvisoComponent.ctorParameters = function () {
      return [{
        type: _usuarios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    RecordarContraseniaAvisoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-recordar-contrasenia-aviso',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./recordar-contrasenia-aviso.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recordar-contrasenia-aviso/recordar-contrasenia-aviso.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./recordar-contrasenia-aviso.component.css */
      "./src/app/recordar-contrasenia-aviso/recordar-contrasenia-aviso.component.css")).default]
    })], RecordarContraseniaAvisoComponent);
    /***/
  },

  /***/
  "./src/app/recordar-contrasenia-cambio/recordar-contrasenia-cambio.component.css":
  /*!***************************************************************************************!*\
    !*** ./src/app/recordar-contrasenia-cambio/recordar-contrasenia-cambio.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecordarContraseniaCambioRecordarContraseniaCambioComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY29yZGFyLWNvbnRyYXNlbmlhLWNhbWJpby9yZWNvcmRhci1jb250cmFzZW5pYS1jYW1iaW8uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/recordar-contrasenia-cambio/recordar-contrasenia-cambio.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/recordar-contrasenia-cambio/recordar-contrasenia-cambio.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: RecordarContraseniaCambioComponent */

  /***/
  function srcAppRecordarContraseniaCambioRecordarContraseniaCambioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecordarContraseniaCambioComponent", function () {
      return RecordarContraseniaCambioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RecordarContraseniaCambioComponent =
    /*#__PURE__*/
    function () {
      function RecordarContraseniaCambioComponent() {
        _classCallCheck(this, RecordarContraseniaCambioComponent);
      }

      _createClass(RecordarContraseniaCambioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RecordarContraseniaCambioComponent;
    }();

    RecordarContraseniaCambioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-recordar-contrasenia-cambio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./recordar-contrasenia-cambio.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recordar-contrasenia-cambio/recordar-contrasenia-cambio.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./recordar-contrasenia-cambio.component.css */
      "./src/app/recordar-contrasenia-cambio/recordar-contrasenia-cambio.component.css")).default]
    })], RecordarContraseniaCambioComponent);
    /***/
  },

  /***/
  "./src/app/recordar-contrasenia/recordar-contrasenia.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/recordar-contrasenia/recordar-contrasenia.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecordarContraseniaRecordarContraseniaComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY29yZGFyLWNvbnRyYXNlbmlhL3JlY29yZGFyLWNvbnRyYXNlbmlhLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/recordar-contrasenia/recordar-contrasenia.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/recordar-contrasenia/recordar-contrasenia.component.ts ***!
    \************************************************************************/

  /*! exports provided: RecordarContraseniaComponent */

  /***/
  function srcAppRecordarContraseniaRecordarContraseniaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecordarContraseniaComponent", function () {
      return RecordarContraseniaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _usuarios_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../usuarios/usuario */
    "./src/app/usuarios/usuario.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _usuarios_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../usuarios/auth.service */
    "./src/app/usuarios/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RecordarContraseniaComponent =
    /*#__PURE__*/
    function () {
      function RecordarContraseniaComponent(authService, router) {
        _classCallCheck(this, RecordarContraseniaComponent);

        this.authService = authService;
        this.router = router;
        this.titulo = "Restableces contraseña";
        this.subtitulo = "Déjanos tu correo, enviaremos un link para restablecer la contraseña.";
        this.usuario = new _usuarios_usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
      }

      _createClass(RecordarContraseniaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.authService.isAuthenticated()) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Login', "El usuario ".concat(this.authService.usuario.userName, " ya se encuentra logeado "), 'info');
            this.router.navigate(['/clientes']);
          }
        }
      }, {
        key: "logIn",
        value: function logIn() {
          if (this.usuario.email == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Aviso', 'El correo esta vacio.', 'warning');
            return;
          }

          this.router.navigate(['/recordar-contrasenia-aviso']); // this.authService.logIn(this.usuario).subscribe(response =>{
          //   this.authService.guardarUsuario(response.access_token);
          //   this.authService.guardarToken(response.access_token);
          //   let user = this.authService.usuario;
          //   this.router.navigate(['/clientes']);
          //   swal('Inicio Exitoso',`Bienvenido de vuelta ${user.userName}. Has iniciado correctamente`,'success');
          // }, err =>{
          //   if (err.status == 400){
          //     swal('Error al iniciar sesión','Usuario o clave Incorrecta','error');
          //   }
          // });
        }
      }]);

      return RecordarContraseniaComponent;
    }();

    RecordarContraseniaComponent.ctorParameters = function () {
      return [{
        type: _usuarios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    RecordarContraseniaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-recordar-contrasenia',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./recordar-contrasenia.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recordar-contrasenia/recordar-contrasenia.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./recordar-contrasenia.component.css */
      "./src/app/recordar-contrasenia/recordar-contrasenia.component.css")).default]
    })], RecordarContraseniaComponent);
    /***/
  },

  /***/
  "./src/app/sidebar/sidebar.component.css":
  /*!***********************************************!*\
    !*** ./src/app/sidebar/sidebar.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSidebarSidebarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/sidebar/sidebar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sidebar/sidebar.component.ts ***!
    \**********************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _usuarios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../usuarios/auth.service */
    "./src/app/usuarios/auth.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent(authService, router) {
        _classCallCheck(this, SidebarComponent);

        this.authService = authService;
        this.router = router;
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.info(this.router.url);
        }
      }, {
        key: "logOut",
        value: function logOut() {
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Logout', 'Ha cerrado sesión correctamente', 'success');
          this.authService.logOut();
          this.router.navigate(['/login']);
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ctorParameters = function () {
      return [{
        type: _usuarios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.css */
      "./src/app/sidebar/sidebar.component.css")).default]
    })], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/usuarios/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/usuarios/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppUsuariosAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./usuario */
    "./src/app/usuarios/usuario.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../config/config */
    "./src/app/config/config.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
      }

      _createClass(AuthService, [{
        key: "logIn",
        value: function logIn(usuario) {
          var urlEndPoint = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_BACKEND"] + '/oauth/token';
          var credenciales = btoa('angularapp' + ':' + '12345');
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + credenciales
          });
          var params = new URLSearchParams();
          params.set('grant_type', 'password');
          params.set('username', usuario.userName);
          params.set('password', usuario.password);
          console.log(params.toString());
          return this.http.post(urlEndPoint, params.toString(), {
            headers: httpHeaders
          });
        }
      }, {
        key: "guardarUsuario",
        value: function guardarUsuario(accessToken) {
          var payLoad = this.obtenerDatosToken(accessToken);
          this._usuario = new _usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
          this._usuario.userName = payLoad.user_name;
          this._usuario.roles = payLoad.authorities;
          sessionStorage.setItem('usuario', JSON.stringify(this._usuario));
        }
      }, {
        key: "guardarToken",
        value: function guardarToken(accessToken) {
          this._token = accessToken;
          sessionStorage.setItem('token', accessToken);
        }
      }, {
        key: "obtenerDatosToken",
        value: function obtenerDatosToken(accessToken) {
          if (accessToken != null) {
            return JSON.parse(atob(accessToken.split(".")[1]));
          }

          return null;
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          var payload = this.obtenerDatosToken(this.token);

          if (payload != null && payload.user_name && payload.user_name.length > 0) {
            return true;
          }

          return false;
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this._token = null;
          this._usuario = null;
          sessionStorage.clear();
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('usuario');
        }
      }, {
        key: "tienePermisos",
        value: function tienePermisos(rol) {
          return this.usuario.roles.includes(rol);
        }
      }, {
        key: "usuario",
        get: function get() {
          if (this._usuario != null) {
            return this._usuario;
          } else if (this._usuario == null && sessionStorage.getItem('usuario') != null) {
            this._usuario = JSON.parse(sessionStorage.getItem('usuario'));
            return this._usuario;
          }

          return new _usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
        }
      }, {
        key: "token",
        get: function get() {
          if (this._token != null) {
            return this._token;
          } else if (this._token == null && sessionStorage.getItem('token') != null) {
            this._token = sessionStorage.getItem('token');
            return this._token;
          }

          return null;
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/usuarios/interceptors/auth.interceptor.ts":
  /*!***********************************************************!*\
    !*** ./src/app/usuarios/interceptors/auth.interceptor.ts ***!
    \***********************************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppUsuariosInterceptorsAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/usuarios/auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(authService, router) {
        _classCallCheck(this, AuthInterceptor);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this5 = this;

          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            if (e.status === 401) {
              if (_this5.authService.isAuthenticated()) {
                _this5.authService.logOut();
              }

              _this5.router.navigate(['/login']);
            }

            if (e.status === 403) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Acceso denegado', 'No tienes los permisos para acceder a este recurso', 'warning');

              _this5.router.navigate(['/clientes']);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
          }));
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/usuarios/interceptors/token.interceptor.ts":
  /*!************************************************************!*\
    !*** ./src/app/usuarios/interceptors/token.interceptor.ts ***!
    \************************************************************/

  /*! exports provided: TokenInterceptor */

  /***/
  function srcAppUsuariosInterceptorsTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
      return TokenInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/usuarios/auth.service.ts");

    var TokenInterceptor =
    /*#__PURE__*/
    function () {
      function TokenInterceptor(authService) {
        _classCallCheck(this, TokenInterceptor);

        this.authService = authService;
      }

      _createClass(TokenInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var token = this.authService.token;

          if (token != null) {
            var authReq = req.clone({
              headers: req.headers.set('Authorization', 'Bearer ' + token)
            });
            return next.handle(authReq);
          }

          return next.handle(req);
        }
      }]);

      return TokenInterceptor;
    }();

    TokenInterceptor.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TokenInterceptor);
    /***/
  },

  /***/
  "./src/app/usuarios/login.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/usuarios/login.component.ts ***!
    \*********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppUsuariosLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./usuario */
    "./src/app/usuarios/usuario.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/usuarios/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authService, router) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.router = router;
        this.titulo = "Iniciar sesión";
        this.usuario = new _usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.authService.isAuthenticated()) {
            //swal('Login',`El usuario ${this.authService.usuario.userName} ya se encuentra logeado `,'info');
            this.router.navigate(['/clientes']);
          }
        }
      }, {
        key: "logIn",
        value: function logIn() {
          if (this.usuario.userName == null || this.usuario.password == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Aviso', 'Usuario o Contraseña vacia', 'warning');
            return;
          }

          this.authService.guardarUsuario('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsImF1dGhvcml0aWVzIjoiMSJ9.2WhGrww2dIE0l9tBqSVEOxnkANAxqaGXzBMscd4mSlg');
          this.authService.guardarToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsImF1dGhvcml0aWVzIjoiMSJ9.2WhGrww2dIE0l9tBqSVEOxnkANAxqaGXzBMscd4mSlg');
          var user = this.authService.usuario;
          this.router.navigate(['/clientes']); // this.authService.logIn(this.usuario).subscribe(response =>{
          //   this.authService.guardarUsuario(response.access_token);
          //   this.authService.guardarToken(response.access_token);
          //   let user = this.authService.usuario;
          //   this.router.navigate(['/clientes']);
          //   swal('Inicio Exitoso',`Bienvenido de vuelta ${user.userName}. Has iniciado correctamente`,'success');
          // }, err =>{
          //   if (err.status == 400){
          //     swal('Error al iniciar sesión','Usuario o clave Incorrecta','error');
          //   }
          // });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/login.component.html")).default
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/usuarios/usuario.ts":
  /*!*************************************!*\
    !*** ./src/app/usuarios/usuario.ts ***!
    \*************************************/

  /*! exports provided: Usuario */

  /***/
  function srcAppUsuariosUsuarioTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Usuario", function () {
      return Usuario;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Usuario = function Usuario() {
      _classCallCheck(this, Usuario);

      this.roles = [];
    };
    /***/

  },

  /***/
  "./src/app/ventas-proyecto-nuevo-editar/ventas-proyecto-nuevo-editar.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/ventas-proyecto-nuevo-editar/ventas-proyecto-nuevo-editar.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: VentasProyectoNuevoEditarComponent */

  /***/
  function srcAppVentasProyectoNuevoEditarVentasProyectoNuevoEditarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VentasProyectoNuevoEditarComponent", function () {
      return VentasProyectoNuevoEditarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var VentasProyectoNuevoEditarComponent =
    /*#__PURE__*/
    function () {
      function VentasProyectoNuevoEditarComponent() {
        _classCallCheck(this, VentasProyectoNuevoEditarComponent);
      }

      _createClass(VentasProyectoNuevoEditarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VentasProyectoNuevoEditarComponent;
    }();

    VentasProyectoNuevoEditarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ventas-proyecto-nuevo-editar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ventas-proyecto-nuevo-editar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ventas-proyecto-nuevo-editar/ventas-proyecto-nuevo-editar.component.html")).default
    })], VentasProyectoNuevoEditarComponent);
    /***/
  },

  /***/
  "./src/app/ventas-proyecto/ventas-proyecto.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/ventas-proyecto/ventas-proyecto.component.ts ***!
    \**************************************************************/

  /*! exports provided: VentasProyectoComponent */

  /***/
  function srcAppVentasProyectoVentasProyectoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VentasProyectoComponent", function () {
      return VentasProyectoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ventasproyecto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ventasproyecto.service */
    "./src/app/ventas-proyecto/ventasproyecto.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _usuarios_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../usuarios/auth.service */
    "./src/app/usuarios/auth.service.ts");

    var VentasProyectoComponent =
    /*#__PURE__*/
    function () {
      function VentasProyectoComponent(ventasproyectoService, activatedRoute, authService, router) {
        _classCallCheck(this, VentasProyectoComponent);

        this.ventasproyectoService = ventasproyectoService;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.router = router;
        this.status = false;
      }

      _createClass(VentasProyectoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.activatedRoute.paramMap.subscribe(function () {
            _this6.ventasproyectoService.getVentasProyectos().subscribe(function (clientesJsonResponse) {
              _this6.ventasProyectoLista = clientesJsonResponse;
            });
          });
        }
      }, {
        key: "menuToggle",
        value: function menuToggle() {
          this.status = !this.status;
        }
      }]);

      return VentasProyectoComponent;
    }();

    VentasProyectoComponent.ctorParameters = function () {
      return [{
        type: _ventasproyecto_service__WEBPACK_IMPORTED_MODULE_2__["VentasproyectoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _usuarios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    VentasProyectoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ventas-proyecto',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ventas-proyecto.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ventas-proyecto/ventas-proyecto.component.html")).default
    })], VentasProyectoComponent);
    /***/
  },

  /***/
  "./src/app/ventas-proyecto/ventasproyecto.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/ventas-proyecto/ventasproyecto.service.ts ***!
    \***********************************************************/

  /*! exports provided: VentasproyectoService */

  /***/
  function srcAppVentasProyectoVentasproyectoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VentasproyectoService", function () {
      return VentasproyectoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../config/config */
    "./src/app/config/config.ts");

    var VentasproyectoService =
    /*#__PURE__*/
    function () {
      function VentasproyectoService(http, router) {
        _classCallCheck(this, VentasproyectoService);

        this.http = http;
        this.router = router;
      }

      _createClass(VentasproyectoService, [{
        key: "getVentasProyectos",
        value: function getVentasProyectos() {
          // return this.http.get(URL_BACKEND + 'vendedor/').pipe(
          //     map((jsonColaboradorResponse: any) => {
          //         (jsonColaboradorResponse as Colaborador[]).map(colaborador => {
          //             colaborador.nombre = colaborador.nombre.toUpperCase();
          //             return colaborador;
          //         });
          //         return jsonColaboradorResponse;
          //     })
          // );
          return this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_5__["URL_BACKEND_DEMO"] + 'ventas-proyecto.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (jsonVentasProyectoResponse) {
            jsonVentasProyectoResponse.map(function (proyecto) {
              proyecto.nombre = proyecto.nombre.toUpperCase();
              proyecto.apepaterno = proyecto.apepaterno.toUpperCase();
              proyecto.apematerno = proyecto.apematerno.toUpperCase();
              return proyecto;
            });
            return jsonVentasProyectoResponse;
          }));
        }
      }]);

      return VentasproyectoService;
    }();

    VentasproyectoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    VentasproyectoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], VentasproyectoService);
    /***/
  },

  /***/
  "./src/app/ventas/proyectos.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/ventas/proyectos.service.ts ***!
    \*********************************************/

  /*! exports provided: ProyectoService */

  /***/
  function srcAppVentasProyectosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProyectoService", function () {
      return ProyectoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../config/config */
    "./src/app/config/config.ts");

    var ProyectoService =
    /*#__PURE__*/
    function () {
      function ProyectoService(http, router) {
        _classCallCheck(this, ProyectoService);

        this.http = http;
        this.router = router;
      }

      _createClass(ProyectoService, [{
        key: "getProyectos",
        value: function getProyectos() {
          // return this.http.get(URL_BACKEND + 'vendedor/').pipe(
          //     map((jsonColaboradorResponse: any) => {
          //         (jsonColaboradorResponse as Colaborador[]).map(colaborador => {
          //             colaborador.nombre = colaborador.nombre.toUpperCase();
          //             return colaborador;
          //         });
          //         return jsonColaboradorResponse;
          //     })
          // );
          return this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_5__["URL_BACKEND_DEMO"] + 'proyectos.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (jsonProyectoResponse) {
            jsonProyectoResponse.map(function (proyecto) {
              proyecto.nombre = proyecto.nombre.toUpperCase();
              return proyecto;
            });
            return jsonProyectoResponse;
          }));
        }
      }]);

      return ProyectoService;
    }();

    ProyectoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ProyectoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ProyectoService);
    /***/
  },

  /***/
  "./src/app/ventas/ventas.component.ts":
  /*!********************************************!*\
    !*** ./src/app/ventas/ventas.component.ts ***!
    \********************************************/

  /*! exports provided: VentasComponent */

  /***/
  function srcAppVentasVentasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VentasComponent", function () {
      return VentasComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _proyectos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./proyectos.service */
    "./src/app/ventas/proyectos.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _usuarios_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../usuarios/auth.service */
    "./src/app/usuarios/auth.service.ts");

    var VentasComponent =
    /*#__PURE__*/
    function () {
      function VentasComponent(proyectoService, activatedRoute, authService, router) {
        _classCallCheck(this, VentasComponent);

        this.proyectoService = proyectoService;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.router = router;
        this.status = false;
      }

      _createClass(VentasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.activatedRoute.paramMap.subscribe(function () {
            _this7.proyectoService.getProyectos().subscribe(function (clientesJsonResponse) {
              _this7.proyectoLista = clientesJsonResponse;
            });
          });
        }
      }, {
        key: "menuToggle",
        value: function menuToggle() {
          this.status = !this.status;
        }
      }]);

      return VentasComponent;
    }();

    VentasComponent.ctorParameters = function () {
      return [{
        type: _proyectos_service__WEBPACK_IMPORTED_MODULE_2__["ProyectoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _usuarios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    VentasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ventas',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ventas.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ventas/ventas.component.html")).default
    })], VentasComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\angular_projects\inmobiliaria\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map