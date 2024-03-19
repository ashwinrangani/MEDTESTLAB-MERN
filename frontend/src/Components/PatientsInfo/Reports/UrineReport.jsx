import React from 'react'

const UrineReport = ({ register, setFocus }) => {

  const handleKeyPress = (event, nextFieldName) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setFocus(nextFieldName); // Set focus on the next field by its name
    }
  };
  return (
   
    <div className='h-full mb-2'>
      <h1 className='text-center font-display text-xl mb-2'>URINE ANALYSIS</h1>
      <div className="overflow-x-auto h-full">
        <table className="border-separate border-spacing-2 border table-auto md:table-fixed lg:table-fixed border-slate-400 w-full">
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
              <td colSpan="4">PHYSICAL</td>
            </tr>
            <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              QUANTITY
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  onKeyDown={(e) => handleKeyPress(e, 'urineColor')}
                  required
                  {...register('quantity', { required: true })}
                />
              </td>
              <td className="w-1/8 md:w-1/4 text-center">
               cc 
              </td>
              </tr>
            <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              COLOUR
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  onKeyDown={(e) => handleKeyPress(e, 'clarity')}
                  {...register('urineColor')}
                />
              </td>
             </tr>
            <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              CLARITY
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  onKeyDown={(e) => handleKeyPress(e, 'urineph')}
                  {...register('clarity')}
                />
              </td>
            </tr>
            <tr>
            <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
            REACTION PH
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  onKeyDown={(e) => handleKeyPress(e, 'spgr')}
                  {...register('urineph')}
                />
              </td>
              <td>{/*blank*/}</td>
              <td className="w-1/5 md:w-1/4 ">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  defaultValue='4.5 - 8.0'
                 
                  {...register('phNv')}
                />
              </td>
              </tr>
              <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              SP GRAVITY
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  onKeyDown={(e) => handleKeyPress(e, 'albumin')}
                  {...register('spgr')}
                />
              </td>
              <td>{/*blank*/}</td>
              <td className="w-1/5 md:w-1/4 ">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  defaultValue='1.005 - 1.030'
                 
                  {...register('spgrNv')}
                />
              </td>
              </tr>
            <tr className='text-left font-semibold'>
              <td colSpan="4">CHEMICAL</td>
              </tr>
              <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              ALBUMIN
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  onKeyDown={(e) => handleKeyPress(e, 'sugar')}
                  {...register('albumin')}
                />
              </td>
              <td className="w-1/8 md:w-1/4 text-center">
                {/*blank*/}
              </td>
              <td className="w-1/5 md:w-1/4 ">
                {/*blank*/}
              </td>
            </tr>
            <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              SUGAR
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  onKeyDown={(e) => handleKeyPress(e, 'bilesalts')}
                  {...register('sugar')}
                />
              </td>
              <td className="w-1/8 md:w-1/4 text-center">
                {/*blank*/}
              </td>
              <td className="w-1/5 md:w-1/4 ">
                {/*blank*/}
              </td>
            </tr>
            <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              BILE SALTS
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  onKeyDown={(e) => handleKeyPress(e, 'bilepigments')}
                  {...register('bilesalts')}
                />
              </td>
              <td className="w-1/8 md:w-1/4 text-center">
                {/*blank*/}
              </td>
              <td className="w-1/5 md:w-1/4 ">
                {/*blank*/}
              </td>
            </tr>
            <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              BILE PIGMENTS
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  onKeyDown={(e) => handleKeyPress(e, 'urobilinogen')}
                  {...register('bilepigments')}
                />
              </td>
              <td className="w-1/8 md:w-1/4 text-center">
                {/*blank*/}
              </td>
              <td className="w-1/5 md:w-1/4 ">
                {/*blank*/}
              </td>
            </tr>
            <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              UROBILINOGEN
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  onKeyDown={(e) => handleKeyPress(e, 'urineblood')}
                  {...register('urobilinogen')}
                />
              </td>
              <td className="w-1/8 md:w-1/4 text-center">
                {/*blank*/}
              </td>
              <td className="w-1/5 md:w-1/4 ">
                {/*blank*/}
              </td>
            </tr>
            <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              BLOOD
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  onKeyDown={(e) => handleKeyPress(e, 'acetone')}
                  {...register('urineblood')}
                />
              </td>
              <td className="w-1/8 md:w-1/4 text-center">
                {/*blank*/}
              </td>
              <td className="w-1/5 md:w-1/4 ">
                {/*blank*/}
              </td>
            </tr>
            <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              ACETONE
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  onKeyDown={(e) => handleKeyPress(e, 'leucocytes')}
                  {...register('acetone')}
                />
              </td>
              <td className="w-1/8 md:w-1/4 text-center">
                {/*blank*/}
              </td>
              <td className="w-1/5 md:w-1/4 ">
                {/*blank*/}
              </td>
            </tr>
            <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              LEUCOCYTES
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  onKeyDown={(e) => handleKeyPress(e, 'nitrite')}
                  {...register('leucocytes')}
                />
              </td>
              <td className="w-1/8 md:w-1/4 text-center">
                {/*blank*/}
              </td>
              <td className="w-1/5 md:w-1/4 ">
                {/*blank*/}
              </td>
            </tr>
            <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              NITRITE
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  onKeyDown={(e) => handleKeyPress(e, 'puscells')}
                  {...register('nitrite')}
                />
              </td>
              <td className="w-1/8 md:w-1/4 text-center">
                {/*blank*/}
              </td>
              <td className="w-1/5 md:w-1/4 ">
                {/*blank*/}
              </td>
            </tr>

            <tr className='text-left font-semibold'>
              <td colSpan="4">MICROSCOPIC ( 10 CC URINE IS CENTRIFUSED FOR 5 MIN. AT 3000 RPM )</td>
              </tr>
              <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              PUS CELLS
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  onKeyDown={(e) => handleKeyPress(e, 'redcells')}
                  {...register('puscells')}
                />
              </td>
              <td className="w-1/8 md:w-1/4 text-center">
              /HPF 
              </td>
            </tr>
            <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              RED CELLS
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  onKeyDown={(e) => handleKeyPress(e, 'epithelialcells')}
                  {...register('redcells')}
                />
              </td>
             </tr>
             <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              EPITHELIAL CELLS
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  onKeyDown={(e) => handleKeyPress(e, 'casts')}
                  {...register('epithelialcells')}
                />
              </td>
              <td className="w-1/8 md:w-1/4 text-center">
              /HPF 
              </td>
            </tr>
            <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              CASTS
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  onKeyDown={(e) => handleKeyPress(e, 'crystals')}
                  {...register('casts')}
                />
              </td>
             </tr>
             <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              CRYSTALS
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  onKeyDown={(e) => handleKeyPress(e, 'amorphous')}
                  {...register('crystals')}
                />
              </td>
             </tr>
             <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              AMORRPHOUS
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  onKeyDown={(e) => handleKeyPress(e, 'bacteria')}
                  {...register('amorphous')}
                />
              </td>
             </tr>
             <tr>
              <td className="border text-center border-slate-300 md:w-2/5  md:overflow-visible">
              BACTERIA
              </td>
              <td className="w-1/5 md:w-1/2">
                <input
                  className='p-1 w-full text-center'
                  type="text"
                  onKeyDown={(e) => handleKeyPress(e, '')}
                  {...register('bacteria')}
                />
              </td>
             </tr>
          </tbody>
          
        </table>
      </div>
    </div>
  
  )
}

export default UrineReport;