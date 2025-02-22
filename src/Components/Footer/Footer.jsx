import React from "react";
import { Container, Row, Col,ListGroup,ListGroupItem} from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "../../Styles/footer.css";
const quickLinks=[
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/#',
    display:'Privacy Policy'
  },
  {
    path:'/cars',
    display:'Car Listing'
  },
  {
    path:'/about',
    display:'About'
  },
]

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    Car Rental
                    <br />
                    Service
                  </span>
                </Link>
              </h1>
            </div>
            <p className='footer__logo-content'>
              ppppppppppppppppppppppppppppppppppppppp
              </p>
          </Col>
         
          <Col lg='4' md='4' sm='6'>
          <div className="mb-4">
          <h5 className="footer__link-title">Quick Links</h5>
          <ListGroup>
            {
              quickLinks.map((item,index)=>(
                <ListGroupItem key={index} className="p-0 mt-3">
                  <Link to ={item.path}>{item.display}</Link>

                </ListGroupItem>
              ))
            }
          </ListGroup>
          </div>
          
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
