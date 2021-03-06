/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class sk_matrix44_pre_scale_0_Params
	{
		/* Pack=4 */
		matrix : number;
		sx : number;
		sy : number;
		sz : number;
		public static unmarshal(pData:number, memoryContext: any = null) : sk_matrix44_pre_scale_0_Params
		{
			memoryContext = memoryContext ? memoryContext : Module;
			let ret = new sk_matrix44_pre_scale_0_Params();
			
			{
				ret.matrix = Number(memoryContext.getValue(pData + 0, "*"));
			}
			
			{
				ret.sx = Number(memoryContext.getValue(pData + 4, "float"));
			}
			
			{
				ret.sy = Number(memoryContext.getValue(pData + 8, "float"));
			}
			
			{
				ret.sz = Number(memoryContext.getValue(pData + 12, "float"));
			}
			return ret;
		}
	}
}
