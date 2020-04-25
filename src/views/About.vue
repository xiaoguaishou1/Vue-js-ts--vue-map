<template>
    <div class="trackquery">
        <div id="container" class="map">
        </div>
        <div class="input-card">
            <h4>轨迹回放控制</h4>
            <div class="input-item">
                <input type="button" class="btn" value="开始动画" id="start" @click="startAnimation"/>
                <input type="button" class="btn" value="暂停动画" id="pause"/>
            </div>
            <div class="input-item">
                <input type="button" class="btn" value="继续动画" id="resume"/>
                <input type="button" class="btn" value="打开标记" id="stop" @click="openInfo"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
  import { Vue,Component } from "vue-property-decorator";
  import {Params} from '@/types/Interface';
  @Component({
    components: {

    }
  })
  export default class Map extends Vue{
        //声明map对象
        private data:Params={
           map:{},
           marker:{},
           zoom:17,
           markerArr:[],
           lineArr:[]
        }
        //创建地图
        private getmap():void{
          console.log(this);
          this.data.lineArr=
            [
              [116.478935, 39.997761],
              [116.478939, 39.997825],
              [116.478912, 39.998549],
              [116.478912, 39.998549],
              [116.478998, 39.998555],
              [116.478998, 39.998555],
              [116.479282, 39.99856],
              [116.479658, 39.998528],
              [116.480151, 39.998453],
              [116.480784, 39.998302],
              [116.480784, 39.998302],
              [116.481149, 39.998184],
              [116.481573, 39.997997],
              [116.481863, 39.997846],
              [116.482072, 39.997718],
              [116.482362, 39.997718],
              [116.483633, 39.998935],
              [116.48367, 39.998968],
              [116.484648, 39.999861]
            ]
          //操作dom渲染地图
          this.data.map=new AMap.Map("container",{
              resizeEnable: true,
              center: [116.478935, 39.997761],
              zoom: this.data.zoom
          })
          //标记车辆
          this.data.marker=new AMap.Marker({
            position: [116.478935,39.997761],
            icon: "https://webapi.amap.com/images/car.png",
            offset: new AMap.Pixel(-26, -13),
            autoRotation: true,
            angle:-90,
            map:this.data.map
          })
          var polyline = new AMap.Polyline({
            map: this.data.map,
            path: this.data.lineArr,
            showDir:true,
            strokeColor: "#28F",  //线颜色
            strokeOpacity: 1,     //线透明度
            strokeWeight: 6,      //线宽
            strokeStyle: "solid"  //线样式
          });
        }
          //绘制车辆轨迹

        mounted():void{
          console.log("DOM加载完成")
          this.getmap();
        }
        private startAnimation():void{
          console.log("小车移动");
          this.data.marker.moveAlong(this.data.lineArr,200);
        }
        private openInfo():void{
          console.log("打开标记");
        }

  }
</script>

<style scoped>
.map{
    width: 100%;
    height: 500px;
}
</style>
