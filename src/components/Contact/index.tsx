import { useCallback } from "react";
import ContentEditable, { Props } from "react-contenteditable";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import striptags from "striptags";
import styles from "./style.module.scss";
import useOverhang from "hooks/useOverhang";

type FieldValues = {
  content: string;
  email: string;
  name: string;
  subject: string;
};

export type ContactProps = {
  onSubmit: SubmitHandler<FieldValues>;
};

function Contact({ onSubmit }: ContactProps): JSX.Element {
  const { innerTarget, isOverhang, wrapperTarget } = useOverhang();
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      content: "",
      email: "",
      name: "",
      subject: "",
    },
  });
  const handleChangeInput = useCallback<Props["onChange"]>(
    ({
      currentTarget: {
        attributes: {
          name: { value: name },
        },
      },
      target: { value },
    }) => {
      setValue(name, striptags(value));
    },
    [setValue]
  );
  const handleChangeTextarea = useCallback<Props["onChange"]>(
    ({
      currentTarget: {
        attributes: {
          name: { value: name },
        },
      },
      target: { value },
    }) => {
      setValue(name, value === "<br>" ? "" : value);
    },
    [setValue]
  );

  return (
    <div
      className={styles.wrapper}
      ref={wrapperTarget}
      style={{
        justifyContent: isOverhang ? "normal" : "center",
      }}
    >
      <article className={styles.article} ref={innerTarget}>
        <h2>ご連絡</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formInner}>
            <label>
              <span>
                お名前<abbr className={styles.abbr}>*</abbr>
              </span>
              <Controller
                control={control}
                name="name"
                render={({ field: { value, ...field } }): JSX.Element => (
                  <ContentEditable
                    {...field}
                    className={styles.input}
                    html={value}
                    onChange={handleChangeInput}
                  />
                )}
                rules={{ required: "お名前を入力してください" }}
              />
              {errors.name ? (
                <p className={styles.error}>{errors.name.message}</p>
              ) : null}
            </label>
            <label>
              <span>件名</span>
              <Controller
                control={control}
                name="subject"
                render={({ field: { value, ...field } }): JSX.Element => (
                  <ContentEditable
                    {...field}
                    className={styles.input}
                    html={value}
                    onChange={handleChangeInput}
                  />
                )}
              />
            </label>
            <label>
              <span>
                メールアドレス<abbr className={styles.abbr}>*</abbr>
              </span>
              <Controller
                control={control}
                name="email"
                render={({ field: { value, ...field } }): JSX.Element => (
                  <ContentEditable
                    {...field}
                    className={styles.input}
                    html={value}
                    onChange={handleChangeInput}
                  />
                )}
                rules={{ required: "メールアドレスを入力してください" }}
              />
              {errors.email ? (
                <p className={styles.error}>{errors.email.message}</p>
              ) : null}
            </label>
            <label>
              <span>
                内容<abbr className={styles.abbr}>*</abbr>
              </span>
              <Controller
                control={control}
                name="content"
                render={({ field: { value, ...field } }): JSX.Element => (
                  <ContentEditable
                    {...field}
                    className={styles.textarea}
                    html={value}
                    onChange={handleChangeTextarea}
                  />
                )}
                rules={{ required: "内容を入力してください" }}
              />
              {errors.content ? (
                <p className={styles.error}>{errors.content.message}</p>
              ) : null}
            </label>
            <button className={styles.button} type="submit">
              <span className={styles.buttonInner}>送信する</span>
            </button>
          </div>
        </form>
      </article>
    </div>
  );
}

export default Contact;
