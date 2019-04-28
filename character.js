class Character
{
	constructor(hanzi, wubi)
	{
		this.hanzi = hanzi;
		this.wubi = wubi;
		this.angle = Math.random()*2.0*Math.PI;
		this.x = 1.0*Math.cos(this.angle);
		this.y = 1.0*Math.sin(this.angle);
		this.v = 0.1;
		this.vx = -this.v*this.x;
		this.vy = -this.v*this.y;
		this.r = 0.05;
		this.fill = false;
		this.targeted = false;
	}
	
	update(dt)
	{
		this.x = this.x + this.vx*dt;
		this.y = this.y + this.vy*dt;
	}
	

	
	
	draw(ctx)
	{
		ctx.fillStyle = "#FFFFFF";
		ctx.beginPath();
		ctx.arc(X(this.x), Y(this.y), scale(this.r), 0.0, 2.0*Math.PI);
		ctx.fill();
		ctx.font = scale(1.44*this.r) + "px Arial";
		if(this.targeted) ctx.fillStyle = "blue";
		else ctx.fillStyle = "red";
		ctx.fillText(this.hanzi, X(this.x - 0.7*this.r), Y(this.y - 0.7*this.r));
	}
}