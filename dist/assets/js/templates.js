this["Templates"] = this["Templates"] || {};

this["Templates"]["claims-detail"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"add-tag-contents\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"popover\"><span>&times;</span></button>\n    <form class=\"form-horizontal\" role=\"form\">\n        <div class=\"form-group processed\">\n            <label>Processed:</label>\n            <span class=\"pull-right\">"
    + escapeExpression(((helper = (helper = helpers.processedDate || (depth0 != null ? depth0.processedDate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"processedDate","hash":{},"data":data}) : helper)))
    + "</span>\n        </div>\n        <div class=\"form-group total\">\n            <span>Total Claim Cost:</span>\n            <span class=\"pull-right\">"
    + escapeExpression(((helper = (helper = helpers.totalCost || (depth0 != null ? depth0.totalCost : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"totalCost","hash":{},"data":data}) : helper)))
    + "</span>\n        </div>\n        <div class=\"form-group total\">\n            <span>Total Plan Paid:</span>\n            <span class=\"pull-right amount-paid\">- "
    + escapeExpression(((helper = (helper = helpers.totalPaid || (depth0 != null ? depth0.totalPaid : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"totalPaid","hash":{},"data":data}) : helper)))
    + "</span>\n        </div>\n        <div class=\"form-group\">\n            <label>You Pay:</label>\n            <strong class=\"pull-right\">"
    + escapeExpression(((helper = (helper = helpers.difference || (depth0 != null ? depth0.difference : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"difference","hash":{},"data":data}) : helper)))
    + "</strong>\n        </div>\n    </form>\n</div>";
},"useData":true});



