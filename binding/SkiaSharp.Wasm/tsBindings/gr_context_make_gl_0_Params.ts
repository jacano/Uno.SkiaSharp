/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class gr_context_make_gl_0_Params
	{
		/* Pack=4 */
		glInterface : number;
		public static unmarshal(pData:number, memoryContext: any = null) : gr_context_make_gl_0_Params
		{
			memoryContext = memoryContext ? memoryContext : Module;
			let ret = new gr_context_make_gl_0_Params();
			
			{
				ret.glInterface = Number(memoryContext.getValue(pData + 0, "*"));
			}
			return ret;
		}
	}
}
