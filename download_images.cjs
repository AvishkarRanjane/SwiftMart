const fs = require('fs');
const path = require('path');
const https = require('https');

const targetDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const images = {
  'hero-banner.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuApAXGcPgOougCwfrvUxnakd9GKL_XaHGXJOa_YBJ9-pzi-qBFpZ734j8HJVnaq3AFzF2SoDz0fp8VS7qTQtfNDRg4RN0sIPovNQJnuBk7rgOzS5WFMlsCCYqNmdr9uVGjvEjzsZaYc9tlfEiKt5OwH4zf-TulFFXU-W28OkjX7CLgDxQ55XkNs20vC7pi7NusHZIrdPde1Zsl1feKDhCGNLEP8Yi5hSuh_wRvuMLfWT5xNCWxrd1L4',
  'atta-1.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYx87NWwx-QzMQjTc_8dTa0oq9WmjaTIhh705VyDT2Q-LHXE_q2wa5bzJ4DoYgMZ7beZaI_2ufEJJlhCue3aa2iYEbAfmsyfF_BousAGdqmdYfQ5m1QxEP_2QzYKVUU8r2GatVWuJKQmnoCA5S9FT25CEITOJDewZSC5D3FR7CcGf-r6msAFiuSjtTWeD9zIstw0A2d79uxGdoEIrDHfqj1F0I8mdTL9fMhhJnM7Zc6ghK4bYu8ziX',
  'atta-2.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVHc23HUIqDVJVcvxyy0i0HgMhvTqw0_5F0X1Bc6EkTkaUq_4Ju128E5xF5m45ebXbK4ACZwsvLL-GUFje6B5EVHahe0vjUzZXLrc-YMczW8YAS8vW6qQqDJkWFJnCBtsUQrE3cfVyZHCh8NNDpDSjW-_H_yIjERtS5XD5JEKcMz-zv5jqYBea3Egmc0p_KC1h6yXZrL7pL5h4D6uOvR8gnWfupBcR-tOI67W4DwawkNvBYSEV4_aG',
  'oil-1.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLU8_m2E-1VJWkCb771HXXwSukayfPZ_oKPGkkq2ZnsM7PlT2N6rtCkrQ6yrSnr3ar7zeaht01PTMZ9AdAxIORJWmpRADN73ucNUMcssz5y0jadrsTvxGxwbh8afy5qMkQrVUXSIB4Tn3OZQ_rJOoAOEeh0Cj7-zgpDn7fsTEwGze7hA-pH5VmKKDLmk023Q2rUX1Gde00XWEqaahlUFWWmbNhUiN1prX8Mwy0kA4Eo6NWxbE6wEz_',
  'oil-2.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzym_tJhnvELiDjJYTzcU2nJSeoiq7lw3G0tyT3834Iq1DAGpXQns34zIX7IRAAcdKK_Le_DjH4im7UmnOEQqseNYdGAy5M36iLlhCgvJ6lYXhkJKFhwuQVDbOXAjF7bmeKJZnHWO9FipXUps2vWfr0izwpYRpqAzP31W40cYF3iCv3BIKipaH7jIhZASQWwLEuysriyR2LD_Kr6t36XzfTUPGNV23A2lYYICN6GlRB2qYVlXEoL4P',
  'tea-1.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZeoIGkXefA-sUXyOpCPDIPctnh0QnEtwDCbvjEwCjxxhnSxo6cu3mJbv4ZpasrseghcHfU3N2qv3u-CBUd6hJnOMbHFduhawUwukcDO5VxIzxcc6ua2IidCFyLNGsapiy5B2hW5hZvuc2rHZGSuVwhk1FAHxopfkqWwG7r3zqn--fv3lWl1DMBqdf4B-IdvT9H_OzrUDAk-w38St67ZeSzvhZGsLg7LuF6w2e8TJxGk3nV_AQqYOf',
  'butter-1.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNuZfZE8jkDdg_7MMqI8ok1jR-XJ0RqMWz0Yftw4UiBgD_qBiInbfuzTLRai3R0-OUuk2zdHOdShk9VaNI6zuQZ7pP0BpUefk2IIQdH6DHJN9i-sktiIGsur98LKTP23Xd_0C4KpK1k6buHnpsA03w_ezq_WriFJJc-7XwpGl-7gY1lJ1Rph9qlkgo-b2SIy-WAiNpVK4K5GKX8dIruQQQaJqIdrUuIRWgUacHoSjBpD2vL6d-cMco',
  'maggi-1.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNnpR2o1_689hb-gKlY0fRkoK1kr7fUulS6_hFEYvgnGo6oB5i4jq49XA_t6CuymWDsBPXOu_P_zw-SkM92dBji-3kQ4_cMov7Y98mcA6UYEgiNdsLiy8vJvZatPhydwokZpuHyIoZmxv_h5gc9KlhEQiw8UmJavyNWuLfRcjFEITf5eQ2u9rsLIHmLr7geNaDyQzZtAKZzHVCgL39OTVqmUT-is0wp3jB3cG7yMIR7MO0_vpkaT0Y',
  'icecream-1.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJoUQdYiJ6ye1BGOoPAH35Cml8ol-7pGbOciJsecN52CbC--OcHUZqE9IpcfltnA2C-qh0EhBFWa0NDZjET-iezqHmayM6briKxEs9hYVZXcPrAgyfz1E8ei3cIsL4jNo_E4qtUHm5Wdu5WfPW1MkM209mh7aGe2PiTup6UwnTZhLBTTYEwSJDMiIAhqcAXl2XCSpCietUqjvKTT5T0ay-qv7630v1B7wzlPxWiu6tz4St4qXYd0DL',
  'dryfruits-1.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgwCImT6U7sFn3zxdVGD-XFwFsJeZD7blg_i8R-JAuy0S83ThHZzGqMBKPHbCXyGOnCyyXgTVooWVDhMgoVS1fkXoelkr-0-9bD9kN2ynXdCTb9R0Hf8x6XR4kmj13sSd7Wp_rh8ciWnXthPHyzUyXBBwThtDeK4egCij1fCJGXsXygYuHoNOUbCKODvKcK1vaXwHyS0p9oa36yfHElhfxQliEufC3sJbq5ahFgftcKdU0LhVSbHrL',
  'boat-1.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWjjdHSXDZvhMIImB4ze810v3XVCu0-XBhjdnITgWBp9ihQBgZW54ev2N2O0CK9yca0HlSlbHo07nbh2Wp6OOu37fiV701yTENf4abQjUkdH8us5LSxyi63pPJrNq21U0BFHS0noX0TQsDz2CZMQ_SbjTFBovWSjiE5y4Grjk5Wc-1gwt98VsVfg9GPS38Zw5tuObJQX0Dxf7wyiYSIvxGd1sRTTqTlNBjFhYNOwg9KvwWnBTyCF37',
  'boat-2.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuAA1XqMJuarEXDmhLpR_sj645x3BlBhedL8_SmINc6mMvVX9AUJuR5s1DF7n6NG24QxkJeLM8KsqHnYF8xL84H2Er9X2TjokRQqdTXkBvSGLuorWhmD3F-QX63ax9Mb3EeRmnmRDJmeUa91GELKNeqqMMlWxioCmKGcsqjYwOl1rOH6Ln3dAdf67fy825JxUhEOqsb_UZ2j3Mr32wAD-yRx-pqvrhQQ8HH112AmKNZ5bXopr-oEswCk',
  'boat-3.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDzx-Zxa-ZhNsJeu-WHgmlp3G5bvBf10gvPkH6kuMhh4yvdwxYmTwem4r94mZTA8gbBsEWdrDoXWr5-KO0FiqDVurmhb_PG2-MyxVUFtEZ8FuY2J7FZAgiORgoDRJuFt3Vc4sxzQoKkyjt3oJ_WkE1LCJRqb-8UKPe-Ub9TrfPxCLfyyNanZXQCpozCx7hC2BIMHXyVi8J0bqjIi5MtD_zFPdq2ihfVbckHkAZf5hJO0XEw13Hhby1',
  'boat-4.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXvQ0-H_A_4WwwDqRVhCFBwOCOpJYLIu-UwNGGoUldGdNkgu3rTwrc95GOXGhaTx4nOc2gZE3z9aRmt0Slgc0Fju8se6OGoAVbe-ThWxnHi8p2ZGlKllb6CYPfPRn5CUCd4ggr48uOG7n6EZvcR9s3NtgSkns6CUQQvihNc4OjOE0ekUOVNrTu_0qpuxPgYTjJz__1PVaojtvOl0drEH9vo6HiAJ7H-5eN0Pw1_50-FQn_0xgsOTml',
  'boat-5.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjWYLT94eqAVApW215dYEiRgnGsfPJn6_kgTPWmf_srFDkExHEff0MKFk8mXYintXCND8zlIc7DC-JStmN1yrTgipicFQg1XesjA8S3Ed0L8SgAuKnPd1S9jDs0LplJUxv-BcfOOp6RV7B3F_t8HA_VbSRkD_c9TbLwBPvcTvBqxvOxtSnWlzL_pYeNLL5egL2DJddB1MImm03v4hKjpR2lh36WO9gE7z1HZ1shbYXryrdQTnYb3cr',
  'oneplus-1.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0MhEA1YIo4jjrDSuf_K8DPHJQyfnPDWlY1ImRcJWqj03TZm_lWl0oUM0dYYCgLY3hrVb6H_yHH-7UPByUlze_2CTWa-Qgk0WEUYwyxtzgv7zxWarUNVBN4uFFcXZr_5Qe_N_HHkYKuPD9z5ovR2NEcXB4Lj7eTHzMbptS9XxB539vVqDdZHwZrOvk4vYIopXzhnq6M3Ph1o6Kj0nDFc9KVHJ6GmisQc0aQwNapDZZaK3cALHH2B0K',
  'oneplus-2.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-eLD1Wn0pjPxGr6ynxNDXkYQiIoiDUa8p82OaOxYHAWnHDdGE0PVrd-PT8ztQxao5oSmNQNNWLTJW4KQwvMyd3XSMVYkjYLX7HdimGAKhPXdyGWQDPMXVyjVLUBSWkkWthC3B0IC7_7ECitqSDqwCwdz-wLQgZMJSioHb1J-vglfzbR_hIXjC6j1TeUxFqLUiAl5WZpg9nDXALX1qFm1GqWs30Q4cRkR8G_Sk9RGTja9JNJ_cnTys',
  'surfexcel-1.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOoN3qs8F2vAM0ogFCCZiGXIG1OWjCQ02E977GAtOGAQBDBYcvsRM2swLWoEF5biLlVJZFnd3ogryLnOakT3eF4Dg_8ukrZ592Niqra8jIcdFVXg0eOXqS6QZz-CZhu0Im9v94hzGFSEbZ1xLnCX5BIri08VIdEXNcaCK4vEMBCpAu_vGMU71e6Oe-_kwnjR7Wy3zKmaNG-t1AwOM1Udauv37rm2SOaPfDh2l5fd8J3cx9ZB7cDADo',
  'surfexcel-2.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuDk5mYKgDlXl1OJg4_eSMTyn03yUOKY1TbDbj0jJ73_zdJcj5JVpiN74nAxXfeQ_FwWMs-YPam_edVDuKc-VwzFDLa9Su28PwguLldjzQ44w4Q9ymIAf8W59OMX2p01MUs2eyrAOxoEKjqaYhJcUQkvGM6c55JRzMOMLXfk_LCAcvMTxIdZ-OjNpI-4ykafMFtS330ieGxXnYN28v5hG6akQ7TDkRYsEU1ILevWZ9e5IefAS3sDK-gj',
  'lemons.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuYOrpI1vyyBppiiXpeotOfovpoNcyJKwlPPGNfXvxzpxUX-2V0YrGzCovPVVpzFUclmuPexYYC0w6km2_nC0uXKQcmtNvdFIvhhVg1KYG1G_GTrZKoxc8JQ7VmkeLIurkfxFyIVX6Iq6d3NFxNB8qp5gzCm2mn3k8u689zsAXMvXrfbh2aeT6fYigr16-TDmyxvgeyw3v4EQPFlJUBo2peJHC9AJaPPHLvNumyEKajHDdYC57tQv9',
  'goodday.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9a06MGD9uNORyX6UvQtXhM_OEungOUhujPDu7plpfQk6HjNqoMyTsxP13kbvVwCou7ddfkqv1N5zMtlpYoG2-CklfiYuiK1JA1bDHZs8kfd8GiXF3jn9iF1-Dkm74g1dk2-0USK6v53oVRayjvK5OQM0zBliPuw61IY09rVMj_xZi_wyY_ZASmgvv5zCDjOVlcwa3RSrAJBv-PkHWn480WAcfdjKcYAvVbs3grAXYJNUsma4wa-Sn',
  'cat-fashion.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLF3gYQxVCwgWfx5S6XIqThEbwtT_ldGbP_H-6VV1GIEryOiDKEgr84hB2-xIW_oCU-ASqRJ0qF6BOJ72HzuxUvwonPk0LShWNNOJlYr64CyoXFzRlW1hyeTeMdDcwU0rTmz9K0AgN_xlrMaYMELavARaUy0DDmQA520K_CCzlUAcu1JPLqUXjoEirjxoMPnxnDNVzMgBThzAbItwz2L_fl6GTj-Ba5hp--5OibmIMaeFAsuJIQ9xA',
  'cat-chargers.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTtviLc9XDa6lW-NcMA7vcqKkA01_jWEz3GG637UjbXy1TnrCOlSQr4-GcfjUuUvK5O_RbkFjHI98eNLs9ZH0SYSXxmBAL-z6tdOp0izWAcV5TjaanoZnVKlUcDnF9kLBvw1OgaFeP2SupIVfuwwCJto96fKlvtW5K0mDNNbGZY935mQ5YnAcVqD92AAds7e3Ur-qqSmSTbfu9W0OmeQgdAYqCxEJqC_3-BAzyIeW6F7mVzkeZoyz5'
};

function download(filename, url) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(targetDir, filename);
    if (fs.existsSync(filePath) && fs.statSync(filePath).size > 1000) {
      console.log(`Already exists: ${filename}`);
      return resolve();
    }
    const file = fs.createWriteStream(filePath);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${filename}`);
          resolve();
        });
      } else {
        file.close();
        fs.unlinkSync(filePath);
        console.warn(`Failed ${filename}: status ${response.statusCode}`);
        resolve();
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      console.warn(`Error downloading ${filename}: ${err.message}`);
      resolve();
    });
  });
}

async function run() {
  console.log('Downloading images into public/images/ ...');
  for (const [name, url] of Object.entries(images)) {
    await download(name, url);
  }
  console.log('Image download completed successfully!');
}

run();
