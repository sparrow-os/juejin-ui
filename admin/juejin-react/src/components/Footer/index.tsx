import React from 'react';
import { Layout } from '@arco-design/web-react';
import { FooterProps } from '@arco-design/web-react/es/Layout/interface';
import cs from 'classnames';
import styles from './style/index.module.less';
import locale from "@/locale";
import useLocale from "@/utils/useLocale";
function Footer(props: FooterProps = {}) {
  const t = useLocale(locale);
  const { className, ...restProps } = props;
  return (
    <Layout.Footer className={cs(styles.footer, className)} {...restProps}>
      {t['website.name']}
    </Layout.Footer>
  );
}

export default Footer;
