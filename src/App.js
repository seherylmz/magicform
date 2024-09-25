import React from "react";
import "./App.css";
import { Formik } from "formik";
import * as Yup from "yup";
function App() {
  return (
    <div className="container">
      <div className="brand-box">
        <h1>Magic Form</h1>
        <p>Build forms in React without the tears.</p>
      </div>

      <div className="magic-form">
        <Formik
          initialValues={{
            name: "",
            surname: "",
            email: "",
            agree: false,
            favoriteColor: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("İsim boş bırakılamaz"),
            surname: Yup.string().required("Soyisim boş bırakılamaz"),
            email: Yup.string().email().required("email boş bırakılamaz"),
            agree: Yup.boolean().required("Koşulları kabul etmelisin"),
            favoriteColor: Yup.string()
              .required()
              .oneOf(["red", "blue", "green"]),
          })}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            console.log(values);
            setTimeout(() => {
              setSubmitting(false);
              resetForm();
            }, 2000);
          }}
        >
          {({
            values,
            errors,
            handleSubmit,
            handleReset,
            handleChange,
            dirty,
            isSubmitting,
            touched,
            handleBlur,
          }) => (
            <form onSubmit={handleSubmit}>
              <h3>Kayıt Ol</h3>
              <label htmlFor="name">İsim</label>
              <input
                id="name"
                type="text"
                placeholder="Seher.."
                className="input"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {errors.name && touched.name && (
                <div className="input-feedback">{errors.name}</div>
              )}

              <label htmlFor="name">Soysim</label>
              <input
                id="surname"
                type="text"
                placeholder="Yılmaz.."
                className="input"
                value={values.surname}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {errors.surname && touched.surname && (
                <div className="input-feedback">{errors.surname}</div>
              )}

              <label htmlFor="email" className="topMargin">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="seher@yilmaz.com"
                className="input"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}

              <label htmlFor="favoriteColor" className="topMargin">
                Favori Renk
              </label>

              <select
                id="favoriteColor"
                value={values.favoriteColor}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{
                  marginTop: 10,
                  width: "150px",
                  padding: "10px 15px",
                  outline: "none",
                }}
              >
                <option value="" label="Renk seç" />
                <option value="red" label="Kırmızı" />
                <option value="blue" label="Mavi" />
                <option value="green" label="Yeşil" />
              </select>

              {errors.favoriteColor && touched.favoriteColor && (
                <div className="input-feedback">{errors.favoriteColor}</div>
              )}

              <div className="checkbox topMargin">
                <input
                  id="agree"
                  type="checkbox"
                  value={values.agree}
                  onChange={handleChange}
                />
                <label htmlFor="agree" className="checkbox.label">
                  Sözleşmeyi okudum kabul ediyorum.
                </label>
              </div>

              <button type="submit" disabled={!dirty || isSubmitting}>
                Kayıt Ol
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default App;