this["Templates"]["claims-overview__list"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "                <tr class=\"claim-table-row\">\n                    <td class=\"claim-number\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                <span>"
    + escapeExpression(((helper = (helper = helpers.claimNumber || (depth0 != null ? depth0.claimNumber : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"claimNumber","hash":{},"data":data}) : helper)))
    + "</span>\n                            </div>\n                        </div>\n                    </td>\n                    <td>\n                        <div class=\"row\">\n                            <div class=\"col-sm-12 no-wrap\">\n                                <span>"
    + escapeExpression(((helper = (helper = helpers.fromDate || (depth0 != null ? depth0.fromDate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"fromDate","hash":{},"data":data}) : helper)))
    + " - "
    + escapeExpression(((helper = (helper = helpers.toDate || (depth0 != null ? depth0.toDate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"toDate","hash":{},"data":data}) : helper)))
    + "</span>\n                            </div>\n                        </div>\n                    </td>\n                    <td>\n                        <div class=\"row\">\n";
  stack1 = ((helpers.compare || (depth0 && depth0.compare) || helperMissing).call(depth0, (depth0 != null ? depth0.locked : depth0), "false", {"name":"compare","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "                        </div>\n                    </td>\n                    <td>\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                <span>"
    + escapeExpression(((helper = (helper = helpers.who || (depth0 != null ? depth0.who : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"who","hash":{},"data":data}) : helper)))
    + "</span>\n                            </div>\n                        </div>\n                    </td>\n                    <td>\n                        <div class=\"row\">\n                            <div class=\"col-sm-12 no-wrap\">\n                                <span>$"
    + escapeExpression(((helper = (helper = helpers.youOwe || (depth0 != null ? depth0.youOwe : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"youOwe","hash":{},"data":data}) : helper)))
    + "</span>\n";
  stack1 = ((helpers.compare || (depth0 && depth0.compare) || helperMissing).call(depth0, (depth0 != null ? depth0.status : depth0), "approved", {"name":"compare","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "                            </div>\n                        </div>\n                    </td>\n                    <td class=\"claims-status\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-8 col-sm-12 no-wrap\">\n                                <span id=\"status-tag\" class=\"status-"
    + escapeExpression(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"status","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"status","hash":{},"data":data}) : helper)))
    + "</span>\n                            </div>\n                        </div>\n                    </td>\n                    <td class=\"claims-eob\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-8 col-sm-12\">\n";
  stack1 = ((helpers.compare || (depth0 && depth0.compare) || helperMissing).call(depth0, (depth0 != null ? depth0.locked : depth0), "false", {"name":"compare","hash":{},"fn":this.program(8, data),"inverse":this.program(10, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                            </div>\n                        </div>\n                    </td>\n                </tr>\n";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                            <div class=\"col-sm-12 no-wrap\">\n                                <span>"
    + escapeExpression(((helper = (helper = helpers.where || (depth0 != null ? depth0.where : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"where","hash":{},"data":data}) : helper)))
    + "</span>\n                            </div>\n";
},"4":function(depth0,helpers,partials,data) {
  return "                            <div class=\"col-sm-12 text-center\">\n                                <span><i class=\"fa fa-lock fa-lg\"></i></span>\n                            </div>\n";
  },"6":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                                <a class=\"tag-anchor unstyled claim-detail-trigger\" href=\"#\" data-toggle=\"popover\">\n                                    <i class=\"fa fa-question-circle\"></i>\n                                </a>\n                                <div id=\"claim-detail-"
    + escapeExpression(((helper = (helper = helpers.claimNumber || (depth0 != null ? depth0.claimNumber : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"claimNumber","hash":{},"data":data}) : helper)))
    + "\" class=\"add-tag-block\"></div>\n";
},"8":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                                <span><a href=\""
    + escapeExpression(((helper = (helper = helpers.file || (depth0 != null ? depth0.file : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"file","hash":{},"data":data}) : helper)))
    + "\"><i class=\"fa fa-file-pdf-o fa-lg\"></i></a></span>\n";
},"10":function(depth0,helpers,partials,data) {
  return "                                <span><i class=\"fa fa-lock fa-lg\"></i></span>\n";
  },"12":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "            <tr>\n                <td class=\"claim-table-row\">\n                    <div class=\"row claim-number\">\n                        <div class=\"col-xs-4\">\n                            <span>Claim:</span>\n                        </div>\n                        <div class=\"col-xs-8\">\n                            <span>"
    + escapeExpression(((helper = (helper = helpers.claimNumber || (depth0 != null ? depth0.claimNumber : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"claimNumber","hash":{},"data":data}) : helper)))
    + "</span>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xs-4\">\n                            <span>When:</span>\n                        </div>\n                        <div class=\"col-xs-8 no-wrap\">\n                            <span>"
    + escapeExpression(((helper = (helper = helpers.fromDate || (depth0 != null ? depth0.fromDate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"fromDate","hash":{},"data":data}) : helper)))
    + " - "
    + escapeExpression(((helper = (helper = helpers.toDate || (depth0 != null ? depth0.toDate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"toDate","hash":{},"data":data}) : helper)))
    + "</span>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xs-4\">\n                            <span>Where:</span>\n                        </div>\n";
  stack1 = ((helpers.compare || (depth0 && depth0.compare) || helperMissing).call(depth0, (depth0 != null ? depth0.locked : depth0), "false", {"name":"compare","hash":{},"fn":this.program(13, data),"inverse":this.program(15, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "                    </div>\n                     <div class=\"row\">\n                        <div class=\"col-xs-4\">\n                            <span>Who:</span>\n                        </div>\n                        <div class=\"col-xs-8\">\n                            <span>"
    + escapeExpression(((helper = (helper = helpers.who || (depth0 != null ? depth0.who : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"who","hash":{},"data":data}) : helper)))
    + "</span>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xs-4\">\n                            <span>You Pay:</span>\n                        </div>\n                        <div class=\"col-xs-8 no-wrap\">\n                            <span>$"
    + escapeExpression(((helper = (helper = helpers.youOwe || (depth0 != null ? depth0.youOwe : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"youOwe","hash":{},"data":data}) : helper)))
    + "</span>\n";
  stack1 = ((helpers.compare || (depth0 && depth0.compare) || helperMissing).call(depth0, (depth0 != null ? depth0.status : depth0), "approved", {"name":"compare","hash":{},"fn":this.program(17, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "                        </div>\n                    </div>\n                    <div class=\"row claims-status\">\n                        <div class=\"col-xs-4\">\n                            <span>Status:</span>\n                        </div>\n                        <div class=\"col-xs-8 no-wrap\">\n                            <span id=\"status-tag\" class=\"status-"
    + escapeExpression(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"status","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"status","hash":{},"data":data}) : helper)))
    + "</span>\n                        </div>\n                    </div>\n                    <div class=\"row claims-eob\">\n                        <div class=\"col-xs-4\">\n                            <span>EOB:</span>\n                        </div>\n                        <div class=\"col-xs-8\">\n";
  stack1 = ((helpers.compare || (depth0 && depth0.compare) || helperMissing).call(depth0, (depth0 != null ? depth0.locked : depth0), "false", {"name":"compare","hash":{},"fn":this.program(19, data),"inverse":this.program(21, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                        </div>\n                    </div>\n                </td>\n            </tr>\n";
},"13":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                        <div class=\"col-xs-8 no-wrap\">\n                            <span>"
    + escapeExpression(((helper = (helper = helpers.where || (depth0 != null ? depth0.where : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"where","hash":{},"data":data}) : helper)))
    + "</span>\n                        </div>\n";
},"15":function(depth0,helpers,partials,data) {
  return "                        <div class=\"col-xs-8\">\n                            <span><i class=\"fa fa-lock fa-lg\"></i></span>\n                        </div>\n";
  },"17":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                            <a class=\"tag-anchor unstyled claim-detail-trigger\" href=\"#\" data-toggle=\"popover\">\n                                <i class=\"fa fa-question-circle\"></i>\n                            </a>\n                            <div id=\"claim-detail-"
    + escapeExpression(((helper = (helper = helpers.claimNumber || (depth0 != null ? depth0.claimNumber : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"claimNumber","hash":{},"data":data}) : helper)))
    + "\" class=\"add-tag-block\"></div>\n";
},"19":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                            <span><a href=\""
    + escapeExpression(((helper = (helper = helpers.file || (depth0 != null ? depth0.file : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"file","hash":{},"data":data}) : helper)))
    + "\"><i class=\"fa fa-file-pdf-o fa-lg\"></i></a></span>\n";
},"21":function(depth0,helpers,partials,data) {
  return "                            <span><i class=\"fa fa-lock fa-lg\"></i></span>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"claims-table\">\n    <div class=\"table-responsive\">\n        <div id=\"claims_desktopTable\" class=\"hidden-xs\">\n        <table id=\"claimslist_table\" class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th data-field=\"Claim\">\n                        <a class=\"claims-column\" href=\"javascript:getNewData(1, 10, 'claimNumber', false)\">Claim</a>\n                        <span id=\"claimNumber-up\" class=\"hidden\"><i class=\"fa fa-caret-up fa-lg\"></i></span>\n                        <span id=\"claimNumber-down\" class=\"hidden\"><i class=\"fa fa-caret-down fa-lg\"></i></span>\n                        <span id=\"claimNumber-grey\" class=\"grey-arrow\"><i class=\"fa fa-caret-down fa-lg\"></i></span>\n                    </th>\n                    <th data-field=\"When\">\n                        <a class=\"claims-column\" href=\"javascript:getNewData(1, 10, 'fromDate', false)\">When</a>\n                        <span id=\"fromDate-up\" class=\"hidden\"><i class=\"fa fa-caret-up fa-lg\"></i></span>\n                        <span id=\"fromDate-down\" class=\"hidden\"><i class=\"fa fa-caret-down fa-lg\"></i></span>\n                        <span id=\"fromDate-grey\" class=\"grey-arrow\"><i class=\"fa fa-caret-down fa-lg\"></i></span>\n                    </th>\n                    <th data-field=\"Where\">\n                        <a class=\"claims-column\" href=\"javascript:getNewData(1, 10, 'where', false)\">Where</a>\n                        <span id=\"where-up\" class=\"hidden\"><i class=\"fa fa-caret-up fa-lg\"></i></span>\n                        <span id=\"where-down\" class=\"hidden\"><i class=\"fa fa-caret-down fa-lg\"></i></span>\n                        <span id=\"where-grey\" class=\"grey-arrow\"><i class=\"fa fa-caret-down fa-lg\"></i></span>\n                    </th>\n                    <th data-field=\"Who\">\n                        <a class=\"claims-column\" href=\"javascript:getNewData(1, 10, 'who', false)\">Who</a>\n                        <span id=\"who-up\" class=\"hidden\"><i class=\"fa fa-caret-up fa-lg\"></i></span>\n                        <span id=\"who-down\" class=\"hidden\"><i class=\"fa fa-caret-down fa-lg\"></i></span>\n                        <span id=\"who-grey\" class=\"grey-arrow\"><i class=\"fa fa-caret-down fa-lg\"></i></span>\n                    </th>\n                    <th data-field=\"You Pay\" class=\"no-wrap\">\n                        <a class=\"claims-column\" href=\"javascript:getNewData(1, 10, 'youOwe', false)\">You Pay</a>\n                        <span id=\"youOwe-up\" class=\"hidden\"><i class=\"fa fa-caret-up fa-lg\"></i></span>\n                        <span id=\"youOwe-down\" class=\"hidden\"><i class=\"fa fa-caret-down fa-lg\"></i></span>\n                        <span id=\"youOwe-grey\" class=\"grey-arrow\"><i class=\"fa fa-caret-down fa-lg\"></i></span>\n                    </th>\n                    <th data-field=\"Status\">\n                        <a class=\"claims-column\" href=\"javascript:getNewData(1, 10, 'status', false)\">Status</a>\n                        <span id=\"status-up\" class=\"hidden\"><i class=\"fa fa-caret-up fa-lg\"></i></span>\n                        <span id=\"status-down\" class=\"hidden\"><i class=\"fa fa-caret-down fa-lg\"></i></span>\n                        <span id=\"status-grey\" class=\"grey-arrow\"><i class=\"fa fa-caret-down fa-lg\"></i></span>\n                    </th>\n                    <th data-field=\"EOB\">EOB</th>\n                </tr>\n            </thead>\n            <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.claims : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </tbody>\n        </table>\n        </div>\n        <div id=\"claims_mobileTable\" class=\"visible-xs\">\n        <table id=\"claimslist_table\" class=\"table table-striped\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.claims : depth0), {"name":"each","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </table>\n        </div>\n    </div>\n</div>\n";
},"useData":true});



this["Templates"]["claims-overview__pagination"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing;
  stack1 = ((helper = (helper = helpers.pagination || (depth0 != null ? depth0.pagination : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pagination","hash":{},"data":data}) : helper));
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});



this["Templates"]["id-cards__cards"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <li><a class=\"unstyled\" tabindex=\"-1\" role=\"menuitem\" data-card-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "    <div id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"row";
  stack1 = helpers['if'].call(depth0, (data && data.first), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n        <div class=\"col-sm-6 id-card\">\n            <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.cardFront : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.cardFront : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\">\n        </div>\n        <div class=\"col-sm-6 id-card\">\n            <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.cardBack : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.cardBack : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\">\n        </div>\n    </div>\n";
},"4":function(depth0,helpers,partials,data) {
  return " current-card";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"row\">\n\n    <form id=\"id-member-form\" class=\"form-inline form-space\" method=\"post\" action=\"example-service\" role=\"form\">\n\n    <div class=\"col-sm-7 col-md-6\">\n        <div class=\"form-group hidden-xs\">\n            <div class=\"leading-label\">Showing for:</div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"btn-group btn-border show-for-name\">\n                <button type=\"button\" class=\"btn btn-default btn-dropdown dropdown-font\" data-toggle=\"dropdown\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.member : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.name : stack1), depth0))
    + "</button>\n                <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n                    <span class=\"caret\"></span>\n                    <span class=\"sr-only\">Toggle Dropdown</span>\n                </button>\n                <ul id=\"member-dropdown\" class=\"dropdown-menu dropdown-font\" role=\"menu\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.member : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-5 col-md-6 member-id-container\">\n        <label class=\"member-label\">Member ID:</label>\n        <div class=\"btn-group btn-border\">\n            <span id=\"member-id\" class=\"form-control form-control-inline\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.member : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.id : stack1), depth0))
    + "</span>\n        </div>\n    </div>\n\n    </form>\n\n</div>\n\n<hr>\n\n<div id=\"id-cards-template-container\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.member : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n";
},"useData":true});



this["Templates"]["planDetail__you-pay"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                <p class=\"row_label\">"
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</p>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "                    <div class=\"visible-xs-block\">"
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</div>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar  "
    + escapeExpression(lambda((depth0 != null ? depth0.styleClass : depth0), depth0))
    + " \" role=\"progressbar\"\n                             aria-valuenow=\""
    + escapeExpression(lambda((depth0 != null ? depth0.balance : depth0), depth0))
    + "\"\n                             aria-valuemin=\"0\" aria-valuemax=\""
    + escapeExpression(lambda((depth0 != null ? depth0.max : depth0), depth0))
    + "\"\n                             style=\"width:"
    + escapeExpression(lambda((depth0 != null ? depth0.width : depth0), depth0))
    + "%\">\n";
  stack1 = ((helpers.lt || (depth0 && depth0.lt) || helperMissing).call(depth0, (depth0 != null ? depth0.width : depth0), 50, {"name":"lt","hash":{},"fn":this.program(4, data),"inverse":this.program(6, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                        </div>\n                    </div>\n";
},"4":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                                <span class=\"dark\">&nbsp;$"
    + escapeExpression(lambda((depth0 != null ? depth0.balance : depth0), depth0))
    + "</span>\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "                                <span class=\"light metbar\">\n";
  stack1 = ((helpers.gt || (depth0 && depth0.gt) || helperMissing).call(depth0, (depth0 != null ? depth0.width : depth0), 99, {"name":"gt","hash":{},"fn":this.program(7, data),"inverse":this.program(9, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                                </span>$"
    + escapeExpression(lambda((depth0 != null ? depth0.balance : depth0), depth0))
    + "\n";
},"7":function(depth0,helpers,partials,data) {
  return "                                        (MET)\n";
  },"9":function(depth0,helpers,partials,data) {
  return "";
},"11":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = helpers['if'].call(depth0, (data && data.first), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"12":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                                <thead>\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                                </thead>\n";
},"13":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.compare || (depth0 && depth0.compare) || helperMissing).call(depth0, (data && data.key), "name", {"name":"compare","hash":{},"fn":this.program(14, data),"inverse":this.program(16, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"14":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "\n                                        <th id=\"ind_decuct_"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" class=\"name_column\">\n                                            Individual\n                                            Deductible\n                                        </th>\n";
},"16":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                                        <th id=\"ind_decuct_"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\">"
    + escapeExpression(lambda((data && data.key), depth0))
    + "</th>\n";
},"18":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                            <tr>\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(19, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                            </tr>\n";
},"19":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.contains || (depth0 && depth0.contains) || helperMissing).call(depth0, depth0, "*", {"name":"contains","hash":{},"fn":this.program(20, data),"inverse":this.program(22, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"20":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                                        <td class=\"met\">"
    + escapeExpression(lambda(depth0, depth0))
    + " </td>\n";
},"22":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                                        <td>"
    + escapeExpression(lambda(depth0, depth0))
    + "</td>\n";
},"24":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                                <td>Totals Applied</td>\n                                <td>&nbsp;</td>\n                                <td>&nbsp;</td>\n                                <td>"
    + escapeExpression(lambda((depth0 != null ? depth0.In_Network_Applied : depth0), depth0))
    + "</td>\n                                <td>&nbsp;</td>\n                                <td>"
    + escapeExpression(lambda((depth0 != null ? depth0.Out_of_Network_Applied : depth0), depth0))
    + "</td>\n";
},"26":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                            <tr class=\"family_totals bold_row\">\n                                <td colspan=\"6\">Family Deductible</td>\n                            </tr>\n                            <tr class=\"family_totals\">\n                                <td>Family</td>\n                                <td>"
    + escapeExpression(lambda((depth0 != null ? depth0.cost_level : depth0), depth0))
    + "</td>\n                                <td></td>\n                                <!-- a blank column for each skipped column, could use colspan= skipped columns too -->\n                                <td class=\"bold_column\">"
    + escapeExpression(lambda((depth0 != null ? depth0.In_Network_Deduct : depth0), depth0))
    + "</td>\n                                <td></td>\n                                <!-- a blank column for each skipped column, could use colspan= skipped columns too -->\n                                <td class=\"bold_column\">"
    + escapeExpression(lambda((depth0 != null ? depth0.Out_of_Network_Max : depth0), depth0))
    + "</td>\n                            </tr>\n                            <tr class=\"family_totals\">\n                                <td>Totals Applied</td>\n                                <td></td>\n                                <td></td>\n                                <!-- a blank column for each skipped column, could use colspan= skipped columns too -->\n                                <td class=\"in_net_subtraction\">"
    + escapeExpression(lambda((depth0 != null ? depth0.In_Network_Applied : depth0), depth0))
    + "</td>\n                                <td></td>\n                                <!-- a blank column for each skipped column, could use colspan= skipped columns too -->\n                                <td class=\"out_net_subtraction\">"
    + escapeExpression(lambda((depth0 != null ? depth0.Out_of_Network_Applied : depth0), depth0))
    + "</td>\n                            </tr>\n                            <tr class=\"family_totals bold_row\">\n                                <td class=\" text-uppercase\">Remaining</td>\n                                <td></td>\n                                <td></td>\n                                <!-- a blank column for each skipped column, could use colspan= skipped columns too -->\n                                <td class=\"bold_column\">"
    + escapeExpression(lambda((depth0 != null ? depth0.In_Network_Remaining : depth0), depth0))
    + "</td>\n                                <td></td>\n                                <!-- a blank column for each skipped column, could use colspan= skipped columns too -->\n                                <td class=\"bold_column\">"
    + escapeExpression(lambda((depth0 != null ? depth0.Out_of_Network_Remaining : depth0), depth0))
    + "</td>\n                            </tr>\n";
},"28":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                    <p class=\"row_label\">"
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</p>\n";
},"30":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "                        <div class=\"visible-xs-block\">"
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</div>\n                        <div class=\"progress\">\n                            <div class=\"progress-bar  "
    + escapeExpression(lambda((depth0 != null ? depth0.styleClass : depth0), depth0))
    + " \" role=\"progressbar\"\n                                 aria-valuenow=\""
    + escapeExpression(lambda((depth0 != null ? depth0.balance : depth0), depth0))
    + "\"\n                                 aria-valuemin=\"0\" aria-valuemax=\""
    + escapeExpression(lambda((depth0 != null ? depth0.max : depth0), depth0))
    + "\"\n                                 style=\"width:"
    + escapeExpression(lambda((depth0 != null ? depth0.width : depth0), depth0))
    + "%\">\n";
  stack1 = ((helpers.lt || (depth0 && depth0.lt) || helperMissing).call(depth0, (depth0 != null ? depth0.width : depth0), 50, {"name":"lt","hash":{},"fn":this.program(31, data),"inverse":this.program(33, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                            </div>\n                        </div>\n";
},"31":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                                    <span class=\"dark\">&nbsp;$"
    + escapeExpression(lambda((depth0 != null ? depth0.balance : depth0), depth0))
    + "</span>\n";
},"33":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "                                    <span class=\"light metbar\">\n";
  stack1 = ((helpers.gt || (depth0 && depth0.gt) || helperMissing).call(depth0, (depth0 != null ? depth0.width : depth0), 99, {"name":"gt","hash":{},"fn":this.program(34, data),"inverse":this.program(9, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                                    </span>$"
    + escapeExpression(lambda((depth0 != null ? depth0.balance : depth0), depth0))
    + "\n";
},"34":function(depth0,helpers,partials,data) {
  return "                                            (MET)\n";
  },"36":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = helpers['if'].call(depth0, (data && data.first), {"name":"if","hash":{},"fn":this.program(37, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"37":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                                    <thead>\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(38, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                                    </thead>\n";
},"38":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.compare || (depth0 && depth0.compare) || helperMissing).call(depth0, (data && data.key), "name", {"name":"compare","hash":{},"fn":this.program(39, data),"inverse":this.program(41, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"39":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                                            <th id=\"ind_max_"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" class=\"name_column\">\n                                                Individual\n                                                Maximums\n                                            </th>\n";
},"41":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.contains || (depth0 && depth0.contains) || helperMissing).call(depth0, (data && data.key), "spacer", {"name":"contains","hash":{},"fn":this.program(42, data),"inverse":this.program(44, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"42":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                                                <th id=\"ind_max_"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\"\n                                                    class=\"spacer_cell_white_background\"></th>\n";
},"44":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                                                <th id=\"ind_max_"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\">"
    + escapeExpression(lambda((data && data.key), depth0))
    + "</th>\n";
},"46":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                                <tr>\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(47, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                                </tr>\n";
},"47":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.compare || (depth0 && depth0.compare) || helperMissing).call(depth0, (data && data.key), "name", {"name":"compare","hash":{},"fn":this.program(48, data),"inverse":this.program(50, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"48":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                                            <td class=\"name_column\">"
    + escapeExpression(lambda(depth0, depth0))
    + "</td>\n";
},"50":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.contains || (depth0 && depth0.contains) || helperMissing).call(depth0, (data && data.key), "spacer", {"name":"contains","hash":{},"fn":this.program(51, data),"inverse":this.program(53, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"51":function(depth0,helpers,partials,data) {
  return "                                                <td class=\"spacer_cell_white_background\"></td>\n";
  },"53":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.contains || (depth0 && depth0.contains) || helperMissing).call(depth0, depth0, "*", {"name":"contains","hash":{},"fn":this.program(54, data),"inverse":this.program(56, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"54":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                                                    <td class=\"met\">"
    + escapeExpression(lambda(depth0, depth0))
    + " </td>\n";
},"56":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                                                    <td>"
    + escapeExpression(lambda(depth0, depth0))
    + "</td>\n";
},"58":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                                    <td >Totals Applied</td>\n                                    <td colspan=\"2\">&nbsp;</td>\n                                    <td>"
    + escapeExpression(lambda((depth0 != null ? depth0.In_Network_Applied : depth0), depth0))
    + "</td>\n                                    <td>&nbsp;</td>\n                                    <td>"
    + escapeExpression(lambda((depth0 != null ? depth0.Out_of_Network_Applied : depth0), depth0))
    + "</td>\n";
},"60":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                                <tr class=\"family_totals bold_row\">\n                                    <td>Family Maximums</td>\n                                    <td colspan=\"4\"></td>\n                                </tr>\n                                <tr class=\"family_totals\">\n                                    <td>Family</td>\n                                    <td>"
    + escapeExpression(lambda((depth0 != null ? depth0['Cost Level'] : depth0), depth0))
    + "</td>\n                                    <td>&nbsp;</td>\n                                    <td class=\"bold_column\">"
    + escapeExpression(lambda((depth0 != null ? depth0.In_Network_Max : depth0), depth0))
    + "</td>\n                                    <td>&nbsp;</td>\n                                    <td class=\"bold_column\">"
    + escapeExpression(lambda((depth0 != null ? depth0.Out_of_Network_Max : depth0), depth0))
    + "</td>\n                                </tr>\n\n                                <tr class=\"family_totals\">\n                                    <td>Totals Applied</td>\n                                    <td colspan=\"2\">&nbsp;</td>\n                                    <td class=\"in_net_subtraction\">"
    + escapeExpression(lambda((depth0 != null ? depth0.In_Network_Applied : depth0), depth0))
    + "</td>\n                                    <td>&nbsp;</td>\n                                    <td class=\"out_net_subtraction\">"
    + escapeExpression(lambda((depth0 != null ? depth0.Out_of_Network_Applied : depth0), depth0))
    + "</td>\n                                </tr>\n                                <tr class=\"family_totals bold_row\">\n                                    <td class=\" text-uppercase\">Remaining</td>\n                                    <td colspan=\"2\">&nbsp;</td>\n                                    <td class=\"bold_column\">"
    + escapeExpression(lambda((depth0 != null ? depth0.In_Network_Remaining : depth0), depth0))
    + "</td>\n                                    <td>&nbsp;</td>\n                                    <td class=\"bold_column\">"
    + escapeExpression(lambda((depth0 != null ? depth0.Out_of_Network_Remaining : depth0), depth0))
    + "</td>\n                                </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<!-- this is inserted from the template -->\n    <div class=\"section-subTitle\">Deductibles &nbsp;<br class=\"visible-xs-block\" />\n        <a href=\"javascript:void(0)\" class=\"help-btn\" id=\"deductible_help_link\"\n            data-toggle=\"popover\" title=\"Deductibles\"\n            data-content='<p>Lorem ipsum dolor sin amet elit lectus noctoruem adispling secum nonummy photos consectetor.</p><br/><a href=\"#\" class=\"btn btn-primary\">Help Link</a>'>\n            <i class=\"fa fa-question-circle \"></i>\n            <span class=\"pull-right asterisk_text\"><span class=\"met\">*</span> Deductible Met </span>\n        </a>\n    </div>\n    <div class=\"row\">\n        <div class=\"hidden-xs pull-left col-sm-3\">\n\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.Deductibles : depth0)) != null ? stack1.ProgressBars : stack1), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"col-sm-9 col-xs-12 mobile-text-center\" id=\"deductible_progress_section\">\n            <!-- end of deductible current -->\n            <div id=\"deductible_bars\">\n\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.Deductibles : depth0)) != null ? stack1.ProgressBars : stack1), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n            </div>\n            <!-- end of deductible bars -->\n\n        </div>\n        <!-- end deductible progress section  -->\n        <div class=\"row\">\n            <div class=\"col-sm-12 col-xs-12\">\n                <div class=\"table-responsive\">\n                    <table class=\"table you-pay-table\" id=\"ind_deduct_table\">\n\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.Deductibles : depth0)) != null ? stack1.family_data : stack1), {"name":"each","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                        <tbody>\n\n\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.Deductibles : depth0)) != null ? stack1.family_data : stack1), {"name":"each","hash":{},"fn":this.program(18, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                        <tr class=\"totals_row\">\n                            <!-- here is where the totals row goes -->\n\n";
  stack1 = helpers['with'].call(depth0, ((stack1 = (depth0 != null ? depth0.Deductibles : depth0)) != null ? stack1.Family_Totals : stack1), {"name":"with","hash":{},"fn":this.program(24, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                            <!-- end of totals row -->\n                        </tr>\n\n\n";
  stack1 = helpers['with'].call(depth0, ((stack1 = (depth0 != null ? depth0.Deductibles : depth0)) != null ? stack1.Family_Totals : stack1), {"name":"with","hash":{},"fn":this.program(26, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"\" id=\"what_you_pay_new_max\">\n        <div class=\"section-subTitle top_border\">Out of Pocket Maximums &nbsp;<br class=\"visible-xs-block\" />\n            <a href=\"javascript:void(0)\" class=\"help-btn\" id=\"deductible_help_link\"\n                data-toggle=\"popover\" title=\"Out of Pocket Maximums\"\n                data-content='<p>Lorem ipsum dolor sin amet elit lectus noctoruem adispling secum nonummy photos consectetor.</p><br/><a href=\"#\" class=\"btn btn-primary\">Help Link</a>'>\n                <i class=\"fa fa-question-circle \"></i>\n            </a>\n            <span class=\"pull-right asterisk_text\"><span class=\"met\">*</span> Out of Pocket Maximums Met </span>\n        </div>\n        <div class=\"row\">\n            <div class=\"hidden-xs pull-left col-sm-3\">\n\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.Maximums : depth0)) != null ? stack1.ProgressBars : stack1), {"name":"each","hash":{},"fn":this.program(28, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </div>\n            <div class=\"col-sm-9 col-xs-12 mobile-text-center\" id=\"max_progress_section\">\n                <!-- end of deductible current -->\n                <div id=\"deductible_bars\">\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.Maximums : depth0)) != null ? stack1.ProgressBars : stack1), {"name":"each","hash":{},"fn":this.program(30, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                </div>\n                <!-- end of max bars -->\n\n            </div>\n            <!-- end max progress section  -->\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-xs-12\">\n\n                    <div class=\"table-responsive\" id=\"ind_max_table_holder\">\n                        <table class=\"table you-pay-table\" id=\"ind_max_table\">\n\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.Maximums : depth0)) != null ? stack1.family_data : stack1), {"name":"each","hash":{},"fn":this.program(36, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                            <tbody>\n\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.Maximums : depth0)) != null ? stack1.family_data : stack1), {"name":"each","hash":{},"fn":this.program(46, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                            <tr class=\"totals_row\">\n                                <!-- here is where the totals row goes -->\n";
  stack1 = helpers['with'].call(depth0, ((stack1 = (depth0 != null ? depth0.Maximums : depth0)) != null ? stack1.Family_Totals : stack1), {"name":"with","hash":{},"fn":this.program(58, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                                <!-- end of totals row -->\n                            </tr>\n";
  stack1 = helpers['with'].call(depth0, ((stack1 = (depth0 != null ? depth0.Maximums : depth0)) != null ? stack1.Family_Totals : stack1), {"name":"with","hash":{},"fn":this.program(60, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                            </tbody>\n                        </table>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n";
},"useData":true});



this["Templates"]["planDetail_appliedFunds_pieLegend"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <li>\n                <div class=\"legend\" style=\"background-color: "
    + escapeExpression(lambda((depth0 != null ? depth0.color : depth0), depth0))
    + "\"></div>\n                <span title=\""
    + escapeExpression(lambda((depth0 != null ? depth0.hoverText : depth0), depth0))
    + "\" aria-label=\""
    + escapeExpression(lambda((depth0 != null ? depth0.label : depth0), depth0))
    + "\"> "
    + escapeExpression(lambda((depth0 != null ? depth0.label : depth0), depth0))
    + ":</span> $"
    + escapeExpression(lambda((depth0 != null ? depth0.value : depth0), depth0))
    + "\n            </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<!-- injected data -->\n    <ul class=\"list-unstyled\">\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.Applied_Breakdown : depth0)) != null ? stack1.payData : stack1), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </ul>\n\n    <div class=\"legend_total\">\n        Total: "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.Applied_Breakdown : depth0)) != null ? stack1.total : stack1)) != null ? stack1.value : stack1), depth0))
    + "\n    </div>\n\n";
},"useData":true});



this["Templates"]["planDetail_paidFunds_pieLegend"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                    <li>\n                        <div class=\"legend\" style=\"background-color: "
    + escapeExpression(lambda((depth0 != null ? depth0.color : depth0), depth0))
    + "\"></div>\n                        "
    + escapeExpression(lambda((depth0 != null ? depth0.label : depth0), depth0))
    + ": $"
    + escapeExpression(lambda((depth0 != null ? depth0.value : depth0), depth0))
    + "\n                    </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<!-- injected data -->\n            <ul class=\"list-unstyled\">\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.Paid_Breakdown : depth0)) != null ? stack1.payData : stack1), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </ul>\n\n            <div class=\"legend_total\">\n                Total: "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.Paid_Breakdown : depth0)) != null ? stack1.total : stack1)) != null ? stack1.value : stack1), depth0))
    + "\n            </div>\n";
},"useData":true});



this["Templates"]["plan_detail__your-cost_jsTemplate"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                    <li>\n                        <div class=\"legend\" style=\"background-color: "
    + escapeExpression(lambda((depth0 != null ? depth0.color : depth0), depth0))
    + "\"></div>\n                        <span title=\""
    + escapeExpression(lambda((depth0 != null ? depth0.hoverText : depth0), depth0))
    + "\" aria-label=\""
    + escapeExpression(lambda((depth0 != null ? depth0.label : depth0), depth0))
    + "\"> "
    + escapeExpression(lambda((depth0 != null ? depth0.label : depth0), depth0))
    + ":</span> $"
    + escapeExpression(lambda((depth0 != null ? depth0.value : depth0), depth0))
    + "\n                    </li>\n";
},"3":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                    <li>\n                        <div class=\"legend\" style=\"background-color: "
    + escapeExpression(lambda((depth0 != null ? depth0.color : depth0), depth0))
    + "\"></div>\n                        "
    + escapeExpression(lambda((depth0 != null ? depth0.label : depth0), depth0))
    + ": $"
    + escapeExpression(lambda((depth0 != null ? depth0.value : depth0), depth0))
    + "\n                    </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "    <div class=\"row\">\n\n    <div class=\"col-sm-3\" id=\"appliedFundsPie\">\n        <canvas id=\"claims_applied_pie\" width=\"165\" height=\"165\"/>\n    </div>\n    <div class=\"col-sm-3\" id=\"appliedFunds_legend\">\n\n            <ul class=\"list-unstyled\">\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.Applied_Breakdown : depth0)) != null ? stack1.payData : stack1), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </ul>\n\n            <div class=\"legend_total\">\n                Total: "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.Applied_Breakdown : depth0)) != null ? stack1.total : stack1)) != null ? stack1.value : stack1), depth0))
    + "\n            </div>\n\n    </div>\n\n    <div class=\"col-sm-3\" id=\"paidFundsPie\">\n        <canvas id=\"claims_paid_pie\" width=\"165\" height=\"165\"/>\n    </div>\n    <div class=\"col-sm-3\" id=\"paidFunds_legend\">\n\n            <ul class=\"list-unstyled\">\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.Paid_Breakdown : depth0)) != null ? stack1.payData : stack1), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </ul>\n\n            <div class=\"legend_total\">\n                Total: "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.Paid_Breakdown : depth0)) != null ? stack1.total : stack1)) != null ? stack1.value : stack1), depth0))
    + "\n            </div>\n\n    </div>\n</div>";
},"useData":true});



this["Templates"]["profile__account-info-address"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "		<a href=\"javascript:void(0)\" onclick=\"toggleAccountInfoEdit(this)\" class=\"profile-edit pull-right\">\n			<span class=\"hidden-xs\">Edit "
    + escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"label","hash":{},"data":data}) : helper)))
    + " Address</span>\n			<i class=\"fa fa-pencil-square\"></i>\n		</a>\n";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<br/>"
    + escapeExpression(((helper = (helper = helpers.address_2 || (depth0 != null ? depth0.address_2 : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"address_2","hash":{},"data":data}) : helper)));
},"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<br/>"
    + escapeExpression(((helper = (helper = helpers.address_3 || (depth0 != null ? depth0.address_3 : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"address_3","hash":{},"data":data}) : helper)));
},"7":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.compare || (depth0 && depth0.compare) || helperMissing).call(depth0, depth0, (depths[1] != null ? depths[1].state : depths[1]), {"name":"compare","hash":{},"fn":this.program(8, data, depths),"inverse":this.program(10, data, depths),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"8":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "	                                            <option selected>"
    + escapeExpression(lambda(depth0, depth0))
    + "</option>\n";
},"10":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "	                                            <option>"
    + escapeExpression(lambda(depth0, depth0))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div id=\"account-info__address\">\n	<div class=\"section-subTitle\">\n		"
    + escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"label","hash":{},"data":data}) : helper)))
    + " Address\n\n";
  stack1 = ((helpers.compare || (depth0 && depth0.compare) || helperMissing).call(depth0, (depth0 != null ? depth0.userType : depth0), "primary", {"name":"compare","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "	</div>\n	<div class=\"row profile-block\">\n		<div class=\"static col-sm-12\">\n			<div class=\"row\">\n				<div class=\"col-sm-4 col-md-3\">\n					<span class=\"label\">Address</span>\n				</div>\n				<div class=\"col-sm-8 col-md-7\">\n					"
    + escapeExpression(((helper = (helper = helpers.address_1 || (depth0 != null ? depth0.address_1 : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"address_1","hash":{},"data":data}) : helper)))
    + "\n					";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.address_2 : depth0), {"name":"if","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n					";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.address_3 : depth0), {"name":"if","hash":{},"fn":this.program(5, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n				</div>\n			</div>\n			<div class=\"row\">\n				<div class=\"col-sm-4 col-md-3\">\n					<span class=\"label\">City</span>\n				</div>\n				<div class=\"col-sm-8 col-md-7\">\n					"
    + escapeExpression(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"city","hash":{},"data":data}) : helper)))
    + "\n				</div>\n			</div>\n			<div class=\"row\">\n				<div class=\"col-sm-4 col-md-3\">\n					<span class=\"label\">State</span>\n				</div>\n				<div class=\"col-sm-8 col-md-7\">\n					"
    + escapeExpression(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"state","hash":{},"data":data}) : helper)))
    + "\n				</div>\n			</div>\n			<div class=\"row\">\n				<div class=\"col-sm-4 col-md-3\">\n					<span class=\"label\">Zip</span>\n				</div>\n				<div class=\"col-sm-8 col-md-7\">\n					"
    + escapeExpression(((helper = (helper = helpers.zip || (depth0 != null ? depth0.zip : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"zip","hash":{},"data":data}) : helper)))
    + "\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n\n<div id=\"account-info-edit__address\" class=\"hidden\">\n	<div class=\"section-subTitle\">\n	    "
    + escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"label","hash":{},"data":data}) : helper)))
    + " Address\n\n	    <a href=\"javascript:void(0)\" onclick=\"toggleAccountInfoEdit(this)\" class=\"profile-edit pull-right\">\n	        <span class=\"hidden-xs\">Edit "
    + escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"label","hash":{},"data":data}) : helper)))
    + " Address</span>\n	        <i class=\"fa fa-pencil-square\"></i>\n	    </a>\n	</div>\n\n	<div class=\"row profile-block\">\n	    <div class=\"col-sm-12\">\n		    <form method=\"post\" id=\"profile-save-"
    + escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"label","hash":{},"data":data}) : helper)))
    + "-address-form\" class=\"accountEditForm\" action=\"example-service\" role=\"form\">\n        		<input type=\"hidden\" name=\"type\" value=\""
    + escapeExpression(((helper = (helper = helpers.userType || (depth0 != null ? depth0.userType : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"userType","hash":{},"data":data}) : helper)))
    + "\" />\n        		<input type=\"hidden\" name=\"information\" value=\""
    + escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"label","hash":{},"data":data}) : helper)))
    + " Address\" />\n\n		        <div class=\"row\">\n		            <div class=\"col-sm-12\">\n		                <div class=\"row form-group\">\n		                    <div class=\"col-sm-4 col-md-3\">\n		                        <label for=\"address-line-1\">Address Line 1</label>\n		                    </div>\n\n		                    <div class=\"col-sm-8 col-md-3\">\n		                        <input type=\"text\" id=\"address-line-1\" name=\"address-line-1\" class=\"form-control\" value=\""
    + escapeExpression(((helper = (helper = helpers.address_1 || (depth0 != null ? depth0.address_1 : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"address_1","hash":{},"data":data}) : helper)))
    + "\" maxlength=\"64\" />\n		                    </div>\n		                </div>\n						<div class=\"row form-group\">\n							<div class=\"col-sm-4 col-md-3\">\n								<label for=\"address-line-2\">Address Line 2</label>\n							</div>\n\n							<div class=\"col-sm-8 col-md-3\">\n								<input type=\"text\" id=\"address-line-2\" name=\"address-line-2\" class=\"form-control\" value=\""
    + escapeExpression(((helper = (helper = helpers.address_2 || (depth0 != null ? depth0.address_2 : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"address_2","hash":{},"data":data}) : helper)))
    + "\" maxlength=\"64\" />\n							</div>\n						</div>\n						<div class=\"row form-group\">\n							<div class=\"col-sm-4 col-md-3\">\n								<label for=\"address-line-3\">Address Line 3</label>\n							</div>\n\n							<div class=\"col-sm-8 col-md-3\">\n								<input type=\"text\" id=\"address-line-3\" name=\"address-line-3\" class=\"form-control\" value=\""
    + escapeExpression(((helper = (helper = helpers.address_3 || (depth0 != null ? depth0.address_3 : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"address_3","hash":{},"data":data}) : helper)))
    + "\" maxlength=\"64\" />\n							</div>\n						</div>\n		                <div class=\"row form-group\">\n		                    <div class=\"col-sm-4 col-md-3\">\n		                        <label for=\"city\">City</label>\n		                    </div>\n\n		                    <div class=\"col-sm-8 col-md-3\">\n		                        <input type=\"text\" id=\"city\" name=\"city\" class=\"form-control\" value=\""
    + escapeExpression(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"city","hash":{},"data":data}) : helper)))
    + "\" maxlength=\"30\" />\n		                    </div>\n		                </div>\n		                <div class=\"row form-group\">\n		                    <div class=\"col-sm-4 col-md-3\">\n		                        <label for=\"state\">State</label>\n		                    </div>\n		                    <div class=\"col-sm-8 col-md-3\">\n		                        <div class=\"form-select\">\n		                            <select id=\"state\" name=\"state\" class=\"form-control\">\n		                                <option>--Select--</option>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.states : depth0), {"name":"each","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		                            </select>\n		                        </div>\n		                    </div>\n		                </div>\n		                <div class=\"row form-group\">\n		                    <div class=\"col-sm-4 col-md-3\">\n		                        <label for=\"zipcode\">Zip</label>\n		                    </div>\n\n		                    <div class=\"col-sm-8 col-md-3\">\n		                        <input type=\"text\" id=\"zipcode\" name=\"zipcode\" class=\"form-control\" value=\""
    + escapeExpression(((helper = (helper = helpers.zip || (depth0 != null ? depth0.zip : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"zip","hash":{},"data":data}) : helper)))
    + "\" style=\"width:50%;\" />\n		                    </div>\n		                </div>\n		            </div>\n		        </div>\n		        <div class=\"row form-group\">\n		            <div class=\"col-sm-12\">\n		            	<button id=\"profile-mailing-save\" type=\"submit\" class=\"btn btn-primary btn-xs submit-btn pull-right\">Save Changes</button>\n		            	<button type=\"button\" class=\"profile-edit-cancel btn btn-default btn-xs cancel-btn pull-right\" onclick=\"toggleAccountInfoEdit(this)\">Cancel</button>\n		            </div>\n		        </div>\n		        <hr>\n		    </form>\n\n	    </div>\n\n	</div>\n\n</div>\n";
},"useData":true,"useDepths":true});



