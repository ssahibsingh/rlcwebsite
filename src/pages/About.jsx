import React from "react";
import "./style.css";

const AboutPage = () => {
  return (
    <>
      <div className="aboutPage">
        <div className="container">
          <h1 className="my-3 text-center py-3 headColor">About Us</h1>
          <div className="content">
            <div className="px-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                veniam amet non praesentium, optio iusto iste voluptate,
                incidunt, ratione unde illum fugit. Doloremque natus obcaecati
                hic fuga consectetur incidunt aperiam. Doloribus culpa
                temporibus debitis veniam cupiditate ullam voluptates autem id
                tempora. Nemo itaque aspernatur ducimus odio ipsum sit commodi
                perspiciatis voluptatum deleniti dolore nobis laborum corporis
                dolor magni inventore natus, dolorem tempora ad exercitationem,
                iste similique in error unde nisi. Assumenda, quam
                exercitationem quod eligendi debitis magni inventore. Itaque
                laudantium labore, dolore ipsa dignissimos asperiores. Unde qui
                eligendi quo saepe, illum odit autem quia assumenda neque
                cupiditate laboriosam ut cumque, voluptates quisquam delectus?
                Sunt eius illum sit harum ullam corrupti non quae quo amet ipsam
                officiis aliquid omnis dolorem, ea cum ducimus earum. Rerum
                error excepturi odio. Qui obcaecati eum ab reprehenderit,
                delectus cumque minus corrupti vero nulla, mollitia est velit
                eaque nemo iusto. Sit eaque quisquam atque doloremque vel vitae
                excepturi enim placeat reiciendis eius!
              </p>
            </div>

            <div className="motive my-5 px-4 text-center">
              <h2 className="text-center headColor">Motive</h2>
              <p>To Promote and Preserve Regional Literature of India</p>
            </div>
            <div className="motive my-5 px-4 text-center">
              <h2 className="text-center headColor">Activities</h2>
              <ul className="list-unstyled">
                <li>Book Club</li>
                <li>Monthly Magazine</li>
                <li>Talks with Prominent Personalities</li>
                <li>Publishing Writings from NITJ</li>
                <li>Competitions</li>
                <li>Theatrical Acts</li>
              </ul>
            </div>

            <div className="my-4">
              <h2 className="headColor text-center">
                Patron and Faculy Coordinator
              </h2>
              <div className="row mt-5">
                <div className="col-md-6 d-flex justify-content-center text-center">
                  <div>
                    <img src="https://picsum.photos/250/300" alt="" />
                    <h4 className="display-5 name fs-4 pt-2">
                      Dr Binod Kumar Kanaujia
                    </h4>
                    <h5 className="display-6 designation fs-5">
                      Director, NITJ
                    </h5>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center text-center">
                  <div>
                    <img src="https://picsum.photos/250/300" alt="" />
                    <h4 className="display-5 name fs-4 pt-2">
                      Dr Jagwinder Singh
                    </h4>
                    <h5 className="display-6 designation fs-5">
                      Associate Professor & HOD H&M
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
