/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class sk_overdraw_canvas_new_0_Params
	{
		/* Pack=4 */
		canvas : number;
		public static unmarshal(pData:number, memoryContext: any = null) : sk_overdraw_canvas_new_0_Params
		{
			memoryContext = memoryContext ? memoryContext : Module;
			let ret = new sk_overdraw_canvas_new_0_Params();
			
			{
				ret.canvas = Number(memoryContext.getValue(pData + 0, "*"));
			}
			return ret;
		}
	}
}
