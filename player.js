class Player
{
	constructor()
	{
		this.x = 0.0;
		this.y = 0.0;
		this.tx = 0.0;
		this.ty = 0.0;
		this.angle = 0.0;
		this.target = 0.0;
		this.r = 0.06;
		this.w = 10.0;
		this.L = 0.0;
		this.Q = 0.0;
		this.dL = 0.0;
		this.dQ = 0.0;
		this.tense = false;
		this.shouting = false;
	}
	
	update(dt)
	{
		this.angle = this.angle + this.w*(this.target - this.angle)*dt
		this.L = this.L + this.dL*dt;
		this.Q = this.Q + this.dQ*dt;
		if(this.L > 1.0 || this.L < 0.0) this.dL = 0.0;
		if(this.Q > 1.0 || this.Q < 0.0) 
		{
			this.dQ = 0.0;
			this.shooting = false;
		}
	}
	
	reset()
	{
		this.L = 0.0;
		this.Q = 0.0;
		this.dL = 0.0;
		this.dQ = 0.0;
	}
	
	fillUp()
	{
		this.L = 0.0;
		this.Q = 0.0;
		this.dL = 0.5;
		this.dQ = 0.0;
	}
	
	pourOut()
	{
		this.L = 1.0;
		this.Q = 0.0;
		this.dL = 0.0;
		this.dQ = 0.5;
		this.shooting = true;
	}
	
	draw(ctx)
	{
		if(this.tense) ctx.fillStyle =  "#b04ef9 "
		else ctx.fillStyle =  "#4ce4ff";
		ctx.beginPath();
		
		ctx.moveTo(X(this.x + this.r*Math.cos(this.angle + 4.0*Math.PI/5.0) + this.Q*(this.r*Math.cos(this.angle) - this.r*Math.cos(this.angle + 4.0*Math.PI/5.0))), Y(this.y + this.r*Math.sin(this.angle + 4.0*Math.PI/5.0) + this.Q*(this.r*Math.sin(this.angle) - this.r*Math.sin(this.angle + 4.0*Math.PI/5.0))));
		
		ctx.lineTo(X(this.x + this.r*Math.cos(this.angle - 4.0*Math.PI/5.0) + this.Q*(this.r*Math.cos(this.angle) - this.r*Math.cos(this.angle - 4.0*Math.PI/5.0))), Y(this.y + this.r*Math.sin(this.angle - 4.0*Math.PI/5.0) + this.Q*(this.r*Math.sin(this.angle) - this.r*Math.sin(this.angle - 4.0*Math.PI/5.0))));
		
		ctx.lineTo(X(this.x + this.r*Math.cos(this.angle - 4.0*Math.PI/5.0) + this.L*(this.r*Math.cos(this.angle) - this.r*Math.cos(this.angle - 4.0*Math.PI/5.0))), Y(this.y + this.r*Math.sin(this.angle - 4.0*Math.PI/5.0) + this.L*(this.r*Math.sin(this.angle) - this.r*Math.sin(this.angle - 4.0*Math.PI/5.0))));
		
		ctx.lineTo(X(this.x + this.r*Math.cos(this.angle + 4.0*Math.PI/5.0) + this.L*(this.r*Math.cos(this.angle) - this.r*Math.cos(this.angle + 4.0*Math.PI/5.0))), Y(this.y + this.r*Math.sin(this.angle + 4.0*Math.PI/5.0) + this.L*(this.r*Math.sin(this.angle) - this.r*Math.sin(this.angle + 4.0*Math.PI/5.0))));
		
		ctx.closePath();
		ctx.fill();
		
		ctx.strokeStyle = "#FFFFFF";
		ctx.beginPath();
		ctx.moveTo(X(this.x + this.r*Math.cos(this.angle)), Y(this.y + this.r*Math.sin(this.angle)));
		ctx.lineTo(X(this.x + this.r*Math.cos(this.angle + 4.0*Math.PI/5.0)), Y(this.y + this.r*Math.sin(this.angle + 4.0*Math.PI/5.0)));
		ctx.lineTo(X(this.x + this.r*Math.cos(this.angle - 4.0*Math.PI/5.0)), Y(this.y + this.r*Math.sin(this.angle - 4.0*Math.PI/5.0)));
		ctx.closePath();
		ctx.stroke();
		
		if(this.shooting)
		{
			if(this.tense) ctx.strokeStyle =  "#b04ef9 "
			else ctx.strokeStyle =  "#4ce4ff";
			ctx.beginPath();
			ctx.moveTo(X(this.x + this.r*Math.cos(this.angle)), Y(this.y + this.r*Math.sin(this.angle)));
			ctx.lineTo(X(this.tx), Y(this.ty));
			ctx.stroke();
		}
	}
	
	setAngle(x, y)
	{
		if(x > 0) this.target = Math.atan(y/x);
		else this.target = Math.atan(y/x) + Math.PI;
	}
	
	aim(tx, ty)
	{
		this.tx = tx;
		this.ty = ty;
	}
}