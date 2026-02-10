import * as core from '@actions/core';
import * as github from '@actions/github';
import * as exec from '@actions/exec';

function run() {

    //1) Get Inputs
    const bucketName = core.getInput('bucket', { required: true });
    const artifactPath = core.getInput('dist-folder', { required: true });
    const region = core.getInput('bucket-region');

    //2) Upload the artifacts to S3
    exec.exec(`aws s3 cp ${artifactPath} s3://${bucketName}/ --recursive --region ${region}`);

    //3) Log the upload process
    core.notice(`Uploading artifacts from ${artifactPath} to S3 bucket ${bucketName} in region ${region}`);
}

run();
