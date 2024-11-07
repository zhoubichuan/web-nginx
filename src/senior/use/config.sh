server {
     server_name zhoubichuan.com;

     #access_log  /var/log/nginx/host.access.log  main;

     #    location / {
     #        root   /usr/share/nginx/html;
     #        index  index.html index.htm;
     #    }
     location ~*^.+$ {
          gzip on;
          gzip_min_length 1k;
          gzip_http_version 1.1;
          gzip_comp_level 9;
          gzip_types text/css application/javascript;
          root /usr/src/zhoubichuan/prod/;
          try_files $uri $uri/ /index.html;
          index index.html index.htm;
     }

     location ^~/common-node/api {
          proxy_pass http://localhost:3000/api;
     }

     location ^~/antdpro-express/api {
          proxy_pass http://localhost:7001/api;
          # include /etc/nginx/conf.d/*.conf;
     }

     location ^~/abstract-express/api {
          proxy_pass http://localhost:7005/api;
     }

     location ^~/abstract-egg/api {
          proxy_pass http://localhost:7006/api;
     }

     #error_page  404              /404.html;

     # redirect server error pages to the static page /50x.html
     #
     error_page 500 502 503 504 /50x.html;
     location = /50x.html {
          root /usr/share/nginx/html;
     }

     # proxy the PHP scripts to Apache listening on 127.0.0.1:80
     #
     #location ~ \.php$ {
     #    proxy_pass   http://127.0.0.1;
     #}

     # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
     #
     #location ~ \.php$ {
     #    root           html;
     #    fastcgi_pass   127.0.0.1:9000;
     #    fastcgi_index  index.php;
     #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
     #    include        fastcgi_params;
     #}
     # deny access to .htaccess files, if Apache's document root
     # concurs with nginx's one
     #
     #location ~ /\.ht {
     #    deny  all;
     #}
     listen 443 ssl; # managed by Certbot
     ssl_certificate /etc/letsencrypt/live/zhoubichuan.com/fullchain.pem; # managed by Certbot
     ssl_certificate_key /etc/letsencrypt/live/zhoubichuan.com/privkey.pem; # managed by Certbot
     include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
     ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
     server_name dev.zhoubichuan.com;

     #access_log  /var/log/nginx/host.access.log  main;

     #    location / {
     #        root   /usr/share/nginx/html;
     #        index  index.html index.htm;
     #    }
     location ~*^.+$ {
          gzip on;
          gzip_min_length 1k;
          gzip_http_version 1.1;
          gzip_comp_level 9;
          gzip_types text/css application/javascript;
          root /usr/src/zhoubichuan/dev/;
          try_files $uri $uri/ /index.html;
          index index.html index.htm;
     }

     location ^~/common-node/api {
          proxy_pass http://localhost:3000/api;
     }

     location ^~/antdpro-express/api {
          proxy_pass http://localhost:7001/api;
          # include /etc/nginx/conf.d/*.conf;
     }

     location ^~/abstract-express/api {
          proxy_pass http://localhost:7005/api;
     }

     location ^~/abstract-egg/api {
          proxy_pass http://localhost:7006/api;
     }

     #error_page  404              /404.html;

     # redirect server error pages to the static page /50x.html
     #
     error_page 500 502 503 504 /50x.html;
     location = /50x.html {
          root /usr/share/nginx/html;
     }

     # proxy the PHP scripts to Apache listening on 127.0.0.1:80
     #
     #location ~ \.php$ {
     #    proxy_pass   http://127.0.0.1;
     #}

     # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
     #
     #location ~ \.php$ {
     #    root           html;
     #    fastcgi_pass   127.0.0.1:9000;
     #    fastcgi_index  index.php;
     #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
     #    include        fastcgi_params;
     #}
     # deny access to .htaccess files, if Apache's document root
     # concurs with nginx's one
     #
     #location ~ /\.ht {
     #    deny  all;
     #}
     listen 443 ssl; # managed by Certbot
     ssl_certificate /etc/letsencrypt/live/zhoubichuan.com/fullchain.pem; # managed by Certbot
     ssl_certificate_key /etc/letsencrypt/live/zhoubichuan.com/privkey.pem; # managed by Certbot
     include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
     ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
     server_name sit.zhoubichuan.com;

     #access_log  /var/log/nginx/host.access.log  main;

     #    location / {
     #        root   /usr/share/nginx/html;
     #        index  index.html index.htm;
     #    }
     location ~*^.+$ {
          gzip on;
          gzip_min_length 1k;
          gzip_http_version 1.1;
          gzip_comp_level 9;
          gzip_types text/css application/javascript;
          root /usr/src/zhoubichuan/sit/;
          try_files $uri $uri/ /index.html;
          index index.html index.htm;
     }

     location ^~/common-node/api {
          proxy_pass http://localhost:3000/api;
     }

     location ^~/antdpro-express/api {
          proxy_pass http://localhost:7001/api;
          # include /etc/nginx/conf.d/*.conf;
     }

     location ^~/abstract-express/api {
          proxy_pass http://localhost:7005/api;
     }

     location ^~/abstract-egg/api {
          proxy_pass http://localhost:7006/api;
     }

     #error_page  404              /404.html;

     # redirect server error pages to the static page /50x.html
     #
     error_page 500 502 503 504 /50x.html;
     location = /50x.html {
          root /usr/share/nginx/html;
     }

     # proxy the PHP scripts to Apache listening on 127.0.0.1:80
     #
     #location ~ \.php$ {
     #    proxy_pass   http://127.0.0.1;
     #}

     # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
     #
     #location ~ \.php$ {
     #    root           html;
     #    fastcgi_pass   127.0.0.1:9000;
     #    fastcgi_index  index.php;
     #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
     #    include        fastcgi_params;
     #}
     # deny access to .htaccess files, if Apache's document root
     # concurs with nginx's one
     #
     #location ~ /\.ht {
     #    deny  all;
     #}
     listen 443 ssl; # managed by Certbot
     ssl_certificate /etc/letsencrypt/live/zhoubichuan.com/fullchain.pem; # managed by Certbot
     ssl_certificate_key /etc/letsencrypt/live/zhoubichuan.com/privkey.pem; # managed by Certbot
     include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
     ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
     server_name uat.zhoubichuan.com;

     #access_log  /var/log/nginx/host.access.log  main;

     #    location / {
     #        root   /usr/share/nginx/html;
     #        index  index.html index.htm;
     #    }
     location ~*^.+$ {
          gzip on;
          gzip_min_length 1k;
          gzip_http_version 1.1;
          gzip_comp_level 9;
          gzip_types text/css application/javascript;
          root /usr/src/zhoubichuan/uat/;
          try_files $uri $uri/ /index.html;
          index index.html index.htm;
     }

     location ^~/common-node/api {
          proxy_pass http://localhost:3000/api;
     }

     location ^~/antdpro-express/api {
          proxy_pass http://localhost:7001/api;
          # include /etc/nginx/conf.d/*.conf;
     }

     location ^~/abstract-express/api {
          proxy_pass http://localhost:7005/api;
     }

     location ^~/abstract-egg/api {
          proxy_pass http://localhost:7006/api;
     }

     #error_page  404              /404.html;

     # redirect server error pages to the static page /50x.html
     #
     error_page 500 502 503 504 /50x.html;
     location = /50x.html {
          root /usr/share/nginx/html;
     }

     # proxy the PHP scripts to Apache listening on 127.0.0.1:80
     #
     #location ~ \.php$ {
     #    proxy_pass   http://127.0.0.1;
     #}

     # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
     #
     #location ~ \.php$ {
     #    root           html;
     #    fastcgi_pass   127.0.0.1:9000;
     #    fastcgi_index  index.php;
     #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
     #    include        fastcgi_params;
     #}
     # deny access to .htaccess files, if Apache's document root
     # concurs with nginx's one
     #
     #location ~ /\.ht {
     #    deny  all;
     #}
     listen 443 ssl; # managed by Certbot
     ssl_certificate /etc/letsencrypt/live/zhoubichuan.com/fullchain.pem; # managed by Certbot
     ssl_certificate_key /etc/letsencrypt/live/zhoubichuan.com/privkey.pem; # managed by Certbot
     include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
     ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
     server_name pet.zhoubichuan.com;

     #access_log  /var/log/nginx/host.access.log  main;

     #    location / {
     #        root   /usr/share/nginx/html;
     #        index  index.html index.htm;
     #    }
     location ~*^.+$ {
          gzip on;
          gzip_min_length 1k;
          gzip_http_version 1.1;
          gzip_comp_level 9;
          gzip_types text/css application/javascript;
          root /usr/src/zhoubichuan/pet/;
          try_files $uri $uri/ /index.html;
          index index.html index.htm;
     }

     location ^~/common-node/api {
          proxy_pass http://localhost:3000/api;
     }

     location ^~/antdpro-express/api {
          proxy_pass http://localhost:7001/api;
          # include /etc/nginx/conf.d/*.conf;
     }

     location ^~/abstract-express/api {
          proxy_pass http://localhost:7005/api;
     }

     location ^~/abstract-egg/api {
          proxy_pass http://localhost:7006/api;
     }

     #error_page  404              /404.html;

     # redirect server error pages to the static page /50x.html
     #
     error_page 500 502 503 504 /50x.html;
     location = /50x.html {
          root /usr/share/nginx/html;
     }

     # proxy the PHP scripts to Apache listening on 127.0.0.1:80
     #
     #location ~ \.php$ {
     #    proxy_pass   http://127.0.0.1;
     #}

     # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
     #
     #location ~ \.php$ {
     #    root           html;
     #    fastcgi_pass   127.0.0.1:9000;
     #    fastcgi_index  index.php;
     #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
     #    include        fastcgi_params;
     #}
     # deny access to .htaccess files, if Apache's document root
     # concurs with nginx's one
     #
     #location ~ /\.ht {
     #    deny  all;
     #}
     listen 443 ssl; # managed by Certbot
     ssl_certificate /etc/letsencrypt/live/zhoubichuan.com/fullchain.pem; # managed by Certbot
     ssl_certificate_key /etc/letsencrypt/live/zhoubichuan.com/privkey.pem; # managed by Certbot
     include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
     ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
     server_name sim.zhoubichuan.com;

     #access_log  /var/log/nginx/host.access.log  main;

     #    location / {
     #        root   /usr/share/nginx/html;
     #        index  index.html index.htm;
     #    }
     location ~*^.+$ {
          gzip on;
          gzip_min_length 1k;
          gzip_http_version 1.1;
          gzip_comp_level 9;
          gzip_types text/css application/javascript;
          root /usr/src/zhoubichuan/sim/;
          try_files $uri $uri/ /index.html;
          index index.html index.htm;
     }

     location ^~/common-node/api {
          proxy_pass http://localhost:3000/api;
     }

     location ^~/antdpro-express/api {
          proxy_pass http://localhost:7001/api;
          # include /etc/nginx/conf.d/*.conf;
     }

     location ^~/abstract-express/api {
          proxy_pass http://localhost:7005/api;
     }

     location ^~/abstract-egg/api {
          proxy_pass http://localhost:7006/api;
     }

     #error_page  404              /404.html;

     # redirect server error pages to the static page /50x.html
     #
     error_page 500 502 503 504 /50x.html;
     location = /50x.html {
          root /usr/share/nginx/html;
     }

     # proxy the PHP scripts to Apache listening on 127.0.0.1:80
     #
     #location ~ \.php$ {
     #    proxy_pass   http://127.0.0.1;
     #}

     # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
     #
     #location ~ \.php$ {
     #    root           html;
     #    fastcgi_pass   127.0.0.1:9000;
     #    fastcgi_index  index.php;
     #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
     #    include        fastcgi_params;
     #}
     # deny access to .htaccess files, if Apache's document root
     # concurs with nginx's one
     #
     #location ~ /\.ht {
     #    deny  all;
     #}
     listen 443 ssl; # managed by Certbot
     ssl_certificate /etc/letsencrypt/live/zhoubichuan.com/fullchain.pem; # managed by Certbot
     ssl_certificate_key /etc/letsencrypt/live/zhoubichuan.com/privkey.pem; # managed by Certbot
     include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
     ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
     server_name micro.zhoubichuan.com;

     #access_log  /var/log/nginx/host.access.log  main;

     #    location / {
     #        root   /usr/share/nginx/html;
     #        index  index.html index.htm;
     #    }
     location ~*^.+$ {
          gzip on;
          gzip_min_length 1k;
          gzip_http_version 1.1;
          gzip_comp_level 9;
          gzip_types text/css application/javascript;
          root /usr/src/zhoubichuan/micro/;
          try_files $uri $uri/ /index.html;
          index index.html index.htm;
     }

     location ^~/common-node/api {
          proxy_pass http://localhost:3000/api;
     }

     location ^~/antdpro-express/api {
          proxy_pass http://localhost:7001/api;
          # include /etc/nginx/conf.d/*.conf;
     }

     location ^~/abstract-express/api {
          proxy_pass http://localhost:7005/api;
     }

     location ^~/abstract-egg/api {
          proxy_pass http://localhost:7006/api;
     }

     #error_page  404              /404.html;

     # redirect server error pages to the static page /50x.html
     #
     error_page 500 502 503 504 /50x.html;
     location = /50x.html {
          root /usr/share/nginx/html;
     }

     # proxy the PHP scripts to Apache listening on 127.0.0.1:80
     #
     #location ~ \.php$ {
     #    proxy_pass   http://127.0.0.1;
     #}

     # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
     #
     #location ~ \.php$ {
     #    root           html;
     #    fastcgi_pass   127.0.0.1:9000;
     #    fastcgi_index  index.php;
     #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
     #    include        fastcgi_params;
     #}
     # deny access to .htaccess files, if Apache's document root
     # concurs with nginx's one
     #
     #location ~ /\.ht {
     #    deny  all;
     #}
     listen 443 ssl; # managed by Certbot
     ssl_certificate /etc/letsencrypt/live/zhoubichuan.com/fullchain.pem; # managed by Certbot
     ssl_certificate_key /etc/letsencrypt/live/zhoubichuan.com/privkey.pem; # managed by Certbot
     include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
     ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
     if ($host = zhoubichuan.com) {
          return 301 https://$host$request_uri;
     } # managed by Certbot


     listen 80;
     server_name zhoubichuan.com;
     return 404; # managed by Certbot


}
