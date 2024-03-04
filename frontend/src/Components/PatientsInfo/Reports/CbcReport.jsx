import React from 'react';


const CbcReport = ({ register }) => {

  return (
    <div className='h-full'>
      <h1 className='text-center font-display text-xl mb-2'>HAEMOGRAM</h1>
      <div className="overflow-x-auto h-full">
        <table 
         className="border-separate border-spacing-2 border table-auto md:table-fixed lg:table-fixed border-slate-400 w-full">
          <thead>
            <tr>
            <th className="border border-slate-300 md:w-[40%]">Test</th>
              <th className="border border-slate-300 md:w-[20%]">Value</th>
              <th className="border w-[15%] border-slate-300">Unit</th>
              <th className="border border-slate-300 md:w-[25%]">Normal Value</th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-left font-semibold'>
              <td colSpan="4">BLOOD COUNT</td>
            </tr>
            <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              HAEMOGLOBIN
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  
                  {...register('Hb', { required: true })}
                />
              </td>
              <td className="w-1/8 md:w-1/4 text-center">
                gms % 
              </td>
              <td className="w-1/5 md:w-1/4 ">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  defaultValue='12 - 17 gms %'
                 
                  {...register('HbNv')}
                />
              </td>
            </tr>
            <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              Total R.B.C
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  
                  {...register('RBC')}
                />
              </td>
              <td className="w-1/8 md:w-1/4 text-center">
              millions /cmm 
              </td>
              <td className="w-1/5 md:w-1/4 ">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  defaultValue='4.2 - 5.8 millions /cmm'
                 
                  {...register('RbcNv')}
                />
              </td>
            </tr>
            <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              Total W.B.C
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  
                  {...register('WBC')}
                />
              </td>
              <td className="w-1/8 md:w-1/4 text-center">
              /cmm 
              </td>
              <td className="w-1/5 md:w-1/4 ">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  defaultValue='4000 - 10000 / cmm'
                 
                  {...register('WbcNv')}
                />
              </td>
            </tr>
            <tr className='text-left font-semibold'>
              <td colSpan="4">DIFFERENTIAL LEUCOCYTE COUNT</td>
              </tr>
              <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              NEUTROPHILS
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  
                  {...register('neutrophils')}
                />
              </td>
              <td className="w-1/8 md:w-1/4 text-center">
                % 
              </td>
              <td className="w-1/5 md:w-1/4 ">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  defaultValue='50 - 70 %'
                 
                  {...register('NeutroNv')}
                />
              </td>
            </tr>
            <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              LYMPHOCYTES
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  
                  {...register('lymphocytes')}
                />
              </td>
              <td className="w-1/8 md:w-1/4 text-center">
                % 
              </td>
              <td className="w-1/5 md:w-1/4 ">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  defaultValue='20 - 40 %'
                 
                  {...register('LymphoNv')}
                />
              </td>
            </tr>
            <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              EOSINOPHILS
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  
                  {...register('eosinophils')}
                />
              </td>
              <td className="w-1/8 md:w-1/4 text-center">
                % 
              </td>
              <td className="w-1/5 md:w-1/4 ">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  defaultValue='1 - 4 %'
                 
                  {...register('EosNv')}
                />
              </td>
            </tr>
            <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              MONOCYTES
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  
                  {...register('monocytes')}
                />
              </td>
              <td className="w-1/8 md:w-1/4 text-center">
                % 
              </td>
              <td className="w-1/5 md:w-1/4 ">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  defaultValue='2 - 6 %'
                 
                  {...register('MonoNv')}
                />
              </td>
            </tr>
            <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              BASOPHILS
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  
                  {...register('basophils')}
                />
              </td>
              <td className="w-1/8 md:w-1/4 text-center">
                % 
              </td>
              <td className="w-1/5 md:w-1/4 ">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  defaultValue='0 - 1 %'
                 
                  {...register('BasoNv')}
                />
              </td>
            </tr>
            <tr className='text-left font-semibold'>
              <td colSpan="4">BLOOD INDICES</td>
              </tr>
              <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              P.C.V (H.C.T.)
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  
                  {...register('pcv')}
                />
              </td>
              <td className="w-1/8 md:w-1/4 text-center">
                % 
              </td>
              <td className="w-1/5 md:w-1/4 ">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  defaultValue='42 - 50  %'
                 
                  {...register('PcvNv')}
                />
              </td>
            </tr>
            <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              M.C.V
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  {...register('mcv')}
                />
              </td>
              <td className="w-1/8 md:w-1/4 text-center">
                fl 
              </td>
              <td className="w-1/5 md:w-1/4 ">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  defaultValue='76 - 96 fl'
                 
                  {...register('McvNv')}
                />
              </td>
            </tr>
            <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              M.C.H
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  
                  {...register('mch')}
                />
              </td>
              <td className="w-1/8 md:w-1/4 text-center">
                picogram 
              </td>
              <td className="w-1/5 md:w-1/4 ">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  defaultValue='27 - 33 picogram'
                 
                  {...register('MchNv')}
                />
              </td>
            </tr>
            <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              M.C.H.C
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  
                  {...register('mchc')}
                />
              </td>
              <td className="w-1/8 md:w-1/4 text-center">
              gm/dL 
              </td>
              <td className="w-1/5 md:w-1/4 ">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  defaultValue='33 - 36 gm/dL'
                 
                  {...register('MchcNv')}
                />
              </td>
            </tr>
            <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              R.D.W
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  
                  {...register('rdw')}
                />
              </td>
              <td className="w-1/8 md:w-1/4 text-center">
                % 
              </td>
              <td className="w-1/5 md:w-1/4 ">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  defaultValue='12.5 - 4.5%'
                 
                  {...register('RdwNv')}
                />
              </td>
            </tr>
            <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              PLATELET COUNT
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  
                  {...register('platelets')}
                />
              </td>
              <td className="w-1/8 md:w-1/4 text-center">
              / cmm 
              </td>
              <td className="w-1/5 md:w-1/4 ">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  defaultValue='150000 - 450000/cmm'
                 
                  {...register('PlatNv')}
                />
              </td>
            </tr>
            <tr className='text-left font-semibold'>
              <td colSpan="4">SMEAR STUDY</td>
              </tr>
              <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              BLOOD MP
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  
                  {...register('mp')}
                />
              </td>
             
            </tr>
            <tr className='text-left font-semibold'>
              <td colSpan="4">SEROLOGY TEST</td>
            </tr>
            <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              C- REACTIVE PROTEIN
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  
                  {...register('serology')}
                />
              </td>
              <td className="w-1/8 md:w-1/4 text-center">
              mg / l 
              </td>
              <td className="w-1/5 md:w-1/4 ">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  defaultValue='up to 6.0 mg / l'
                 
                  {...register('SeroNv')}
                />
              </td>
            </tr>
           
          </tbody>
          <caption className="caption-bottom mt-1">
          By immunoturbidimetry :: HAEMOGRAM Test done by Transasia Erba H360 Fully Automatic 22 parameter cell counter
  </caption>
        </table>
      </div>
    </div>
  );
};

export default CbcReport;