this["Templates"]["profile__account-info-communication-preferences"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "					<div class=\"radio\">\n						<label>\n							<input type=\"radio\" name=\"communication-preference\" id=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.checked : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">\n							"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\n						</label>\n					</div>\n";
},"2":function(depth0,helpers,partials,data) {
  return "checked";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div id=\"account-info__communication-preferences\" class=\"profile-communication-preferences\">\n	<div class=\"section-subTitle\">\n		Communication Preferences\n	</div>\n	<div class=\"row profile-block\">\n		<div class=\"static col-sm-12\">\n			<div class=\"row\">\n				<div class=\"col-sm-9\">\n					<p>You currently receive some communications by: <strong>"
    + escapeExpression(((helper = (helper = helpers.communication_preference || (depth0 != null ? depth0.communication_preference : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"communication_preference","hash":{},"data":data}) : helper)))
    + "</strong></p>\n					<p>I would like to receive some materials about health support services by:</p>\n				</div>\n			</div>\n			<form id=\"communication-preferences-form\" class=\"form-horizontal\" role=\"form\" method=\"post\" action=\"\">\n				<div class=\"form-group\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.communication_preferences : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "					<div>\n						 <button type=\"submit\" class=\"btn btn-primary btn-sm\">Save Preferences</button>\n					</div>\n				</div>\n            </div>\n		</div>\n	</div>\n</div>\n";
},"useData":true});



