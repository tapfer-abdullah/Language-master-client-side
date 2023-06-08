
import InstroctorPageCard from '../../../Components/InstoctorPageCard/InstroctorPageCard';

const Instructor = () => {
    return (
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
    );
};

export default Instructor;