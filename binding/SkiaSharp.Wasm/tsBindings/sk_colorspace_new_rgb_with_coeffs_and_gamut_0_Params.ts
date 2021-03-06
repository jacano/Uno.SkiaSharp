/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class sk_colorspace_new_rgb_with_coeffs_and_gamut_0_Params
	{
		/* Pack=4 */
		coeffs : SkiaSharp.SKColorSpaceTransferFn;
		gamut : number;
		public static unmarshal(pData:number, memoryContext: any = null) : sk_colorspace_new_rgb_with_coeffs_and_gamut_0_Params
		{
			memoryContext = memoryContext ? memoryContext : Module;
			let ret = new sk_colorspace_new_rgb_with_coeffs_and_gamut_0_Params();
			
			{
				ret.coeffs = SkiaSharp.SKColorSpaceTransferFn.unmarshal(pData + 0);
			}
			
			{
				ret.gamut = Number(memoryContext.getValue(pData + 28, "i32"));
			}
			return ret;
		}
	}
}