this["Templates"]["profile__account-info-header"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "<span>(Primary)</span>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.personal_info : depth0)) != null ? stack1.first_name : stack1), depth0))
    + " "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.personal_info : depth0)) != null ? stack1.last_name : stack1), depth0))
    + "\n";
  stack1 = helpers['with'].call(depth0, ((stack1 = (depth0 != null ? depth0.personal_info : depth0)) != null ? stack1.primary : stack1), {"name":"with","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});



this["Templates"]["profile__account-info-personal"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                    <div class=\"row\">\n                        <div class=\"col-sm-4 col-md-3\"><span class=\"label\">Home Phone</span></div>\n                        <div class=\"col-sm-8 col-md-3\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.personal_info : depth0)) != null ? stack1.home_phone : stack1), depth0))
    + "</div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-4 col-md-3\"><span class=\"label\">Work Phone</span></div>\n                        <div class=\"col-sm-8 col-md-3\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.personal_info : depth0)) != null ? stack1.work_phone : stack1), depth0))
    + "</div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-4 col-md-3\"><span class=\"label\">Mobile Phone</span></div>\n                        <div class=\"col-sm-8 col-md-3\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.personal_info : depth0)) != null ? stack1.mobile_phone : stack1), depth0))
    + "</div>\n                    </div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "";
  stack1 = ((helpers.compare || (depth0 && depth0.compare) || helperMissing).call(depth0, (depth0 != null ? depth0.userType : depth0), "primary", {"name":"compare","hash":{},"fn":this.program(4, data),"inverse":this.program(6, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n\n                         <div class=\"row form-group\">\n                            <div class=\"col-sm-4 col-md-3\">\n                                <label>Mobile Phone</label>\n                            </div>\n                            <div class=\"col-sm-8 col-md-3\">\n                                <input type=\"text\" id=\"profile-secondary-phone\" name=\"mobilephone\" class=\"form-control\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.personal_info : depth0)) != null ? stack1.mobile_phone : stack1), depth0))
    + "\" />\n                            </div>\n                        </div>\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                            <div class=\"row form-group\">\n                                <div class=\"col-sm-4 col-md-3\">\n                                    <label>Home Phone</label>\n                                </div>\n                                <div class=\"col-sm-8 col-md-3\">\n                                    <input type=\"text\" id=\"profile-primary-phone\" name=\"homephone\" class=\"form-control\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.personal_info : depth0)) != null ? stack1.home_phone : stack1), depth0))
    + "\" />\n                                </div>\n                            </div>\n\n                            <div class=\"row form-group\">\n                                <div class=\"col-sm-4 col-md-3\">\n                                    <label>Work Phone</label>\n                                </div>\n                                <div class=\"col-sm-8 col-md-3\">\n                                    <input type=\"text\" id=\"profile-secondary-phone\" name=\"workphone\" class=\"form-control\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.personal_info : depth0)) != null ? stack1.work_phone : stack1), depth0))
    + "\" />\n                                </div>\n                            </div>\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                            <div class=\"row form-group\">\n                                <div class=\"col-sm-4 col-md-3\"><span class=\"label\">Home Phone</span></div>\n                                <div class=\"col-sm-8 col-md-3\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.personal_info : depth0)) != null ? stack1.home_phone : stack1), depth0))
    + "</div>\n                            </div>\n\n                            <div class=\"row form-group\">\n                                <div class=\"col-sm-4 col-md-3\"><span class=\"label\">Work Phone</span></div>\n                                <div class=\"col-sm-8 col-md-3\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.personal_info : depth0)) != null ? stack1.work_phone : stack1), depth0))
    + "</div>\n                            </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "<div id=\"account-info__personal--primary\">\n    <div class=\"section-subTitle\">Personal Info\n        <a href=\"javascript:void(0)\" onclick=\"toggleAccountInfoEdit(this)\" class=\"profile-edit pull-right\">\n            <span class=\"hidden-xs\">Edit Personal Info</span>\n            <i class=\"fa fa-pencil-square\"></i>\n        </a>\n    </div>\n    <div class=\"row profile-block\">\n        <!-- Personal Info static view -->\n        <div class=\"static col-sm-12\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"row form-group\">\n                        <div class=\"col-sm-4 col-md-3\"><span class=\"label\">Primary Email</span></div>\n                        <div class=\"col-sm-8 col-md-3\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.personal_info : depth0)) != null ? stack1.primary_email : stack1), depth0))
    + "</div>\n                    </div>\n";
  stack1 = ((helpers.isnt || (depth0 && depth0.isnt) || helperMissing).call(depth0, (depth0 != null ? depth0.userType : depth0), "nonvalidated", {"name":"isnt","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "                </div>\n            </div>\n        </div>\n        <!-- end static Personal Info -->\n    </div>\n<!-- END PERSONAL INFO -->\n</div>\n\n<div id=\"account-info-edit__personal--primary\" class=\"hidden account-info-personal-edit\">\n    <div class=\"section-subTitle\">Personal Info\n        <a href=\"javascript:void(0)\" onclick=\"toggleAccountInfoEdit(this)\" class=\"profile-edit pull-right\">\n            <span class=\"hidden-xs\">Edit Personal Info</span>\n            <i class=\"fa fa-pencil-square\"></i>\n        </a>\n    </div>\n\n    <div class=\"row profile-block\">\n\n        <div class=\"col-sm-12\">\n            <div class=\"row\">\n\n            <form method=\"post\" id=\"profile-save-personal-info-form\" class=\"accountEditForm\" action=\"example-service\" role=\"form\">\n                <input type=\"hidden\" name=\"type\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.personal_info : depth0)) != null ? stack1.type : stack1), depth0))
    + "\" />\n                <input type=\"hidden\" name=\"information\" value=\"Personal Info\" />\n\n                <div class=\"col-sm-12\">\n                    <div class=\"row form-group\">\n                        <div class=\"col-sm-4 col-md-3\">\n                            <label>Primary Email</label>\n                        </div>\n                        <div class=\"col-sm-8 col-md-3\">\n                            <input type=\"text\" id=\"profile-primary-email\" name=\"primaryemail\" class=\"form-control\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.personal_info : depth0)) != null ? stack1.primary_email : stack1), depth0))
    + "\" />\n                        </div>\n                    </div>\n";
  stack1 = ((helpers.isnt || (depth0 && depth0.isnt) || helperMissing).call(depth0, (depth0 != null ? depth0.userType : depth0), "nonvalidated", {"name":"isnt","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <button id=\"profile-personal-info-save\" type=\"submit\" class=\"btn btn-primary btn-xs submit-btn pull-right\">Save Changes</button>\n                            <button type=\"button\" class=\"profile-edit-cancel btn btn-default btn-xs cancel-btn pull-right\" onclick=\"toggleAccountInfoEdit(this)\">Cancel</button>\n                        </div>\n                    </div>\n                    <hr>\n                </div>\n\n            </form>\n\n            </div>\n        </div>\n\n    </div>\n</div>\n";
},"useData":true});



this["Templates"]["secure-messaging__inbox-item"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "";
},"3":function(depth0,helpers,partials,data) {
  return "unread";
  },"5":function(depth0,helpers,partials,data) {
  return "<i class=\"fa fa-paperclip\"></i>";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<tr id=\"messageID-"
    + escapeExpression(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"message ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.read : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" data-caseid=\""
    + escapeExpression(((helper = (helper = helpers.caseID || (depth0 != null ? depth0.caseID : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"caseID","hash":{},"data":data}) : helper)))
    + "\" data-messageid=\""
    + escapeExpression(((helper = (helper = helpers.messageID || (depth0 != null ? depth0.messageID : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"messageID","hash":{},"data":data}) : helper)))
    + "\">\n    <td class=\"checkbox-container\">\n        <input type=\"checkbox\" name=\"myTextEditBox"
    + escapeExpression(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"index","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + escapeExpression(((helper = (helper = helpers.messageID || (depth0 != null ? depth0.messageID : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"messageID","hash":{},"data":data}) : helper)))
    + "\">\n    </td>\n    <td class=\"message-item message-container\"><a href=\"secure-messaging-message.html?caseID="
    + escapeExpression(((helper = (helper = helpers.caseID || (depth0 != null ? depth0.caseID : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"caseID","hash":{},"data":data}) : helper)))
    + "&messageID="
    + escapeExpression(((helper = (helper = helpers.messageID || (depth0 != null ? depth0.messageID : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"messageID","hash":{},"data":data}) : helper)))
    + "&reply=no\">\n        "
    + escapeExpression(((helper = (helper = helpers.subject || (depth0 != null ? depth0.subject : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"subject","hash":{},"data":data}) : helper)))
    + "\n        <span class=\"visible-xs-block\">"
    + escapeExpression(((helper = (helper = helpers.send_date || (depth0 != null ? depth0.send_date : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"send_date","hash":{},"data":data}) : helper)))
    + "</span>\n    </a></td>\n    <td class=\"date-container\">"
    + escapeExpression(((helper = (helper = helpers.send_date || (depth0 != null ? depth0.send_date : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"send_date","hash":{},"data":data}) : helper)))
    + "</td>\n    <td class=\"attachment-container\">";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.attachment : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</td>\n</tr>\n";
},"useData":true});



this["Templates"]["secure-messaging__message-count"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<span class=\"new\">"
    + escapeExpression(((helper = (helper = helpers.new_messages || (depth0 != null ? depth0.new_messages : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"new_messages","hash":{},"data":data}) : helper)))
    + " new</span> of <span class=\"total\">"
    + escapeExpression(((helper = (helper = helpers.total_messages || (depth0 != null ? depth0.total_messages : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"total_messages","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"useData":true});



this["Templates"]["secure-messaging__pagination"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing;
  stack1 = ((helper = (helper = helpers.pagination || (depth0 != null ? depth0.pagination : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pagination","hash":{},"data":data}) : helper));
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});



this["Templates"]["secure-messaging__preview"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        <span id=\"status-tag\" class=\"status "
    + escapeExpression(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"status","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"status","hash":{},"data":data}) : helper)))
    + "</span>\n        <a href=\"javascript:void(0)\" class=\"help-btn\"\n            data-toggle=\"popover\" title=\"Status Definitions\"\n            data-content='<p><strong>New:</strong> Lorem ipsum dolor sin amet elit lectus noctoruem.</p><p><strong>Assigned:</strong> Adispling secum nonummy photos consectetor.</p><p><strong>Pending:</strong> Elit lectus noctoruem secum nonummy photos.</p><strong>Resolved:</strong> Elit lectus noctoruem secum nonummy photos.</p>'>\n            <i class=\"fa fa-question-circle \"></i>\n        </a>\n";
},"3":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                            <span class=\"who\">"
    + escapeExpression(lambda(depth0, depth0))
    + "</span>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "        <div class=\"attachment-preview-container\">\n            <span class=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.attachment : depth0)) != null ? stack1.extension : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.attachment : depth0)) != null ? stack1.filename : stack1), depth0))
    + "</span>\n            <a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.attachment : depth0)) != null ? stack1.URL : stack1), depth0))
    + "\" id=\"download-link\" class=\"pull-right\">Download</a>\n        </div>\n        <hr />\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div id=\"preview-container\" class=\"section-top "
    + escapeExpression(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"status","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <a href=\"secure-messaging-message.html?caseID="
    + escapeExpression(((helper = (helper = helpers.caseID || (depth0 != null ? depth0.caseID : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"caseID","hash":{},"data":data}) : helper)))
    + "&messageID="
    + escapeExpression(((helper = (helper = helpers.messageID || (depth0 != null ? depth0.messageID : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"messageID","hash":{},"data":data}) : helper)))
    + "&reply=no\" class=\"btn btn-xs btn-primary\" type=\"button\" id=\"expand-btn\"><i class=\"fa fa-expand\"></i> Expand</a>\n            <a href=\"secure-messaging-message.html?caseID="
    + escapeExpression(((helper = (helper = helpers.caseID || (depth0 != null ? depth0.caseID : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"caseID","hash":{},"data":data}) : helper)))
    + "&messageID="
    + escapeExpression(((helper = (helper = helpers.messageID || (depth0 != null ? depth0.messageID : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"messageID","hash":{},"data":data}) : helper)))
    + "&reply=yes\" class=\"btn btn-xs btn-primary\" type=\"button\" id=\"reply-btn\"><i class=\"fa fa-reply\"></i> Reply</a>\n        </div>\n    </div>\n\n    <div id=\"message-container\">\n        <hr class=\"blue-divider\">\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.status : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n        <h2 id=\"message-subject\">"
    + escapeExpression(((helper = (helper = helpers.subject || (depth0 != null ? depth0.subject : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"subject","hash":{},"data":data}) : helper)))
    + "</h2>\n\n        <hr>\n\n        <div class=\"row\">\n            <div class=\"col-md-7\">\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <label>From:</label>\n                    </div>\n                    <div class=\"col-sm-8\">"
    + escapeExpression(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"from","hash":{},"data":data}) : helper)))
    + "</div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <label class=\"nowrap\">Message #:</label>\n                    </div>\n                    <div class=\"col-sm-8\">"
    + escapeExpression(((helper = (helper = helpers.caseID || (depth0 != null ? depth0.caseID : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"caseID","hash":{},"data":data}) : helper)))
    + "</div>\n                </div>\n            </div>\n            <div class=\"col-md-5\">\n                <div class=\"row\">\n                    <div class=\"col-sm-4 col-md-3\">\n                        <label>Who:</label>\n                    </div>\n                    <div class=\"col-sm-8 col-md-9\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.who : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                    </div>\n                </div>\n            </div>\n        </div>\n\n        <hr>\n\n        <span id=\"sent-time\" class=\"pull-right\">"
    + escapeExpression(((helper = (helper = helpers.send_date || (depth0 != null ? depth0.send_date : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"send_date","hash":{},"data":data}) : helper)))
    + ", "
    + escapeExpression(((helper = (helper = helpers.send_time || (depth0 != null ? depth0.send_time : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"send_time","hash":{},"data":data}) : helper)))
    + "</span>\n\n        <label id=\"sent-label\" class=\"pull-right\">Sent:</label>\n\n        <br>\n\n        <p id=\"message-text\">"
    + escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper)))
    + "</p>\n\n        <hr>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.attachment : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n</div>\n";
},"useData":true});



this["Templates"]["secure-messaging__thread"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "replying";
  },"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <span id=\"status-tag\" class=\"status "
    + escapeExpression(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"status","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"status","hash":{},"data":data}) : helper)))
    + "</span>\n            <a href=\"javascript:void(0)\" class=\"help-btn\"\n                data-toggle=\"popover\" title=\"Status Definitions\"\n                data-content='<p><strong>New:</strong> Lorem ipsum dolor sin amet elit lectus noctoruem.</p><p><strong>Assigned:</strong> Adispling secum nonummy photos consectetor.</p><p><strong>Pending:</strong> Elit lectus noctoruem secum nonummy photos.</p><strong>Resolved:</strong> Elit lectus noctoruem secum nonummy photos.</p>'>\n                <i class=\"fa fa-question-circle \"></i>\n            </a>\n";
},"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <span id=\"status-tag\" class=\"pull-right status "
    + escapeExpression(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"status","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"status","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"7":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                        <span class=\"who\">"
    + escapeExpression(lambda(depth0, depth0))
    + "</span>\n";
},"9":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, buffer = "        <div class=\"message ";
  stack1 = ((helpers.compare || (depth0 && depth0.compare) || helperMissing).call(depth0, (depth0 != null ? depth0.from : depth0), (depths[1] != null ? depths[1].original_from : depths[1]), {"name":"compare","hash":{},"fn":this.program(10, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = ((helpers.compare || (depth0 && depth0.compare) || helperMissing).call(depth0, (data && data.index), 0, {"name":"compare","hash":{},"fn":this.program(12, data, depths),"inverse":this.program(14, data, depths),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n            <div class=\"message-header\">\n                <p class=\"pull-left\"><strong>"
    + escapeExpression(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"from","hash":{},"data":data}) : helper)))
    + "</strong></p>\n                <span id=\"sent-time\" class=\"pull-right\">"
    + escapeExpression(((helper = (helper = helpers.send_date || (depth0 != null ? depth0.send_date : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"send_date","hash":{},"data":data}) : helper)))
    + ", "
    + escapeExpression(((helper = (helper = helpers.send_time || (depth0 != null ? depth0.send_time : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"send_time","hash":{},"data":data}) : helper)))
    + "</span>\n                <label id=\"sent-label\" class=\"pull-right hidden-xs\">Sent:</label>\n            </div>\n\n            <p class=\"pull-right hidden-xs ";
  stack1 = ((helpers.compare || (depth0 && depth0.compare) || helperMissing).call(depth0, (data && data.index), 0, {"name":"compare","hash":{},"fn":this.program(16, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\"><a href=\"#\" class=\"message-toggle\">\n                <i class=\"fa fa-caret-right\"></i>\n                <span>SHOW MESSAGE</span>\n                <span class=\"hidden\">HIDE MESSAGE</span>\n            </a></p>\n\n            <p id=\"message-text\">"
    + escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper)))
    + "</p>\n\n            <hr>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.attachment : depth0), {"name":"if","hash":{},"fn":this.program(18, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n";
},"10":function(depth0,helpers,partials,data) {
  return "original-sender";
  },"12":function(depth0,helpers,partials,data) {
  return "latest-message";
  },"14":function(depth0,helpers,partials,data) {
  return "closed";
  },"16":function(depth0,helpers,partials,data) {
  return "hidden";
  },"18":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <div class=\"attachment-preview-container\">\n                <span class=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.attachment : depth0)) != null ? stack1.extension : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.attachment : depth0)) != null ? stack1.filename : stack1), depth0))
    + "</span>\n                <a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.attachment : depth0)) != null ? stack1.URL : stack1), depth0))
    + "\" id=\"download-link\" class=\"pull-right\">Download</a>\n            </div>\n            <hr />\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div id=\"preview-container\" class=\"section-top "
    + escapeExpression(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"status","hash":{},"data":data}) : helper)))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.reply : depth0), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n    <div class=\"row\">\n        <div class=\"col-xs-6 col-sm-12\">\n            <a href=\"secure-messaging-inbox.html\" title=\"Back to Messages\" class=\"btn btn-xs btn-primary back-to-messages-btn\">\n                <i class=\"fa fa-arrow-circle-left\"></i>\n                <span class=\"hidden-xs\">Back to Messages</span>\n            </a>\n        </div>\n        <div class=\"col-xs-6 col-sm-12 text-right-xs\">\n            <a href=\"#\" class=\"btn btn-xs btn-primary\" type=\"button\" id=\"reply-btn\"><i class=\"fa fa-reply\"></i> Reply</a>\n        </div>\n    </div>\n\n    <div id=\"thread-info-container\">\n        <div class=\"hidden-xs\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.status : depth0), {"name":"if","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\n\n        <hr class=\"visible-xs-block\">\n        <h2 id=\"message-subject\">"
    + escapeExpression(((helper = (helper = helpers.subject || (depth0 != null ? depth0.subject : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"subject","hash":{},"data":data}) : helper)))
    + "</h2>\n        <hr class=\"hidden-xs\">\n\n        <div class=\"row visible-xs-block\">\n            <div class=\"col-xs-12\">\n                <a href=\"#\" class=\"message-detail-toggle pull-left\">\n                    <i class=\"fa fa-caret-right\"></i>\n                    <strong>MESSAGE DETAILS</strong>\n                </a>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.status : depth0), {"name":"if","hash":{},"fn":this.program(5, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </div>\n        </div>\n\n        <div class=\"row message-details hidden-xs\">\n            <div class=\"col-md-7\">\n                <div class=\"row\">\n                    <div class=\"col-md-5\">\n                        <span class=\"label\">Who:</span>\n\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.who : depth0), {"name":"each","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                    </div>\n                    <div class=\"col-md-7\">\n                        <span class=\"label nowrap\">Message #:</span>\n                        <span>"
    + escapeExpression(((helper = (helper = helpers.caseID || (depth0 != null ? depth0.caseID : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"caseID","hash":{},"data":data}) : helper)))
    + "</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-5 text-left-xs\">\n                <span class=\"label\">Originally Sent:</span>\n                <span>"
    + escapeExpression(((helper = (helper = helpers.original_send_date || (depth0 != null ? depth0.original_send_date : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"original_send_date","hash":{},"data":data}) : helper)))
    + "</span>\n            </div>\n        </div>\n        <hr>\n    </div>\n\n    <form id=\"message-reply-form\" method=\"post\" action=\"message-reply-action\" role=\"form\">\n        <input type=\"hidden\" name=\"caseID\" value=\""
    + escapeExpression(((helper = (helper = helpers.caseID || (depth0 != null ? depth0.caseID : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"caseID","hash":{},"data":data}) : helper)))
    + "\" />\n\n        <div class=\"row visible-xs-block\">\n            <div class=\"col-xs-12 text-center\">\n                <button type=\"reset\" class=\"btn btn-xs btn-primary btn-close pull-left\"><i class=\"fa fa-close\"></i></button>\n                <button type=\"submit\" class=\"btn btn-xs btn-default btn-submit pull-right\"><i class=\"fa fa-send\"></i></button>\n                <p class=\"reply-header\"><strong>Reply</strong></p>\n            </div>\n            <div class=\"col-xs-12\">\n                <p class=\"h2 reply-subject\">"
    + escapeExpression(((helper = (helper = helpers.subject || (depth0 != null ? depth0.subject : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"subject","hash":{},"data":data}) : helper)))
    + "</p>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <textarea id=\"message-textarea\" name=\"message\" class=\"form-control\" rows=\"10\" maxlength=\"750\" placeholder=\"Type your reply here\"></textarea>\n                <p id=\"character-count\"></p>\n            </div>\n        </div>\n\n        <div class=\"row hidden-xs\">\n            <div class=\"col-xs-12 text-right\">\n                <button type=\"reset\" class=\"btn btn-default\">Cancel</button>\n                <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n            </div>\n        </div>\n    </form>\n\n    <div class=\"messages-container\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.messages : depth0), {"name":"each","hash":{},"fn":this.program(9, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n</div>\n";
},"useData":true,"useDepths":true});