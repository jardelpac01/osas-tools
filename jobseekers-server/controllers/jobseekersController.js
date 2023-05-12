import * as service from '../services/jobseekersService.js';

export function getJobseekers(req, res) {
    service.getJobseekers(req, res);
}

export function findBytype(req, res) {
    service.findBytype(req, res);
}

