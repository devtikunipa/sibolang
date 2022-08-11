import React from 'react';
import Container from '@mui/material/Container';
import Footer from '../Footer';
import Typograph from '../../../components/Typograph';

const About = () => {
    return (
        <>
            <Container maxWidth='lg'>
                <Typograph text='Apa Itu SIBOLANG?' variant='h4' component='h3' textTransform='uppercase' fontWeight='bold' sx={{ my: 4 }} />
                <Typograph variant='body1' paragraph align='justify' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident illum, nulla voluptate magnam consectetur odit maiores veniam, sunt et libero tempora nam enim atque in id ipsam eaque? Id enim laboriosam corporis consequatur incidunt dolore doloribus harum illo facilis molestias? Dolores asperiores eum voluptatum consequuntur quo dicta tenetur, incidunt totam ipsa molestias distinctio dolor explicabo ducimus quaerat! Quas sed pariatur ullam totam reiciendis voluptate obcaecati accusamus earum nam corrupti nemo, inventore iste fugiat nulla et nobis incidunt delectus perspiciatis temporibus id, blanditiis eos. Modi accusamus, in rerum est iusto laborum porro tempora, nemo distinctio quae minima aliquam fugiat molestias deleniti enim magni? Modi deleniti molestias recusandae autem cumque veniam exercitationem tempore qui a. Quam eveniet assumenda alias culpa. ' />
                <Typograph variant='body1' paragraph align='justify' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident illum, nulla voluptate magnam consectetur odit maiores veniam, sunt et libero tempora nam enim atque in id ipsam eaque? Id enim laboriosam corporis consequatur incidunt dolore doloribus harum illo facilis molestias? Dolores asperiores eum voluptatum consequuntur quo dicta tenetur, incidunt totam ipsa molestias distinctio dolor explicabo ducimus quaerat! Quas sed pariatur ullam totam reiciendis voluptate obcaecati accusamus earum nam corrupti nemo, inventore iste fugiat nulla et nobis incidunt delectus perspiciatis temporibus id, blanditiis eos. Modi accusamus, in rerum est iusto laborum porro tempora, nemo distinctio quae minima aliquam fugiat molestias deleniti enim magni? Modi deleniti molestias recusandae autem cumque veniam exercitationem tempore qui a. Quam eveniet assumenda alias culpa. ' />
                <Typograph variant='body1' paragraph align='justify' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident illum, nulla voluptate magnam consectetur odit maiores veniam, sunt et libero tempora nam enim atque in id ipsam eaque? Id enim laboriosam corporis consequatur incidunt dolore doloribus harum illo facilis molestias? Dolores asperiores eum voluptatum consequuntur quo dicta tenetur, incidunt totam ipsa molestias distinctio dolor explicabo ducimus quaerat! Quas sed pariatur ullam totam reiciendis voluptate obcaecati accusamus earum nam corrupti nemo, inventore iste fugiat nulla et nobis incidunt delectus perspiciatis temporibus id, blanditiis eos. Modi accusamus, in rerum est iusto laborum porro tempora, nemo distinctio quae minima aliquam fugiat molestias deleniti enim magni? Modi deleniti molestias recusandae autem cumque veniam exercitationem tempore qui a. Quam eveniet assumenda alias culpa. ' />
            </Container>
            <Container maxWidth='100' sx={{ mt: 4, pt: 4, pb: 2, backgroundColor: 'primary.light' }}>
                <Footer />
            </Container>
        </>
    )
}

export default About