import React from 'react';
import { useFeatureStore } from '../../Store/FeatureStore';
import LegalContentsSkeleton from '../../skeleton/LegalContentsSkeleton';
import parse from "html-react-parser";

const LegalContents = () => {
    const {LegalDetails} = useFeatureStore();
   if(LegalDetails.length === 0){
       return <LegalContentsSkeleton />
   }
   else{
    return (
        <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <div className="card p-4">
            {
                parse(LegalDetails[0].description)
            }
          </div>
        </div>
      </div>
    </div>
    );
   }
};

export default LegalContents;