import Application from 'ember-template-eg/app';
import config from 'ember-template-eg/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
