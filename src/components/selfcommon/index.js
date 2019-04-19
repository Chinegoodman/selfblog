import Vue from 'vue'
import psfchangepage from './changepage'
import psfuploadfile from './uploadfile'
import musicbox from './musicbox'
import newmusicbox from './newmusicbox'
import tags from './tags'
import mengban from './mengban'
const components = [psfchangepage,psfuploadfile,musicbox,newmusicbox,tags,mengban];
components.map((component)=>{
    Vue.component(component.name,component)
})