import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import JobsList from './components/jobslist';
import localeEsMessages from './locales/es';
import localeEnMessages from './locales/en';

const userLocale =
  navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language

const localeMessages = 
  userLocale.includes("es")
    ? localeEsMessages
    : localeEnMessages

ReactDOM.render(
        <IntlProvider locale={userLocale} messages={localeMessages}>
                <JobsList/>
        </IntlProvider>, document.getElementById("root")
);