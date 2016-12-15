/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/number-card/card-series.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/zone/ng_zone';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import13 from '@angular/common/src/directives/ng_for';
import * as import14 from '../../../src/number-card/card.component';
import * as import15 from './card.component.ngfactory';
import * as import16 from '@angular/core/src/linker/element_ref';
export class Wrapper_CardSeriesComponent {
  /*private*/ _eventHandler:Function;
  context:import0.CardSeriesComponent;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  subscription0:any;
  constructor(p0:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.CardSeriesComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_data(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.data = currValue;
      this._changes['data'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_dims(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.dims = currValue;
      this._changes['dims'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_colors(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.colors = currValue;
      this._changes['colors'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if (changed) {
      this.context.ngOnChanges(this._changes);
      this._changes = {};
    } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.select.subscribe(_eventHandler.bind(view,'select'))); }
  }
}
var renderType_CardSeriesComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_CardSeriesComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.CardSeriesComponent>;
  _CardSeriesComponent_0_3:Wrapper_CardSeriesComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_CardSeriesComponent_Host0,renderType_CardSeriesComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'g',new import3.InlineArray2(2,'cardSeries',''),rootSelector,(null as any));
    this.compView_0 = new View_CardSeriesComponent0(this.viewUtils,this,0,this._el_0);
    this._CardSeriesComponent_0_3 = new Wrapper_CardSeriesComponent(this.injectorGet(import8.NgZone,this.parentIndex));
    this.compView_0.create(this._CardSeriesComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._CardSeriesComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.CardSeriesComponent) && (0 === requestNodeIndex))) { return this._CardSeriesComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._CardSeriesComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._CardSeriesComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const CardSeriesComponentNgFactory:import7.ComponentFactory<import0.CardSeriesComponent> = new import7.ComponentFactory<import0.CardSeriesComponent>('g[cardSeries]',View_CardSeriesComponent_Host0,import0.CardSeriesComponent);
const styles_CardSeriesComponent:any[] = ([] as any[]);
var renderType_CardSeriesComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_CardSeriesComponent,{});
export class View_CardSeriesComponent0 extends import2.AppView<import0.CardSeriesComponent> {
  _text_0:any;
  _anchor_1:any;
  /*private*/ _vc_1:import9.ViewContainer;
  _TemplateRef_1_5:any;
  _NgFor_1_6:import10.Wrapper_NgFor;
  _text_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_CardSeriesComponent0,renderType_CardSeriesComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckOnce);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_1 = new import9.ViewContainer(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import11.TemplateRef_(this,1,this._anchor_1);
    this._NgFor_1_6 = new import10.Wrapper_NgFor(this._vc_1.vcRef,this._TemplateRef_1_5,this.parentView.injectorGet(import12.IterableDiffers,this.parentIndex),this.ref);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._anchor_1,
      this._text_2
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import13.NgFor) && (1 === requestNodeIndex))) { return this._NgFor_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this.context.cards;
    this._NgFor_1_6.check_ngForOf(currVal_1_0_0,throwOnChange,false);
    const currVal_1_0_1:any = this.context.trackBy;
    this._NgFor_1_6.check_ngForTrackBy(currVal_1_0_1,throwOnChange,false);
    this._NgFor_1_6.ngDoCheck(this,this._anchor_1,throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 1)) { return new View_CardSeriesComponent1(this.viewUtils,this,1,this._anchor_1,this._vc_1); }
    return (null as any);
  }
}
class View_CardSeriesComponent1 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import14.CardComponent>;
  _CardComponent_0_3:import15.Wrapper_CardComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_CardSeriesComponent1,renderType_CardSeriesComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray2(2,'card',''),(null as any));
    this.compView_0 = new import15.View_CardComponent0(this.viewUtils,this,0,this._el_0);
    this._CardComponent_0_3 = new import15.Wrapper_CardComponent(new import16.ElementRef(this._el_0),this.compView_0.ref,this.parentView.injectorGet(import8.NgZone,this.parentIndex));
    this.compView_0.create(this._CardComponent_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'select',(null as any)),this.eventHandler(this.handleEvent_0));
    this._CardComponent_0_3.subscribe(this,this.eventHandler(this.handleEvent_0),true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.CardComponent) && (0 === requestNodeIndex))) { return this._CardComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.$implicit.color;
    this._CardComponent_0_3.check_color(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.context.$implicit.x;
    this._CardComponent_0_3.check_x(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = this.context.$implicit.y;
    this._CardComponent_0_3.check_y(currVal_0_0_2,throwOnChange,false);
    const currVal_0_0_3:any = this.context.$implicit.width;
    this._CardComponent_0_3.check_width(currVal_0_0_3,throwOnChange,false);
    const currVal_0_0_4:any = this.context.$implicit.height;
    this._CardComponent_0_3.check_height(currVal_0_0_4,throwOnChange,false);
    const currVal_0_0_5:any = this.context.$implicit.data;
    this._CardComponent_0_3.check_data(currVal_0_0_5,throwOnChange,false);
    if (this._CardComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._CardComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'select')) {
      const pd_sub_0:any = ((<any>this.parentView.context.onClick($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}