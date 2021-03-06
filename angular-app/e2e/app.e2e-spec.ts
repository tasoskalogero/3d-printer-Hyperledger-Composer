import { AngularTestPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Starting tests for 3d-printer', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be 3d-printer', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('3d-printer');
    })
  });

  it('navbar-brand should be printer-use-case@0.0.1',() => {
    var navbarBrand = element(by.css('.navbar-brand')).getWebElement();
    expect(navbarBrand.getText()).toBe('printer-use-case@0.0.1');
  });

  
    it('Cash component should be loadable',() => {
      page.navigateTo('/Cash');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Cash');
    });

    it('Cash table should have 6 columns',() => {
      page.navigateTo('/Cash');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });

  
    it('BlueprintMaster component should be loadable',() => {
      page.navigateTo('/BlueprintMaster');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('BlueprintMaster');
    });

    it('BlueprintMaster table should have 6 columns',() => {
      page.navigateTo('/BlueprintMaster');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });

  
    it('BlueprintCopy component should be loadable',() => {
      page.navigateTo('/BlueprintCopy');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('BlueprintCopy');
    });

    it('BlueprintCopy table should have 9 columns',() => {
      page.navigateTo('/BlueprintCopy');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(9); // Addition of 1 for 'Action' column
      });
    });

  

});
