class SpaceObject {
    constructor(radius, distance, parent, tex, emission) {
        this.radius = radius;
        this.distance = distance;
        this.orbitLength = distance * 2 * PI;
        this.angle = random(2 * PI);
        this.tex = tex;
        this.emission = emission;
        this.satellites = [];
        this.parent = parent;

        if (parent) {
          parent.satellites.push(this);
        }
    }

    orbit() {
        if (this.orbitLength > 0) {
            let speed = pow((width - this.distance) / (width), 0.5);
            this.angle += (speed / this.orbitLength) * (2 * PI);
        }

        for (let object of this.satellites) {
          object.orbit();
        }
    }

    show() {
        push();
        {
          push();
          {
            strokeWeight(0.5);
            stroke(20);
            noFill();
            ellipse(0, 0, this.distance * 2);
          }
          pop();
          
          if (this.emission) {
            fill(this.emission);
            scale(100);
            pointLight(this.emission, drag.x, drag.y, 0);
            scale(0.01);
          }
          
          rotateZ(-this.angle * 0.65);
          translate(this.distance, 0);
          rotate(-this.angle);

          if (this.emission) {
            ambientLight(this.emission);
          }

          ambientMaterial(255);
          texture(this.tex);
          sphere(this.radius);

          for (let object of this.satellites) {
            object.show();
          }
        }
        pop();
    }
}
