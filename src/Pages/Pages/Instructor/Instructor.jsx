
import InstroctorPageCard from '../../../Components/InstoctorPageCard/InstroctorPageCard';
import PageBanner from '../../../Components/PageBanner/PageBanner';

const Instructor = () => {
    return (
        <div>
            <PageBanner 
            title={`All The Instructors`} 
            subTitle={`To have another language is to possess a second soul.`}
            img="https://www.wondriumdaily.com/wp-content/uploads/2020/05/Story-of-Human-Language_Animal-Communication-Is-Not-the-Same-As-Human-Language_QBS_Featured.jpg"></PageBanner>
            <div className='grid grid-cols-1 md:grid-cols-3'>
            <InstroctorPageCard language={"English"}></InstroctorPageCard>
            <InstroctorPageCard language={"French"}></InstroctorPageCard>
            <InstroctorPageCard language={"German"}></InstroctorPageCard>
            <InstroctorPageCard language={"Arabic"}></InstroctorPageCard>
            <InstroctorPageCard language={"China"}></InstroctorPageCard>
            <InstroctorPageCard language={"Spanish"}></InstroctorPageCard>
            <InstroctorPageCard language={"English"}></InstroctorPageCard>
            <InstroctorPageCard language={"French"}></InstroctorPageCard>
            <InstroctorPageCard language={"German"}></InstroctorPageCard>
            <InstroctorPageCard language={"Arabic"}></InstroctorPageCard>
            <InstroctorPageCard language={"China"}></InstroctorPageCard>
            <InstroctorPageCard language={"Spanish"}></InstroctorPageCard>
            <InstroctorPageCard></InstroctorPageCard>
        </div>
        </div>
    );
};

export default Instructor;