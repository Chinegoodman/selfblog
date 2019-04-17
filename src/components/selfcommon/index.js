import Vue from 'vue'
import psfchangepage from './changepage'
import psfuploadfile from './uploadfile'
import musicbox from './musicbox'
import newmusicbox from './newmusicbox'
const components = [psfchangepage,psfuploadfile,musicbox,newmusicbox];
components.map((component)=>{
    Vue.component(component.name,component)
})