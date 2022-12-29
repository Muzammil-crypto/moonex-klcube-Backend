// 'use strict';

// /**
//  * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
//  * to customize this controller
//  */

// import { sanitizedEntity } from "strapi-utils";

async function findOne(ctx) {
  const { slug } = ctx.params;
  const { query } = ctx;

  const entity = await strapi.service("api::slug.slug").findOne(slug, query);
  const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

  return this.transformResponse(sanitizedEntity);
}
