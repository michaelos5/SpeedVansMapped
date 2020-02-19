export class SpeedVanLocation {
    zone_number: number;
    county: string;
    road_type: string;
    road_name: string;
    fatal_collisions: number;
    serious_collisions: number;
    minor_collisions: number;
    total_collisions: number;
    start_latitude: number;
    start_longtitude:number;
    end_latitude: number;
    end_longtitude: number;
    length_in_kms: number;
    type: string;
    encrypted_polyline: string;
 
    constructor(zone_number: number,county: string,road_type: string,road_name: string,fatal_collisions: number,
                serious_collisions: number,minor_collisions: number,total_collisions: number,start_latitude: number,
                start_longtitude:number,end_latitude: number,end_longtitude: number,length_in_kms: number,type: string, encrypted_polyline: string) {
       this.zone_number = zone_number;
       this.county =  county;
       this.road_type =  road_type;
       this.road_name =  road_name;
       this.fatal_collisions =  fatal_collisions;
       this.serious_collisions =  serious_collisions;
       this.minor_collisions =  minor_collisions;
       this.total_collisions =  total_collisions;
       this.start_latitude =  start_latitude;
       this.start_longtitude =  start_longtitude;
       this.end_latitude =  end_latitude;
       this.end_longtitude =  end_longtitude;
       this.length_in_kms =  length_in_kms;
       this.type = type;
       this.encrypted_polyline = encrypted_polyline;
    };
 };