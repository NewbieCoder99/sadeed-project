# front-end

> Sadeed front end project

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


### Project rules

#### Used UI framework
We have selected [Ant Design Vue](https://github.com/vueComponent/ant-design-vue) for this project since it provides a wide pre-defined UIs, you can check their documentation from their [Ant Design Vue Website](https://vue.ant.design/docs/vue/introduce/)

#### Layouts
For this project, we will have two layouts.
* First one for outer pages that used for login, signup ... put so all these pages should extend the, you can name it something like `account.vue`.
* The second layout will be for the dashboard itself, and this one should be the default one `default.vue`.
* You may have nested layouts, for manage account screens like (Social Accounts, Billing plans ..), and to do that check [nuxt-child](https://nuxtjs.org/api/components-nuxt-child/), so please try to avoid code duplication.

#### Routs
* The dashboard routs should start from `/` without and prefixes. for example, the route `/` should be for dashboard index page (if authenticated).
* The screens (signin, signup, forgot-password ...) should start with a prefix `/account/`, for example `/account/signin` or `/account/signup` and so on.

#### Other rules
* If you need to use some functions that will be used for general propose, create utils file in your assets, check this one [How to create utils](https://github.com/nuxt/nuxt.js/issues/3221#issuecomment-381126960), so again, don't duplicate your codes.
* Don't use outer UIs elements if it already supported by [Ant Design](https://vue.ant.design/docs/vue/introduce/)

### Project flow
We have 3 main branches for this project, (`master`, `stage`, `develop`), and will have other branches for each task, these branches should be from `develop` branch, and it will be closed if after accepting the pull request. 