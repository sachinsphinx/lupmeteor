import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/homepage.css';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MoveTopButton from '../components/common/MoveTopButton';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { publicRoutes } from '../../utils/constants/routes';

// Component for Contact Page
export default function Contact() {
  const { t } = useTranslation(['contact']);

  return (
    <>
      {/* about us start */}
      <div className="main-wrapper contact">
        <div className="container">
          <div className="text-content">
            <h1 className="head-text">{t('contact:title1')}</h1>
            <p className="sub-head-text">{t('contact:text1')}</p>
          </div>
        </div>
        <div className="mask-wrap"></div>
      </div>
      {/* about us end */}

      {/* multi column start */}
      <div className="multi-column-wrapper mt-50 contact">
        <div className="contact-container">
          <div className="contact-title1">
            <h2 className="heading-title left">{t('contact:contactTitle')}</h2>
            <h3 className="sub-heading">{t('contact:contactSubtitle')}:</h3>
          </div>
          <div className="contact-info">
            <a
              href={FlowRouter.path(publicRoutes.contact.path)}
              className="btn-link border-bottom"
            >
              <span className="list-icon">
                <i className="fas fa-phone-alt"></i>
              </span>
              <span className="icon-list-text">
                <span className="label-text">
                  <FontAwesomeIcon icon={faPhone} className="icons" />
                  {t('contact:phone')}.{' '}
                </span>
                <span className="detail-info"> +46 (0) 8-970 970</span>
              </span>
            </a>

            <a
              href={FlowRouter.path(publicRoutes.contact.path)}
              className="btn-link"
            >
              <span className="list-icon">
                <i className="far fa-envelope"></i>
              </span>
              <span className="icon-list-text">
                <span className="label-text">
                  <FontAwesomeIcon icon={faEnvelope} className="icons" />
                  {t('contact:mail')}:{' '}
                </span>
                <span className="detail-info"> info@luptechnologies.com</span>
              </span>
            </a>

            <div className="form-content">
              <h4 className="form-sub-heading">{t('contact:formTitle')}:</h4>
              <form
                id="contactus"
                className="needs-validation contactus"
                noValidate
              >
                <div className="contact-form">
                  <div className="form-top-row">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="contactName"
                        placeholder={t('contact:formName')}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        name="email"
                        id="contactEmail"
                        placeholder={t('contact:formMail')}
                        required
                      />
                    </div>
                  </div>

                  <div className="content">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        placeholder={t('contact:formMessage')}
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="form-button">
                    <button type="submit" className="btn btn-primary w-100">
                      {t('contact:formSubmit')}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="clearfix"></div>
        </div>
      </div>
      {/* multi column end */}

      <MoveTopButton />
    </>
  );
}
