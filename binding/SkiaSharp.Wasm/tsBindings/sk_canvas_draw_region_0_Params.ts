/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class sk_canvas_draw_region_0_Params
	{
		/* Pack=4 */
		t : number;
		region : number;
		paint : number;
		public static unmarshal(pData:number, memoryContext: any = null) : sk_canvas_draw_region_0_Params
		{
			memoryContext = memoryContext ? memoryContext : Module;
			let ret = new sk_canvas_draw_region_0_Params();
			
			{
				ret.t = Number(memoryContext.getValue(pData + 0, "*"));
			}
			
			{
				ret.region = Number(memoryContext.getValue(pData + 4, "*"));
			}
			
			{
				ret.paint = Number(memoryContext.getValue(pData + 8, "*"));
			}
			return ret;
		}
	}
}
