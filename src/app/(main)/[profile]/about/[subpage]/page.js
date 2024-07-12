import BasicContact from '@/components/pages/profile/BasicContact';
import Overview from '@/components/pages/profile/Overview';
import WorkEducation from '@/components/pages/profile/WorkEducation';
import React from 'react'

const page = ({ params }) => {
    const { subpage } = params;
    let title = subpage.replace('_', ' ');
    let content;
    if (title == 'overview') content = <Overview />
    if (title == 'basic contact') content = <BasicContact />
    if (title == 'work education') content = <WorkEducation />
    return (
        <>{content} </>
    )
}

export default page