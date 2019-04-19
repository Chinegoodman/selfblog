import Vue from 'vue'
import psfchangepage from './changepage'
import psfuploadfile from './uploadfile'
import musicbox from './musicbox'
import newmusicbox from './newmusicbox'
import tags from './tags'
const components = [psfchangepage,psfuploadfile,musicbox,newmusicbox,tags];
components.map((component)=>{
    Vue.component(component.name,component)
})