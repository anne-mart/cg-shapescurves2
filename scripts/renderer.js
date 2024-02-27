class Renderer {
    // canvas:              object ({id: __, width: __, height: __})
    // num_curve_sections:  int
    constructor(canvas, num_curve_sections, show_points_flag) {
        this.canvas = document.getElementById(canvas.id);
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.ctx = this.canvas.getContext('2d', {willReadFrequently: true});
        this.slide_idx = 0;
        this.num_curve_sections = num_curve_sections;
        this.show_points = show_points_flag;
    }

    // n:  int
    setNumCurveSections(n) {
        this.num_curve_sections = n;
        this.drawSlide(this.slide_idx);
    }

    // flag:  bool
    showPoints(flag) {
        this.show_points = flag;
        this.drawSlide(this.slide_idx);
    }
    
    // slide_idx:  int
    drawSlide(slide_idx) {
        this.slide_idx = slide_idx;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let framebuffer = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);

        switch (this.slide_idx) {
            case 0:
                this.drawSlide0(framebuffer);
                break;
            case 1:
                this.drawSlide1(framebuffer);
                break;
            case 2:
                this.drawSlide2(framebuffer);
                break;
            case 3:
                this.drawSlide3(framebuffer);
                break;
        }

        this.ctx.putImageData(framebuffer, 0, 0);
    }

    // framebuffer:  canvas ctx image data
    drawSlide0(framebuffer) {
        // TODO: draw at least 2 Bezier curves
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
       this.drawBezierCurve({x: 100, y: 100}, {x: 70, y: 300}, {x: 600, y: 200}, {x: 500, y: 100}, 300, [255, 0, 0, 255], framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide1(framebuffer) {
        // TODO: draw at least 2 circles
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices

        //circle 1
        this.drawCircle({x:100, y: 150}, 50, 55, [255, 0, 0, 255], framebuffer);

        //circle 2
        this.drawCircle({x:300, y: 300}, 100, 55, [245, 39, 187, 0], framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide2(framebuffer) {
        // TODO: draw at least 2 convex polygons (each with a different number of vertices >= 5)
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        
        
        // Following lines are example of drawing a single triangle
        // (this should be removed after you implement the polygon)
        let point_a = {x:  250, y:  150};
        let point_b = {x: 100, y: 400};
        let point_c = {x: 300, y: 250};
        let point_d = {x: 200, y: 350};
        let point_e = {x: 100, y: 150};
        this.drawConvexPolygon([point_a, point_b, point_c, point_d, point_e], [0, 128, 128, 255], framebuffer);
        
    }

    // framebuffer:  canvas ctx image data
    drawSlide3(framebuffer) { //DONE
        // TODO: draw your name!

        //symbol
        this.drawVertex({x:  500, y:  500}, [200, 0, 0, 255], framebuffer)

        //Filled in polygon
        let point_a = {x:  100, y:  500};
        let point_b = {x: 200, y: 500};
        let point_c = {x: 150, y: 360};
        this.drawTriangle(point_a, point_c, point_b, [0, 128, 128, 255], framebuffer);

        //A
        this.drawLine({x: 100, y: 100}, {x: 150, y: 400}, [200, 0, 0, 255], framebuffer);
        this.drawLine({x: 150, y: 400}, {x: 200, y: 100}, [200, 0, 0, 255], framebuffer);
        this.drawLine({x: 100, y: 200}, {x: 200, y: 200}, [200, 0, 0, 255], framebuffer);
        
        //N
        this.drawArc({x:300, y: 300}, 50, 55, [245, 39, 187, 0], framebuffer);
        this.drawLine({x: 250, y: 100}, {x: 250, y: 350}, [200, 0, 0, 255], framebuffer);
        this.drawLine({x: 350, y: 100}, {x: 350, y: 300}, [200, 0, 0, 255], framebuffer);

        //N
        this.drawArc({x:500, y: 300}, 50, 55, [245, 39, 187, 0], framebuffer);
        this.drawLine({x: 450, y: 100}, {x: 450, y: 350}, [200, 0, 0, 255], framebuffer);
        this.drawLine({x: 550, y: 100}, {x: 550, y: 300}, [200, 0, 0, 255], framebuffer);

        //E
        this.drawCircle({x:700, y: 300}, 50, 55, [245, 39, 187, 0], framebuffer);
        this.drawLine({x: 650, y: 300}, {x: 650, y: 100}, [200, 0, 0, 255], framebuffer);
        this.drawLine({x: 650, y: 100}, {x: 750, y: 100}, [200, 0, 0, 255], framebuffer);
        
    }

    // p0:           object {x: __, y: __}
    // p1:           object {x: __, y: __}
    // p2:           object {x: __, y: __}
    // p3:           object {x: __, y: __}
    // num_edges:    int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    // drawBezierCurve(p0, p1, p2, p3, num_edges, color, framebuffer) {
    //     // TODO: draw a sequence of straight lines to approximate a Bezier curve
        
        
    // }
    drawBezierCurve(p0, p1, p2, p3, num_edges, color, framebuffer) {
    //     // TODO: draw a sequence of straight lines to approximate a Bezier curve
    //     //p0
    //    this.drawLine({x: p0.x, y: p0.y}, {x: p0.x+10, y: p0.y},[39, 134, 245, 255], framebuffer);

    //    //p1
    //    this.drawLine({x: p1.x, y: p1.y}, {x: p1.x+10, y: p1.y},[39, 134, 245, 255], framebuffer);

    //    //p2
    //    this.drawLine({x: p2.x, y: p2.y}, {x: p2.x+10, y: p2.y},[39, 134, 245, 255], framebuffer);
       
    //    //p3
    //    this.drawLine({x: p3.x, y: p3.y}, {x: p3.x+10, y: p3.y},[39, 134, 245, 255], framebuffer);

   
        // let num_edges = 20;
        let num_points = num_edges+1;

        //calcualte t gap
        let t_gap = 1/num_edges;

        let xgoal=((Math.pow(1,3)*p0.x)+(3*(Math.pow(1,2))*0*p1.x)+(3*(1-0)*Math.pow(0,2)*p2.x)+(Math.pow(0,3)*p3.x));
        let ygoal = ((Math.pow(1-0,3)*p0.y)+(3*(Math.pow(1-0,2))*0*p1.y)+(3*(1-0)*Math.pow(0,2)*p2.y)+(Math.pow(0,3)*p3.y));
        let prevx = xgoal;
        let prevy = ygoal;

       // this.drawLine({x: p0.x, y: p0.y}, {x: prevx, y: prevy}, [255, 0, 0, 255], framebuffer);

      
    //}
        let t = t_gap;

   //for (let i=1; i<num_points; i++){
    

    while(t<=1){
        xgoal=Math.floor(((Math.pow(1-t,3)*p0.x) + (3*(Math.pow(1-t,2))*t*p1.x) + (3*(1-t)*Math.pow(t,2)*p2.x) + (Math.pow(t,3)*p3.x)));
        ygoal = Math.floor(((Math.pow(1-t,3)*p0.y)+(3*(Math.pow(1-t,2))*t*p1.y)+(3*(1-t)*Math.pow(t,2)*p2.y)+(Math.pow(t,3)*p3.y)));
        
        this.drawLine({x: prevx, y: prevy}, {x: xgoal, y: ygoal}, [255, 0, 0, 255], framebuffer);

        prevx = xgoal;
        prevy = ygoal;
    
        t = t+t_gap;
   }

}
    // center:       object {x: __, y: __}
    // radius:       int
    // num_edges:    int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawCircle(center, radius, num_edges, color, framebuffer) { //DONE
        // TODO: draw a sequence of straight lines to approximate a circle
  
        //calcualte t gap
        let t_gap = (2*Math.PI)/num_edges;
        let t = 0;
        let xgoal= Math.floor(center.x+radius*Math.cos(t));
        let ygoal = Math.floor(center.y+radius*Math.sin(t));
        let prevx = xgoal;
        let prevy = ygoal;

        while(t<=2*Math.PI){
            xgoal= Math.floor(center.x+radius*Math.cos(t));
            ygoal = Math.floor(center.y+radius*Math.sin(t));
            this.drawLine({x: prevx, y: prevy}, {x: xgoal, y: ygoal}, [255, 0, 0, 255], framebuffer);
            prevx = xgoal;
            prevy = ygoal;
            t = t+t_gap;
        }
        
    }
    
    drawArc(center, radius, num_edges, color, framebuffer){ //DONE
        //calcualte t gap
        let t_gap = (2*Math.PI)/num_edges;
        let t = 0;
        let xgoal= Math.floor(center.x+radius*Math.cos(t));
        let ygoal = Math.floor(center.y+radius*Math.sin(t));
        let prevx = xgoal;
        let prevy = ygoal;

        while(t<=Math.PI){
            xgoal= Math.floor(center.x+radius*Math.cos(t));
            ygoal = Math.floor(center.y+radius*Math.sin(t));
            
            this.drawLine({x: prevx, y: prevy}, {x: xgoal, y: ygoal}, [255, 0, 0, 255], framebuffer);

            prevx = xgoal;
            prevy = ygoal;
        
            t = t+t_gap;
        }
    }
    

    // vertex_list:  array of object [{x: __, y: __}, {x: __, y: __}, ..., {x: __, y: __}]
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawConvexPolygon(vertex_list, color, framebuffer) {
        let point_a = vertex_list[0];
        let point_b = vertex_list[1];
        let point_c = vertex_list[2];

        this.drawTriangle(point_a, point_b, point_c, [0, 128, 128, 255], framebuffer);

        let center = vertex_list[0];
        let prev = vertex_list[2];

        for (let i=1; i<vertex_list.length; i++) {
            this.drawTriangle(center, vertex_list[i], prev, [0, 128, 128, 255], framebuffer);
            prev = vertex_list[i];
          
            //this.drawLine({x: vertex_list[0].x, y: vertex_list[0].y}, {x: vertex_list[i].x, y: vertex_list[i].y}, [255, 0, 0, 255], framebuffer);
        }


        
    }
    
    // v:            object {x: __, y: __}
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawVertex(v, color, framebuffer) { //DONE
        // TODO: draw some symbol (e.g. small rectangle, two lines forming an X, ...) centered at position `v`
        this.drawLine({x: v.x, y: v.y}, {x: v.x+50, y: v.y+50}, [255, 0, 0, 255], framebuffer);
        this.drawLine({x: v.x, y: v.y}, {x: v.x-50, y: v.y-50}, [255, 0, 0, 255], framebuffer);
        this.drawLine({x: v.x, y: v.y}, {x: v.x+50, y: v.y-50}, [255, 0, 0, 255], framebuffer);
        this.drawLine({x: v.x, y: v.y}, {x: v.x-50, y: v.y+50}, [255, 0, 0, 255], framebuffer);
    }
    
    /***************************************************************
     ***       Basic Line and Triangle Drawing Routines          ***
     ***       (code provided from in-class activities)          ***
     ***************************************************************/
    pixelIndex(x, y, framebuffer) {
	    return 4 * y * framebuffer.width + 4 * x;
    }
    
    setFramebufferColor(color, x, y, framebuffer) {
	    let p_idx = this.pixelIndex(x, y, framebuffer);
        for (let i = 0; i < 4; i++) {
            framebuffer.data[p_idx + i] = color[i];
        }
    }
    
    swapPoints(a, b) {
        let tmp = {x: a.x, y: a.y};
        a.x = b.x;
        a.y = b.y;
        b.x = tmp.x;
        b.y = tmp.y;
    }

    drawLine(p0, p1, color, framebuffer) {
        if (Math.abs(p1.y - p0.y) <= Math.abs(p1.x - p0.x)) { // |m| <= 1
            if (p0.x < p1.x) {
                this.drawLineLow(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineLow(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }
        }
        else {                                                // |m| > 1
            if (p0.y < p1.y) {
                this.drawLineHigh(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineHigh(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }
        }
    }
    
    drawLineLow(x0, y0, x1, y1, color, framebuffer) {
        let A = y1 - y0;
        let B = x0 - x1;
        let iy = 1; // y increment (+1 for positive slope, -1 for negative slop)
        if (A < 0) {
            iy = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let D0 = 2 * A;
        let D1 = 2 * A + 2 * B;
    
        let y = y0;
        for (let x = x0; x <= x1; x++) {
            this.setFramebufferColor(color, x, y, framebuffer);
            if (D <= 0) {
                D += D0;
            }
            else {
                D += D1;
                y += iy;
            }
        }
    }
    
    drawLineHigh(x0, y0, x1, y1, color, framebuffer) {
        let A = x1 - x0;
        let B = y0 - y1;
        let ix = 1; // x increment (+1 for positive slope, -1 for negative slop)
        if (A < 0) {
            ix = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let D0 = 2 * A;
        let D1 = 2 * A + 2 * B;
    
        let x = x0;
        for (let y = y0; y <= y1; y++) {
            this.setFramebufferColor(color, x, y, framebuffer);
            if (D <= 0) {
                D += D0;
            }
            else {
                D += D1;
                x += ix;
            }
        }
    }
    
    drawTriangle(p0, p1, p2, color, framebuffer) {
        // Deep copy, then sort points in ascending y order
        p0 = {x: p0.x, y: p0.y};
        p1 = {x: p1.x, y: p1.y};
        p2 = {x: p2.x, y: p2.y};
        if (p1.y < p0.y) this.swapPoints(p0, p1);
        if (p2.y < p0.y) this.swapPoints(p0, p2);
        if (p2.y < p1.y) this.swapPoints(p1, p2);
        
        // Edge coherence triangle algorithm
        // Create initial edge table
        let edge_table = [
            {x: p0.x, inv_slope: (p1.x - p0.x) / (p1.y - p0.y)}, // edge01
            {x: p0.x, inv_slope: (p2.x - p0.x) / (p2.y - p0.y)}, // edge02
            {x: p1.x, inv_slope: (p2.x - p1.x) / (p2.y - p1.y)}  // edge12
        ];
        
        // Do cross product to determine if pt1 is to the right/left of edge02
        let v01 = {x: p1.x - p0.x, y: p1.y - p0.y};
        let v02 = {x: p2.x - p0.x, y: p2.y - p0.y};
        let p1_right = ((v01.x * v02.y) - (v01.y * v02.x)) >= 0;
        
        // Get the left and right edges from the edge table (lower half of triangle)
        let left_edge, right_edge;
        if (p1_right) {
            left_edge = edge_table[1];
            right_edge = edge_table[0];
        }
        else {
            left_edge = edge_table[0];
            right_edge = edge_table[1];
        }
        // Draw horizontal lines (lower half of triangle)
        for (let y = p0.y; y < p1.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) { 
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }
        
        // Get the left and right edges from the edge table (upper half of triangle) - note only one edge changes
        if (p1_right) {
            right_edge = edge_table[2];
        }
        else {
            left_edge = edge_table[2];
        }
        // Draw horizontal lines (upper half of triangle)
        for (let y = p1.y; y < p2.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) {
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }
    }
};

export { Renderer };
